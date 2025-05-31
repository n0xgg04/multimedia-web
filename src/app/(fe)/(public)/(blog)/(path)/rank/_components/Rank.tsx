"use client";

import React from "react";
import {
  Box,
  Text,
  Stack,
  Group,
  Image,
  Container,
  Card,
  Center,
} from "@mantine/core";
import { IconTrendingUp } from "@tabler/icons-react";

const rankingData = [
  {
    rank: 1,
    name: "Bùi Thị Hương",
    studentId: "B19DCPT116",
    points: "75688 điểm",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b35a770b?w=400&h=400&fit=crop&crop=face",
    bgColor: "linear-gradient(135deg, #FFC204 0%, #FF057D 100%)",
    change: null,
  },
  {
    rank: 2,
    name: "Nguyễn Hồ Tân",
    studentId: "B19DCPT200",
    points: "74326 điểm",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bgColor: "linear-gradient(135deg, #FC4AF5 0%, #0846E4 100%)",
    change: { type: "up", value: 1 },
  },
  {
    rank: 3,
    name: "Đoàn Nam Trường",
    studentId: "B19DCPT205",
    points: "64234 điểm",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bgColor: "linear-gradient(135deg, #50EFE6 0%, #0564EB 100%)",
    change: { type: "up", value: 1 },
  },
  {
    rank: 4,
    name: "Trịnh Đức Hà",
    studentId: "B19DCPT108",
    points: "60234 điểm",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bgColor: "#C4C4C4",
    change: { type: "up", value: 2 },
  },
  {
    rank: 5,
    name: "Trịnh Minh Huy",
    studentId: "B20DCPT115",
    points: "59831 điểm",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop&crop=face",
    bgColor: "#E8E8E8",
    change: null,
  },
  {
    rank: 6,
    name: "Phương Phương Ly",
    studentId: "B21DCPT123",
    points: "58694 điểm",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bgColor: "#F0F0F0",
    change: { type: "up", value: 4 },
  },
  {
    rank: 7,
    name: "Nguyễn Ngọc Tuấn",
    studentId: "B22DCPT212",
    points: "43684 điểm",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bgColor: "#D4D4D4",
    change: null,
  },
  {
    rank: 8,
    name: "Đỗ Thị Cẩm Vân",
    studentId: "B19DCPT241",
    points: "42036 điểm",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bgColor: "#E4E4E4",
    change: { type: "up", value: 4 },
  },
  {
    rank: 9,
    name: "Lê Trường Giang",
    studentId: "B20DCPT089",
    points: "42023 điểm",
    avatar:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face",
    bgColor: "#CACACA",
    change: { type: "up", value: 5 },
  },
  {
    rank: 10,
    name: "Phan Mỹ Diệu",
    studentId: "B21DCPT012",
    points: "42021 điểm",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    bgColor: "#B8B8B8",
    change: { type: "up", value: 1 },
  },
];

const RankCard = ({ student }: { student: (typeof rankingData)[0] }) => {
  const isTopThree = student.rank <= 3;

  return (
    <Card
      p="md"
      radius="lg"
      style={{
        background: "#FFFFFF",
        boxShadow: "6px 6px 20px 0px rgba(68, 4, 152, 0.25)",
      }}
    >
      <Group align="center" gap="lg">
        <Box
          w={isTopThree ? 56 : 28}
          style={{
            textAlign: "center",
          }}
        >
          <Text
            size={isTopThree ? "xl" : "lg"}
            fw={700}
            c={isTopThree ? "#FFFFFF" : "#4E4E4E"}
            style={{
              background: isTopThree ? student.bgColor : "transparent",
              WebkitBackgroundClip: isTopThree ? "text" : "initial",
              WebkitTextFillColor: isTopThree ? "transparent" : "#4E4E4E",
            }}
          >
            {student.rank}
          </Text>
        </Box>

        <Group flex={1} align="center" gap="sm">
          <Box
            style={{
              width: isTopThree ? 80 : 60,
              height: isTopThree ? 80 : 60,
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #FFFFFF",
              background: student.bgColor,
            }}
          >
            <Image
              src={student.avatar}
              alt={student.name}
              w="100%"
              h="100%"
              fit="cover"
            />
          </Box>

          <Stack gap={2} flex={1}>
            <Text size="md" fw={500} c="#4E4E4E">
              {student.name}
            </Text>
            <Text size="xs" c="#858585">
              {student.studentId}
            </Text>
          </Stack>
        </Group>

        <Text size="md" fw={500} c="#4E4E4E">
          {student.points}
        </Text>

        {student.change && (
          <Group gap={4} align="center">
            <IconTrendingUp
              size={16}
              color={student.change.type === "up" ? "#27CA40" : "#FF0000"}
            />
            <Text
              size="md"
              fw={500}
              c={student.change.type === "up" ? "#27CA40" : "#FF0000"}
            >
              {student.change.value}
            </Text>
          </Group>
        )}

        {!student.change && <Box w={31} />}
      </Group>
    </Card>
  );
};

export default function Rank() {
  return (
    <Container size="lg" py="xl">
      <Stack align="center" gap="xl">
        <Group align="center" gap="lg">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=50&h=50&fit=crop"
            alt="Trophy"
            w={50}
            h={50}
            radius="sm"
          />
          <Text
            size="3rem"
            fw={600}
            c="#FFFFFF"
            style={{
              textAlign: "center",
              fontFamily: "Mali, sans-serif",
            }}
          >
            Bảng xếp hạng TOP 10
          </Text>
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=50&h=50&fit=crop"
            alt="Trophy"
            w={50}
            h={50}
            radius="sm"
          />
        </Group>

        <Stack gap="md" w="100%" maw={904}>
          {rankingData.map((student) => (
            <RankCard key={student.rank} student={student} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
