import ArrowDown from "@/assets/images/svg/ArrowDown";
import { useAuthStore } from "@/shared/stores/AuthStore";
import { Box, Menu, Text } from "@mantine/core";
import { Flex } from "@mantine/core";
import {
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconTrash,
  IconUser,
} from "@tabler/icons-react";
import React, { useCallback } from "react";
import AvatarFrame from "@/assets/images/png/AvatarFrame.png";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UserInfoNav() {
  const { status, userInfo } = useAuthStore();

  return (
    <UserMenu fullname={userInfo?.fullname ?? ""}>
      {status === "authenticated" && (
        <Flex align="center" gap="md" className="cursor-pointer">
          {userInfo?.profile_pic_url && (
            <Box className="w-[40px] h-[40px] rounded-full !relative">
              <img
                className="w-full h-full absolute inset-0 z-1"
                src={AvatarFrame.src}
              />
              <img
                className="size-full rounded-full absolute inset-0 z-2"
                src={userInfo?.profile_pic_url ?? ""}
                alt="profile"
              />
            </Box>
          )}
          <Flex direction="column" gap="0">
            <Text className="!text-[.7rem] !text-white !font-bold">
              {userInfo?.fullname}
            </Text>
            <Text className="!text-[.7rem] !text-white">
              {userInfo?.student_code}
            </Text>
          </Flex>
          <ArrowDown />
        </Flex>
      )}
    </UserMenu>
  );
}

function UserMenu({
  children,
  fullname,
}: React.PropsWithChildren<{
  fullname: string;
}>) {
  const { logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = useCallback(() => {
    logout(() => {
      router.push("/auth/login");
    });
  }, [logout, router]);

  return (
    <Menu zIndex={1000} shadow="md" width={200}>
      <Menu.Target>
        <Box>{children}</Box>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Xin chào {fullname}</Menu.Label>
        <Link href="/profile" prefetch>
          <Menu.Item leftSection={<IconUser size={14} />}>
            Thông tin cá nhân
          </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Tin nhắn
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto size={14} />}>Gallery</Menu.Item>
        <Menu.Item
          leftSection={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Tìm kiếm
        </Menu.Item>

        <Menu.Item
          color="red"
          leftSection={<IconTrash size={14} />}
          onClick={handleLogout}
        >
          Đăng xuất
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
