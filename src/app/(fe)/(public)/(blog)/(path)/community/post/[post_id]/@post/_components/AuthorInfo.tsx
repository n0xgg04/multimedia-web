"use client";
import { Prisma } from "@/generated/prisma";
import {
  Avatar,
  Flex,
  Stack,
  Text,
  Group,
  Button,
  Skeleton,
} from "@mantine/core";
import React from "react";
import { getPostInfo } from "../_actions/get-post";
import { IconPlus } from "@tabler/icons-react";
import { isFollowingUser } from "../../../../_actions/like_post";
import { useQuery } from "@tanstack/react-query";

type Props = {
  post: Awaited<ReturnType<typeof getPostInfo>>;
};
export default function AuthorInfo({ post }: Props) {
  const { data: isFollowing, isLoading } = useQuery({
    queryKey: ["isFollowing", post?.users.id],
    queryFn: () => isFollowingUser(post?.users.id || ""),
  });

  return (
    <Flex justify="space-between">
      <Group>
        <Avatar src={post?.users.profile_pic_url} size="md" />
        <Stack gap={1}>
          {isLoading ? (
            <Skeleton height={20} width={100} />
          ) : (
            <Text c="#4E4E4E" className="!text-[1rem]">
              {post?.users.fullname}
            </Text>
          )}
          {isLoading ? (
            <Skeleton height={20} width={100} />
          ) : (
            <Text c="#4E4E4E" className="!text-[.7rem]">
              {post?.users.student_code}
            </Text>
          )}
        </Stack>
      </Group>
      <Button
        loading={isLoading}
        leftSection={<IconPlus width={16} height={16} />}
        radius="lg"
        bg="linear-gradient(93.21deg, #FC4AF5 -36.51%, #0846E4 135.15%)"
        className="!text-white !text-[.8rem] !font-bold"
      >
        {isFollowing ? "Bỏ theo dõi" : "Theo dõi"}
      </Button>
    </Flex>
  );
}
