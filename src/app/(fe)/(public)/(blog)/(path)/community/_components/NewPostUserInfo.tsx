"use client";
import { useAuthStore } from "@/shared/stores/AuthStore";
import { Box, Flex, Group, NativeSelect, Select } from "@mantine/core";
import { Text } from "@mantine/core";
import React, { useEffect } from "react";
import AvatarFrame from "@/assets/images/png/AvatarFrame.png";
import Image from "next/image";
import useCategories from "../_queries.tsx/useCategories";
import { NewPostSchema } from "../_zod/new_post.z";
import { useFormContext } from "react-hook-form";

export default function NewPostUserInfo() {
  const { userInfo } = useAuthStore();
  const { data: categories, isLoading } = useCategories();
  const { setValue, register } = useFormContext<NewPostSchema>();

  useEffect(() => {
    if (categories && categories.length > 0) {
      setValue("category_id", categories[0].id.toString());
    }
  }, [categories, setValue]);

  return (
    <Flex w="100%" align="center" justify="space-between">
      <Group gap={0}>
        <Box
          className="size-[40px] rounded-full overflow-hidden"
          pos="relative"
        >
          <Image
            src={AvatarFrame}
            className="absolute inset-0 size-full z-10"
            alt="avatar-frame"
          />
          <Image
            width={40}
            height={40}
            src={userInfo?.profile_pic_url || ""}
            className="absolute inset-0 size-full z-0 rounded-full object-cover"
            alt="avatar"
          />
        </Box>
        <Flex direction="column" gap={0} className="ml-2 grow-1">
          <Text className="!text-[.8rem] font-semibold">
            {userInfo?.fullname}
          </Text>
          <Text className="!text-[.7rem] text-[#858585]">
            {new Date().toLocaleDateString()}
          </Text>
        </Flex>
      </Group>
      <NativeSelect
        disabled={isLoading}
        variant="filled"
        {...register("category_id")}
        data={
          categories?.map((category) => ({
            label: category.name,
            value: category.id.toString(),
          })) || []
        }
        radius={999}
      />
    </Flex>
  );
}
