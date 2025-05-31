"use client";
import React from "react";
import {
  Container,
  Grid,
  Text,
  Button,
  TextInput,
  Group,
  Anchor,
  Box,
  Stack,
} from "@mantine/core";

const GlobalFooter: React.FC = () => {
  return (
    <Box
      component="footer"
      style={{
        backgroundColor: "#360660",
        color: "white",
        minHeight: 429,
        width: "100%",
      }}
    >
      <Container size="xl" py="xl">
        <Grid>
          <Grid.Col span={{ base: 12, lg: 3 }}>
            <Group mb="xl" align="center">
              <Box
                w={40}
                h={48}
                style={{
                  background: "linear-gradient(to right, #FF9CDA, #FDC094)",
                  borderRadius: 4,
                }}
              />
              <Text size="sm" fw={500} c="white">
                Multimedia
              </Text>
            </Group>

            <Text size="xs" lh={1.5} mb="xl" maw={361}>
              Cộng đồng thiết kế đa phương tiện cung cấp nền tảng trực tuyến cho
              thành viên giới thiệu, chia sẻ và tìm kiếm sản phẩm thiết kế, cơ
              hội làm thêm thuận tiện và hiệu quả.
            </Text>

            <Group gap="xs">
              <Box
                w={24}
                h={24}
                style={{
                  backgroundColor: "#360660",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="8" height="15" viewBox="0 0 8 15" fill="none">
                  <path
                    d="M7.5 2.5H6V1.5C6 1.22386 6.22386 1 6.5 1H7V0H6.5C5.67157 0 5 0.671573 5 1.5V2.5H3.5V4H5V8.5H6.5V4H7.5V2.5Z"
                    fill="white"
                  />
                </svg>
              </Box>
              <Box
                w={24}
                h={24}
                style={{
                  backgroundColor: "#360660",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
                  <path
                    d="M15 1.42031C14.4489 1.66406 13.8555 1.82422 13.2305 1.89766C13.8703 1.51172 14.3633 0.90625 14.5969 0.185938C13.9969 0.545312 13.3406 0.798438 12.6445 0.928125C12.0844 0.328125 11.2734 0 10.385 0C8.69687 0 7.32812 1.36875 7.32812 3.05781C7.32812 3.29688 7.35625 3.53125 7.40781 3.75781C4.84375 3.63594 2.56719 2.41875 1.04531 0.5625C0.78125 1.00312 0.632812 1.51172 0.632812 2.05469C0.632812 3.08594 1.15625 4.00156 1.95 4.53281C1.46875 4.51406 1.01719 4.38281 0.625 4.16406V4.20312C0.625 5.67812 1.68437 6.89844 3.08125 7.18594C2.825 7.25156 2.55625 7.28437 2.28125 7.28437C2.08594 7.28437 1.89844 7.26562 1.71562 7.22969C2.09531 8.42969 3.22656 9.31094 4.56719 9.33594C3.51719 10.1484 2.19844 10.6344 0.764062 10.6344C0.507812 10.6344 0.253125 10.6188 0 10.5875C1.35469 11.4469 2.96094 11.9375 4.6875 11.9375C10.3766 11.9375 13.4859 7.33594 13.4859 3.40781C13.4859 3.27656 13.4828 3.14531 13.4766 3.01562C14.0859 2.58125 14.6016 2.04375 15 1.42031Z"
                    fill="white"
                  />
                </svg>
              </Box>
              <Box
                w={24}
                h={24}
                style={{
                  backgroundColor: "#360660",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path
                    d="M13.0078 0.8125H1.99219C1.44531 0.8125 1 1.25781 1 1.80469V11.1953C1 11.7422 1.44531 12.1875 1.99219 12.1875H13.0078C13.5547 12.1875 14 11.7422 14 11.1953V1.80469C14 1.25781 13.5547 0.8125 13.0078 0.8125ZM4.75 10.5625H2.6875V5.1875H4.75V10.5625ZM3.71875 4.28125C3.13281 4.28125 2.65625 3.80469 2.65625 3.21875C2.65625 2.63281 3.13281 2.15625 3.71875 2.15625C4.30469 2.15625 4.78125 2.63281 4.78125 3.21875C4.78125 3.80469 4.30469 4.28125 3.71875 4.28125ZM12.3125 10.5625H10.25V7.96875C10.25 7.25 10.2344 6.33594 9.26562 6.33594C8.28125 6.33594 8.125 7.10938 8.125 7.90625V10.5625H6.0625V5.1875H8.04688V6.03125H8.07812C8.35938 5.50781 9.04688 4.95312 10.1016 4.95312C12.1953 4.95312 12.3125 6.35938 12.3125 8.17188V10.5625Z"
                    fill="white"
                  />
                </svg>
              </Box>
              <Box
                w={24}
                h={24}
                style={{
                  backgroundColor: "#360660",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M7.5 0C3.35938 0 0 3.35938 0 7.5C0 11.6406 3.35938 15 7.5 15C11.6406 15 15 11.6406 15 7.5C15 3.35938 11.6406 0 7.5 0ZM7.5 11.7188C5.17969 11.7188 3.28125 9.82031 3.28125 7.5C3.28125 5.17969 5.17969 3.28125 7.5 3.28125C9.82031 3.28125 11.7188 5.17969 11.7188 7.5C11.7188 9.82031 9.82031 11.7188 7.5 11.7188ZM12.1875 3.75C12.1875 4.26562 11.7656 4.6875 11.25 4.6875C10.7344 4.6875 10.3125 4.26562 10.3125 3.75C10.3125 3.23438 10.7344 2.8125 11.25 2.8125C11.7656 2.8125 12.1875 3.23438 12.1875 3.75ZM7.5 4.6875C6.04688 4.6875 4.875 5.85938 4.875 7.3125C4.875 8.76562 6.04688 9.9375 7.5 9.9375C8.95312 9.9375 10.125 8.76562 10.125 7.3125C10.125 5.85938 8.95312 4.6875 7.5 4.6875Z"
                    fill="white"
                  />
                </svg>
              </Box>
            </Group>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 2 }}>
            <Stack gap="md">
              <Text size="sm" fw={700} mb="xs">
                Cộng đồng
              </Text>
              <Stack gap="sm">
                <Anchor
                  href="#"
                  c="white"
                  size="xs"
                  style={{ textDecoration: "none" }}
                >
                  Thiết kế đa phương tiện
                </Anchor>
                <Anchor
                  href="#"
                  c="white"
                  size="xs"
                  style={{ textDecoration: "none" }}
                >
                  Bài viết cộng đồng
                </Anchor>
                <Anchor
                  href="#"
                  c="white"
                  size="xs"
                  style={{ textDecoration: "none" }}
                >
                  Bài viết thiết kế
                </Anchor>
                <Anchor
                  href="#"
                  c="white"
                  size="xs"
                  style={{ textDecoration: "none" }}
                >
                  Lộ trình học
                </Anchor>
                <Anchor
                  href="#"
                  c="white"
                  size="xs"
                  style={{ textDecoration: "none" }}
                >
                  Kinh nghiệm
                </Anchor>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 2 }}>
            <Stack gap="md">
              <Text size="md" fw={700} mb="xs">
                Việc làm
              </Text>
              <Stack gap="sm">
                <Anchor
                  href="#"
                  c="white"
                  size="xs"
                  style={{ textDecoration: "none" }}
                >
                  Tuyển dụng
                </Anchor>
                <Anchor
                  href="#"
                  c="white"
                  size="xs"
                  style={{ textDecoration: "none" }}
                >
                  Tin tức
                </Anchor>
                <Anchor
                  href="#"
                  c="white"
                  size="xs"
                  style={{ textDecoration: "none" }}
                >
                  Starer
                </Anchor>
                <Anchor
                  href="#"
                  c="white"
                  size="xs"
                  style={{ textDecoration: "none" }}
                >
                  Về chúng tôi
                </Anchor>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 5 }}>
            <Stack align="flex-end" gap={2}>
              <Text size="xl" fw={700} lh={1.5} ta="right">
                Liên lạc với chúng tôi
              </Text>
              <Text size="sm" ta="right" mb="xl">
                Hợp tác cùng cộng đồng thiết kế tại Việt Nam
              </Text>

              <Box w="100%" pos="relative">
                <TextInput
                  placeholder="Nhập Email của bạn"
                  variant="unstyled"
                  size="md"
                  styles={{
                    input: {
                      backgroundColor: "#543470",
                      padding: "30px 16px",
                      borderRadius: 10,
                      fontSize: ".875rem",
                      color: "white",
                      "&::placeholder": {
                        color: "#8E8E8E",
                      },
                    },
                  }}
                />

                <Button
                  size="sm"
                  radius="999"
                  fw={600}
                  px="xl"
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: -20,
                    background:
                      "linear-gradient(to right, #D501C5, #FF7900, #FCD500, #7739FC)",
                    boxShadow: "5px 7px 0px 1px rgba(72, 32, 107, 1)",
                    border: "none",
                  }}
                >
                  Nhận thông tin
                </Button>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>

        <Box
          style={{
            borderTop: "1px solid white",
            marginTop: 32,
            marginBottom: 32,
          }}
        />

        <Text ta="center" size="sm">
          © Copyright 2024, All Rights Reserved by Tan va Huong xinh dep
        </Text>
      </Container>
    </Box>
  );
};

export default GlobalFooter;
