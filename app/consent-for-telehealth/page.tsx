import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPolicyBySlug } from "@/data/policiesData";
import { PolicyPageLayout } from "@/components/policies/PolicyPageLayout";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Consent for Telehealth | My ESA Therapist",
  description:
    "Review My ESA Therapist’s telehealth consent information, including virtual care, communication, privacy, and important considerations before receiving services online.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://myesatherapist.com/consent-for-telehealth/",
  },
  openGraph: {
    title: "Consent for Telehealth | My ESA Therapist",
    description:
      "Review My ESA Therapist’s telehealth consent information, including virtual care, communication, privacy, and important considerations before receiving services online.",
    url: "https://myesatherapist.com/consent-for-telehealth/",
    type: "website",
    siteName: "My ESA Therapist",
  },
  twitter: {
    card: "summary",
    title: "Consent for Telehealth | My ESA Therapist",
    description:
      "Review My ESA Therapist’s telehealth consent information, including virtual care, communication, privacy, and important considerations before receiving services online.",
  },
};

export default function ConsentForTelehealthPage() {
  const policy = getPolicyBySlug("consent-for-telehealth");

  if (!policy) {
    notFound();
  }

  // Schema.org WebPage & BreadcrumbList structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/consent-for-telehealth/#webpage",
        "url": "https://myesatherapist.com/consent-for-telehealth/",
        "name": "Consent for Telehealth | My ESA Therapist",
        "description":
          "Review My ESA Therapist’s telehealth consent information, including virtual care, communication, privacy, and important considerations before receiving services online.",
        "dateModified": "2025-12-30",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://myesatherapist.com/#website",
          "url": "https://myesatherapist.com/",
          "name": "My ESA Therapist",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://myesatherapist.com/consent-for-telehealth/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://myesatherapist.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Consent for Telehealth",
            "item": "https://myesatherapist.com/consent-for-telehealth/",
          },
        ],
      },
    ],
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
