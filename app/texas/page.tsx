import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { TexasHeroSection } from "@/components/texas/TexasHeroSection";
import { TexasTrustBar } from "@/components/texas/TexasTrustBar";
import { TexasProcessSection } from "@/components/texas/TexasProcessSection";
import { TexasWhoQualifiesSection } from "@/components/texas/TexasWhoQualifiesSection";
import { TexasRequirementsSection } from "@/components/texas/TexasRequirementsSection";
import { TexasWhyChooseUsSection } from "@/components/texas/TexasWhyChooseUsSection";
import { TexasBenefitsSection } from "@/components/texas/TexasBenefitsSection";
import { TexasLawsSection } from "@/components/texas/TexasLawsSection";
import { TexasScamsSection } from "@/components/texas/TexasScamsSection";
import { TexasPsdVsEsaSection } from "@/components/texas/TexasPsdVsEsaSection";
import { TexasAvailableCitiesSection } from "@/components/texas/TexasAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Texas ESA Letter Online with Licensed Therapist | My ESA Therapist",
  description:
    "Get an official Texas ESA Letter online from state-licensed mental health professionals. 100% compliant with the Texas Fair Housing Act and federal FHA guidelines.",
};

export default function TexasEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <TexasHeroSection />

        <TexasTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <TexasProcessSection />

        <TexasWhoQualifiesSection />

        <TexasRequirementsSection />

        <TexasWhyChooseUsSection />

        <TexasBenefitsSection />

        <TexasLawsSection />

        <TexasScamsSection />

        <TexasPsdVsEsaSection />

        <TexasAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your Texas ESA Evaluation?"
          description="Connect with a Texas-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
