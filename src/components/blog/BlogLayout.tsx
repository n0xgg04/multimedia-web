"use client";
import NavigationBar from "@/components/common/NavigationBar";
import SafeAreaContainer from "@/components/common/SafeAreaContainer";
import TabView from "@/components/common/TabView";
import { TABS } from "@/shared/constants/HomeTab";
import { Flex } from "@mantine/core";
import React from "react";

export default function BlogLayout({ children }: React.PropsWithChildren) {
  return (
    <Flex direction="column" w="100vw" h="100vh">
      <NavigationBar
        className="bg-[linear-gradient(245.61deg,#14003D_-71.55%,#460971_79.32%)] "
        bottomComponent={<TabView tabs={TABS} />}
      />
      <SafeAreaContainer className="grow bg-[#F6F6F6]">
        {children}
      </SafeAreaContainer>
    </Flex>
  );
}
