import { cn } from "@/shared/utils/tw/cn";
import { Container, Flex, Image, Stack, Text } from "@mantine/core";
import React from "react";

import HomeThumb from "@/assets/images/png/HomeThumb.png";
import Reveal from "./common/Reveal";

export default function PageFour({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <Container
      fluid
      bg="var(--color-bg-3)"
      h="100vh"
      w="100vw"
      display="flex"
      className={cn("items-center justify-center flex-col", className)}
      {...props}
    >
      <Stack gap="xl" align="center">
        <Flex>
          <Stack gap="md" align="center">
            <Text ta="center" c="white" fw={700} size="2.3rem">
              Đa dạng ngành nghề thiết kế
            </Text>
            <Text ta="center" c="white" fw={400} size="0.9rem" w="70%">
              Khoa học kỹ thuật trong thế kỷ 21 đã trải qua sự thay đổi đáng kể
              và mang lại nhiều cơ hội việc làm và nghiên cứu trong đa dạng các
              lĩnh vực khác nhau.
            </Text>
          </Stack>
        </Flex>
        <Reveal delay={0.1} transition={{ duration: 0.5 }}>
          <Image
            h="50vh"
            w="auto"
            src={HomeThumb.src}
            alt="Graphic"
            fit="contain"
          />
        </Reveal>
      </Stack>
    </Container>
  );
}
