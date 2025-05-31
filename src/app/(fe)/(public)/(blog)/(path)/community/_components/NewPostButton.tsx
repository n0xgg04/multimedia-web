"use client";
import PlusIcon from "@/assets/images/svg/PlusIcon";
import { Box, Text } from "@mantine/core";
import { Stack } from "@mantine/core";
import React from "react";
import { useNewPost } from "../_providers/NewPostProvider";

export default function NewPostButton() {
  const { open } = useNewPost();
  return (
    <Stack className="cursor-pointer" align="center" gap={10} onClick={open}>
      <Box className="rounded-full size-[60px] bg-white grid place-items-center shadow-md">
        <PlusIcon />
      </Box>
      <Text className="!text-[#4E4E4E] !text-[.8rem] text-center font-semibold">
        Viết bài
      </Text>
    </Stack>
  );
}
