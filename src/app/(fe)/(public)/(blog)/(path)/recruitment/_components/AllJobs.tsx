"use client";

import React from "react";
import {
  Box,
  Text,
  Stack,
  Group,
  Card,
  Button,
  SimpleGrid,
  Badge,
  ActionIcon,
} from "@mantine/core";
import {
  IconCurrencyDollar,
  IconMapPin,
  IconBriefcase,
  IconCalendar,
  IconBookmark,
  IconExternalLink,
  IconMessage,
  IconStar,
} from "@tabler/icons-react";

interface JobData {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  salary: string;
  location: string;
  experience: string;
  deadline: string;
  daysLeft: number;
  featured?: boolean;
}

const jobsData: JobData[] = [
  {
    id: "1",
    title: "THỰC TẬP SINH UX/UI",
    company: "Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel)",
    companyLogo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=48&fit=crop",
    salary: "1tr - 2tr5",
    location:
      "Lô D26, Khu đô thị mới Cầu Giấy, phường Yên Hòa, quận Cầu Giấy, Hà Nội",
    experience: "Không yêu cầu kinh nghiệm",
    deadline: "03/05/2023 - Còn 3 ngày nữa",
    daysLeft: 3,
    featured: true,
  },
  {
    id: "2",
    title: "NHÂN VIÊN THIẾT KẾ BRANDING PARTIME",
    company: "Công ty Phát triển và Đầu tư Công nghệ (FPT)",
    companyLogo:
      "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=80&h=48&fit=crop",
    salary: "3tr - 4tr5",
    location:
      "Số 10, phố Phạm Văn Bạch, phường Dịch Vọng, quận Cầu Giấy, Hà Nội",
    experience: "Kinh nghiệm 6 tháng",
    deadline: "11/05/2023 - Còn 8 ngày nữa",
    daysLeft: 8,
  },
  {
    id: "3",
    title: "THIẾT KẾ 3D PARTIME (MODELING & ANIMATION)",
    company: "Tổng Công tuy Truyền thông đa phương tiện (VTC)",
    companyLogo:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&h=48&fit=crop",
    salary: "1tr - 2tr5",
    location:
      "Lô D26, Khu đô thị mới Cầu Giấy, phường Yên Hòa, quận Cầu Giấy, Hà Nội",
    experience: "Không yêu cầu kinh nghiệm",
    deadline: "27/05/2023 - Còn 17 ngày nữa",
    daysLeft: 17,
  },
  {
    id: "4",
    title: "THỰC TẬP SINH UX/UI",
    company: "Trung tâm Công nghệ thông tin CDIT",
    companyLogo:
      "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=80&h=48&fit=crop",
    salary: "2tr",
    location:
      "Tầng 3 nhà A1, HVCN Bưu Chính Viễn thông, Km 10 Nguyễn trãi, Hà Đông, Hà Nội",
    experience: "Không yêu cầu kinh nghiệm",
    deadline: "30/05/2023 - Còn 20 ngày nữa",
    daysLeft: 20,
  },
  {
    id: "5",
    title: "NHÂN VIÊN PARTIME GDD",
    company: "Công Ty Cổ Phần Onesoft - Falcon Game Studio",
    companyLogo:
      "https://images.unsplash.com/photo-1560472355-536de3962603?w=80&h=48&fit=crop",
    salary: "4tr",
    location: "Ngõ 19 Duy Tân, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Hà Nội",
    experience: "Kinh nghiệm 6 tháng",
    deadline: "04/06/2023 - Còn 29 ngày nữa",
    daysLeft: 29,
  },
  {
    id: "6",
    title: "THỰC TẬP SINH UX/UI",
    company: "Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel)",
    companyLogo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=48&fit=crop",
    salary: "1tr - 2tr5",
    location:
      "Lô D26, Khu đô thị mới Cầu Giấy, phường Yên Hòa, quận Cầu Giấy, Hà Nội",
    experience: "Không yêu cầu kinh nghiệm",
    deadline: "27/05/2023 - Còn 29 ngày nữa",
    daysLeft: 29,
  },
  {
    id: "7",
    title: "NHÂN VIÊN THIẾT KẾ UI/UI PARTIME",
    company: "Công ty Cổ phần Công nghệ VMO Holdings",
    companyLogo:
      "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=80&h=48&fit=crop",
    salary: "3tr - 4tr5",
    location:
      "Số 19 đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội",
    experience: "Kinh nghiệm 1 năm",
    deadline: "27/05/2023 - Còn 29 ngày nữa",
    daysLeft: 29,
  },
  {
    id: "8",
    title: "THỰC TẬP SINH ANIMATION 2D",
    company: "Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT)",
    companyLogo:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&h=48&fit=crop",
    salary: "2tr - 2tr5",
    location: "Số 61, tổ 4, Thị trấn Đông Anh,Hà Nội",
    experience: "Không yêu cầu kinh nghiệm",
    deadline: "29/05/2023 - Còn 30 ngày nữa",
    daysLeft: 30,
  },
  {
    id: "9",
    title: "THỰC TẬP SINH GDD",
    company: "Tổng Công tuy Truyền thông đa phương tiện (VTC)",
    companyLogo:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&h=48&fit=crop",
    salary: "Hỗ trợ xăng xe",
    location:
      "Lô D26, Khu đô thị mới Cầu Giấy, phường Yên Hòa, quận Cầu Giấy, Hà Nội",
    experience: "Không yêu cầu kinh nghiệm",
    deadline: "29/05/2023 - Còn 30 ngày nữa",
    daysLeft: 30,
  },
  {
    id: "10",
    title: "NHÂN VIÊN THIẾT KẾ BRANDING PARTIME",
    company: "Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel)",
    companyLogo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=48&fit=crop",
    salary: "3tr - 4tr",
    location:
      "Lô D26, Khu đô thị mới Cầu Giấy, phường Yên Hòa, quận Cầu Giấy, Hà Nội",
    experience: "Kinh nghiệm 1 năm",
    deadline: "01/06/2023 - Còn 35 ngày nữa",
    daysLeft: 35,
  },
];

export default function AllJobs() {
  return (
    <Box py={5}>
      <Stack gap={32}>
        <Text
          size="md"
          fw={500}
          c="#4E4E4E"
          style={{
            fontFamily: "Lexend Deca",
            fontSize: "1.2rem",
            lineHeight: 1.5,
          }}
        >
          Đề xuất việc làm
        </Text>

        <SimpleGrid cols={2} spacing={24} verticalSpacing={24}>
          {jobsData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}

function JobCard({ job }: { job: JobData }) {
  return (
    <Card
      shadow="none"
      padding={20}
      radius={16}
      style={{
        backgroundColor: "#FFFFFF",
        border: "none",
        position: "relative",
      }}
    >
      <Stack gap={24}>
        <Group align="center" gap={16} wrap="nowrap">
          <Box
            style={{
              width: 40,
              height: 24,
              borderRadius: 8,
              backgroundImage: `url(${job.companyLogo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexShrink: 0,
            }}
          />
          <Stack gap={2} flex={1}>
            <Text
              fw={500}
              c="#4E4E4E"
              style={{
                fontFamily: "Lexend Deca",
                fontSize: "0.8rem",
                lineHeight: 1.5,
              }}
            >
              {job.title}
            </Text>
            <Text
              fw={400}
              c="#858585"
              style={{
                fontFamily: "Lexend Deca",
                fontSize: "0.75rem",
                lineHeight: 1.43,
              }}
            >
              {job.company}
            </Text>
          </Stack>
        </Group>

        <Stack gap={10}>
          <Group align="center" gap={8}>
            <IconCurrencyDollar size={24} color="#4E4E4E" stroke={1.5} />
            <Text
              fw={400}
              size="sm"
              c="#4E4E4E"
              style={{
                fontFamily: "Lexend Deca",
                fontSize: "0.85rem",
                lineHeight: 1.5,
              }}
            >
              {job.salary}
            </Text>
          </Group>

          <Group align="center" gap={8}>
            <IconMapPin size={24} color="#4E4E4E" stroke={1.5} />
            <Text
              fw={400}
              size="sm"
              c="#4E4E4E"
              style={{
                fontFamily: "Lexend Deca",
                fontSize: "0.85rem",
                lineHeight: 1.5,
                flex: 1,
              }}
            >
              {job.location}
            </Text>
          </Group>

          <Group align="center" gap={8}>
            <IconBriefcase size={24} color="#4E4E4E" stroke={1.5} />
            <Text
              fw={400}
              size="sm"
              c="#4E4E4E"
              style={{
                fontFamily: "Lexend Deca",
                fontSize: "0.85rem",
                lineHeight: 1.5,
              }}
            >
              {job.experience}
            </Text>
          </Group>

          <Group align="center" gap={8}>
            <IconCalendar size={24} color="#4E4E4E" stroke={1.5} />
            <Text
              fw={400}
              size="sm"
              c="#27CA40"
              style={{
                fontFamily: "Lexend Deca",
                fontSize: "0.85rem",
                lineHeight: 1.5,
              }}
            >
              {job.deadline}
            </Text>
          </Group>
        </Stack>

        <Box
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#DFDFDF",
          }}
        />

        <Group justify="space-between" align="center">
          <Group gap={16}>
            <ActionIcon variant="subtle" size="sm" color="gray">
              <IconBookmark size={24} color="#858585" stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" size="sm" color="gray">
              <IconExternalLink size={24} color="#858585" stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" size="sm" color="gray">
              <IconMessage size={24} color="#858585" stroke={1.5} />
            </ActionIcon>
          </Group>

          <Group gap={16}>
            <Button
              variant="outline"
              size="sm"
              radius={12}
              style={{
                borderColor: "transparent",
                background: "linear-gradient(135deg, #FC4AF5 0%, #0846E4 100%)",
                borderWidth: 2,
                color: "transparent",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                fontFamily: "Lexend Deca",
                fontWeight: 500,
                fontSize: "0.8rem",
              }}
              styles={{
                root: {
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    padding: 2,
                    background:
                      "linear-gradient(135deg, #FC4AF5 0%, #0846E4 100%)",
                    borderRadius: 12,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                  },
                },
              }}
            >
              Xem thêm
            </Button>
            <Button
              size="sm"
              radius={12}
              style={{
                background: "linear-gradient(135deg, #FC4AF5 0%, #0846E4 100%)",
                border: "none",
                fontFamily: "Lexend Deca",
                fontWeight: 700,
                fontSize: "0.8rem",
                color: "#FFFFFF",
              }}
            >
              Ứng tuyển
            </Button>
          </Group>
        </Group>
      </Stack>

      {job.featured && (
        <Box
          style={{
            position: "absolute",
            top: 0,
            right: 20,
            width: 28,
            height: 48,
            background: "linear-gradient(135deg, #FF7900 50.3%, #FCD500 100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 8,
          }}
        >
          <IconStar size={24} fill="#FFFFFF" color="#FFFFFF" />
        </Box>
      )}
    </Card>
  );
}
