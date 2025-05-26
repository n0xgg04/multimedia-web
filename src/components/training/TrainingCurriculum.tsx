"use client";

import { Stack, Text, Card } from "@mantine/core";

interface Subject {
  name: string;
  color: string;
  border: boolean;
  borderColor?: string;
}

interface Semester {
  title: string;
  subjects: Subject[];
}

interface TrainingCurriculumProps {
  semesters: Semester[];
}

export default function TrainingCurriculum({
  semesters,
}: TrainingCurriculumProps) {
  return (
    <div className="flex-1">
      <Stack gap={24}>
        {semesters.map((semester, index) => (
          <div key={index} className="w-full">
            <div className="flex gap-4 w-full">
              <div
                className="w-[136px] h-[120px] rounded-2xl flex items-center justify-center text-center p-2"
                style={{
                  background: "linear-gradient(135deg, #FC4AF5, #0846E4)",
                }}
              >
                <Text size="md" fw={500} c="white" lh={1.5}>
                  {semester.title}
                </Text>
              </div>

              <div className="flex-1">
                <div
                  className={`grid gap-4 ${
                    semester.subjects.length >= 8
                      ? "grid-cols-1 lg:grid-cols-2"
                      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  }`}
                >
                  {semester.subjects.map((subject, subIndex) => (
                    <Card
                      key={subIndex}
                      padding={10}
                      radius={16}
                      withBorder={subject.border}
                      className="h-[120px] flex items-center justify-center text-center"
                      style={{
                        backgroundColor: subject.color,
                        border: subject.borderColor
                          ? `1px solid ${subject.borderColor}`
                          : undefined,
                        width: semester.subjects.length >= 8 ? "auto" : "161px",
                      }}
                    >
                      <Text size="sm" fw={500} c="gray.8" lh={1.5} ta="center">
                        {subject.name}
                      </Text>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Stack>
    </div>
  );
}
