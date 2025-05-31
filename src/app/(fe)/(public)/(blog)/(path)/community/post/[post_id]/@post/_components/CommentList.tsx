"use client";
import { Text, Stack, Divider, ScrollArea } from "@mantine/core";
import React, { useEffect, useId, useRef, useState } from "react";
import useComments from "../_queries/useComments";
import Comment from "./Comment";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";

type Props = {
  post_id: string;
};

const MotionScrollArea = motion.create(ScrollArea);
export default function CommentList({ post_id }: Props) {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useComments(Number(post_id));
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentComments = data?.pages.flatMap((page) => page) || [];

  const onScroll = React.useCallback(
    (e: { x: number; y: number }) => {
      if (
        e.y + (scrollRef.current?.clientHeight || 0) >=
        (scrollRef.current?.scrollHeight || 0) - 50
      ) {
        if (hasNextPage && !isFetchingNextPage && !isLoading) {
          fetchNextPage();
        }
      }
    },
    [hasNextPage, isFetchingNextPage, isLoading, fetchNextPage]
  );

  return (
    <LayoutGroup>
      <MotionScrollArea
        onScrollPositionChange={onScroll}
        h={"45vh"}
        type="scroll"
        viewportRef={scrollRef}
        layout
      >
        <AnimatePresence mode="popLayout">
          {currentComments.map((comment, index) => (
            <motion.div
              key={`comment-${post_id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              layout
              transition={{
                duration: 0.3,
                ease: [0.4, 0.0, 0.2, 1],
                layout: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] },
              }}
              className="mb-6"
            >
              <Comment comment={comment} />
            </motion.div>
          ))}
        </AnimatePresence>

        <motion.div layout>
          <Divider className="!mt-5 !mb-5" />
          <Text className="!text-text-label !text-[12px] mt-10 text-center">
            {isFetchingNextPage && "Đang tải thêm bình luận..."}
          </Text>
          <Text className="!text-text-label !text-[12px] mt-10 text-center">
            {!isFetchingNextPage &&
              !hasNextPage &&
              !isLoading &&
              "Không còn bình luận cũ hơn"}
          </Text>
        </motion.div>
      </MotionScrollArea>
    </LayoutGroup>
  );
}
