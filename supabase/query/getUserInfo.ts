"use server";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/shared/utils/supabase/server";

export async function getUserInfo(user: User) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("users").select("*").eq(
    "id",
    user.id,
  ).single();

  if (error) {
    throw error;
  }

  return data;
}
