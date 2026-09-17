import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPolicyBySlug } from "@/data/policiesData";
import { PolicyPageLayout } from "@/components/policies/PolicyPageLayout";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Editorial Policy | My ESA Therapist",
  description:
    "Learn how My ESA Therapist creates, reviews, updates, and maintains accurate, trustworthy, and helpful educational content about emotional support animals and mental health.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://myesatherapist.com/editorial-policy/",
  },
  openGraph: {
    title: "Editorial Policy | My ESA Therapist",
    description:
      "Learn how My ESA Therapist creates, reviews, updates, and maintains accurate, trustworthy, and helpful educational content about emotional support animals and mental health.",
    url: "https://myesatherapist.com/editorial-policy/",
    type: "website",
    siteName: "My ESA Therapist",
  },
  twitter: {
    card: "summary",
    title: "Editorial Policy | My ESA Therapist",
    description:
      "Learn how My ESA Therapist creates, reviews, updates, and maintains accurate, trustworthy, and helpful educational content about emotional support animals and mental health.",
  },
};

export default function EditorialPolicyPage() {
  const policy = getPolicyBySlug("editorial-policy");

  if (!policy) {
    notFound();
  }

  // Schema.org WebPage & BreadcrumbList structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/editorial-policy/#webpage",
        "url": "https://myesatherapist.com/editorial-policy/",
        "name": "Editorial Policy | My ESA Therapist",
        "description":
          "Learn how My ESA Therapist creates, reviews, updates, and maintains accurate, trustworthy, and helpful educational content about emotional support animals and mental health.",
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
        "@id": "https://myesatherapist.com/editorial-policy/#breadcrumb",
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
            "name": "Editorial Policy",
            "item": "https://myesatherapist.com/editorial-policy/",
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
