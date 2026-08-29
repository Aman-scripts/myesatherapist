import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { MarylandHeroSection } from "@/components/maryland/MarylandHeroSection";
import { MarylandTrustBar } from "@/components/maryland/MarylandTrustBar";
import { MarylandProcessSection } from "@/components/maryland/MarylandProcessSection";
import { MarylandWhoQualifiesSection } from "@/components/maryland/MarylandWhoQualifiesSection";
import { MarylandRequirementsSection } from "@/components/maryland/MarylandRequirementsSection";
import { MarylandWhyChooseUsSection } from "@/components/maryland/MarylandWhyChooseUsSection";
import { MarylandBenefitsSection } from "@/components/maryland/MarylandBenefitsSection";
import { MarylandLawsSection } from "@/components/maryland/MarylandLawsSection";
import { MarylandScamsSection } from "@/components/maryland/MarylandScamsSection";
import { MarylandPsdVsEsaSection } from "@/components/maryland/MarylandPsdVsEsaSection";
import { MarylandAvailableCitiesSection } from "@/components/maryland/MarylandAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Maryland ESA Letter From Licensed Professionals | My ESA Therapist",
  description:
    "Maryland ESA Letter evaluations conducted by licensed mental health professionals. Secure telehealth, transparent pricing, and compliant ESA documentation.",
};

export default function MarylandEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <MarylandHeroSection />
        <MarylandTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <MarylandProcessSection />
        <MarylandWhoQualifiesSection />
        <MarylandRequirementsSection />
        <MarylandWhyChooseUsSection />
        <MarylandBenefitsSection />
        <MarylandLawsSection />
        <MarylandScamsSection />
        <MarylandPsdVsEsaSection />
        <MarylandAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Maryland ESA Evaluation?"
          description="Connect with a Maryland-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
