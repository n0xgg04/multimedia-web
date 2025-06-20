"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "@/app/(fe)/(public)/(auth)/auth/actions/login";
import { toast } from "react-toastify";
import { useAuthStore } from "@/shared/stores/AuthStore";
import { useRouter } from "next/navigation";
import { QUERY_KEYS } from "@/shared/constants/queries";

export default function useLogin() {
  const router = useRouter();
  const { setUserInfo, setUser, setStatus } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => login(formData),
    onSuccess: async ({ user, userInfo, error }) => {
      if (error || !user || !userInfo) {
        console.log(error);
        toast.error(error);
        return;
      }

      toast.success("Đăng nhập thành công!");
      setUser(user?.user);
      setUserInfo({
        id: userInfo.id,
        fullname: userInfo.fullname,
        student_code: userInfo.student_code,
        profile_pic_url: userInfo.profile_pic_url,
        account_type: userInfo.account_type,
        created_at: userInfo.created_at.toISOString(),
        email: userInfo.email,
      });
      setStatus("authenticated");
      await Promise.all(
        Object.values(QUERY_KEYS).map((key) =>
          queryClient.refetchQueries({ queryKey: [key] })
        )
      );
      router.push("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
