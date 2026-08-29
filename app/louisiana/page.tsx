import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { LouisianaHeroSection } from "@/components/louisiana/LouisianaHeroSection";
import { LouisianaTrustBar } from "@/components/louisiana/LouisianaTrustBar";
import { LouisianaProcessSection } from "@/components/louisiana/LouisianaProcessSection";
import { LouisianaWhoQualifiesSection } from "@/components/louisiana/LouisianaWhoQualifiesSection";
import { LouisianaRequirementsSection } from "@/components/louisiana/LouisianaRequirementsSection";
import { LouisianaWhyChooseUsSection } from "@/components/louisiana/LouisianaWhyChooseUsSection";
import { LouisianaBenefitsSection } from "@/components/louisiana/LouisianaBenefitsSection";
import { LouisianaLawsSection } from "@/components/louisiana/LouisianaLawsSection";
import { LouisianaScamsSection } from "@/components/louisiana/LouisianaScamsSection";
import { LouisianaPsdVsEsaSection } from "@/components/louisiana/LouisianaPsdVsEsaSection";
import { LouisianaAvailableCitiesSection } from "@/components/louisiana/LouisianaAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Louisiana ESA Letter From Licensed Professionals | My ESA Therapist",
  description:
    "Get evaluated by Louisiana-licensed mental health professionals for an official ESA letter. HIPAA-compliant, HB 407 compliant 30-day therapeutic process.",
};

export default function LouisianaEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <LouisianaHeroSection />
        <LouisianaTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <LouisianaProcessSection />
        <LouisianaWhoQualifiesSection />
        <LouisianaRequirementsSection />
        <LouisianaWhyChooseUsSection />
        <LouisianaBenefitsSection />
        <LouisianaLawsSection />
        <LouisianaScamsSection />
        <LouisianaPsdVsEsaSection />
        <LouisianaAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Louisiana ESA Evaluation?"
          description="Connect with a Louisiana-licensed mental health professional today for a legitimate, HB 407 & FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
