import NavbarHandleScroll from "@/app/(fe)/(public)/(landing)/components/common/NavbarHandleScroll";
import Reveal from "@/app/(fe)/(public)/(landing)/components/common/Reveal";
import MainLogo from "@/assets/images/svg/MainLogo";
import { cn } from "@/shared/utils/tw/cn";
import { Flex } from "@mantine/core";
import React from "react";
import NavbarAction from "./NavbarAction";
import Link from "next/link";

type Props = {
  bottomComponent?: React.ReactNode;
};
export default function NavigationBar({
  className,
  bottomComponent,
  ...props
}: React.ComponentProps<typeof Flex> & { className?: string } & Props) {
  return (
    <NavbarHandleScroll>
      <Flex
        id="global-navigation-bar"
        direction="column"
        gap={0}
        w="100vw"
        className={cn("absolute inset-0 z-10", className)}
      >
        <Flex
          w="100%"
          justify="space-between"
          align="center"
          px={"xl"}
          py={10}
          {...props}
        >
          <Reveal delay={0.2}>
            <Link href="/">
              <MainLogo className="w-[145px] h-[48px] md:ml-20 hover:drop-shadow-[0_0_0.95rem_crimson] transition-all duration-500 ease-in" />
            </Link>
          </Reveal>
          <Reveal delay={0.2}>
            <NavbarAction />
          </Reveal>
        </Flex>
        {bottomComponent}
      </Flex>
    </NavbarHandleScroll>
  );
}
