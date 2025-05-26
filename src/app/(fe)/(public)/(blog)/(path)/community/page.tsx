import PlusIcon from "@/assets/images/svg/PlusIcon";
import { Text, Flex, Box, Stack } from "@mantine/core";
import NewPostProvider from "./providers/NewPostProvider";

export default function CommunityPage() {
  return (
    <NewPostProvider>
      <Flex direction="column" gap={10}>
        <Flex>
          <Text className="!text-[#4E4E4E] font-[1.1rem]">
            Cùng tạo ra những sản phẩm đẹp!
          </Text>
        </Flex>
        <Flex className="mt-2">
          <Stack className="cursor-pointer" align="center" gap={10}>
            <Box className="rounded-full size-[60px] bg-white grid place-items-center shadow-md">
              <PlusIcon />
            </Box>
            <Text className="!text-[#4E4E4E] !text-[.8rem] text-center font-semibold">
              Viết bài
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </NewPostProvider>
  );
}
