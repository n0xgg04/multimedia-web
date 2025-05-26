import { Button, Container, Flex, Stack, Text } from "@mantine/core";
import React from "react";
import MediaPic from "@/assets/images/png/MediaPic.png";
import PicSmall from "@/assets/images/png/PicSmall.png";
import Image from "next/image";
import { cn } from "@/shared/utils/tw/cn";
import AnimationText from "./common/AnimationText";
import AnimationProgessBar from "./common/AnimationProgessBar";
import Reveal from "./common/Reveal";
export default function PageTwo({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <Container
      fluid
      bg="var(--color-bg-2)"
      h="100vh"
      w="100vw"
      display="flex"
      className={cn("items-center justify-center", className)}
      {...props}
    >
      <Flex
        align="center"
        justify="center"
        className="flex-wrap md:flex-nowrap mt-15 md:mt-0 p-5 md:p-0"
      >
        <Reveal delay={0.2} duration={0.5} translateY={20}>
          <Image
            src={MediaPic}
            alt="MediaPic"
            className="!size-[40vh] md:!size-[75vh]"
          />
        </Reveal>
        <Flex direction="column" className="gap-5 md:gap-10 pb-20 md:pb-0">
          <Stack gap={10}>
            <Reveal delay={0} duration={0.5} translateY={20}>
              <Image
                src={PicSmall}
                alt="MediaPic"
                className="!h-[54px] !w-[54px]"
              />
            </Reveal>
            <Reveal delay={0.2} duration={0.5} translateY={5}>
              <Text className="!text-white  !font-[700] !text-[1.1rem] md:!text-[18px]">
                Multimedia Ptit
              </Text>
            </Reveal>
            <Reveal delay={0.4} duration={0.5} translateY={5}>
              <Text className="!text-white  !font-[700] !text-[1.6rem] md:!text-[32px] !leading-[40px]">
                Thiết kế <br />
                Đa phương tiện
              </Text>
            </Reveal>
            <Reveal delay={0.6} duration={0.5} translateY={5}>
              <Text className="!text-white !text-[12px] md:max-w-[300px]">
                Ngành thiết kế đa phương tiện (Multimedia Design) là ngành ứng
                dụng những công nghệ thông tin để thiết kế và sáng tạo các ứng
                dụng đa phương tiện trong nhiều lĩnh vực.
              </Text>
            </Reveal>
            <Flex w="100%" gap={10}>
              <Flex direction="column" className="w-[60%]" gap={10}>
                <AnimationText className="text-left" percentage={65} />
                <Reveal delay={0} duration={0.5} translateY={5}>
                  <Text className="!text-white !text-[12px] !font-[700]">
                    2D Designer
                  </Text>
                </Reveal>
                <AnimationProgessBar
                  duration={1.5}
                  className="!bg-progress-bar"
                />
              </Flex>
              <Flex direction="column" className="w-[40%]" gap={10}>
                <AnimationText className="text-right" percentage={35} />
                <Reveal delay={0} duration={0.5} translateY={5}>
                  <Text className="!text-white !text-[12px] !font-[700] text-right">
                    3D Designer
                  </Text>
                </Reveal>
                <AnimationProgessBar
                  duration={1.5}
                  className="!bg-progress-bar-secondary"
                />
              </Flex>
            </Flex>
          </Stack>
          <Flex>
            <Reveal delay={1} duration={0.5} translateY={5}>
              <Button variant="default" className=" !text-white btn-gradient">
                Tìm hiểu thêm
              </Button>
            </Reveal>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
