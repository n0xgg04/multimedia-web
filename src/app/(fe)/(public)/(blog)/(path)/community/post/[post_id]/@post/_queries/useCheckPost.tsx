import { useQuery } from "@tanstack/react-query";

export default function useCheckPost(post_id: string) {
  return useQuery({
    queryKey: ["check-post", post_id],
    queryFn: () => {
      return fetch(`/api/post/check?post_id=${post_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    },
    enabled: !!post_id,
  });
}
