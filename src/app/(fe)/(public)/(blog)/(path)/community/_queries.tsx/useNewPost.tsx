import { QUERY_KEYS } from "@/shared/constants/queries";
import { supabase } from "@/shared/utils/supabase/client";
import { Tables } from "@/shared/utils/supabase/database.types";
import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../_actions/fetch_post";

type Props = {
  limit?: number;
  orderBy?: string;
  order?: "asc" | "desc";
  author_uuid?: string;
};
export default function usePosts({
  limit = 4,
  orderBy = "created_at",
  order = "desc",
  author_uuid,
}: Props) {
  return useQuery({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: async () => {
      const url = supabase.storage
        .from("post.photos")
        .getPublicUrl("")
        .data.publicUrl.split("/")
        .slice(0, -1)
        .join("/");

      const posts = await fetchPost({
        limit,
        orderBy,
        order,
        author_uuid,
      });

      return posts?.map((post) => ({
        ...post,
        is_liked_post: post.like_post.length > 0,
        post_attachments: post.post_attachments.map((attachment) => ({
          ...attachment,
          url: `${url}/${post.id}/${attachment.alt}`,
        })),
      }));
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
}
