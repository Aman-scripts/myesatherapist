import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPolicyBySlug } from "@/data/policiesData";
import { PolicyPageLayout } from "@/components/policies/PolicyPageLayout";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | My ESA Therapist",
  description:
    "Review the My ESA Therapist disclaimer covering website information, educational content, professional services, and important limitations of information provided online.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://myesatherapist.com/disclaimer/",
  },
  openGraph: {
    title: "Disclaimer | My ESA Therapist",
    description:
      "Review the My ESA Therapist disclaimer covering website information, educational content, professional services, and important limitations of information provided online.",
    url: "https://myesatherapist.com/disclaimer/",
    type: "website",
    siteName: "My ESA Therapist",
  },
  twitter: {
    card: "summary",
    title: "Disclaimer | My ESA Therapist",
    description:
      "Review the My ESA Therapist disclaimer covering website information, educational content, professional services, and important limitations of information provided online.",
  },
};

export default function DisclaimerPage() {
  const policy = getPolicyBySlug("disclaimer-and-policies") || getPolicyBySlug("disclaimer");

  if (!policy) {
    notFound();
  }

  // Schema.org WebPage & BreadcrumbList structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/disclaimer/#webpage",
        "url": "https://myesatherapist.com/disclaimer/",
        "name": "Disclaimer | My ESA Therapist",
        "description":
          "Review the My ESA Therapist disclaimer covering website information, educational content, professional services, and important limitations of information provided online.",
        "dateModified": "2025-12-30",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://myesatherapist.com/#website",
          "url": "https://myesatherapist.com/",
          "name": "My ESA Therapist"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://myesatherapist.com/disclaimer/#breadcrumb",
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
            "name": "Disclaimer",
            "item": "https://myesatherapist.com/disclaimer/"
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
