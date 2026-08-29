import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { KansasHeroSection } from "@/components/kansas/KansasHeroSection";
import { KansasTrustBar } from "@/components/kansas/KansasTrustBar";
import { KansasProcessSection } from "@/components/kansas/KansasProcessSection";
import { KansasWhoQualifiesSection } from "@/components/kansas/KansasWhoQualifiesSection";
import { KansasRequirementsSection } from "@/components/kansas/KansasRequirementsSection";
import { KansasWhyChooseUsSection } from "@/components/kansas/KansasWhyChooseUsSection";
import { KansasBenefitsSection } from "@/components/kansas/KansasBenefitsSection";
import { KansasLawsSection } from "@/components/kansas/KansasLawsSection";
import { KansasScamsSection } from "@/components/kansas/KansasScamsSection";
import { KansasPsdVsEsaSection } from "@/components/kansas/KansasPsdVsEsaSection";
import { KansasAvailableCitiesSection } from "@/components/kansas/KansasAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Kansas ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
  description:
    "Kansas ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation under federal housing guidelines.",
};

export default function KansasEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <KansasHeroSection />
        <KansasTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <KansasProcessSection />
        <KansasWhoQualifiesSection />
        <KansasRequirementsSection />
        <KansasWhyChooseUsSection />
        <KansasBenefitsSection />
        <KansasLawsSection />
        <KansasScamsSection />
        <KansasPsdVsEsaSection />
        <KansasAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Kansas ESA Evaluation?"
          description="Connect with a Kansas-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
