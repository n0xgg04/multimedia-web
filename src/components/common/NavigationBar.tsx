"use client";

import NavbarHandleScroll from "@/app/(fe)/(public)/(landing)/components/common/NavbarHandleScroll";
import Reveal from "@/app/(fe)/(public)/(landing)/components/common/Reveal";
import MainLogo from "@/assets/images/svg/MainLogo";
import { useAuthStore } from "@/shared/stores/AuthStore";
import { Button, Flex, Text } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function NavigationBar() {
  const { status } = useAuthStore();

  return (
    <NavbarHandleScroll>
      <Flex
        w="100%"
        h="100%"
        className="absolute inset-0 z-10"
        justify="space-between"
        align="center"
        px={"xl"}
      >
        <Reveal delay={0.2}>
          <MainLogo className="w-[145px] h-[48px] md:ml-20 hover:drop-shadow-[0_0_0.95rem_crimson] transition-all duration-500 ease-in" />
        </Reveal>
        <Reveal delay={0.2}>
          {status === "unauthenticated" && (
            <Link href="/auth/login" scroll={false} prefetch>
              <Button
                className="hover:scale-105 transition-all duration-200 ease-in hover:shadow-lg hover:shadow-[#460971]"
                bg="white"
                radius="lg"
              >
                <Text
                  fz={"sm"}
                  fw={700}
                  bg="linear-gradient(to right, #14003D, #460971)"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="!bg-clip-text"
                >
                  Đăng nhập
                </Text>
              </Button>
            </Link>
          )}
        </Reveal>
      </Flex>
    </NavbarHandleScroll>
  );
}
