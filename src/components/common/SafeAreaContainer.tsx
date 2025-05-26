"use client";

import { cn } from "@/shared/utils/tw/cn";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export default function SafeAreaContainer({
  children,
  className,
  ...props
}: React.PropsWithChildren & React.ComponentProps<typeof motion.div>) {
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    const navigationBar = document.getElementById("global-navigation-bar");
    console.log(navigationBar?.offsetHeight);
    if (!navigationBar) return;

    const navigationBarHeight = navigationBar.offsetHeight;
    setMarginTop(navigationBarHeight);
  }, [setMarginTop]);

  return (
    <motion.div
      className={cn("bg-transparent w-screen", className)}
      style={{
        paddingTop: `${marginTop + 45}px`,
        paddingBottom: "100px",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
