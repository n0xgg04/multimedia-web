"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { newPostResolver, NewPostSchema } from "../_zod/new_post.z";

export default function NewPostFormProvider({
  children,
}: React.PropsWithChildren) {
  const form = useForm({
    defaultValues: {
      content: "",
      files: [],
    },
    mode: "onSubmit",
    resolver: newPostResolver,
  });

  return <FormProvider {...form}>{children}</FormProvider>;
}
