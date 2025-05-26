"use client";

import { SimpleGrid, Card, Text } from "@mantine/core";

interface StatisticData {
  title: string;
  value: string;
  gradient: string;
}

interface TrainingStatisticsProps {
  statistics: StatisticData[];
}

export default function TrainingStatistics({
  statistics,
}: TrainingStatisticsProps) {
  return (
    <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing={24}>
      {statistics.map((stat, index) => (
        <Card
          key={index}
          shadow="sm"
          padding={0}
          radius={16}
          withBorder={false}
          className="h-40 relative overflow-hidden"
          style={{
            background: stat.gradient,
          }}
        >
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-[-90px] right-[-115px] w-[142px] h-[182px] bg-white/10 rounded-full"></div>
            <div className="absolute top-[-90px] right-[27px] w-[142px] h-[182px] bg-white/20 rounded-full"></div>
            <div className="absolute top-0 right-[-115px] w-[285px] h-[137px] bg-white/30 rounded-full"></div>
            <div className="absolute top-[-35px] right-[-35px] w-[142px] h-[182px] bg-white/10 rounded-full"></div>
            <div className="absolute top-[-35px] right-[107px] w-[142px] h-[182px] bg-white/20 rounded-full"></div>
            <div className="absolute top-24 right-[78px] w-[119px] h-[104px] bg-white/30 rounded-full"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6">
            <Text
              size="lg"
              fw={500}
              c="white"
              mb={4}
              style={{
                fontSize: "24px",
                lineHeight: "1.33",
                filter: "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25))",
              }}
            >
              {stat.title}
            </Text>
            <Text
              fw={700}
              c="white"
              style={{
                fontSize: "32px",
                lineHeight: "1.5",
                filter: "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25))",
              }}
            >
              {stat.value}
            </Text>
          </div>
        </Card>
      ))}
    </SimpleGrid>
  );
}
