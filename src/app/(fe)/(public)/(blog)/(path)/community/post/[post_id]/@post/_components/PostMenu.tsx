"use client";
import OptionIcon from "@/assets/images/svg/Option";
import { IconTrash } from "@tabler/icons-react";

import { Menu } from "@mantine/core";
import React, { useEffect } from "react";
import useDeletePost from "../_queries/useDeletePost";
import { useAuthStore } from "@/shared/stores/AuthStore";
import { toast } from "react-toastify";

type Props = {
  post_id: string;
  post: any;
};
export default function PostMenu({ post_id, post }: Props) {
  const { userInfo } = useAuthStore();
  const { mutate: deletePost } = useDeletePost();
  useEffect(() => {}, []);

  const handleDeletePost = () => {
    deletePost(post_id);
  };

  const handleReport = () => {
    toast.success("Báo cáo bài viết thành công");
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <OptionIcon className="!cursor-pointer" />
      </Menu.Target>

      <Menu.Dropdown>
        {post.users.student_code == userInfo?.student_code ? (
          <Menu.Item
            color="red"
            leftSection={<IconTrash size={14} />}
            onClick={handleDeletePost}
          >
            Xóa bài viết
          </Menu.Item>
        ) : (
          <Menu.Item
            color="red"
            leftSection={<IconTrash size={14} />}
            onClick={handleReport}
          >
            Báo cáo
          </Menu.Item>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}
