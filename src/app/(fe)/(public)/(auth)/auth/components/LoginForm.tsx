import React from "react";
import {
  Button,
  PasswordInput,
  Stack,
  TextInput,
  Checkbox,
  Text,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function LoginForm() {
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

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <Stack gap="md">
        <TextInput
          label="Email"
          {...form.getInputProps("email")}
          radius="md"
          size="md"
          placeholder="Nhập email"
          styles={{
            input: {
              background: "#F6F6F6",
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
        <Button
          fullWidth
          size="md"
          radius="md"
          type="submit"
          disabled={!isValid}
          style={
            !isValid
              ? { background: "#E0E0E0", color: "#888", fontWeight: 700 }
              : {
                  background:
                    "linear-gradient(239.18deg, #D501C5 -28.34%, #FF7900 43.3%, #FCD500 98.05%, #7739FC 181.74%)",
                  color: "#fff",
                  fontWeight: 700,
                }
          }
        >
          Đăng nhập
        </Button>
        <Text ta="center" size="13px" mt="sm">
          Bạn chưa có tài khoản?{" "}
          <Text span fw={600} c="#F44336" style={{ cursor: "pointer" }}>
            Đăng ký
          </Text>
        </Text>
      </Stack>
    </form>
  );
}
