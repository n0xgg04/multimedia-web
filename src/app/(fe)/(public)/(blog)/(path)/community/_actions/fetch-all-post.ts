"use server";

import { prisma } from "@/shared/utils/prisma/client";
import { createClient } from "@/shared/utils/supabase/server";

export async function fetchAllPost({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) {
  const total = await prisma.posts.count();
  const supabase = await createClient();
  const currentUser = await supabase.auth.getUser();

  const url = supabase.storage
    .from("post.photos")
    .getPublicUrl("")
    .data.publicUrl.split("/")
    .slice(0, -1)
    .join("/");

  const data = await prisma.posts.findMany({
    orderBy: {
      created_at: "desc",
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

  const result = data.map((post) => ({
    ...post,
    is_liked_post: post.like_post.length > 0,
    post_attachments: post.post_attachments.map((attachment) => ({
      ...attachment,
      url: `${url}/${post.id}/${attachment.alt}`,
    })),
  }));

  return {
    data: result,
    total: Math.ceil(total / pageSize),
    page,
  };
}
