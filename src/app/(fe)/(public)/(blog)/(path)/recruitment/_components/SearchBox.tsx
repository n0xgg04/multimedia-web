"use client";

import React, { useState } from "react";
import { Box, Group, TextInput, Select, Button, Stack } from "@mantine/core";
import { IconSearch, IconChevronDown } from "@tabler/icons-react";

interface SearchFilters {
  jobName: string;
  company: string;
  experience: string;
  salary: string;
  location: string;
}

interface SearchBoxProps {
  onSearch?: (filters: SearchFilters) => void;
}

const experienceOptions = [
  { value: "fresher", label: "Fresher (0-1 năm)" },
  { value: "junior", label: "Junior (1-3 năm)" },
  { value: "mid", label: "Mid-level (3-5 năm)" },
  { value: "senior", label: "Senior (5+ năm)" },
];

const salaryOptions = [
  { value: "5-10", label: "5-10 triệu" },
  { value: "10-15", label: "10-15 triệu" },
  { value: "15-25", label: "15-25 triệu" },
  { value: "25-40", label: "25-40 triệu" },
  { value: "40+", label: "Trên 40 triệu" },
];

const companyOptions = [
  { value: "startup", label: "Startup" },
  { value: "outsourcing", label: "Outsourcing" },
  { value: "product", label: "Product Company" },
  { value: "agency", label: "Agency" },
];

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    jobName: "",
    company: "",
    experience: "",
    salary: "",
    location: "",
  });

  const handleInputChange = (field: keyof SearchFilters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    onSearch?.(filters);
  };

  return (
    <Box
      bg="#FFFFFF"
      p={24}
      style={{
        borderRadius: 16,
        width: "100%",
        maxWidth: 1560,
      }}
    >
      <Group align="flex-end" gap="md" wrap="nowrap">
        <Stack gap="xs" flex={1}>
          <TextInput
            placeholder="Tên việc làm"
            value={filters.jobName}
            onChange={(event) =>
              handleInputChange("jobName", event.currentTarget.value)
            }
            size="sm"
            styles={{
              input: {
                backgroundColor: "#F5F5F5",
                border: "none",
                borderRadius: 16,
                padding: "12px 24px",
                fontSize: "0.8rem",
                fontFamily: "Lexend Deca",
                color: "#C0C0C0",
                height: 40,
                "&::placeholder": {
                  color: "#C0C0C0",
                },
                "&:focus": {
                  backgroundColor: "#F5F5F5",
                  borderColor: "transparent",
                },
              },
            }}
          />
        </Stack>

        <Stack gap="xs" flex={1}>
          <Select
            placeholder="Tên công ty"
            data={companyOptions}
            value={filters.company}
            onChange={(value) => handleInputChange("company", value || "")}
            size="sm"
            rightSection={
              <IconChevronDown size={16} color="#858585" stroke={1.5} />
            }
            styles={{
              input: {
                backgroundColor: "#F5F5F5",
                border: "none",
                borderRadius: 16,
                padding: "12px 24px",
                fontSize: "0.8rem",
                fontFamily: "Lexend Deca",
                color: "#C0C0C0",
                height: 40,
                "&::placeholder": {
                  color: "#C0C0C0",
                },
                "&:focus": {
                  backgroundColor: "#F5F5F5",
                  borderColor: "transparent",
                },
              },
            }}
          />
        </Stack>

        <Stack gap="xs" flex={1}>
          <Select
            placeholder="Kinh nghiệm"
            data={experienceOptions}
            value={filters.experience}
            onChange={(value) => handleInputChange("experience", value || "")}
            size="sm"
            rightSection={
              <IconChevronDown size={16} color="#858585" stroke={1.5} />
            }
            styles={{
              input: {
                backgroundColor: "#F5F5F5",
                border: "none",
                borderRadius: 16,
                padding: "12px 24px",
                fontSize: "0.8rem",
                fontFamily: "Lexend Deca",
                color: "#C0C0C0",
                height: 40,
                "&::placeholder": {
                  color: "#C0C0C0",
                },
                "&:focus": {
                  backgroundColor: "#F5F5F5",
                  borderColor: "transparent",
                },
              },
            }}
          />
        </Stack>

        <Stack gap="xs" flex={1}>
          <Select
            placeholder="Lương"
            data={salaryOptions}
            value={filters.salary}
            onChange={(value) => handleInputChange("salary", value || "")}
            size="sm"
            rightSection={
              <IconChevronDown size={16} color="#858585" stroke={1.5} />
            }
            styles={{
              input: {
                backgroundColor: "#F5F5F5",
                border: "none",
                borderRadius: 16,
                padding: "12px 24px",
                fontSize: "0.8rem",
                fontFamily: "Lexend Deca",
                color: "#C0C0C0",
                height: 40,
                "&::placeholder": {
                  color: "#C0C0C0",
                },
                "&:focus": {
                  backgroundColor: "#F5F5F5",
                  borderColor: "transparent",
                },
              },
            }}
          />
        </Stack>

        <Stack gap="xs" flex={1}>
          <TextInput
            placeholder="Địa chỉ"
            value={filters.location}
            onChange={(event) =>
              handleInputChange("location", event.currentTarget.value)
            }
            size="sm"
            styles={{
              input: {
                backgroundColor: "#F5F5F5",
                border: "none",
                borderRadius: 16,
                padding: "12px 24px",
                fontSize: "0.8rem",
                fontFamily: "Lexend Deca",
                color: "#C0C0C0",
                height: 40,
                "&::placeholder": {
                  color: "#C0C0C0",
                },
                "&:focus": {
                  backgroundColor: "#F5F5F5",
                  borderColor: "transparent",
                },
              },
            }}
          />
        </Stack>

        <Button
          onClick={handleSearch}
          leftSection={<IconSearch size={20} stroke={1.5} />}
          size="sm"
          w={180}
          h={40}
          style={{
            background: "linear-gradient(to right,#FF7900 50.3%, #FCD500 100%)",
            border: "none",
            borderRadius: 16,
            fontFamily: "Lexend Deca",
            fontWeight: 600,
            fontSize: "0.8rem",
            color: "#FFFFFF",
            "&:hover": {
              background:
                "linear-gradient(135deg, #D501C5 24.58%, #FF7900 50.3%, #FCD500 69.95%, #7739FC 100%)",
              transform: "translateY(-1px)",
            },
          }}
        >
          Tìm kiếm
        </Button>
      </Group>
    </Box>
  );
}
