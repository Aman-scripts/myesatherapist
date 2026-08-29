import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { MichiganHeroSection } from "@/components/michigan/MichiganHeroSection";
import { MichiganTrustBar } from "@/components/michigan/MichiganTrustBar";
import { MichiganProcessSection } from "@/components/michigan/MichiganProcessSection";
import { MichiganWhoQualifiesSection } from "@/components/michigan/MichiganWhoQualifiesSection";
import { MichiganRequirementsSection } from "@/components/michigan/MichiganRequirementsSection";
import { MichiganWhyChooseUsSection } from "@/components/michigan/MichiganWhyChooseUsSection";
import { MichiganBenefitsSection } from "@/components/michigan/MichiganBenefitsSection";
import { MichiganLawsSection } from "@/components/michigan/MichiganLawsSection";
import { MichiganScamsSection } from "@/components/michigan/MichiganScamsSection";
import { MichiganPsdVsEsaSection } from "@/components/michigan/MichiganPsdVsEsaSection";
import { MichiganAvailableCitiesSection } from "@/components/michigan/MichiganAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Michigan ESA Letter Online From Licensed Professionals | My ESA Therapist",
  description:
    "Get in touch with certified mental health experts in Michigan for safe and secure ESA evaluations. Get professional support and clear guidance.",
};

export default function MichiganEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <MichiganHeroSection />
        <MichiganTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <MichiganProcessSection />
        <MichiganWhoQualifiesSection />
        <MichiganRequirementsSection />
        <MichiganWhyChooseUsSection />
        <MichiganBenefitsSection />
        <MichiganLawsSection />
        <MichiganScamsSection />
        <MichiganPsdVsEsaSection />
        <MichiganAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Michigan ESA Evaluation?"
          description="Connect with a Michigan-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
