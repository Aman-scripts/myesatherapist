import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPolicyBySlug } from "@/data/policiesData";
import { PolicyPageLayout } from "@/components/policies/PolicyPageLayout";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Use | My ESA Therapist Legal & Service Policies",
  description:
    "Read the Terms of Use for My ESA Therapist, including service policies, user responsibilities, payments, and ESA evaluation guidelines.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://myesatherapist.com/terms-of-use/",
  },
  openGraph: {
    title: "Terms of Use | My ESA Therapist Legal & Service Policies",
    description:
      "Read the Terms of Use for My ESA Therapist, including service policies, user responsibilities, payments, and ESA evaluation guidelines.",
    url: "https://myesatherapist.com/terms-of-use/",
    type: "article",
    siteName: "My ESA Therapist",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use | My ESA Therapist Legal & Service Policies",
    description:
      "Read the Terms of Use for My ESA Therapist, including service policies, user responsibilities, payments, and ESA evaluation guidelines.",
  },
};

export default function TermsOfUsePage() {
  const policy = getPolicyBySlug("terms-of-use");

  if (!policy) {
    notFound();
  }

  // Schema.org WebPage & BreadcrumbList structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/terms-of-use/#webpage",
        "url": "https://myesatherapist.com/terms-of-use/",
        "name": "Terms of Use | My ESA Therapist Legal & Service Policies",
        "description":
          "Read the Terms of Use for My ESA Therapist, including service policies, user responsibilities, payments, and ESA evaluation guidelines.",
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
        "@id": "https://myesatherapist.com/terms-of-use/#breadcrumb",
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
            "name": "Terms of Use",
            "item": "https://myesatherapist.com/terms-of-use/"
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
