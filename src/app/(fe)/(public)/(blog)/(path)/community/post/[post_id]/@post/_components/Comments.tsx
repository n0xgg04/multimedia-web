"use client";
import { QUERY_KEYS } from "@/shared/constants/queries";
import { useAuthStore } from "@/shared/stores/AuthStore";
import { supabase } from "@/shared/utils/supabase/client";
import {
  Button,
  Group,
  ScrollArea,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { IconSend } from "@tabler/icons-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useOptimistic, startTransition } from "react";
import { useForm } from "react-hook-form";

type Props = {
  post_id: string;
  CommentList: React.ReactNode;
};

export default function Comments({ post_id, CommentList }: Props) {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();

  const form = useForm({
    defaultValues: {
      comment: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = form;

  const { mutate, isPending } = useMutation({
    mutationFn: async (comment: string) => {
      if (!user?.id) {
        throw new Error("User not found");
      }

      const { data, error } = await supabase.from("post_comments").insert({
        post_id: Number(post_id),
        user_id: user?.id,
        content: comment,
      });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENTS] });
    },
    onSettled: () => {
      reset();
    },
  });

  const onSubmit = (data: typeof form.formState.defaultValues) => {
    if (!data?.comment?.trim()) {
      return;
    }

    startTransition(() => {
      mutate(data.comment!);
    });
  };

  return (
    <Stack>
      <Group align="flex-start" gap={20}>
        <Text className="!text-[.9rem] !font-[700]" c="#4E4E4E">
          Nhận xét
        </Text>
        <Group gap={10} className="!grow">
          <Textarea
            error={errors.comment?.message}
            className="!grow-1"
            radius="md"
            placeholder="Thêm nhận xét..."
            autosize
            maxRows={3}
            disabled={isPending}
            styles={{
              input: {
                border: "1px solid #E0E0E0",
                backgroundColor: "transparent",
                transition: "all 0.2s ease-in-out",
              },
            }}
            {...register("comment", {
              required: "Nhận xét không được để trống",
              minLength: {
                value: 1,
                message: "Nhận xét không được để trống",
              },
            })}
          />
          <Button
            variant="transparent"
            disabled={isPending || !isValid}
            onClick={handleSubmit(onSubmit)}
            style={{
              transition: "all 0.2s ease-in-out",
              opacity: isPending || !isValid ? 0.5 : 1,
            }}
          >
            <IconSend
              className="!cursor-pointer"
              width={20}
              height={20}
              color="#4E4E4E"
            />
          </Button>
        </Group>
      </Group>
      {CommentList}
    </Stack>
  );
}
