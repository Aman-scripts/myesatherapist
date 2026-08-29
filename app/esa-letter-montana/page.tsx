import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { MontanaHeroSection } from "@/components/montana/MontanaHeroSection";
import { MontanaTrustBar } from "@/components/montana/MontanaTrustBar";
import { MontanaProcessSection } from "@/components/montana/MontanaProcessSection";
import { MontanaWhoQualifiesSection } from "@/components/montana/MontanaWhoQualifiesSection";
import { MontanaRequirementsSection } from "@/components/montana/MontanaRequirementsSection";
import { MontanaWhyChooseUsSection } from "@/components/montana/MontanaWhyChooseUsSection";
import { MontanaBenefitsSection } from "@/components/montana/MontanaBenefitsSection";
import { MontanaLawsSection } from "@/components/montana/MontanaLawsSection";
import { MontanaScamsSection } from "@/components/montana/MontanaScamsSection";
import { MontanaPsdVsEsaSection } from "@/components/montana/MontanaPsdVsEsaSection";
import { MontanaAvailableCitiesSection } from "@/components/montana/MontanaAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Official Montana ESA Letter Online | Licensed Therapists | My ESA Therapist",
  description: "Get an official Montana ESA Letter online from state-licensed mental health professionals. 100% compliant with Montana state laws and the federal Fair Housing Act.",
};

export default function MontanaEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <MontanaHeroSection />
        <MontanaTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <MontanaProcessSection />
        <MontanaWhoQualifiesSection />
        <MontanaRequirementsSection />
        <MontanaWhyChooseUsSection />
        <MontanaBenefitsSection />
        <MontanaLawsSection />
        <MontanaScamsSection />
        <MontanaPsdVsEsaSection />
        <MontanaAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Montana ESA Evaluation?"
          description="Connect with a Montana-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
