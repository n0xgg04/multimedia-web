"use client";
import React, { useEffect, useRef } from "react";
import { Text } from "@mantine/core";
import { cn } from "@/shared/utils/tw/cn";
import { animate, useInView } from "motion/react";

type Props = {
  percentage: number;
};
export default function AnimationText({
  className,
  percentage,
  ...props
}: React.ComponentProps<typeof Text> &
  Pick<React.HTMLProps<HTMLParagraphElement>, "className"> &
  Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!ref.current || !isInView) return;
    animate(0, percentage, {
      duration: 2,
      ease: "circOut",
      onUpdate: (latest) => (ref.current!.innerText = `${Math.round(latest)}%`),
    });
  }, [isInView, percentage]);

  return (
    <Text
      ref={ref}
      className={cn("!text-white !text-[1.8rem] !font-[700]", className)}
      {...props}
    >
      {percentage}%
    </Text>
  );
}
