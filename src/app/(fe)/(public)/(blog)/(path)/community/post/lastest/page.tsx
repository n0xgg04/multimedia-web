import { Title } from "@mantine/core";
import { Stack } from "@mantine/core";
import React, { Suspense } from "react";
import PostContent from "./_components/PostContent";
import PostGrid from "../../_components/PostGrid";

type Params = {
  page: string;
};

export default function LatestPosts() {
  return (
    <Stack>
      <Title order={2} className="!text-text-label !text-[1rem] !font-[500]">
        Bài viết mới nhất
      </Title>
      <Suspense
        fallback={
          <PostGrid skeletonItemLength={3 * 4} isLoading={true} data={[]} />
        }
      >
        <PostContent />
      </Suspense>
    </Stack>
  );
}
