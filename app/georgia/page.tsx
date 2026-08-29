import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { GeorgiaHeroSection } from "@/components/georgia/GeorgiaHeroSection";
import { GeorgiaTrustBar } from "@/components/georgia/GeorgiaTrustBar";
import { GeorgiaProcessSection } from "@/components/georgia/GeorgiaProcessSection";
import { GeorgiaWhoQualifiesSection } from "@/components/georgia/GeorgiaWhoQualifiesSection";
import { GeorgiaRequirementsSection } from "@/components/georgia/GeorgiaRequirementsSection";
import { GeorgiaWhyChooseUsSection } from "@/components/georgia/GeorgiaWhyChooseUsSection";
import { GeorgiaBenefitsSection } from "@/components/georgia/GeorgiaBenefitsSection";
import { GeorgiaLawsSection } from "@/components/georgia/GeorgiaLawsSection";
import { GeorgiaScamsSection } from "@/components/georgia/GeorgiaScamsSection";
import { GeorgiaPsdVsEsaSection } from "@/components/georgia/GeorgiaPsdVsEsaSection";
import { GeorgiaAvailableCitiesSection } from "@/components/georgia/GeorgiaAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Georgia ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
  description:
    "Georgia ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation.",
};

export default function GeorgiaEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <GeorgiaHeroSection />

        <GeorgiaTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <GeorgiaProcessSection />

        <GeorgiaWhoQualifiesSection />

        <GeorgiaRequirementsSection />

        <GeorgiaWhyChooseUsSection />

        <GeorgiaBenefitsSection />

        <GeorgiaLawsSection />

        <GeorgiaScamsSection />

        <GeorgiaPsdVsEsaSection />

        <GeorgiaAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your Georgia ESA Evaluation?"
          description="Connect with a Georgia-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
