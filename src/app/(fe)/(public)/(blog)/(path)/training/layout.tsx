import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Chương trình đào tạo",
  description: "Chương trình đào tạo",
};

export default function TrainingLayout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
