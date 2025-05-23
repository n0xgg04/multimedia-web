"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const MotionBox = motion.create("div");

export default function CircleParallex() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <MotionBox
      ref={ref}
      className="bg-[#543570] absolute translate-y-1/2 md:translate-y-0 bottom-1/2 md:-bottom-35 left-[calc(50%-20px)] -translate-x-1/2 size-[30vh] md:size-[40vh] md:w-[400px] md:h-[400px] rounded-full"
      style={{ y, scale }}
    ></MotionBox>
  );
}
