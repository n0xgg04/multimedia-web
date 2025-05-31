import { Flex, Text, Title } from "@mantine/core";
import { Container } from "@mantine/core";
import React from "react";
import { cn } from "@/shared/utils/tw/cn";
import Image from "next/image";
import RewardImage from "@/assets/images/png/Reward.png";
import RubikImage from "@/assets/images/png/Rubic.png";
import PainterImage from "@/assets/images/png/Paint.png";
import Reveal from "./common/Reveal";

export default function PageThree({
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
      className={cn("items-center justify-center", className)}
      {...props}
    >
      <Flex
        direction="column"
        className="!text-white gap-2 md:gap-2"
        align="center"
      >
        <Title
          className="text-center !text-[1.5rem] md:!text-[2.5rem]"
          order={1}
        >
          Chia sẻ thông tin Đa phương tiện
        </Title>
        <Text className="w-[70%] text-center !text-[0.7rem] md:!text-[1rem]">
          Tham gia cộng đồng và chia sẻ sản phẩm của bạn đến với mọi người. Hy
          vọng bạn tham gia ngành nghề đầy thú vị và màu sắc này
        </Text>
        <Flex className="gap-10" align="flex-end">
          <Reveal delay={0.1}>
            <Flex direction="column" align="center">
              <Image
                src={RewardImage}
                className="w-[25vw] md:size-[300px] hover:scale-105 transition-all duration-300"
                alt="Reward"
              />
              <Text className="text-center !font-[700] text-[1.5rem]">
                Sản phẩm
              </Text>
            </Flex>
          </Reveal>
          <Reveal delay={0.3}>
            <Flex direction="column" align="center">
              <Image
                src={RubikImage}
                className="w-[30vw] md:size-[400px] hover:scale-105 transition-all duration-300"
                alt="Rubik"
              />
              <Text className="!font-[700] text-[1.5rem]">Cộng đồng</Text>
            </Flex>
          </Reveal>
          <Reveal delay={0.6}>
            <Flex direction="column" align="center">
              <Image
                src={PainterImage}
                className="w-[25vw] md:size-[300px] hover:scale-105 transition-all duration-300"
                alt="Rubik"
              />
              <Text className="!font-[700] text-[1.5rem]">Lộ trình</Text>
            </Flex>
          </Reveal>
        </Flex>
      </Flex>
    </Container>
  );
}
