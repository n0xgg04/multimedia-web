import { Skeleton } from "@mantine/core";
import { SimpleGrid } from "@mantine/core";
import React from "react";
import PostCard from "./PostCard";
import usePosts from "../_queries.tsx/useNewPost";

type Props = {
  isLoading: boolean;
  data: Awaited<ReturnType<typeof usePosts>>["data"];
  skeletonItemLength?: number;
};
export default function PostGrid({
  isLoading,
  data,
  skeletonItemLength = 4,
}: Props) {
  return (
    <>
      {!isLoading ? (
        <SimpleGrid cols={4}>
          {data?.map((post) => (
            <PostCard
              key={post.id}
              postId={post.id.toString()}
              thumbnail={post.post_attachments[0]?.url}
              title={post.title}
              author={{
                avatar: post.users?.profile_pic_url || "",
                name: post.users?.fullname || "",
                id: post.users?.id || "",
              }}
              likeCount={post._count.like_post}
              viewCount={post._count.views}
              isLiked={post.is_liked_post}
            />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid cols={4}>
          {Array.from({ length: skeletonItemLength }).map((_, index) => (
            <Skeleton key={index} height={200} radius="lg" />
          ))}
        </SimpleGrid>
      )}
    </>
  );
}
