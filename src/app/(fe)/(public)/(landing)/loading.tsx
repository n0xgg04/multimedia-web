import { Container, Text } from "@mantine/core";
import React from "react";

export default function ComponentName() {
  return (
    <Container
      w="100vw"
      h="100vh"
      fluid
      display="flex"
      className="grid place-items-center"
    >
      <Text>Loading</Text>
    </Container>
  );
}
