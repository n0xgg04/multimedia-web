"use client";
import { Box, Flex } from "@mantine/core";
import React, { useEffect, useMemo } from "react";
import { useNewPost } from "../_providers/NewPostProvider";
import NewPostPlus from "@/assets/images/svg/NewPostPlus";
import "react-photo-album/styles.css";

import { ColumnsPhotoAlbum, Photo, RowsPhotoAlbum } from "react-photo-album";
import { useFormContext } from "react-hook-form";

export default function NewPostFilePicker() {
  const { fileDialog } = useNewPost();

  const { setValue } = useFormContext();

  const photos = useMemo<Photo[]>(
    () =>
      Array.from(fileDialog.files || []).map(
        (file): Photo => ({
          src: URL.createObjectURL(file),
          width: 150,
          height: 150,
        })
      ),
    [fileDialog.files]
  );

  useEffect(() => {
    if (fileDialog.files) {
      setValue("files", Array.from(fileDialog.files));
    }
  }, [fileDialog.files, setValue]);

  return (
    <Box
      onClick={fileDialog.open}
      className="grow-1/2 !bg-gray-200 min-h-[200px] w-full rounded-xl grid place-items-center cursor-pointer p-2"
    >
      {Array.from(fileDialog.files || []).length > 0 ? (
        <ColumnsPhotoAlbum photos={photos} />
      ) : (
        <NewPostPlus className="size-[160px]" />
      )}
    </Box>
  );
}
