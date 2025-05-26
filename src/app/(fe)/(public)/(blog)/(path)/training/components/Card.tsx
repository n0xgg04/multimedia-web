import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { PieceRight, PieceTop, PieceTopRight } from "../assets/Piece";

type Props = {
  title: string;
  subtitle: string;
  color: string;
};
export default function InfoCard({
  title,
  subtitle,
  color,
  ...props
}: Props & React.ComponentProps<typeof Box>) {
  return (
    <Box
      bg={color}
      display="flex"
      className="!justify-center !items-center rounded-xl h-[120px] w-[200px] md:h-[150px] md:w-[370px] !relative"
      {...props}
    >
      <PieceRight className="absolute bottom-2 right-0" />
      <PieceTop className="absolute top-0 left-0" />
      <PieceTopRight className="absolute top-0 right-0" />
      <Flex direction="column" gap={0}>
        <Text className="!text-[0.8rem] md:!text-[1.1rem] text-center font-[500] !text-white text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          {title}
        </Text>
        <Title
          className="!text-[1rem] md:!text-[1.8rem] text-center font-[800] !text-white text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          order={2}
        >
          {subtitle}
        </Title>
      </Flex>
    </Box>
  );
}
