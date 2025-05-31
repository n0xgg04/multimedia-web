import { Box, Flex, Group, Image, Stack, Tabs, Text } from "@mantine/core";
import React from "react";
import Cover from "@/assets/images/png/cover.png";
import { useAuthStore } from "@/shared/stores/AuthStore";
import Frame from "@/assets/images/svg/Frame";
import { prisma } from "@/shared/utils/prisma/client";

type UserInfoProps = {
  userId: string;
  TabContent: React.ReactNode;
};
export default async function UserInfo({ userId, TabContent }: UserInfoProps) {
  const userInfo = await prisma.users.findUnique({
    where: {
      id: userId,
    },
    select: {
      fullname: true,
      student_code: true,
      profile_pic_url: true,
      _count: {
        select: {
          follower: true,
        },
      },
    },
  });

  if (!userInfo) {
    throw new Error("User not found");
  }

  const top3Followers = await prisma.follow_user.findMany({
    where: {
      following_id: userId,
    },
    take: 3,
    orderBy: {
      created_at: "desc",
    },
    select: {
      users_follower: {
        select: {
          profile_pic_url: true,
        },
      },
    },
  });

  return (
    <Stack gap={0}>
      <Image src={Cover.src} alt="cover" w="100%" h={200} />
      <Group
        bg="white"
        pb={40}
        px={50}
        className="!rounded-xl !shadow-xs"
        gap={50}
        align="center"
      >
        <Box
          h={150}
          w={150}
          className="!rounded-full !relative translate-y-[-10%]"
        >
          <Image
            src={userInfo?.profile_pic_url}
            alt="avatar"
            w="100%"
            h="100%"
            className="!rounded-full"
          />
          <Frame className="!absolute !top-0 w-full h-full !left-0 !size-full  scale-175" />
        </Box>
        <Stack gap={0} className="!h-full">
          <Text className="!text-[1.7rem] !text-[#000000] !font-bold">
            {userInfo?.fullname}
          </Text>
          <Text className="!text-[0.9rem] !text-[#858585]">
            {userInfo?.student_code} . {userInfo?._count?.follower} người theo
            dõi
          </Text>
        </Stack>
        {TabContent}
      </Group>
    </Stack>
  );
}
