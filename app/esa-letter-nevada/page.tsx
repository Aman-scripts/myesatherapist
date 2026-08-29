import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { NevadaHeroSection } from "@/components/nevada/NevadaHeroSection";
import { NevadaTrustBar } from "@/components/nevada/NevadaTrustBar";
import { NevadaProcessSection } from "@/components/nevada/NevadaProcessSection";
import { NevadaWhoQualifiesSection } from "@/components/nevada/NevadaWhoQualifiesSection";
import { NevadaRequirementsSection } from "@/components/nevada/NevadaRequirementsSection";
import { NevadaWhyChooseUsSection } from "@/components/nevada/NevadaWhyChooseUsSection";
import { NevadaBenefitsSection } from "@/components/nevada/NevadaBenefitsSection";
import { NevadaLawsSection } from "@/components/nevada/NevadaLawsSection";
import { NevadaScamsSection } from "@/components/nevada/NevadaScamsSection";
import { NevadaPsdVsEsaSection } from "@/components/nevada/NevadaPsdVsEsaSection";
import { NevadaAvailableCitiesSection } from "@/components/nevada/NevadaAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Official Nevada ESA Letter Online | Licensed Therapists | My ESA Therapist",
  description: "Get an official Nevada ESA Letter online from state-licensed mental health professionals. 100% compliant with Nevada state laws and the federal Fair Housing Act.",
};

export default function NevadaEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <NevadaHeroSection />
        <NevadaTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <NevadaProcessSection />
        <NevadaWhoQualifiesSection />
        <NevadaRequirementsSection />
        <NevadaWhyChooseUsSection />
        <NevadaBenefitsSection />
        <NevadaLawsSection />
        <NevadaScamsSection />
        <NevadaPsdVsEsaSection />
        <NevadaAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Nevada ESA Evaluation?"
          description="Connect with a Nevada-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
