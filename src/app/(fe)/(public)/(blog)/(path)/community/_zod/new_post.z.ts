import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const newPostSchema = z.object({
  title: z.string().min(1, { message: "Bạn phải nhập tiêu đề" }),
  content: z.string().min(1, { message: "Bạn phải nhập nội dung" }),
  files: z.array(z.instanceof(File)).optional(),
  category_id: z.string().min(1, { message: "Bạn phải chọn chủ đề" }),
});

export type NewPostSchema = z.infer<typeof newPostSchema>;

export const newPostResolver = zodResolver(newPostSchema);
