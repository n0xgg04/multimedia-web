"use client";
import { cn } from "@/shared/utils/tw/cn";
import React, { useRef } from "react";
import { HTMLMotionProps, motion, useInView } from "motion/react";

type Props = {
  duration: number;
};

export default function AnimationProgessBar({
  className,
  duration,
  ...props
}: HTMLMotionProps<"div"> & Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={cn("!h-[4px] rounded-full", className)}
      initial={{
        width: "0%",
      }}
      transition={{
        duration,
        ease: "easeIn",
      }}
      animate={isInView ? { width: "100%" } : { width: "0%" }}
      {...props}
    ></motion.div>
  );
}
