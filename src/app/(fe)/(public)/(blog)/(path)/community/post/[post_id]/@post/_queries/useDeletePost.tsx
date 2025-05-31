import { useMutation } from "@tanstack/react-query";
import React from "react";
import deletePost from "../_actions/delete-post";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { QUERY_KEYS } from "@/shared/constants/queries";
import { useRouter } from "next/navigation";

export default function useDeletePost() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: async () => {
      toast.success("Xóa bài viết thành công");
      await queryClient.refetchQueries({
        queryKey: [QUERY_KEYS.ALL_POSTS],
      });
      await queryClient.refetchQueries({
        queryKey: [QUERY_KEYS.RELATED_POSTS],
      });
      await queryClient.refetchQueries({
        queryKey: [QUERY_KEYS.POSTS],
      });
      router.push("/community");
    },
    onError: () => {
      toast.error("Xóa bài viết thất bại");
    },
  });
}
