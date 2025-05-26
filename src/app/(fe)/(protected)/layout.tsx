import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multimedia",
  description: "Multimedia",
};

export default function Layout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
