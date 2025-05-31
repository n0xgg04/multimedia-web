"use client";
import { QUERY_KEYS } from "@/shared/constants/queries";
import { useAuthStore } from "@/shared/stores/AuthStore";
import { useQuery } from "@tanstack/react-query";
import { fetchAllPost } from "../_actions/fetch-all-post";

type Props = {
  page: number;
  pageSize: number;
};
export default function useAllPost({ page, pageSize }: Props) {
  const { user } = useAuthStore();
  return useQuery({
    enabled: !!user?.id,
    queryKey: [QUERY_KEYS.ALL_POSTS, page, pageSize],
    queryFn: async () => {
      return fetchAllPost({ page, pageSize });
    },
  });
}
