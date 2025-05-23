"use client";
import { Box, Text } from "@mantine/core";
import React from "react";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
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
        Đăng nhập
      </Text>
      <LoginForm />
    </Box>
  );
}
