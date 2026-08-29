import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { MaineHeroSection } from "@/components/maine/MaineHeroSection";
import { MaineTrustBar } from "@/components/maine/MaineTrustBar";
import { MaineProcessSection } from "@/components/maine/MaineProcessSection";
import { MaineWhoQualifiesSection } from "@/components/maine/MaineWhoQualifiesSection";
import { MaineRequirementsSection } from "@/components/maine/MaineRequirementsSection";
import { MaineWhyChooseUsSection } from "@/components/maine/MaineWhyChooseUsSection";
import { MaineBenefitsSection } from "@/components/maine/MaineBenefitsSection";
import { MaineLawsSection } from "@/components/maine/MaineLawsSection";
import { MaineScamsSection } from "@/components/maine/MaineScamsSection";
import { MainePsdVsEsaSection } from "@/components/maine/MainePsdVsEsaSection";
import { MaineAvailableCitiesSection } from "@/components/maine/MaineAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Maine ESA Letter From Licensed Professionals | My ESA Therapist",
  description:
    "Maine ESA Letter evaluations conducted by licensed mental health professionals. Secure telehealth, transparent pricing, and compliant ESA documentation.",
};

export default function MaineEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <MaineHeroSection />
        <MaineTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <MaineProcessSection />
        <MaineWhoQualifiesSection />
        <MaineRequirementsSection />
        <MaineWhyChooseUsSection />
        <MaineBenefitsSection />
        <MaineLawsSection />
        <MaineScamsSection />
        <MainePsdVsEsaSection />
        <MaineAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Maine ESA Evaluation?"
          description="Connect with a Maine-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
