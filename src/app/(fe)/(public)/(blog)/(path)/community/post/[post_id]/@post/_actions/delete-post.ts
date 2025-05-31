"use server";
import { prisma } from "@/shared/utils/prisma/client";
import { createClient } from "@/shared/utils/supabase/server";

export default async function deletePost(post_id: string) {
  await prisma.posts.delete({
    where: {
      id: Number(post_id),
    },
  });

  return true;
}
