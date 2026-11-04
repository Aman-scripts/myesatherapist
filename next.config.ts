import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
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
  // Vercel compresses responses. Next's gzip adds a drain listener per chunk
  // and warns once a large page, such as a state page, passes 10 listeners.
  compress: false,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
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
