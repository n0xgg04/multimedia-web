"use client";
import React, { useActionState, useEffect } from "react";
import {
  PasswordInput,
  Stack,
  TextInput,
  Checkbox,
  Text,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import LoginBtn from "./LoginBtn";

import useLogin from "../(path)/login/_queries/useLogin";

type Props = {
  RegisterAction: React.ReactNode;
};
export default function LoginForm({ RegisterAction }: Props) {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validate: {
      email: (value: string) =>
        /.+@.+\..+/.test(value) ? null : "Email không hợp lệ!",
      password: (value: string) =>
        value.length > 0 ? null : "Vui lòng nhập mật khẩu!",
    },
  });

  const isValid = form.isValid();

  const { mutate, isPending } = useLogin();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate(new FormData(e.target as HTMLFormElement));
      }}
    >
      <Stack gap="md">
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
              Vui lòng sử dụng tài khoản đã được học viện cấp!
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
            description: { fontSize: 11 },
          }}
        />
        <Group justify="space-between" align="center">
          <Checkbox
            name="remember"
            label={
              <Text size="13px" fw={400}>
                Ghi nhớ mật khẩu
              </Text>
            }
            size="sm"
            radius="md"
            {...form.getInputProps("remember", { type: "checkbox" })}
          />
          <Text
            size="13px"
            fw={600}
            style={{
              cursor: "pointer",
              background:
                "linear-gradient(239.18deg, #D501C5 -28.34%, #FF7900 43.3%, #FCD500 98.05%, #7739FC 181.74%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Quên mật khẩu?
          </Text>
        </Group>
        <LoginBtn isValid={isValid} pending={isPending} />
        {RegisterAction}
      </Stack>
    </form>
  );
}
