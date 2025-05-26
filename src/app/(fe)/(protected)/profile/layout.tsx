import BlogLayout from "@/components/blog/BlogLayout";
import React from "react";
import { getCurrentUser } from "~/supabase/query/getCurrentUser";

import { Metadata } from "next";
import { getUserInfo } from "~/supabase/query/getUserInfo";

export const generateMetadata = async (): Promise<Metadata> => {
  const user = await getCurrentUser();
  if (!user) {
    return {
      title: "Hồ sơ",
    };
  }
  const info = await getUserInfo(user);
  return {
    title: info?.fullname || "Hồ sơ",
  };
};

export default function ProfileLayout({ children }: React.PropsWithChildren) {
  return <BlogLayout>{children}</BlogLayout>;
}
