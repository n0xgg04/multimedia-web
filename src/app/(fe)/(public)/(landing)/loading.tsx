import { Container, Text } from "@mantine/core";
import React from "react";

export default function Loading() {
  return (
    <Container
      w="100vw"
      h="100vh"
      fluid
      display="flex"
      pos="fixed"
      className="!grid !place-items-center !z-50 !size-screen"
      style={{
        backgroundColor: "#460971",
      }}
    >
      <div className="loader"></div>
    </Container>
  );
}
