import { Box, Text } from "@mantine/core";
import React from "react";
import RegisterForm from "../../components/RegisterForm";
import Link from "next/link";
import Reveal from "@/app/(fe)/(public)/(landing)/components/common/Reveal";

export default function RegisterPage() {
  return (
    <Reveal delay={0.1} duration={0.5}>
      <Box
        w={500}
        bg="white"
        p="xl"
        className="shadow-lg rounded-lg mx-auto"
        style={{ marginTop: 40 }}
      >
        <Text
          className="!text-center mb-4"
          style={{ fontSize: 20, fontWeight: 600 }}
        >
          Đăng ký
        </Text>

        <RegisterForm
          LoginAction={
            <Text ta="center" size="13px" mt="sm">
              Bạn đã có tài khoản?{" "}
              <Link href="/auth/login" style={{ textDecoration: "none" }}>
                <Text span fw={600} c="#F44336" style={{ cursor: "pointer" }}>
                  Đăng nhập
                </Text>
              </Link>
            </Text>
          }
        />
      </Box>
    </Reveal>
  );
}
