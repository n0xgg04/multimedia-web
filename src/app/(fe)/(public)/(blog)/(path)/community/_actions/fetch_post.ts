"use server";

import { prisma } from "@/shared/utils/prisma/client";
import { createClient } from "@/shared/utils/supabase/server";

type Props = {
  limit?: number;
  orderBy?: string;
  order?: "asc" | "desc";
  author_uuid?: string;
};
export async function fetchPost(
  { limit = 4, orderBy = "created_at", order = "desc", author_uuid }: Props,
) {
  const supabase = await createClient();
  const currentUser = await supabase.auth.getUser();

  return prisma.posts.findMany({
    orderBy: {
      [orderBy]: order,
    },
    take: limit,
    where: author_uuid
      ? {
        author_uuid: author_uuid,
      }
      : undefined,
    include: {
      post_attachments: {
        select: {
          alt: true,
          id: true,
          object_id: true,
        },
      },
      users: {
        select: {
          fullname: true,
          profile_pic_url: true,
          id: true,
        },
      },
      like_post: {
        where: {
          user_id: currentUser.data.user?.id,
        },
        select: {
          id: true,
        },
      },
      _count: {
        select: {
          like_post: true,
          views: true,
        },
      },
    },
  });
}
