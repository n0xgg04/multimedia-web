import React from "react";
import { Text, Title } from "@mantine/core";
import { cn } from "@/shared/utils/tw/cn";

type Props = {
  children: React.ReactNode | string;
};
export default function Badge({
  children,
  className,
  ...props
}: Props &
  React.ComponentProps<typeof Text> & {
    className?: string;
  }) {
  return (
    <Title
      className={cn(
        "bg-gradient-to-r from-[#FFC204] to-[#FF057D] !text-white !px-3 !py-1 rounded-lg grow-0 !text-[.8rem] font-bold",
        className
      )}
      {...props}
    >
      {children}
    </Title>
  );
}
