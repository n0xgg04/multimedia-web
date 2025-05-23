import homeHeroImageMd from "@/assets/images/png/HomeCircleMd.png";
import { Container, Flex } from "@mantine/core";
import Image from "next/image";
import React from "react";
import homeCircle from "@/assets/images/png/HomeCircle.png";
import WelcomeText from "./common/WelcomeText";
import Reveal from "./common/Reveal";
import CircleParallex from "./common/CircleParallex";
import HeroParallex from "./common/HeroParallex";
import { cn } from "@/shared/utils/tw/cn";

export default function FirstPage({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <Container
      px="0"
      fluid
      h="100vh"
      w="100vw"
      pos="relative"
      className={cn("snap-start", className)}
      {...props}
    >
      <Reveal
        className="z-10 absolute bottom-10 md:-bottom-23 left-1/2 md:left-[calc(50%-100px)] -translate-x-1/2"
        delay={0.1}
      >
        <HeroParallex />
      </Reveal>
      <Container
        h="100vh"
        fluid
        px="0"
        pos="relative"
        bg="var(--color-bg-1)"
        pt={90}
        className="overflow-hidden"
      >
        <Flex
          w="100%"
          h="100%"
          pos="absolute"
          direction="column"
          inset={0}
          className="z-10"
        >
          <WelcomeText />
        </Flex>
        <Reveal delay={1}>
          <Image
            className="absolute bottom-0 left-[calc(50%-25px)] -translate-x-1/2 opacity-0 md:opacity-100 transition-all duration-300 ease-in"
            alt="circle"
            width={1250}
            height={1250}
            src={homeCircle}
          />
        </Reveal>
        <Reveal delay={0.5}>
          <Image
            className="absolute md:bottom-0 left-1/2 -translate-x-1/2 opacity-0 md:opacity-100 transition-all duration-300 ease-in"
            alt="circle"
            width={780}
            height={780}
            src={homeHeroImageMd}
          />
        </Reveal>
        <Reveal delay={0.5}>
          <CircleParallex />
        </Reveal>
      </Container>
    </Container>
  );
}
