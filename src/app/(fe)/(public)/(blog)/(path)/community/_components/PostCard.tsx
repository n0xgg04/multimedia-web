"use client";
import Love from "@/assets/images/svg/Love";
import { Card, Flex, Group, Text, Image, Avatar } from "@mantine/core";
import React, { useOptimistic, startTransition, useMemo } from "react";
import Comment from "@/assets/images/svg/Comment";
import { likePost } from "../_actions/like_post";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/shared/constants/queries";
import usePosts from "../_queries.tsx/useNewPost";
import { useAuthStore } from "@/shared/stores/AuthStore";
import { useRouter } from "next/navigation";

type Props = {
  postId: string;
  thumbnail: string;
  title: string;
  author: {
    avatar: string;
    name: string;
    id: string;
  };
  likeCount: number;
  viewCount: number;
  isLiked: boolean;
};

type PostQuery = ReturnType<typeof usePosts>["data"];
export default function PostCard({
  postId,
  thumbnail,
  title,
  author,
  likeCount,
  viewCount,
  isLiked = false,
}: Props) {
  const queryClient = useQueryClient();
  const { user } = useAuthStore();
  const router = useRouter();
  const state = useMemo(
    () => ({
      isLiked,
      likeCount,
    }),
    [isLiked, likeCount]
  );
  const [optimisticState, setOptimisticIsLiked] = useOptimistic(
    state,
    (currentState) => {
      return {
        isLiked: !currentState.isLiked,
        likeCount: currentState.isLiked
          ? currentState.likeCount - 1
          : currentState.likeCount + 1,
      };
    }
  );

  const handleLike = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    if (!user) return;

    startTransition(async () => {
      setOptimisticIsLiked(state);

      try {
        await likePost(Number(postId));
        await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS] });
      } catch (error) {
        setOptimisticIsLiked(state);
      }
    });
  };

  return (
    <Card
      variant="unstyled"
      p="0"
      bg="transparent"
      padding="lg"
      style={{
        objectFit: "contain",
      }}
      radius={5}
      onClick={() => router.push(`/community/post/${postId}`)}
    >
      <Image
        data-loaded="false"
        onLoad={(event) => {
          event.currentTarget.setAttribute("data-loaded", "true");
        }}
        src={thumbnail}
        alt={title}
        height={"auto"}
        width={"100%"}
        className="!aspect-video !rounded-lg !object-cover overflow-hidden cursor-pointer data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10"
      />
      <Flex align="center" justify="space-between" gap={10} p="10px">
        <Group
          className="cursor-pointer"
          gap={2}
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/community/profile/${author.id}`);
          }}
        >
          <Avatar
            className="!w-[24px] !h-[24px] !rounded-full object-cover"
            src={author.avatar}
          />
          <Text className="!font-[500] !text-[.8rem] !text-[#4E4E4E]">
            {author.name}
          </Text>
        </Group>
        <Group>
          <Group gap={2}>
            <Love
              onClick={handleLike}
              className="!cursor-pointer active:scale-95 hover:scale-110 transition-all duration-300"
              type={optimisticState.isLiked ? "filled" : "outline"}
            />
            <Text className="!text-[.8rem] select-none !text-[#858585]">
              {optimisticState.likeCount}
            </Text>
          </Group>
          <Group gap={2}>
            <Comment />
            <Text className="!text-[.8rem] !text-[#858585]">{viewCount}</Text>
          </Group>
        </Group>
      </Flex>
    </Card>
  );
}
