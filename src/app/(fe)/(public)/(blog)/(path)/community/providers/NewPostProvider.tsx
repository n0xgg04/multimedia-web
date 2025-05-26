"use client";
import React, { createContext, useContext, useState } from "react";

const NewPostContext = createContext<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

export const useNewPost = () => {
  return useContext(NewPostContext);
};

export default function NewPostProvider({ children }: React.PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NewPostContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NewPostContext.Provider>
  );
}
