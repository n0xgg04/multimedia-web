"use client";
import React, { useRef } from "react";
import HomeHeroImage from "@/assets/images/svg/HomeHeroImage";
import { motion } from "motion/react";

const MotionHomeHeroImage = motion.create(HomeHeroImage);

export default function HeroParallex() {
  const ref = useRef<SVGSVGElement>(null);

  return (
    <MotionHomeHeroImage
      ref={ref}
      className="h-[70vh] w-[70vh] md:w-[600px] md:h-[600px]  transition-all duration-300 ease-in"
    />
  );
}
