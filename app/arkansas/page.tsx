import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { ArkansasHeroSection } from "@/components/arkansas/ArkansasHeroSection";
import { ArkansasTrustBar } from "@/components/arkansas/ArkansasTrustBar";
import { ArkansasProcessSection } from "@/components/arkansas/ArkansasProcessSection";
import { ArkansasWhoQualifiesSection } from "@/components/arkansas/ArkansasWhoQualifiesSection";
import { ArkansasRequirementsSection } from "@/components/arkansas/ArkansasRequirementsSection";
import { ArkansasWhyChooseUsSection } from "@/components/arkansas/ArkansasWhyChooseUsSection";
import { ArkansasBenefitsSection } from "@/components/arkansas/ArkansasBenefitsSection";
import { ArkansasLawsSection } from "@/components/arkansas/ArkansasLawsSection";
import { ArkansasScamsSection } from "@/components/arkansas/ArkansasScamsSection";
import { ArkansasPsdVsEsaSection } from "@/components/arkansas/ArkansasPsdVsEsaSection";
import { ArkansasAvailableCitiesSection } from "@/components/arkansas/ArkansasAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Arkansas ESA Letter Evaluations by Licensed Professionals | My ESA Therapist",
  description:
    "Connect with Arkansas licensed therapists for ESA letter evaluations through a secure telehealth platform. Private, professional, and supportive care compliant with HB 1420.",
};

export default function ArkansasEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <ArkansasHeroSection />
        <ArkansasTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <ArkansasProcessSection />
        <ArkansasWhoQualifiesSection />
        <ArkansasRequirementsSection />
        <ArkansasWhyChooseUsSection />
        <ArkansasBenefitsSection />
        <ArkansasLawsSection />
        <ArkansasScamsSection />
        <ArkansasPsdVsEsaSection />
        <ArkansasAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Arkansas ESA Evaluation?"
          description="Connect with an Arkansas-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
