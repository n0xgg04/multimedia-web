import { Box, Flex, Group } from "@mantine/core";
import React from "react";
import { RouteParams } from "./_@types";
import { prisma } from "@/shared/utils/prisma/client";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

type LayoutProps = {
  children: React.ReactNode;
  post: React.ReactNode;
  photos: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Bài viết",
};

export default async function PostLayout({
  children,
  post,
  photos,
}: React.PropsWithChildren & LayoutProps) {
  return (
    <Flex
      direction="column"
      className="!w-full"
      gap={{
        base: 2,
        sm: 6,
        md: 10,
      }}
    >
      <Flex className="!w-full overflow-hidden" gap={50}>
        <Box className="flex-1/2">{photos}</Box>
        <Box className="flex-1/2">{post}</Box>
      </Flex>
      {children}
    </Flex>
  );
}
