"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../_actions/fetch_categories";
import { QUERY_KEYS } from "@/shared/constants/queries";
import {
  TopLevelError,
  TopLevelErrorMessageType,
} from "@/shared/utils/exceptions";

export default function useCategories() {
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: async () => {
      const { data, error } = await fetchCategories();
      if (error) {
        throw new TopLevelError(error as TopLevelErrorMessageType);
      }
      return data;
    },
    staleTime: Infinity,
  });
}
