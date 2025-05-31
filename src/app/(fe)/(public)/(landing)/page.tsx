import FirstPage from "./components/FirstPage";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
import GlobalFooter from "@/components/common/GlobalFooter";
import { Box, Flex, Stack } from "@mantine/core";

export default function Home() {
  return (
    <>
      <FirstPage className="h-screen snap-start" />
      <PageTwo className="h-screen snap-start" />
      <PageThree className="h-screen snap-start" />
      <PageFour className="h-screen snap-start" />
      <Flex
        className="h-screen w-full snap-start"
        bg="#360660"
        align="flex-end"
      >
        <GlobalFooter />
      </Flex>
    </>
  );
}
