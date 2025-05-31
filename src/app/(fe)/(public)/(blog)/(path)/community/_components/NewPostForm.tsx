"use client";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { NewPostSchema } from "../_zod/new_post.z";
import { supabase } from "@/shared/utils/supabase/client";
import { useAuthStore } from "@/shared/stores/AuthStore";
import { useModalStackContext } from "@mantine/core";
import { useNewPost } from "../_providers/NewPostProvider";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/shared/constants/queries";

export default function NewPostForm({ children }: React.PropsWithChildren) {
  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext<NewPostSchema>();
  const { user } = useAuthStore();
  const { close, setIsSubmitting } = useNewPost();
  const queryClient = useQueryClient();

  const onSubmit = async (data: NewPostSchema) => {
    setIsSubmitting(true);
    const uuid = crypto.randomUUID();
    const { data: postData, error } = await supabase
      .from("posts")
      .insert({
        title: data.title,
        content: data.content,
        category_id: Number(data.category_id),
        author_uuid: user?.id,
      })
      .select();
    if (error) {
      console.log(error);
      return;
    }
    await Promise.all(
      (data.files || []).map(async (file) => {
        return supabase.storage
          .from("post.photos")
          .upload(`${postData[0].id}/${file.name}-${uuid}`, file, {
            upsert: true,
          });
      })
    );
    await Promise.all(
      [QUERY_KEYS.POSTS, QUERY_KEYS.ALL_POSTS].map((key) =>
        queryClient.refetchQueries({ queryKey: [key] })
      )
    );
    setIsSubmitting(false);
    close();
  };

  return (
    <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  );
}
