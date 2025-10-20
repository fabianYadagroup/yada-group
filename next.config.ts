import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/yada-group",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

