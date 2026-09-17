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
      { source: "/policies/privacy-policy", destination: "/privacy-policy/", permanent: true },
      { source: "/policies/terms-of-use", destination: "/terms-of-use/", permanent: true },
      { source: "/policies/refund-policy", destination: "/refund-policy/", permanent: true },
      { source: "/policies/consent-for-telehealth", destination: "/consent-for-telehealth/", permanent: true },
      { source: "/policies/hipaa-compliance", destination: "/hipaa-compliance/", permanent: true },
      { source: "/policies/editorial-policy", destination: "/editorial-policy/", permanent: true },
      { source: "/policies/disclaimer-and-policies", destination: "/disclaimer/", permanent: true },
      { source: "/policies/disclaimer", destination: "/disclaimer/", permanent: true },
      { source: "/disclaimer-and-policies", destination: "/disclaimer/", permanent: true },
      { source: "/policies/accessibility-statement", destination: "/accessibility-statement/", permanent: true },
    ];
  },
};

export default nextConfig;
