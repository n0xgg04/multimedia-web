import { Flex, Text } from "@mantine/core";
import React from "react";
import SearchBox from "./_components/SearchBox";
import AllJobs from "./_components/AllJobs";

export default function RecruitmentPage() {
  return (
    <Flex direction="column" gap="md">
      <SearchBox />
      <AllJobs />
    </Flex>
  );
}
