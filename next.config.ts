import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  sassOptions: {
    implementation: "sass-embedded",
    additionalData: `@use "${path
      .join(process.cwd(), "_mantine")
      .replace(/\\/g, "/")}" as mantine;`,
  },
};

export default nextConfig;
