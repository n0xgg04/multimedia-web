"use client";
import { motion, HTMLMotionProps, useInView } from "motion/react";
import React, { useRef } from "react";

type Props = { translateY?: number; delay?: number; duration?: number };

export default function Reveal({
  children,
  delay,
  duration,
  translateY,
  ...props
}: React.PropsWithChildren & Props & HTMLMotionProps<"div"> & Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: translateY || 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        delay,
        duration: duration || 1,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
