import NavigationBar from "@/components/common/NavigationBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multimedia Web",
  description: "Multimedia Web",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar">
      <NavigationBar />

      {children}
    </div>
  );
}
