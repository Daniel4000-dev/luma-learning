import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 402, 640, 768, 1024, 1280, 1536, 1920],
  },
};

export default nextConfig;

