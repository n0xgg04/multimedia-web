"use client";
import { Stack, Title } from "@mantine/core";
import React from "react";
import PostGrid from "../../../_components/PostGrid";
import usePosts from "../../../_queries.tsx/useNewPost";

type UserPostProps = {
  userId: string;
};

export default function UserPost({ userId }: UserPostProps) {
  const { data, isLoading } = usePosts({
    author_uuid: userId,
    limit: 20,
    orderBy: "created_at",
    order: "desc",
  });
  return (
    <Stack mt="md">
      <Title order={2} className="!text-text-label !text-[1rem] !font-[500]">
        Bài viết
      </Title>
      <PostGrid isLoading={isLoading} data={data} />
    </Stack>
  );
}
