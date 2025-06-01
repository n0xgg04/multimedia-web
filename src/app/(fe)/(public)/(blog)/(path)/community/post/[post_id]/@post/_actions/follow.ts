import { prisma } from "@/shared/utils/prisma/client";
import { createClient } from "@/shared/utils/supabase/server";

export async function followAuthor(authorId: string) {
  const suoabase = await createClient();
  const currentUser = await suoabase.auth.getUser();

  if (!currentUser.data.user) {
    return {
      error: "User not found",
      data: null,
    };
  }

  const user = await prisma.users.findUnique({
    where: {
      id: authorId,
    },
  });

  if (!user) {
    return {
      error: "User not found",
      data: null,
    };
  }

  const isFollowing = await prisma.follow_user.findFirst({
    where: {
      follower_id: currentUser.data.user.id,
      following_id: authorId,
    },
  });
}
