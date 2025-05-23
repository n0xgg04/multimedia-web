import { Container } from "@mantine/core";
import React from "react";

export default function RegisterLayout({ children }: React.PropsWithChildren) {
  return (
    <Container
      fluid
      h="100vh"
      w="100vw"
      className="flex items-center justify-center"
    >
      {children}
    </Container>
  );
}
