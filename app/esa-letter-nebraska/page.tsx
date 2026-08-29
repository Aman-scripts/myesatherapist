import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { NebraskaHeroSection } from "@/components/nebraska/NebraskaHeroSection";
import { NebraskaTrustBar } from "@/components/nebraska/NebraskaTrustBar";
import { NebraskaProcessSection } from "@/components/nebraska/NebraskaProcessSection";
import { NebraskaWhoQualifiesSection } from "@/components/nebraska/NebraskaWhoQualifiesSection";
import { NebraskaRequirementsSection } from "@/components/nebraska/NebraskaRequirementsSection";
import { NebraskaWhyChooseUsSection } from "@/components/nebraska/NebraskaWhyChooseUsSection";
import { NebraskaBenefitsSection } from "@/components/nebraska/NebraskaBenefitsSection";
import { NebraskaLawsSection } from "@/components/nebraska/NebraskaLawsSection";
import { NebraskaScamsSection } from "@/components/nebraska/NebraskaScamsSection";
import { NebraskaPsdVsEsaSection } from "@/components/nebraska/NebraskaPsdVsEsaSection";
import { NebraskaAvailableCitiesSection } from "@/components/nebraska/NebraskaAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Official Nebraska ESA Letter Online | Licensed Therapists | My ESA Therapist",
  description: "Get an official Nebraska ESA Letter online from state-licensed mental health professionals. 100% compliant with Nebraska state laws and the federal Fair Housing Act.",
};

export default function NebraskaEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <NebraskaHeroSection />
        <NebraskaTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <NebraskaProcessSection />
        <NebraskaWhoQualifiesSection />
        <NebraskaRequirementsSection />
        <NebraskaWhyChooseUsSection />
        <NebraskaBenefitsSection />
        <NebraskaLawsSection />
        <NebraskaScamsSection />
        <NebraskaPsdVsEsaSection />
        <NebraskaAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Nebraska ESA Evaluation?"
          description="Connect with a Nebraska-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
