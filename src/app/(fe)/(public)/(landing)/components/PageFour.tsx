import { cn } from "@/shared/utils/tw/cn";
import { Container, Text } from "@mantine/core";
import React from "react";
import Image from "next/image";

import GraphicImage from "@/assets/images/png/Graphic.png";
import HeroImage from "@/assets/images/png/Hero.png";

export default function PageFour({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <Container
      fluid
      bg="var(--color-bg-3)"
      h="100vh"
      w="100vw"
      display="flex"
      className={cn("items-center justify-center", className)}
      {...props}
    >
      <div className="w-[80vw] grid grid-cols-7 grid-rows-3 gap-5 *:size-full *:aspect-square *:flex *:flex-col *:gap-5 *:rounded-lg *:!text-white">
        <div className="col-span-2 row-span-2 p-20 bg-[#6073FA]">
          <Image src={GraphicImage} alt="Graphic" />
          <Text className="text-white text-center text-2xl font-bold">
            Thiết kế 2D
          </Text>
        </div>
        <div className="bg-[#B97DD5] p-5 !gap-1">
          <Image
            src={HeroImage}
            alt="Hero"
            className="w-[80px] aspect-square"
          />
          <Text className="text-white text-center text-2xl font-bold">
            Thiết kế 3D
          </Text>
        </div>
        <div className=" bg-red-500">3</div>
        <div className="bg-red-500 col-span-2 row-span-2">4</div>
        <div className=" bg-red-500 ">5</div>
        <div className=" bg-red-500 col-span-2 row-span-2">6</div>
        <div className="bg-red-500">7</div>
        <div className=" bg-red-500">8</div>
        <div className=" bg-red-500">9</div>
        <div className="bg-red-500">10</div>
        <div className=" bg-red-500">11</div>
        <div className=" bg-red-500">12</div>
      </div>
    </Container>
  );
}
