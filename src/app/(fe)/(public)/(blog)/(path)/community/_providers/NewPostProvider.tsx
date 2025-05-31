"use client";
import { useDisclosure, useFileDialog } from "@mantine/hooks";
import React, { createContext, useContext, useEffect, useState } from "react";

const NewPostContext = createContext<{
  isOpen: boolean;
  open: () => void;
  close: () => void;
  fileDialog: ReturnType<typeof useFileDialog>;
  isSubmitting: boolean;
  setIsSubmitting: (isSubmitting: boolean) => void;
}>({
  isOpen: false,
  open: () => {},
  close: () => {},
  fileDialog: {
    files: null,
    open: () => {},
    reset: () => {},
  },
  isSubmitting: false,
  setIsSubmitting: () => {},
});

export const useNewPost = () => {
  return useContext(NewPostContext);
};

export default function NewPostProvider({ children }: React.PropsWithChildren) {
  const [isOpen, { open, close }] = useDisclosure(false);
  const fileDialog = useFileDialog({
    multiple: true,
    accept: "image/*",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <NewPostContext.Provider
      value={{ isOpen, open, close, fileDialog, isSubmitting, setIsSubmitting }}
    >
      {children}
    </NewPostContext.Provider>
  );
}
