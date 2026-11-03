import React from "react";
import { serializeLd } from "@/lib/site";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPolicyBySlug } from "@/data/policiesData";
import { PolicyPageLayout } from "@/components/policies/PolicyPageLayout";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CANONICAL = "https://myesatherapist.com/telehealth-consent/";

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
    canonical: CANONICAL,
  },
  openGraph: {
    title: "Consent for Telehealth | My ESA Therapist",
    description:
      "Review My ESA Therapist’s telehealth consent information, including virtual care, communication, privacy, and important considerations before receiving services online.",
    url: CANONICAL,
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

export default function TelehealthConsentPage() {
  const policy = getPolicyBySlug("consent-for-telehealth");

  if (!policy) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${CANONICAL}#webpage`,
        "url": CANONICAL,
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
        "@id": `${CANONICAL}#breadcrumb`,
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
            "item": CANONICAL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent/30 selection:text-current">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeLd(jsonLd) }}
      />
      <TopBanner />
      <Header />

      <main className="flex-1">
        <PolicyPageLayout policy={policy} />
      </main>

      <Footer />
    </div>
  );
}
