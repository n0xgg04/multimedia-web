import { Container } from "@mantine/core";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Đăng nhập vào hệ thống",
};

export default function LoginLayout({ children }: React.PropsWithChildren) {
  return (
    <Container
      fluid
      h="100vh"
      w="100vw"
      className="flex items-center justify-center relative"
      style={{
        background:
          "linear-gradient(245.61deg, #14003D -71.55%, #460971 79.32%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      />
      <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
        {children}
      </div>
    </Container>
  );
}
