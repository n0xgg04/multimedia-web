"use client";

import { Card, Text } from "@mantine/core";

interface CareerPosition {
  title: string;
  image: string;
}

interface TrainingCareerPositionsProps {
  positions: CareerPosition[];
}

export default function TrainingCareerPositions({
  positions,
}: TrainingCareerPositionsProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-4 gap-6">
        {positions.slice(0, 4).map((position, index) => (
          <Card
            key={index}
            padding={0}
            radius={16}
            withBorder={false}
            className="overflow-hidden h-[308px] w-[372px]"
          >
            <div
              className="h-[280px] bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${position.image})`,
              }}
            ></div>
            <div className="bg-white h-[28px] flex items-center justify-center">
              <Text size="lg" fw={500} c="#00A3FF" ta="center" lh={1.56}>
                {position.title}
              </Text>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-6">
          {positions.slice(4).map((position, index) => (
            <Card
              key={index + 4}
              padding={0}
              radius={16}
              withBorder={false}
              className="overflow-hidden h-[308px] w-[372px]"
            >
              <div
                className="h-[280px] bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${position.image})`,
                }}
              ></div>
              <div className="bg-white h-[28px] flex items-center justify-center">
                <Text size="lg" fw={500} c="#00A3FF" ta="center" lh={1.56}>
                  {position.title}
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
