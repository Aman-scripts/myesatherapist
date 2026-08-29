import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { HawaiiHeroSection } from "@/components/hawaii/HawaiiHeroSection";
import { HawaiiTrustBar } from "@/components/hawaii/HawaiiTrustBar";
import { HawaiiProcessSection } from "@/components/hawaii/HawaiiProcessSection";
import { HawaiiWhoQualifiesSection } from "@/components/hawaii/HawaiiWhoQualifiesSection";
import { HawaiiRequirementsSection } from "@/components/hawaii/HawaiiRequirementsSection";
import { HawaiiWhyChooseUsSection } from "@/components/hawaii/HawaiiWhyChooseUsSection";
import { HawaiiBenefitsSection } from "@/components/hawaii/HawaiiBenefitsSection";
import { HawaiiLawsSection } from "@/components/hawaii/HawaiiLawsSection";
import { HawaiiScamsSection } from "@/components/hawaii/HawaiiScamsSection";
import { HawaiiPsdVsEsaSection } from "@/components/hawaii/HawaiiPsdVsEsaSection";
import { HawaiiAvailableCitiesSection } from "@/components/hawaii/HawaiiAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Hawaii ESA Letter from Licensed Therapists | My ESA Therapist",
  description:
    "Need an ESA letter in Hawaii? My ESA Therapist connects you with licensed mental health professionals for a secure online ESA Letter evaluation.",
};

export default function HawaiiEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <HawaiiHeroSection />

        <HawaiiTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <HawaiiProcessSection />

        <HawaiiWhoQualifiesSection />

        <HawaiiRequirementsSection />

        <HawaiiWhyChooseUsSection />

        <HawaiiBenefitsSection />

        <HawaiiLawsSection />

        <HawaiiScamsSection />

        <HawaiiPsdVsEsaSection />

        <HawaiiAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your Hawaii ESA Evaluation?"
          description="Connect with a Hawaii-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
