"use client";
import { Box, Button, Flex, Modal, Textarea } from "@mantine/core";
import React, { useEffect } from "react";
import { useNewPost } from "../_providers/NewPostProvider";
import NewPostUserInfo from "./NewPostUserInfo";
import NewPostComposer from "./NewPostComposer";
import NewPostFormProvider from "./NewPostFormProvider";
import NewPostSubmitButton from "./NewPostSubmitButton";
import NewPostForm from "./NewPostForm";
import NewPostFilePicker from "./NewPostFilePicker";

export default function NewPostModal() {
  const { isOpen, close } = useNewPost();

  return (
    <NewPostFormProvider>
      <Modal
        size="xl"
        zIndex={999}
        opened={isOpen}
        onClose={close}
        title="Tạo bài viết mới"
        radius="lg"
        styles={{
          header: {
            fontWeight: "700",
            borderBottom: "1px solid #E0E0E0",
            marginBottom: "10px",
          },
        }}
        centered
      >
        <NewPostForm>
          <Flex w="100%" h="100%" mih={500} gap={15} p={10}>
            <NewPostFilePicker />
            <Flex
              className="grow-1/2 w-full rounded-xl"
              direction="column"
              gap={10}
            >
              <NewPostUserInfo />
              <NewPostComposer />
              <NewPostSubmitButton />
            </Flex>
          </Flex>
        </NewPostForm>
      </Modal>
    </NewPostFormProvider>
  );
}
