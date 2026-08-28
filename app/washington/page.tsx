import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { WashingtonHeroSection } from "@/components/washington/WashingtonHeroSection";
import { WashingtonTrustBar } from "@/components/washington/WashingtonTrustBar";
import { WashingtonProcessSection } from "@/components/washington/WashingtonProcessSection";
import { WashingtonWhoQualifiesSection } from "@/components/washington/WashingtonWhoQualifiesSection";
import { WashingtonRequirementsSection } from "@/components/washington/WashingtonRequirementsSection";
import { WashingtonWhyChooseUsSection } from "@/components/washington/WashingtonWhyChooseUsSection";
import { WashingtonBenefitsSection } from "@/components/washington/WashingtonBenefitsSection";
import { WashingtonLawsSection } from "@/components/washington/WashingtonLawsSection";
import { WashingtonScamsSection } from "@/components/washington/WashingtonScamsSection";
import { WashingtonPsdVsEsaSection } from "@/components/washington/WashingtonPsdVsEsaSection";
import { WashingtonAvailableCitiesSection } from "@/components/washington/WashingtonAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Washington ESA Letter Online with Licensed Therapist | My ESA Therapist",
  description:
    "Get an official Washington ESA Letter online from state-licensed mental health professionals. 100% compliant with Washington state laws and the federal Fair Housing Act.",
};

export default function WashingtonEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <WashingtonHeroSection />

        <WashingtonTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <WashingtonProcessSection />

        <WashingtonWhoQualifiesSection />

        <WashingtonRequirementsSection />

        <WashingtonWhyChooseUsSection />


        <WashingtonBenefitsSection />

        <WashingtonLawsSection />

        <WashingtonScamsSection />

        <WashingtonPsdVsEsaSection />

        <WashingtonAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your Washington ESA Evaluation?"
          description="Connect with a Washington-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
