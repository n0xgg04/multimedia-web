import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cộng đồng",
  description: "Cộng đồng",
};

export default function CommunityLayout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
