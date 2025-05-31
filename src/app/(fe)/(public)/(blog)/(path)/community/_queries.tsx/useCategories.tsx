import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../_actions/fetch_categories";
import { QUERY_KEYS } from "@/shared/constants/queries";

export default function useCategories() {
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: fetchCategories,
    staleTime: Infinity,
  });
}
