"use client";

import { Card, Text, Stack, Box, Flex } from "@mantine/core";

interface LegendItem {
  label: string;
  color: string;
  border: boolean;
  borderColor?: string;
}

interface TrainingSidebarProps {
  legendData: LegendItem[];
  electiveSubjects: string[];
}

export default function TrainingSidebar({
  legendData,
  electiveSubjects,
}: TrainingSidebarProps) {
  return (
    <div className="flex flex-col gap-8 w-[400px]">
      <Card padding={0} radius={16} withBorder>
        <div
          className="text-center text-white rounded-t-2xl"
          style={{
            background:
              "linear-gradient(135deg, #D501C5, #FF7900, #FCD500, #7739FC)",
            padding: "18px 24px",
          }}
        >
          <Text size="xl" fw={700} lh={1.33}>
            Chú giải
          </Text>
        </div>

        <div className="bg-white rounded-b-2xl" style={{ padding: "24px" }}>
          <div className="flex flex-col gap-6">
            <Stack gap={16}>
              {legendData.slice(0, 4).map((item, index) => (
                <Flex key={index} align="center" gap={12}>
                  <Box
                    className="w-[60px] h-8 rounded-lg"
                    style={{
                      backgroundColor: item.color,
                      border: item.border
                        ? `1px solid ${item.borderColor}`
                        : undefined,
                    }}
                  />
                  <Text size="sm" fw={500} c="gray.8" lh={1.5}>
                    {item.label}
                  </Text>
                </Flex>
              ))}
            </Stack>

            <Stack gap={16}>
              {legendData.slice(4).map((item, index) => (
                <Flex key={index} align="center" gap={12}>
                  <Box
                    className="w-[60px] h-8 rounded-lg"
                    style={{ backgroundColor: item.color }}
                  />
                  <Text size="sm" fw={500} c="gray.8" lh={1.5}>
                    {item.label}
                  </Text>
                </Flex>
              ))}
            </Stack>
          </div>
        </div>
      </Card>

      <Card padding={0} radius={16} withBorder>
        <div
          className="text-center text-white rounded-t-2xl"
          style={{
            background:
              "linear-gradient(135deg, #D501C5, #FF7900, #FCD500, #7739FC)",
            padding: "18px 24px",
          }}
        >
          <Text size="xl" fw={700} lh={1.33}>
            Các học phần tự chọn
          </Text>
        </div>

        <div className="bg-white rounded-b-2xl" style={{ padding: "24px" }}>
          <Stack gap={12}>
            {electiveSubjects.map((subject, index) => (
              <Text key={index} size="sm" fw={500} c="gray.8" lh={1.5}>
                {subject}
              </Text>
            ))}
          </Stack>
        </div>
      </Card>
    </div>
  );
}
