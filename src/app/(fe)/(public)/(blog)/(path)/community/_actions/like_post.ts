"use server";

import { prisma } from "@/shared/utils/prisma/client";
import { createClient } from "@/shared/utils/supabase/server";

export async function likePost(postId: number) {
  const supabase = await createClient();
  const currentUser = await supabase.auth.getUser();

  if (!currentUser.data.user?.id) {
    return {
      error: "User not found",
    };
  }

  const isLiked = await prisma.like_post.findFirst({
    where: {
      post_id: postId,
      user_id: currentUser.data.user?.id,
    },
  });

  if (isLiked) {
    return prisma.like_post.delete({
      where: {
        id: isLiked.id,
      },
    });
  } else {
    return prisma.like_post.create({
      data: {
        post_id: postId,
        user_id: currentUser.data.user?.id,
      },
    });
  }
}

export async function isFollowingUser(userId: string) {
  const supabase = await createClient();
  const currentUser = await supabase.auth.getUser();

  if (!currentUser.data.user?.id || !userId) {
    return false;
  }

  const isFollowing = await prisma.follow_user.findFirst({
    where: {
      follower_id: currentUser.data.user?.id,
      following_id: userId,
    },
  });

  return Boolean(isFollowing);
}
