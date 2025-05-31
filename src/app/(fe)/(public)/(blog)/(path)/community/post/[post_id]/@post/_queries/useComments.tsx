"use client";
import { QUERY_KEYS } from "@/shared/constants/queries";
import { supabase } from "@/shared/utils/supabase/client";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useComments(post_id: number, pageSize: number = 10) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.COMMENTS, post_id],
    initialPageParam: 0,
    queryFn: async ({ pageParam }) => {
      const from = pageParam * pageSize;
      const to = from + pageSize - 1;

      const { data, error } = await supabase
        .from("post_comments")
        .select(
          "*, users!post_comments_user_id_fkey(id, fullname, profile_pic_url, student_code)"
        )
        .eq("post_id", Number(post_id))
        .order("created_at", { ascending: true })
        .range(from, to);

      if (error) throw new Error(error.message);

      return data;
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
