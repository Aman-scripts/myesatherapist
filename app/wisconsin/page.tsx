import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { WisconsinHeroSection } from "@/components/wisconsin/WisconsinHeroSection";
import { WisconsinTrustBar } from "@/components/wisconsin/WisconsinTrustBar";
import { WisconsinProcessSection } from "@/components/wisconsin/WisconsinProcessSection";
import { WisconsinWhoQualifiesSection } from "@/components/wisconsin/WisconsinWhoQualifiesSection";
import { WisconsinRequirementsSection } from "@/components/wisconsin/WisconsinRequirementsSection";
import { WisconsinWhyChooseUsSection } from "@/components/wisconsin/WisconsinWhyChooseUsSection";
import { WisconsinBenefitsSection } from "@/components/wisconsin/WisconsinBenefitsSection";
import { WisconsinLawsSection } from "@/components/wisconsin/WisconsinLawsSection";
import { WisconsinScamsSection } from "@/components/wisconsin/WisconsinScamsSection";
import { WisconsinPsdVsEsaSection } from "@/components/wisconsin/WisconsinPsdVsEsaSection";
import { WisconsinAvailableCitiesSection } from "@/components/wisconsin/WisconsinAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Wisconsin ESA Letter Online with Licensed Therapist | My ESA Therapist",
  description:
    "Get an official Wisconsin ESA Letter online from state-licensed mental health professionals. 100% compliant with Wisconsin state laws and the federal Fair Housing Act.",
};

export default function WisconsinEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <WisconsinHeroSection />

        <WisconsinTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <WisconsinProcessSection />

        <WisconsinWhoQualifiesSection />

        <WisconsinRequirementsSection />

        <WisconsinWhyChooseUsSection />

        <WisconsinBenefitsSection />

        <WisconsinLawsSection />

        <WisconsinScamsSection />

        <WisconsinPsdVsEsaSection />

        <WisconsinAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your Wisconsin ESA Evaluation?"
          description="Connect with a Wisconsin-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
