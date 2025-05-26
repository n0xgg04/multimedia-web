"use client";

import { SimpleGrid, Card, Text } from "@mantine/core";

interface WorkOrganization {
  title: string;
  image: string;
}

interface TrainingWorkOrganizationsProps {
  organizations: WorkOrganization[];
}

export default function TrainingWorkOrganizations({
  organizations,
}: TrainingWorkOrganizationsProps) {
  return (
    <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing={24}>
      {organizations.map((org, index) => (
        <Card
          key={index}
          padding={0}
          radius={16}
          withBorder
          className="overflow-hidden h-80"
        >
          <div
            className="h-full bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${org.image})`,
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
              <Text size="lg" fw={500} c="blue" ta="center">
                {org.title}
              </Text>
            </div>
          </div>
        </Card>
      ))}
    </SimpleGrid>
  );
}
