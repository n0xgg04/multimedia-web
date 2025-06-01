"use client";
import { QUERY_KEYS } from "@/shared/constants/queries";
import { prisma } from "@/shared/utils/prisma/client";
import { supabase } from "@/shared/utils/supabase/client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getComment } from "../_actions/get-comment";

export default function useComments(post_id: number, pageSize: number = 10) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.COMMENTS, post_id],
    initialPageParam: 0,
    queryFn: async ({ pageParam }) => {
      const from = pageParam * pageSize;
      const to = from + pageSize - 1;

      const comments = await getComment(post_id, from, to);

      return comments;
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < pageSize) {
        return undefined;
      }
      return allPages.length;
    },
    enabled: !!post_id,
  });
}
