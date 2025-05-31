import { Button } from "@mantine/core";
import React from "react";
import { useFormContext } from "react-hook-form";
import { NewPostSchema } from "../_zod/new_post.z";

export default function NewPostSubmitButton() {
  const {
    formState: { isSubmitting },
  } = useFormContext<NewPostSchema>();
  return (
    <Button
      type="submit"
      loading={isSubmitting}
      disabled={isSubmitting}
      styles={{
        label: {
          background:
            "linear-gradient(239.18deg, #D501C5 -28.34%, #FF7900 43.3%, #FCD500 98.05%, #7739FC 181.74%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      }}
      variant="transparent"
    >
      Đăng bài viết
    </Button>
  );
}
