import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/privacy-policy", destination: "/policies/privacy-policy/", permanent: true },
      { source: "/terms-of-use", destination: "/policies/terms-of-use/", permanent: true },
      { source: "/refund-policy", destination: "/policies/refund-policy/", permanent: true },
      { source: "/consent-for-telehealth", destination: "/policies/consent-for-telehealth/", permanent: true },
      { source: "/hipaa-compliance", destination: "/policies/hipaa-compliance/", permanent: true },
      { source: "/editorial-policy", destination: "/policies/editorial-policy/", permanent: true },
      { source: "/disclaimer-and-policies", destination: "/policies/disclaimer-and-policies/", permanent: true },
      { source: "/accessibility-statement", destination: "/policies/accessibility-statement/", permanent: true },
    ];
  },
};

export default nextConfig;
