"use server";

import { prisma } from "@/shared/utils/prisma/client";

export async function getComment(
  post_id: number,
  offsetStart: number,
  offsetEnd: number,
) {
  const comments = await prisma.post_comments.findMany({
    where: {
      post_id: Number(post_id),
    },
    orderBy: {
      created_at: "desc",
    },
    include: {
      users: true,
    },
    take: offsetEnd - offsetStart,
    skip: offsetStart,
  });

  return comments;
}
