import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { IndianaHeroSection } from "@/components/indiana/IndianaHeroSection";
import { IndianaTrustBar } from "@/components/indiana/IndianaTrustBar";
import { IndianaProcessSection } from "@/components/indiana/IndianaProcessSection";
import { IndianaWhoQualifiesSection } from "@/components/indiana/IndianaWhoQualifiesSection";
import { IndianaRequirementsSection } from "@/components/indiana/IndianaRequirementsSection";
import { IndianaWhyChooseUsSection } from "@/components/indiana/IndianaWhyChooseUsSection";
import { IndianaBenefitsSection } from "@/components/indiana/IndianaBenefitsSection";
import { IndianaLawsSection } from "@/components/indiana/IndianaLawsSection";
import { IndianaScamsSection } from "@/components/indiana/IndianaScamsSection";
import { IndianaPsdVsEsaSection } from "@/components/indiana/IndianaPsdVsEsaSection";
import { IndianaAvailableCitiesSection } from "@/components/indiana/IndianaAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Indiana ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
  description:
    "Indiana ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation.",
};

export default function IndianaEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <IndianaHeroSection />
        <IndianaTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <IndianaProcessSection />
        <IndianaWhoQualifiesSection />
        <IndianaRequirementsSection />
        <IndianaWhyChooseUsSection />
        <IndianaBenefitsSection />
        <IndianaLawsSection />
        <IndianaScamsSection />
        <IndianaPsdVsEsaSection />
        <IndianaAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Indiana ESA Evaluation?"
          description="Connect with an Indiana-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
