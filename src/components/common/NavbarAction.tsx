"use client";

import { useAuthStore } from "@/shared/stores/AuthStore";
import { Button, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

import UserInfoNav from "./UserInfoNav";

export default function NavbarAction() {
  const { status } = useAuthStore();

  return (
    <>
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
      <UserInfoNav />
    </>
  );
}
