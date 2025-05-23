"use client";
import { Flex } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { cn } from "@/shared/utils/tw/cn";

export default function NavbarHandleScroll({
  children,
}: React.PropsWithChildren) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      h={70}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      className={cn(
        "z-[999] transition-all duration-300 ease-in",
        isScrolled && "bg-white/30 backdrop-blur-xl border-b border-white/20"
      )}
    >
      {children}
    </Flex>
  );
}
