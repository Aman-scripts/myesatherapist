import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPolicyBySlug } from "@/data/policiesData";
import { PolicyPageLayout } from "@/components/policies/PolicyPageLayout";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Accessibility Statement | My ESA Therapist",
  description:
    "Learn about My ESA Therapist’s commitment to digital accessibility and efforts to provide an accessible, inclusive online experience for all visitors.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://myesatherapist.com/accessibility-statement/",
  },
  openGraph: {
    title: "Accessibility Statement | My ESA Therapist",
    description:
      "Learn about My ESA Therapist’s commitment to digital accessibility and efforts to provide an accessible, inclusive online experience for all visitors.",
    url: "https://myesatherapist.com/accessibility-statement/",
    type: "website",
    siteName: "My ESA Therapist",
  },
  twitter: {
    card: "summary",
    title: "Accessibility Statement | My ESA Therapist",
    description:
      "Learn about My ESA Therapist’s commitment to digital accessibility and efforts to provide an accessible, inclusive online experience for all visitors.",
  },
};

export default function AccessibilityStatementPage() {
  const policy = getPolicyBySlug("accessibility-statement");

  if (!policy) {
    notFound();
  }

  // Schema.org WebPage & BreadcrumbList structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://myesatherapist.com/accessibility-statement/#webpage",
        "url": "https://myesatherapist.com/accessibility-statement/",
        "name": "Accessibility Statement | My ESA Therapist",
        "description":
          "Learn about My ESA Therapist’s commitment to digital accessibility and efforts to provide an accessible, inclusive online experience for all visitors.",
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
        "@id": "https://myesatherapist.com/accessibility-statement/#breadcrumb",
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
            "name": "Accessibility Statement",
            "item": "https://myesatherapist.com/accessibility-statement/",
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
