import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { IdahoHeroSection } from "@/components/idaho/IdahoHeroSection";
import { IdahoTrustBar } from "@/components/idaho/IdahoTrustBar";
import { IdahoProcessSection } from "@/components/idaho/IdahoProcessSection";
import { IdahoWhoQualifiesSection } from "@/components/idaho/IdahoWhoQualifiesSection";
import { IdahoRequirementsSection } from "@/components/idaho/IdahoRequirementsSection";
import { IdahoWhyChooseUsSection } from "@/components/idaho/IdahoWhyChooseUsSection";
import { IdahoBenefitsSection } from "@/components/idaho/IdahoBenefitsSection";
import { IdahoLawsSection } from "@/components/idaho/IdahoLawsSection";
import { IdahoScamsSection } from "@/components/idaho/IdahoScamsSection";
import { IdahoPsdVsEsaSection } from "@/components/idaho/IdahoPsdVsEsaSection";
import { IdahoAvailableCitiesSection } from "@/components/idaho/IdahoAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Idaho ESA Letter Evaluations by Licensed Therapists | My ESA Therapist",
  description:
    "Idaho ESA Letter evaluations conducted by licensed therapists. Transparent pricing, secure telehealth, and compliant ESA documentation.",
};

export default function IdahoEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <IdahoHeroSection />
        <IdahoTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <IdahoProcessSection />
        <IdahoWhoQualifiesSection />
        <IdahoRequirementsSection />
        <IdahoWhyChooseUsSection />
        <IdahoBenefitsSection />
        <IdahoLawsSection />
        <IdahoScamsSection />
        <IdahoPsdVsEsaSection />
        <IdahoAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Idaho ESA Evaluation?"
          description="Connect with an Idaho-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
