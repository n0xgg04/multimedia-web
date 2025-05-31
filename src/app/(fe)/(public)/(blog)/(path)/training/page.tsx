import { Flex, Text } from "@mantine/core";
import React from "react";
import TrainingGrid from "./components/TrainingGrid";
import TagInfo from "./components/TagInfo";
import JobPosition from "./components/JobPosition";

export default function TrainingPage() {
  return (
    <Flex
      direction="column"
      gap={{
        base: 10,
        xs: 10,
        md: 20,
      }}
      w="100%"
    >
      <TrainingGrid />
      <TagInfo />
      <JobPosition />
    </Flex>
  );
}
