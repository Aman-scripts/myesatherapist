import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EsaLawsHero } from "@/components/esa-laws/EsaLawsHero";
import { EsaLawsIntroSection } from "@/components/esa-laws/EsaLawsIntroSection";
import { EsaLawsFederalSection } from "@/components/esa-laws/EsaLawsFederalSection";
import { EsaLawsStateSection } from "@/components/esa-laws/EsaLawsStateSection";
import { EsaLawsSituationSection } from "@/components/esa-laws/EsaLawsSituationSection";
import { EsaLawsFaqSection } from "@/components/esa-laws/EsaLawsFaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

import { esaLawsSchema } from "@/data/schemas/esaLawsSchema";

export const metadata: Metadata = {
  title: "ESA Laws 2026: Federal & State Rules | My ESA Therapist",
  description:
    "Complete guide to ESA laws in the U.S. Covers housing rights, landlord rules, ESA letters, state regulations, and what federal law does and doesn't allow.",
  alternates: {
    canonical: "https://myesatherapist.com/esa-laws/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "ESA Laws 2026: Federal & State Rules | My ESA Therapist",
    description:
      "Complete guide to ESA laws in the U.S. Covers housing rights, landlord rules, ESA letters, state regulations, and what federal law does and doesn't allow.",
    url: "https://myesatherapist.com/esa-laws/",
    siteName: "My ESA Therapist",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ESA Laws 2026: Federal & State Rules | My ESA Therapist",
    description:
      "Complete guide to ESA laws in the U.S. Covers housing rights, landlord rules, ESA letters, state regulations, and what federal law does and doesn't allow.",
  },
};


export default function EsaLawsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1A1A]">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(esaLawsSchema) }}
      />
      <TopBanner />
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <EsaLawsHero />

        {/* 2. Understanding ESA Laws intro */}
        <EsaLawsIntroSection />

        {/* 3. Federal Laws Governing Emotional Support Animals */}
        <EsaLawsFederalSection />

        {/* 4. ESA Laws by State */}
        <EsaLawsStateSection />

        {/* 5. ESA Laws by Situation */}
        <EsaLawsSituationSection />

        {/* 6. Common Questions About ESA Laws */}
        <EsaLawsFaqSection />

        {/* 7. CTA Banner */}
        <CtaBanner />

        {/* 8. Reviewer Banner */}
        <StateReviewerBanner />
      </main>

      <Footer />
    </div>
  );
}
