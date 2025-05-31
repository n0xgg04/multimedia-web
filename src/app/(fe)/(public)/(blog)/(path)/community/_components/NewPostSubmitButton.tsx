import { Button } from "@mantine/core";
import React from "react";
import { useFormContext } from "react-hook-form";
import { NewPostSchema } from "../_zod/new_post.z";
import { useNewPost } from "../_providers/NewPostProvider";

export default function NewPostSubmitButton() {
  const {
    formState: { isSubmitting, isValidating },
  } = useFormContext<NewPostSchema>();
  const { isSubmitting: isSubmittingProvider } = useNewPost();
  return (
    <Button
      px={10}
      py={5}
      radius={999}
      bg="linear-gradient(239.18deg, #D501C5 -28.34%, #FF7900 43.3%, #FCD500 98.05%, #7739FC 181.74%)"
      type="submit"
      disabled={isSubmitting || isValidating || isSubmittingProvider}
      loading={isSubmitting || isValidating || isSubmittingProvider}
      styles={{
        label: {
          color: "white",
        },
      }}
      variant="transparent"
    >
      Đăng bài viết
    </Button>
  );
}
