import React from "react";
import { serializeLd } from "@/lib/site";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPolicyBySlug } from "@/data/policiesData";
import { PolicyPageLayout } from "@/components/policies/PolicyPageLayout";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | My ESA Therapist",
  description:
    "Review the refund policy of My ESA Therapist. Learn about eligibility, conditions, and how refunds are handled for ESA letter evaluations and services.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://myesatherapist.com/refund-policy/",
  },
  openGraph: {
    title: "Refund & Cancellation Policy | My ESA Therapist",
    description:
      "Review the refund policy of My ESA Therapist. Learn about eligibility, conditions, and how refunds are handled for ESA letter evaluations and services.",
    url: "https://myesatherapist.com/refund-policy/",
    type: "article",
    siteName: "My ESA Therapist",
  },
  twitter: {
    card: "summary",
    title: "Refund & Cancellation Policy | My ESA Therapist",
    description:
      "Review the refund policy of My ESA Therapist. Learn about eligibility, conditions, and how refunds are handled for ESA letter evaluations and services.",
  },
};

export default function RefundPolicyPage() {
  const policy = getPolicyBySlug("refund-policy");

  if (!policy) {
    notFound();
  }

  // Schema.org WebPage & BreadcrumbList structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/refund-policy/#webpage",
        "url": "https://myesatherapist.com/refund-policy/",
        "name": "Refund & Cancellation Policy | My ESA Therapist",
        "description":
          "Review the refund policy of My ESA Therapist. Learn about eligibility, conditions, and how refunds are handled for ESA letter evaluations and services.",
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
        "@id": "https://myesatherapist.com/refund-policy/#breadcrumb",
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
            "name": "Refund Policy",
            "item": "https://myesatherapist.com/refund-policy/",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-slate-900 selection:bg-accent/30 selection:text-current">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeLd(jsonLd) }}
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
