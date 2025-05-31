import React from "react";
import { Box, Text, Stack, SimpleGrid, Image } from "@mantine/core";
import uiux from "@/assets/images/png/training/uiux.png";
import game from "@/assets/images/png/training/game.png";
import twoD from "@/assets/images/png/training/2d3d.png";
import anim2D from "@/assets/images/png/training/animation2d3d.png";
import effect from "@/assets/images/png/training/effect.png";
import branding from "@/assets/images/png/training/brand.png";
import pic from "@/assets/images/png/training/pic.png";

const jobPositions = [
  {
    title: "Thiết kế UX/UI",
    backgroundImage: uiux.src,
  },
  {
    title: "Game",
    backgroundImage: game.src,
  },
  {
    title: "Tạo hình 2D & 3D",
    backgroundImage: twoD.src,
  },
  {
    title: "Hình động 2D & 3D",
    backgroundImage: anim2D.src,
  },
  {
    title: "Hiệu ứng/kỹ xảo",
    backgroundImage: effect.src,
  },
  {
    title: "Minh họa",
    backgroundImage: pic.src,
  },
  {
    title: "Nhận diện thương hiệu",
    backgroundImage: branding.src,
  },
];

const JobCard = ({
  title,
  backgroundImage,
}: {
  title: string;
  backgroundImage: string;
}) => (
  <Stack
    gap={5}
    style={{
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
    }}
    className="hover:scale-105 transition-all duration-300"
  >
    <Image
      src={backgroundImage}
      alt={title}
      fit="cover"
      w="100%"
      className="!aspect-video"
      radius={16}
    />
    <Text
      size="sm"
      fw={500}
      lh={1.56}
      ta="center"
      c="#00A3FF"
      style={{ width: "100%" }}
    >
      {title}
    </Text>
  </Stack>
);

export default function JobPosition() {
  return (
    <Stack gap="md">
      <Text size="lg" fw={400} c="#4E4E4E" w="100%" maw={1560}>
        Các vị trí công việc
      </Text>

      <SimpleGrid cols={4} spacing="lg">
        {jobPositions.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            backgroundImage={job.backgroundImage}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
