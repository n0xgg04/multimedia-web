"use client";
import { Flex, Text } from "@mantine/core";
import React from "react";
import Reveal from "./Reveal";

export default function WelcomeText() {
  return (
    <Reveal delay={1.5}>
      <Flex
        style={{
          color: "white",
        }}
        direction="column"
        gap={0}
        align="center"
        justify="center"
        mt={100}
      >
        <Text className="text-shadow-sm !font-[700] text-shadow-gray-900 text-center !text-[2rem] md:!text-[3rem]">
          Cộng đồng chia sẻ kinh nghiệm
        </Text>
        <Text className="text-shadow-sm !font-[700] text-shadow-gray-900 text-center !text-[2rem] md:!text-[3rem] ">
          Đa phương tiện
        </Text>
      </Flex>
    </Reveal>
  );
}
