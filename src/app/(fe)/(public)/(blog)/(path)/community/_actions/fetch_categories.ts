"use server";
import { createClient } from "@/shared/utils/supabase/server";

export async function fetchCategories() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("post_categories")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    return {
      error: error.message,
      data: null,
    };
  }
  return {
    data,
    error: null,
  };
}
