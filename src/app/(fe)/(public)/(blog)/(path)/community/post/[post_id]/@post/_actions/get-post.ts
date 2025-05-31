import { prisma } from "@/shared/utils/prisma/client";

export async function getPostInfo(post_id: string) {
  const post = await prisma.posts.findUnique({
    where: {
      id: Number(post_id),
    },
    include: {
      users: {
        select: {
          fullname: true,
          profile_pic_url: true,
          student_code: true,
          id: true,
        },
      },
      post_categories: {
        select: {
          name: true,
        },
      },
    },
  });

  return post;
}
