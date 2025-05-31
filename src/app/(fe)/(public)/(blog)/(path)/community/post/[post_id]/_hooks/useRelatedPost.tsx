"use client";
import { QUERY_KEYS } from "@/shared/constants/queries";
import { useAuthStore } from "@/shared/stores/AuthStore";
import { useQuery } from "@tanstack/react-query";
import fetchRelatedPost from "../_queries/fetch-related-post";
import { supabase } from "@/shared/utils/supabase/client";

type Props = {
  page: number;
  pageSize: number;
  post_id: string;
};
export default function useRelatedPost({ page, pageSize, post_id }: Props) {
  const { user } = useAuthStore();
  return useQuery({
    enabled: !!user?.id,
    queryKey: [QUERY_KEYS.RELATED_POSTS, post_id, page, pageSize],
    queryFn: async () => {
      const url = supabase.storage
        .from("post.photos")
        .getPublicUrl("")
        .data.publicUrl.split("/")
        .slice(0, -1)
        .join("/");

      const posts = await fetchRelatedPost(post_id, page, pageSize);
      return posts?.map((post) => ({
        ...post,
        is_liked_post: post.like_post.length > 0,
        post_attachments: post.post_attachments.map((attachment) => ({
          ...attachment,
          url: `${url}/${post.id}/${attachment.alt}`,
        })),
      }));
    },
  });
}
