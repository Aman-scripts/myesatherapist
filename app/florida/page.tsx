import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { FloridaHeroSection } from "@/components/florida/FloridaHeroSection";
import { FloridaTrustBar } from "@/components/florida/FloridaTrustBar";
import { FloridaProcessSection } from "@/components/florida/FloridaProcessSection";
import { FloridaWhoQualifiesSection } from "@/components/florida/FloridaWhoQualifiesSection";
import { FloridaRequirementsSection } from "@/components/florida/FloridaRequirementsSection";
import { FloridaWhyChooseUsSection } from "@/components/florida/FloridaWhyChooseUsSection";
import { FloridaBenefitsSection } from "@/components/florida/FloridaBenefitsSection";
import { FloridaLawsSection } from "@/components/florida/FloridaLawsSection";
import { FloridaScamsSection } from "@/components/florida/FloridaScamsSection";
import { FloridaPsdVsEsaSection } from "@/components/florida/FloridaPsdVsEsaSection";
import { FloridaAvailableCitiesSection } from "@/components/florida/FloridaAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Florida ESA Letter Online with Licensed Therapist | My ESA Therapist",
  description:
    "Get an official Florida ESA Letter online from state-licensed health care practitioners. 100% compliant with Florida Statutes section 760.27 and the federal Fair Housing Act.",
};

export default function FloridaEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <FloridaHeroSection />

        <FloridaTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <FloridaProcessSection />

        <FloridaWhoQualifiesSection />

        <FloridaRequirementsSection />

        <FloridaWhyChooseUsSection />

        <FloridaBenefitsSection />

        <FloridaLawsSection />

        <FloridaScamsSection />

        <FloridaPsdVsEsaSection />

        <FloridaAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your Florida ESA Evaluation?"
          description="Connect with a Florida-licensed health care practitioner today for a legitimate, FHA and FL Statute 760.27-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
