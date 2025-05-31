import PlusIcon from "@/assets/images/svg/PlusIcon";
import { Text, Flex, Box, Stack } from "@mantine/core";
import NewPostProvider from "./_providers/NewPostProvider";
import NewPostModal from "./_components/NewPostModal";
import NewPostButton from "./_components/NewPostButton";
import Posts from "./_components/Posts";
import FamousAccounts from "./_components/FamousAccounts";
import OutstandingPosts from "./_components/OutstandingPosts";

export default function CommunityPage() {
  return (
    <NewPostProvider>
      <NewPostModal />
      <Flex direction="column" gap={10}>
        <Flex>
          <Text className="!text-[#4E4E4E] font-[1.1rem]">
            Cùng tạo ra những sản phẩm đẹp!
          </Text>
        </Flex>
        <Flex className="mt-2">
          <NewPostButton />
        </Flex>
        <Stack gap={20}>
          <Posts />
          <FamousAccounts />
          <OutstandingPosts />
        </Stack>
      </Flex>
    </NewPostProvider>
  );
}
