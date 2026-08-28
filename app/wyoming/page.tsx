import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { WyomingHeroSection } from "@/components/wyoming/WyomingHeroSection";
import { WyomingTrustBar } from "@/components/wyoming/WyomingTrustBar";
import { WyomingProcessSection } from "@/components/wyoming/WyomingProcessSection";
import { WyomingWhoQualifiesSection } from "@/components/wyoming/WyomingWhoQualifiesSection";
import { WyomingRequirementsSection } from "@/components/wyoming/WyomingRequirementsSection";
import { WyomingWhyChooseUsSection } from "@/components/wyoming/WyomingWhyChooseUsSection";
import { WyomingBenefitsSection } from "@/components/wyoming/WyomingBenefitsSection";
import { WyomingLawsSection } from "@/components/wyoming/WyomingLawsSection";
import { WyomingScamsSection } from "@/components/wyoming/WyomingScamsSection";
import { WyomingPsdVsEsaSection } from "@/components/wyoming/WyomingPsdVsEsaSection";
import { WyomingAvailableCitiesSection } from "@/components/wyoming/WyomingAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Wyoming ESA Letter Online with Licensed Therapist | My ESA Therapist",
  description:
    "Get an official Wyoming ESA Letter online from state-licensed mental health professionals. 100% compliant with Wyoming state laws and the federal Fair Housing Act.",
};

export default function WyomingEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <WyomingHeroSection />

        <WyomingTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <WyomingProcessSection />

        <WyomingWhoQualifiesSection />

        <WyomingRequirementsSection />

        <WyomingWhyChooseUsSection />

        <WyomingBenefitsSection />

        <WyomingLawsSection />

        <WyomingScamsSection />

        <WyomingPsdVsEsaSection />

        <WyomingAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your Wyoming ESA Evaluation?"
          description="Connect with a Wyoming-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
