"use client";
import { Box, Group, Stack, Text } from "@mantine/core";
import React from "react";
import { RouteParams } from "./_@types";
import useCheckPost from "./@post/_queries/useCheckPost";
import PostGrid from "../../_components/PostGrid";
import useRelatedPost from "./_hooks/useRelatedPost";

type Props = {
  params: Promise<RouteParams>;
};

export default function PostPage({ params }: Props) {
  const { post_id } = React.use(params);

  useCheckPost(post_id);
  const { data, isLoading } = useRelatedPost({
    post_id,
    page: 1,
    pageSize: 10,
  });

  return (
    <Stack>
      <Text className="font-[500] text-[]">Bài viết tương tự</Text>
      <PostGrid isLoading={isLoading} data={data as any} />
    </Stack>
  );
}
