import { Box, Flex, Text } from "@mantine/core";
import React from "react";

type Props = {
  name: string;
  amount: number;
  subjects: {
    name: string;
    amount: number;
    bg: string;
  }[];
};
export default function SubjectList({ name, amount, subjects }: Props) {
  return (
    <Flex
      w="100%"
      gap={10}
      wrap="nowrap"
      className=" overflow-x-scroll md:px-0"
      style={{
        scrollbarColor: "transparent transparent",
      }}
    >
      <Flex direction="row" gap={10}>
        <Box
          bg="linear-gradient(93.21deg, #FC4AF5 -36.51%, #0846E4 135.15%)"
          className="rounded-xl flex flex-col justify-center items-center text-white w-[136px] h-[100px]"
        >
          <Text className="!text-sm md:!text-base !font-bold">{name}</Text>
          <Text className="!text-sm md:!text-base">({amount} TC)</Text>
        </Box>
        {subjects.map((subject, index) => (
          <Box
            key={index}
            w="136px"
            h="100px"
            bg={subject.bg}
            className="rounded-xl flex flex-col justify-center items-center text-white !px-2"
          >
            <Text c="#4E4E4E" className="text-center !text-sm md:!text-[.9rem]">
              {subject.name}
            </Text>
            <Text c="#4E4E4E" className="text-center !text-sm md:!text-[.9rem]">
              ({subject.amount} TC)
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
