"use client";

import { Flex, Pagination } from "@mantine/core";
import React from "react";
import PostGrid from "../../../_components/PostGrid";
import { useRouter } from "next/navigation";
import useAllPost from "../../../_queries.tsx/useAllPost";
import { useSearchParams } from "next/navigation";

export default function PostContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page") || "1";
  const { data, isLoading } = useAllPost({
    page: Number(page),
    pageSize: 10,
  });

  const handleChangePage = (page: number) => {
    router.push(`/community/post/lastest?page=${page}`, {
      scroll: false,
    });
  };

  return (
    <>
      <PostGrid
        skeletonItemLength={3 * 4}
        isLoading={isLoading}
        data={(data?.data as any) || []}
      />
      <Flex justify="center" align="center" mt="sm">
        <Pagination
          total={data?.total || 0}
          value={data?.page || 0}
          onChange={handleChangePage}
          mt="sm"
          styles={{
            control: {
              borderRadius: 999,
            },
          }}
        />
      </Flex>
    </>
  );
}
