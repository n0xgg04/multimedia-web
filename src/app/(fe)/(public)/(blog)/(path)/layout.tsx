import { Container } from "@mantine/core";
import React from "react";

export default function BlogPathLayout({ children }: React.PropsWithChildren) {
  return (
    <Container
      fluid
      mt={30}
      px={{
        base: 1,
        xs: 10,
        sm: 10,
        md: 100,
      }}
    >
      {children}
    </Container>
  );
}
