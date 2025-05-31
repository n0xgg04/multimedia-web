import type { NextConfig } from "next";
import path from "path";

//hihi

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
    viewTransition: true,
    ppr: "incremental",
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
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.redd.it",
      },
      {
        protocol: "https",
        hostname: "qrgqlomkeivaecucqggw.supabase.co",
      },
    ],
  },
};

export default nextConfig;
