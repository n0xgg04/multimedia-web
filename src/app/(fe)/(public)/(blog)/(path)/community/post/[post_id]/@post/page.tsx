import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import React from "react";
import Badge from "../_components/Badge";
import { RouteParams } from "../_@types";
import { prisma } from "@/shared/utils/prisma/client";
import { IconPlus, IconSend } from "@tabler/icons-react";
import OptionIcon from "@/assets/images/svg/Option";
import Comments from "./_components/Comments";
import AuthorInfo from "./_components/AuthorInfo";
import CommentList from "./_components/CommentList";

type Props = {
  params: Promise<RouteParams>;
};

export async function generateMetadata({ params }: Props) {
  const { post_id } = await params;
  const post = await prisma.posts.findUnique({
    where: {
      id: Number(post_id),
    },
  });
  return {
    title: post?.title || "Bài viết",
  };
}

export default async function PostContent({ params }: Props) {
  const { post_id } = await params;

  const post = await prisma.posts.findUnique({
    where: {
      id: Number(post_id),
    },
    include: {
      users: {
        select: {
          fullname: true,
          profile_pic_url: true,
          student_code: true,
        },
      },
      post_categories: {
        select: {
          name: true,
        },
      },
    },
  });

  // await new Promise((resolve) => setTimeout(resolve, 10000));

  return (
    <Stack>
      <Group justify="space-between" align="center">
        <Badge>{post?.post_categories?.name}</Badge>
        <OptionIcon className="!cursor-pointer" />
      </Group>
      <Title order={2}>{post?.title}</Title>
      <Text c="#4E4E4E" className="!text-[.9rem]">
        {post?.content}
      </Text>
      <Divider />
      <AuthorInfo post={post as any} />
      <Divider />
      <Comments
        post_id={post_id}
        CommentList={<CommentList post_id={post_id} />}
      />
    </Stack>
  );
}
