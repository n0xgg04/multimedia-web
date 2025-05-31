"use server";

import { prisma } from "@/shared/utils/prisma/client";
import { createClient } from "@/shared/utils/supabase/server";

export type RegisterState = {
  error: string | null;
};

export async function register(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    fullname: formData.get("fullname") as string,
    student_code: formData.get("student_code") as string,
  };

  if (!data.email || !data.password || !data.fullname || !data.student_code) {
    throw new Error("Vui lòng điền đầy đủ thông tin!");
  }

  const existingUser = await prisma.users.findFirst({
    where: {
      OR: [
        { email: data.email },
        { student_code: data.student_code },
      ],
    },
  });

  if (existingUser) {
    throw new Error("Email hoặc mã sinh viên đã tồn tại!");
  }

  const { error, data: user } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });

  if (error) {
    throw new Error("Đăng ký thất bại: " + error.message);
  }

  if (user.user) {
    const defaultPic = supabase.storage
      .from("avatars")
      .getPublicUrl("default/default.png");

    const userInfo = await prisma.users.upsert({
      where: {
        id: user.user.id,
      },
      update: {
        fullname: data.fullname,
        student_code: data.student_code,
        profile_pic_url: defaultPic.data.publicUrl,
      },
      create: {
        id: user.user.id,
        fullname: data.fullname,
        student_code: data.student_code,
        account_type: "STUDENT",
        email: data.email,
      },
    });

    if (!userInfo) {
      throw new Error("Đăng ký thất bại!");
    }

    return {
      user,
      userInfo,
    };
  }

  throw new Error("Đăng ký thất bại!");
}
