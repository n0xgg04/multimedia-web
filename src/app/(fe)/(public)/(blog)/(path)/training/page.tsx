import { Flex, Text } from "@mantine/core";
import React from "react";
import InfoCard from "./components/Card";
import SubjectList from "./components/SubjectList";

const SUBS = [
  {
    name: "HỌC KỲ I",
    amount: 12,
    subjects: [
      { name: "Triết học Mác - Lênin", amount: 3, bg: "#B1E0FC" },
      { name: "Tin học cơ sở 1", amount: 2, bg: "#B1E0FC" },
      { name: "Toán cao cấp 1", amount: 2, bg: "#C8B5E8" },
      { name: "Cơ sở tạo hình", amount: 3, bg: "#C8B5E8" },
      { name: "Nhập môn đa phương tiện", amount: 2, bg: "#FACCCC" },
    ],
  },
  {
    name: "HỌC KỲ II",
    amount: 13,
    subjects: [
      { name: "Kinh tế chính trị Mác - Lênin", amount: 2, bg: "#B1E0FC" },
      { name: "Tiếng Anh (Course 1)", amount: 4, bg: "#B1E0FC" },
      { name: "Tin học cơ sở 2", amount: 2, bg: "#B1E0FC" },
      { name: "Toán cao cấp 2", amount: 2, bg: "#C8B5E8" },
      { name: "Kỹ thuật nhiếp ảnh", amount: 2, bg: "#FACCCC" },
      { name: "Mỹ thuật cơ bản", amount: 3, bg: "#FACCCC" },
      { name: "Thiết kế đồ họa", amount: 3, bg: "#FACCCC" },
    ],
  },
  {
    name: "HỌC KỲ III",
    amount: 20,
    subjects: [
      { name: "Chủ nghĩa xã hội khoa học", amount: 2, bg: "#B1E0FC" },
      { name: "Tiếng Anh (Course 2)", amount: 4, bg: "#B1E0FC" },
      { name: "Ngôn ngữ lập trình C++", amount: 3, bg: "#FACCCC" },
      { name: "Toán rời rạc 1", amount: 3, bg: "#C8B5E8" },
      { name: "Kỹ thuật quay phim", amount: 3, bg: "#FACCCC" },
      { name: "Xác xuất thống kê", amount: 2, bg: "#C8B5E8" },
      { name: "Thiết kế hình động 1", amount: 3, bg: "#FACCCC" },
    ],
  },
  {
    name: "HỌC KỲ IV",
    amount: 19,
    subjects: [
      { name: "Tư tưởng Hồ Chí Minh", amount: 2, bg: "#B1E0FC" },
      { name: "Tiếng Anh (Course 3)", amount: 4, bg: "#B1E0FC" },
      { name: "Thiết kế tương tác DPT", amount: 3, bg: "#FACCCC" },
      { name: "Kiến trúc máy tính và HDH", amount: 2, bg: "#FACCCC" },
      { name: "Thiết kế đồ họa 3D", amount: 3, bg: "#FACCCC" },
      { name: "Xử lý truyền thông DPT", amount: 2, bg: "#FACCCC" },
      { name: "Cấu trúc dữ liệu và giải thuật", amount: 3, bg: "#FACCCC" },
    ],
  },
  {
    name: "HỌC KỲ V",
    amount: 19,
    subjects: [
      { name: "Lịch sử ĐCS Việt Nam", amount: 2, bg: "#B1E0FC" },
      { name: "Tiếng Anh (Course 3 plus)", amount: 4, bg: "#B1E0FC" },
      { name: "Thiết kế web cơ bản", amount: 3, bg: "#FACCCC" },
      { name: "Kịch bản DPT", amount: 2, bg: "#FACCCC" },
      { name: "Dựng Audio và Video phi tuyến", amount: 3, bg: "#FACCCC" },
      { name: "Tổ chức sản xuất sản phẩm DPT", amount: 2, bg: "#FACCCC" },
      { name: "Kỹ xảo DPT", amount: 2, bg: "#FACCCC" },
      { name: "1 học phần tự chọn", amount: 3, bg: "#FACCCC" },
    ],
  },
  {
    name: "HỌC KỲ VI",
    amount: 18,
    subjects: [
      { name: "Cơ sở tạo hình nâng cao", amount: 3, bg: "#F4D03F" },
      { name: "Thiết kế sản phẩm DPT", amount: 3, bg: "#F4D03F" },
      { name: "Thiết kế hình động 2", amount: 3, bg: "#F4D03F" },
      { name: "Nghệ thuật số ảo", amount: 3, bg: "#F4D03F" },
      { name: "Luật xa gần", amount: 3, bg: "#F4D03F" },
      { name: "1 học phần tự chọn", amount: 3, bg: "#F4D03F" },
    ],
  },
  {
    name: "HỌC KỲ VII",
    amount: 18,
    subjects: [
      { name: "Kịch bản phần cảnh", amount: 3, bg: "#F4D03F" },
      { name: "TK ấn phẩm điện tử 1", amount: 3, bg: "#F4D03F" },
      { name: "TK ứng dụng trên đầu cuối di động", amount: 3, bg: "#F4D03F" },
      { name: "Thiết kế hình động 3", amount: 3, bg: "#F4D03F" },
      { name: "Thiết kế game", amount: 3, bg: "#F4D03F" },
      { name: "1 học phần tự chọn", amount: 3, bg: "#F4D03F" },
    ],
  },
  {
    name: "HỌC KỲ VIII",
    amount: 14,
    subjects: [
      { name: "Đồ án thiết kế sản phẩm DPT", amount: 2, bg: "#F4D03F" },
      { name: "Phương pháp luận NCKH", amount: 2, bg: "#B1E0FC" },
      { name: "Bản quyền số", amount: 2, bg: "#F4D03F" },
      { name: "Thực hành chuyên sâu", amount: 4, bg: "#F4D03F" },
      { name: "Chuyên đề thiết kế DPT", amount: 1, bg: "#F4D03F" },
      { name: "1 học phần tự chọn", amount: 3, bg: "#F4D03F" },
    ],
  },
  {
    name: "HỌC KỲ IX",
    amount: 12,
    subjects: [
      { name: "Thực tập cơ sở", amount: 6, bg: "#FACCCC" },
      { name: "Đồ án tốt nghiệp", amount: 6, bg: "#A8FF89" },
    ],
  },
];

export default function TrainingPage() {
  return (
    <Flex
      direction="column"
      gap={{
        base: 10,
        xs: 10,
        md: 20,
      }}
      w="100%"
    >
      <Flex
        direction="row"
        rowGap={{
          base: 10,
          xs: 10,
          md: 20,
        }}
        columnGap={{
          base: 10,
          xs: 10,
          md: 20,
        }}
        wrap={{
          base: "wrap",
          xs: "wrap",
          md: "nowrap",
        }}
        justify={{
          base: "center",
          xs: "center",
          md: "space-between",
        }}
        align="center"
        w="100%"
      >
        <InfoCard
          title="Tổ hợp xét tuyển"
          subtitle="A00, A01, D01"
          color="linear-gradient(90deg, #FF9CDA 0%, #FDB9A1 99.99%, #FDC094 100%)"
        />
        <InfoCard
          title="Điểm trúng tuyển"
          subtitle="26.45"
          color="linear-gradient(90deg, #17B909 0%, #BDDB05 100%)"
        />
        <InfoCard
          title="Thời gian học"
          subtitle="4.5 năm"
          color="linear-gradient(93.72deg, #50EFE6 -35%, #0564EB 133.4%)"
        />
        <InfoCard
          title="Học phí"
          subtitle="655.000đ/tín"
          color="linear-gradient(90deg, #428CD4 0%, #FF9CDA 100%)"
        />
      </Flex>
      <Text c="#4E4E4E" className="!text-[1rem] md:!text-[1.2rem]">
        Chương trình đào tạo
      </Text>
      <Flex direction="column" w="100%" mih={200} gap={15}>
        {SUBS.map((sub, index) => (
          <SubjectList
            key={index}
            name={sub.name}
            amount={sub.amount}
            subjects={sub.subjects}
          />
        ))}
      </Flex>
    </Flex>
  );
}
