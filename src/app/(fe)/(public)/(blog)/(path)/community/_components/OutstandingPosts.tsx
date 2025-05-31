"use client";
import React, { useEffect } from "react";
import usePosts from "../_queries.tsx/useNewPost";
import {
  Card,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Group,
  Skeleton,
  Title,
  Button,
} from "@mantine/core";
import PostCard from "./PostCard";
import Link from "next/link";
import PostGrid from "./PostGrid";

export default function OutstandingPosts() {
  const { data, isLoading } = usePosts({
    limit: 4,
    orderBy: "views",
    order: "desc",
  });

  return (
    <Stack>
      <Group justify="space-between" align="center">
        <Title order={2} className="!text-text-label !text-[1rem] !font-[500]">
          Bài viết mới
        </Title>
        <Link href="/community/post/lastest" prefetch>
          <Button
            variant="transparent"
            className="!text-text-label !font-[500] !text-[.85rem] !p-0 flex items-center gap-1"
          >
            <Text
              className="!cursor-pointer !hover:underline !text-[.8rem]"
              style={{
                background:
                  "linear-gradient(239.18deg, #D501C5 -28.34%, #FF7900 43.3%, #FCD500 98.05%, #7739FC 181.74%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Xem tất cả
            </Text>
          </Button>
        </Link>
      </Group>
      <PostGrid isLoading={isLoading} data={data} />
    </Stack>
  );
}
