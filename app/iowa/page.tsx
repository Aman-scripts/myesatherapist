import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { IowaHeroSection } from "@/components/iowa/IowaHeroSection";
import { IowaTrustBar } from "@/components/iowa/IowaTrustBar";
import { IowaProcessSection } from "@/components/iowa/IowaProcessSection";
import { IowaWhoQualifiesSection } from "@/components/iowa/IowaWhoQualifiesSection";
import { IowaRequirementsSection } from "@/components/iowa/IowaRequirementsSection";
import { IowaWhyChooseUsSection } from "@/components/iowa/IowaWhyChooseUsSection";
import { IowaBenefitsSection } from "@/components/iowa/IowaBenefitsSection";
import { IowaLawsSection } from "@/components/iowa/IowaLawsSection";
import { IowaScamsSection } from "@/components/iowa/IowaScamsSection";
import { IowaPsdVsEsaSection } from "@/components/iowa/IowaPsdVsEsaSection";
import { IowaAvailableCitiesSection } from "@/components/iowa/IowaAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Iowa ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
  description:
    "Iowa ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation under Iowa Code § 216C.11A.",
};

export default function IowaEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <IowaHeroSection />
        <IowaTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <IowaProcessSection />
        <IowaWhoQualifiesSection />
        <IowaRequirementsSection />
        <IowaWhyChooseUsSection />
        <IowaBenefitsSection />
        <IowaLawsSection />
        <IowaScamsSection />
        <IowaPsdVsEsaSection />
        <IowaAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Iowa ESA Evaluation?"
          description="Connect with an Iowa-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
