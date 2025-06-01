"use server";

import { prisma } from "@/shared/utils/prisma/client";
import { createClient } from "@/shared/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type LoginState = {
  error: string | null;
};

export async function login(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error, data: user } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      error: "Email hoặc mật khẩu không chính xác!",
      user: null,
      userInfo: null,
    };
  }

  const userInfo = await prisma.users.findUnique({
    where: {
      id: user.user.id,
    },
    select: {
      id: true,
      fullname: true,
      student_code: true,
      profile_pic_url: true,
      account_type: true,
      email: true,
      created_at: true,
    },
  });

  if (!userInfo) {
    return {
      error: "Tài khoản không tồn tại!",
      user: null,
      userInfo: null,
    };
  }

  return {
    user,
    userInfo,
    error: null,
  };
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
