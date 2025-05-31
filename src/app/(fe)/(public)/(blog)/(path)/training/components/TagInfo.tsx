import React from "react";
import { Box, Text, Stack, Group } from "@mantine/core";

const legendData = [
  { text: "Bắt buộc chung", color: "#B1E0FC" },
  { text: "Bổ trợ ngành", color: "#FFFFFF", hasGradientBorder: true },
  { text: "Chuyên ngành", color: "#F2C946" },
  { text: "Giáo dục\nchuyên nghiệp", color: "#CC33FF" },
  { text: "Bắt buộc chung\nnhóm ngành", color: "#DAD2F9" },
  { text: "Cơ sở ngành", color: "#FACCCC" },
  { text: "Thực tập", color: "#FFC3F9" },
  { text: "Đồ án tốt nghiệp", color: "#A8FF89" },
];

const electiveSubjects = [
  "Ngôn ngữ lập trình Java (3TC)",
  "Kỹ thuật âm thanh (3TC)",
  "Mỹ học (3TC)",
  "Lịch sử mỹ thuật và thiết kế (3TC)",
  "Thiết kế giao diện và người dùng (3TC)",
  "Thiết kế nhận diện thương hiệu (3TC)",
  "Mỹ thuật nâng cao (3TC)",
  "Thiết kế ấn phẩm điện tử 2 (3TC)",
  "Thiết kế tương tác đa phương tiện nâng cao (3TC)",
];

const LegendCard = ({
  text,
  color,
  hasGradientBorder,
}: {
  text: string;
  color: string;
  hasGradientBorder?: boolean;
}) => (
  <Group align="center" gap="md">
    <Box
      w={66}
      h={40}
      style={{
        backgroundColor: color,
        border: hasGradientBorder ? "1px solid transparent" : "none",
        borderRadius: 16,
        backgroundImage: hasGradientBorder
          ? "linear-gradient(white, white), linear-gradient(45deg, #D501C5, #FF7900, #FCD500, #7739FC)"
          : "none",
        backgroundOrigin: hasGradientBorder ? "border-box" : "initial",
        backgroundClip: hasGradientBorder
          ? "content-box, border-box"
          : "initial",
      }}
    />
    <Text
      size="sm"
      fw={500}
      lh={1.5}
      c="#4E4E4E"
      style={{ whiteSpace: "pre-line" }}
    >
      {text}
    </Text>
  </Group>
);

export default function TagInfo() {
  return (
    <Group align="flex-start" gap="xl" mt={20}>
      <Box>
        <Box
          style={{
            background:
              "linear-gradient(45deg, #D501C5, #FF7900, #FCD500, #7739FC)",
            borderRadius: "16px 16px 0 0",
            padding: "10px 20px",
          }}
        >
          <Text size="xs" fw={700} lh={1.33} ta="center" c="white">
            Chú giải
          </Text>
        </Box>
        <Box
          style={{
            backgroundColor: "white",
            borderRadius: "0 0 16px 16px",
            padding: "48px 88px",
          }}
        >
          <Group gap="lg">
            <Stack gap="lg">
              {legendData.slice(0, 4).map((item, index) => (
                <LegendCard
                  key={index}
                  text={item.text}
                  color={item.color}
                  hasGradientBorder={item.hasGradientBorder}
                />
              ))}
            </Stack>
            <Stack gap="lg">
              {legendData.slice(4).map((item, index) => (
                <LegendCard
                  key={index + 4}
                  text={item.text}
                  color={item.color}
                />
              ))}
            </Stack>
          </Group>
        </Box>
      </Box>

      <Box>
        <Box
          style={{
            background:
              "linear-gradient(45deg, #D501C5, #FF7900, #FCD500, #7739FC)",
            borderRadius: "16px 16px 0 0",
            padding: "10px 20px",
          }}
        >
          <Text size="sm" fw={700} lh={1.33} ta="center" c="white">
            Các học phần tự chọn
          </Text>
        </Box>
        <Box
          style={{
            backgroundColor: "white",
            borderRadius: "0 0 16px 16px",
            padding: "40px 88px",
            width: 594,
            height: 424,
          }}
        >
          <Stack gap="md">
            {electiveSubjects.map((subject, index) => (
              <Text key={index} size="sm" fw={500} lh={1.5} c="#4E4E4E">
                {subject}
              </Text>
            ))}
          </Stack>
        </Box>
      </Box>
    </Group>
  );
}
