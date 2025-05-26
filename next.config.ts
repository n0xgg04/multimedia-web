import type { NextConfig } from "next";
import path from "path";

//hihi

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
    viewTransition: true,
  },
  reactStrictMode: false,
  sassOptions: {
    implementation: "sass-embedded",
    additionalData: `@use "${
      path
        .join(process.cwd(), "_mantine")
        .replace(/\\/g, "/")
    }" as mantine;`,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
