"use client";
import { Container } from "@/components/common/Container";
import { digestMap } from "@/shared/utils/exceptions";

const Error = ({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const message = error.digest
    ? digestMap[error.digest as unknown as keyof typeof digestMap]
    : null;

  return (
    <Container className="flex h-screen items-center justify-center">
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">{message}</h1>
      </div>
    </Container>
  );
};

export default Error;
