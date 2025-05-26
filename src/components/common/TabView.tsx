"use client";
import { Flex, Text } from "@mantine/core";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useId, useRef, useState } from "react";

type Props = {
  tabs: {
    label: string;
    route: string;
  }[];
} & React.ComponentProps<typeof Flex>;

export default function TabView({ tabs, ...props }: Props) {
  const Id = useId();
  const pathName = usePathname();

  return (
    <Flex
      {...props}
      w="100%"
      justify="space-between"
      align="center"
      px={{
        sm: 50,
        md: 200,
      }}
      py={13}
      bg="white"
      pos="relative"
    >
      {tabs.map((tab, index) => (
        <Link
          href={tab.route}
          key={`${Id}-${index}`}
          className="w-full"
          prefetch
        >
          <Text
            className="!bg-clip-text text-transparent !text-center !text-[0.7rem] md:!text-[0.8rem]"
            bg="linear-gradient(93.21deg, #FC4AF5 -36.51%, #0846E4 135.15%)"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 500,
            }}
          >
            {tab.label}
          </Text>
        </Link>
      ))}
      <ActiveBar className="absolute bottom-0 left-0" activePath={pathName} />
    </Flex>
  );
}

function ActiveBar({
  className,
  activePath,
}: {
  className?: string;
  activePath: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = React.useState({ width: 0, x: 0 });

  const calculateDimensions = React.useCallback(() => {
    setIsLoaded(false);
    const parent = ref.current?.parentElement;
    if (!parent) return;

    const activeTab = parent.querySelector(`[href="${activePath}"]`);
    if (!activeTab) return;

    const activeTabWidth = (activeTab as HTMLElement).offsetWidth;
    const activeTabLeft = (activeTab as HTMLElement).offsetLeft;

    setDimensions({ width: activeTabWidth, x: activeTabLeft });
    setIsLoaded(true);
  }, [activePath]);

  useEffect(() => {
    calculateDimensions();
  }, [calculateDimensions]);

  useEffect(() => {
    const handleResize = () => {
      calculateDimensions();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [calculateDimensions]);

  return (
    <motion.div
      ref={ref}
      style={{
        background:
          "linear-gradient(93.21deg, #FC4AF5 -36.51%, #0846E4 135.15%)",
        height: 2,
        position: "absolute",
        bottom: 0,
        left: 0,
        opacity: 0,
      }}
      animate={{
        width: dimensions.width,
        x: dimensions.x,
        opacity: isLoaded ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={className}
    />
  );
}
