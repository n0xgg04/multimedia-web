"use client";
import { Box, Group, Stack, Text } from "@mantine/core";
import React from "react";
import { RouteParams } from "./_@types";
import useCheckPost from "./@post/_queries/useCheckPost";

type Props = {
  params: Promise<RouteParams>;
};

export default function PostPage({ params }: Props) {
  const { post_id } = React.use(params);

  useCheckPost(post_id);

  return (
    <Stack>
      <Text className="font-[500] text-[]">Bài viết tương tự</Text>
    </Stack>
  );
}
