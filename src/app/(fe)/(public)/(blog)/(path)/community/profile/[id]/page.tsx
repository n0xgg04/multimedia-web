import { Flex, Stack, Tabs } from "@mantine/core";
import React from "react";
import UserInfo from "../_components/UserInfo";
import PostGrid from "../../_components/PostGrid";
import UserPost from "./_components/UserPost";

type ProfilePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { id } = await params;
  return (
    <Stack w="100%">
      <UserInfo userId={id} TabContent={<></>} />
      <UserPost userId={id} />
    </Stack>
  );
}
