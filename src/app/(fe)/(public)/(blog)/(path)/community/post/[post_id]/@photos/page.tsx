import { Box, SimpleGrid, Image } from "@mantine/core";
import React from "react";
import { RouteParams } from "../_@types";
import { prisma } from "@/shared/utils/prisma/client";
import { createClient } from "@/shared/utils/supabase/server";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

type Props = {
  params: Promise<RouteParams>;
};

export default async function Photos({ params }: Props) {
  const { post_id } = await params;
  const supabaseClient = await createClient();

  const post = await prisma.posts.findUnique({
    where: {
      id: Number(post_id),
    },
    include: {
      post_attachments: {
        select: {
          object_id: true,
          alt: true,
        },
      },
    },
  });

  const urls = post?.post_attachments?.map((attachment) => {
    return supabaseClient.storage
      .from("post.photos")
      .getPublicUrl(`${post_id}/${attachment.alt!}`);
  });

  return (
    <Box h="100%" w="100%">
      <RowsPhotoAlbum
        targetRowHeight={150}
        photos={
          urls?.map((url, index) => ({
            src: url.data.publicUrl,
            alt: post?.post_attachments?.[index]?.alt,
            width: 300,
            height: 300,
            borderRadius: 10,
          })) || []
        }
        componentsProps={{
          container: {},
        }}
      />
    </Box>
  );
}
