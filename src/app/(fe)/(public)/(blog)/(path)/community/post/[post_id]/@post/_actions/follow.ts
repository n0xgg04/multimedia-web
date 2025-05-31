import { prisma } from "@/shared/utils/prisma/client";
import { createClient } from "@/shared/utils/supabase/server";

export async function followAuthor(authorId: string) {
  const suoabase = await createClient();
  const currentUser = await suoabase.auth.getUser();

  if (!currentUser.data.user) {
    throw new Error("User not found");
  }

  const user = await prisma.users.findUnique({
    where: {
      id: authorId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isFollowing = await prisma.follow_user.findFirst({
    where: {
      follower_id: currentUser.data.user.id,
      following_id: authorId,
    },
  });
}
