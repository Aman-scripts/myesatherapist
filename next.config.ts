import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  trailingSlash: true,
  onDemandEntries: {
    maxInactiveAge: 10 * 60 * 1000,
    pagesBufferLength: 60,
  },
  async redirects() {
    return [
      {
        source: "/esa-doctors/dr-robert-staff",
        destination: "/esa-doctors/dr-robert-staaf/",
        statusCode: 301,
      },
      {
        source: "/esa-doctors/dr-robert-staff/",
        destination: "/esa-doctors/dr-robert-staaf/",
        statusCode: 301,
      },
      {
        source: "/esa-doctors/robert-staaf",
        destination: "/esa-doctors/dr-robert-staaf/",
        statusCode: 301,
      },
      {
        source: "/esa-doctors/robert-staaf/",
        destination: "/esa-doctors/dr-robert-staaf/",
        statusCode: 301,
      },
      {
        source: "/author/allyson-valley",
        destination: "/contributors/allyson-valley/",
        statusCode: 301,
      },
      {
        source: "/author/allyson-valley/",
        destination: "/contributors/allyson-valley/",
        statusCode: 301,
      },
      {
        source: "/author/mohammed-ziauddin",
        destination: "/contributors/mohammed-ziauddin/",
        statusCode: 301,
      },
      {
        source: "/author/mohammed-ziauddin/",
        destination: "/contributors/mohammed-ziauddin/",
        statusCode: 301,
      },
    ];
  },
  compress: false,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.module.rules.push({
        test: /app-router-utils\.js$/,
        enforce: "pre" as const,
        use: [path.join(__dirname, "tools/dev-prefetch-loader.cjs")],
      });
    }
    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    qualities: [90, 95, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
