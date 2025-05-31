import { Box, Flex, Input, Textarea } from "@mantine/core";
import React from "react";
import { useFormContext } from "react-hook-form";
import { NewPostSchema } from "../_zod/new_post.z";

const NewPostComposer = React.memo(() => {
  const { register } = useFormContext<NewPostSchema>();
  return (
    <Box className="grow-1" pos="relative" h="100%">
      <Flex h="100%" w="100%" direction="column" gap={10}>
        <Input
          {...register("title")}
          placeholder="Tiêu đề bài viết..."
          bd={"none"}
          styles={{
            input: {},
          }}
        />
        <Textarea
          maxLength={5000}
          w="100%"
          className="h-full"
          variant="unstyled"
          placeholder="Nội dung bài viết..."
          styles={{
            input: {
              fontSize: ".85rem",
              height: "100%",
            },
            root: {
              height: "100%",
            },
            wrapper: {
              height: "100%",
            },
          }}
          {...register("content")}
        />
      </Flex>
    </Box>
  );
});

NewPostComposer.displayName = "NewPostComposer";

export default NewPostComposer;
