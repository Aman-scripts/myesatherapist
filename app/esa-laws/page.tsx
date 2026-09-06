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

export const metadata: Metadata = {
  title: "Emotional Support Animal (ESA) Laws by State and Federal Guidelines | My ESA Therapist",
  description:
    "Understand federal ESA laws under the Fair Housing Act, ESA rights vs landlord rights, state-specific ESA regulations, and housing rules for apartments, colleges, landlords, and tenants.",
  keywords: [
    "ESA Laws",
    "Emotional Support Animal Laws",
    "Fair Housing Act ESA",
    "ESA Laws by State",
    "ESA Landlord Rights",
    "ESA Housing Laws",
  ],
  openGraph: {
    title: "Emotional Support Animal Laws by State and Federal Guidelines | My ESA Therapist",
    description:
      "Understand federal and state-level ESA regulations, housing rules, and evaluation requirements.",
    url: "https://myesatherapist.com/esa-laws",
    siteName: "My ESA Therapist",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://myesatherapist.com/esa-laws",
  },
};

export default function EsaLawsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1A1A]">
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
