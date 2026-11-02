import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Vercel compresses responses. Next's gzip adds a drain listener per chunk
  // and warns once a large page, such as a state page, passes 10 listeners.
  compress: false,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    qualities: [60, 70, 75, 80, 90, 95, 100],
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
