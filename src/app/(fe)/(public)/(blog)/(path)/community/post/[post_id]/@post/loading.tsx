import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Skeleton,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import Badge from "../_components/Badge";
import { RouteParams } from "../_@types";
import { prisma } from "@/shared/utils/prisma/client";
import { IconPlus } from "@tabler/icons-react";

type Props = {
  params: Promise<RouteParams>;
};

export default async function Loading() {
  return (
    <Stack>
      <Title order={2}>
        <Skeleton height={20} width={100} radius="lg" />
      </Title>
      <Skeleton height={20} width={100} radius="lg" />
      <Divider />
      <Flex justify="space-between">
        <Group>
          <Skeleton height={40} width={40} radius="lg" />
          <Stack>
            <Skeleton height={20} width={100} radius="lg" />
            <Skeleton height={20} width={100} radius="lg" />
          </Stack>
        </Group>
        <Button
          loading={true}
          leftSection={<IconPlus width={16} height={16} />}
          radius="lg"
          bg="linear-gradient(93.21deg, #FC4AF5 -36.51%, #0846E4 135.15%)"
          className="!text-white !text-[.8rem] !font-bold"
        >
          Theo dõi
        </Button>
      </Flex>
    </Stack>
  );
}
