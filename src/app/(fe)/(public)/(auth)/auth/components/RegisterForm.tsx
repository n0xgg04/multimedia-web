"use client";
import React from "react";
import { PasswordInput, Stack, TextInput, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import RegisterBtn from "./RegisterBtn";
import useRegister from "../(path)/register/_queries/useRegister";

type Props = {
  LoginAction: React.ReactNode;
};

export default function RegisterForm({ LoginAction }: Props) {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      fullname: "",
      student_code: "",
    },
    validate: {
      email: (value: string) =>
        /.+@.+\..+/.test(value) ? null : "Email không hợp lệ!",
      password: (value: string) =>
        value.length >= 6 ? null : "Mật khẩu phải có ít nhất 6 ký tự!",
      confirmPassword: (value: string, values) =>
        value === values.password ? null : "Mật khẩu xác nhận không khớp!",
      fullname: (value: string) =>
        value.length > 0 ? null : "Vui lòng nhập họ tên!",
      student_code: (value: string) =>
        value.length > 0 ? null : "Vui lòng nhập mã sinh viên!",
    },
  });

  const isValid = form.isValid();
  const { mutate, isPending } = useRegister();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate(new FormData(e.target as HTMLFormElement));
      }}
    >
      <Stack gap="md">
        <TextInput
          name="fullname"
          label="Họ và tên"
          {...form.getInputProps("fullname")}
          radius="md"
          size="md"
          placeholder="Nhập họ và tên"
          styles={{
            input: {
              color: "#888",
              fontWeight: 500,
              fontSize: 13,
            },
            label: { fontWeight: 500, fontSize: 13 },
            error: { fontSize: 11 },
          }}
        />

        <TextInput
          name="student_code"
          label="Mã sinh viên"
          {...form.getInputProps("student_code")}
          radius="md"
          size="md"
          placeholder="Nhập mã sinh viên"
          styles={{
            input: {
              color: "#888",
              fontWeight: 500,
              fontSize: 13,
            },
            label: { fontWeight: 500, fontSize: 13 },
            error: { fontSize: 11 },
          }}
        />

        <TextInput
          name="email"
          label="Email"
          {...form.getInputProps("email")}
          radius="md"
          size="md"
          placeholder="Nhập email"
          styles={{
            input: {
              color: "#888",
              fontWeight: 500,
              fontSize: 13,
            },
            label: { fontWeight: 500, fontSize: 13 },
            error: { fontSize: 11 },
            description: { fontSize: 11 },
          }}
          description={
            <Text size="11px" c="dimmed">
              Vui lòng sử dụng email do học viện cấp!
            </Text>
          }
        />

        <PasswordInput
          name="password"
          label="Mật khẩu"
          {...form.getInputProps("password")}
          radius="md"
          size="md"
          placeholder="Nhập mật khẩu"
          styles={{
            input: { fontWeight: 500, fontSize: 13 },
            label: { fontWeight: 500, fontSize: 13 },
            error: { fontSize: 11 },
          }}
        />

        <PasswordInput
          name="confirmPassword"
          label="Xác nhận mật khẩu"
          {...form.getInputProps("confirmPassword")}
          radius="md"
          size="md"
          placeholder="Nhập lại mật khẩu"
          styles={{
            input: { fontWeight: 500, fontSize: 13 },
            label: { fontWeight: 500, fontSize: 13 },
            error: { fontSize: 11 },
          }}
        />

        <RegisterBtn isValid={isValid} pending={isPending} />
        {LoginAction}
      </Stack>
    </form>
  );
}
