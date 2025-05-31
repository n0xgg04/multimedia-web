"use server";

import { prisma } from "@/shared/utils/prisma/client";
import { createClient } from "@/shared/utils/supabase/server";

export default async function fetchRelatedPost(
  post_id: string,
  page: number = 1,
  pageSize: number = 10,
) {
  const supabase = await createClient();
  const currentUser = await supabase.auth.getUser();

  const category = await prisma.posts.findFirst({
    where: {
      id: Number(post_id),
    },
    select: {
      post_categories: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  const relatedPosts = await prisma.posts.findMany({
    where: {
      category_id: category?.post_categories.id,
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
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

  return relatedPosts;
}
