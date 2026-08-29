import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { MinnesotaHeroSection } from "@/components/minnesota/MinnesotaHeroSection";
import { MinnesotaTrustBar } from "@/components/minnesota/MinnesotaTrustBar";
import { MinnesotaProcessSection } from "@/components/minnesota/MinnesotaProcessSection";
import { MinnesotaWhoQualifiesSection } from "@/components/minnesota/MinnesotaWhoQualifiesSection";
import { MinnesotaRequirementsSection } from "@/components/minnesota/MinnesotaRequirementsSection";
import { MinnesotaWhyChooseUsSection } from "@/components/minnesota/MinnesotaWhyChooseUsSection";
import { MinnesotaBenefitsSection } from "@/components/minnesota/MinnesotaBenefitsSection";
import { MinnesotaLawsSection } from "@/components/minnesota/MinnesotaLawsSection";
import { MinnesotaScamsSection } from "@/components/minnesota/MinnesotaScamsSection";
import { MinnesotaPsdVsEsaSection } from "@/components/minnesota/MinnesotaPsdVsEsaSection";
import { MinnesotaAvailableCitiesSection } from "@/components/minnesota/MinnesotaAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Minnesota ESA Letter Online From Licensed Professionals | My ESA Therapist",
  description:
    "Get in touch with certified mental health experts in Minnesota for safe and secure ESA evaluations. Get professional support and clear guidance.",
};

export default function MinnesotaEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <MinnesotaHeroSection />
        <MinnesotaTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <MinnesotaProcessSection />
        <MinnesotaWhoQualifiesSection />
        <MinnesotaRequirementsSection />
        <MinnesotaWhyChooseUsSection />
        <MinnesotaBenefitsSection />
        <MinnesotaLawsSection />
        <MinnesotaScamsSection />
        <MinnesotaPsdVsEsaSection />
        <MinnesotaAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Minnesota ESA Evaluation?"
          description="Connect with a Minnesota-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
