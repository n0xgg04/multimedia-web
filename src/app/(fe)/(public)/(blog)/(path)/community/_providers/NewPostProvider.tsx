"use client";
import { useDisclosure, useFileDialog } from "@mantine/hooks";
import React, { createContext, useContext, useEffect } from "react";

const NewPostContext = createContext<{
  isOpen: boolean;
  open: () => void;
  close: () => void;
  fileDialog: ReturnType<typeof useFileDialog>;
}>({
  isOpen: false,
  open: () => {},
  close: () => {},
  fileDialog: {
    files: null,
    open: () => {},
    reset: () => {},
  },
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

  return (
    <NewPostContext.Provider value={{ isOpen, open, close, fileDialog }}>
      {children}
    </NewPostContext.Provider>
  );
}
