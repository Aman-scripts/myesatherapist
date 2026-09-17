import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPolicyBySlug } from "@/data/policiesData";
import { PolicyPageLayout } from "@/components/policies/PolicyPageLayout";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | My ESA Therapist Data Protection & Security",
  description:
    "Read the Privacy Policy of My ESA Therapist to learn how we collect, use, and protect your personal and health information with secure data practices.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://myesatherapist.com/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | My ESA Therapist Data Protection & Security",
    description:
      "Read the Privacy Policy of My ESA Therapist to learn how we collect, use, and protect your personal and health information with secure data practices.",
    url: "https://myesatherapist.com/privacy-policy/",
    type: "article",
    siteName: "My ESA Therapist",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | My ESA Therapist Data Protection & Security",
    description:
      "Read the Privacy Policy of My ESA Therapist to learn how we collect, use, and protect your personal and health information with secure data practices.",
  },
};

export default function PrivacyPolicyPage() {
  const policy = getPolicyBySlug("privacy-policy");

  if (!policy) {
    notFound();
  }

  // Schema.org WebPage & BreadcrumbList structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/privacy-policy/#webpage",
        "url": "https://myesatherapist.com/privacy-policy/",
        "name": "Privacy Policy | My ESA Therapist Data Protection & Security",
        "description":
          "Read the Privacy Policy of My ESA Therapist to learn how we collect, use, and protect your personal and health information with secure data practices.",
        "dateModified": "2025-12-25",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://myesatherapist.com/#website",
          "url": "https://myesatherapist.com/",
          "name": "My ESA Therapist"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://myesatherapist.com/privacy-policy/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://myesatherapist.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Privacy Policy",
            "item": "https://myesatherapist.com/privacy-policy/"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Top Announcement Banner & Header */}
      <TopBanner />
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        <PolicyPageLayout policy={policy} />
      </main>

      {/* Footer with Legal column */}
      <Footer />
    </div>
  );
}
