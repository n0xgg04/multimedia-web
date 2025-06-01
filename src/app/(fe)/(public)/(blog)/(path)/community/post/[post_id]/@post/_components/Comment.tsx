"use client";

import { Stack, Group, Divider, Text, Avatar, Image } from "@mantine/core";
import React from "react";
import TimeAgo from "javascript-time-ago";
import vi from "javascript-time-ago/locale/vi";
import { useRouter } from "next/navigation";

type Props = {
  comment: {
    users: {
      profile_pic_url: string | null;
      fullname: string | null;
      student_code: string | null;
      id: string;
    };
    content: string;
    created_at: string;
  };
};

TimeAgo.addDefaultLocale(vi);
const timeAgo = new TimeAgo("vi-VN");

export default function Comment({ comment }: Props) {
  const router = useRouter();

  return (
    <Stack>
      <Group gap={10}>
        <Avatar
          src={comment.users?.profile_pic_url || ""}
          radius={999}
          size="md"
          className="!cursor-pointer"
        />
        <Stack
          gap={0}
          onClick={() => router.push(`/community/profile/${comment.users?.id}`)}
          className="cursor-pointer"
        >
          <Text className="!text-text-label !text-[14px]">
            {comment.users?.fullname}
          </Text>
          <Text className="!text-text-subtitle !text-[10px]">
            {comment.users?.student_code}
          </Text>
        </Stack>
      </Group>
      <Group className="pl-10">
        <Divider orientation="vertical" variant="solid" size={"md"} />
        <Text className="!text-text-label !text-[14px]">{comment.content}</Text>
      </Group>
      <Text className="!text-text-label !text-[10px]">
        {timeAgo.format(new Date(comment.created_at))}
      </Text>
    </Stack>
  );
}
