"use server";
import { createClient } from "@/shared/utils/supabase/server";

export async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await (await createClient()).auth.getUser();
  if (error) {
    throw error;
  }
  return user;
}
