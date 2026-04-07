import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/kemitraan",
        destination: "/franchise",
        permanent: true,
      },
    ];
  },
  images: {
    // Favor WebP for broader mobile stability (AVIF can be flaky on some iOS WebKit builds)
    formats: ["image/webp"],
    // Device breakpoints aligned with mobile-first design
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2xsxph8kpxj0f.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
    ],
  },
};

export default nextConfig;
