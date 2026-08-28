import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { IllinoisHeroSection } from "@/components/illinois/IllinoisHeroSection";
import { IllinoisTrustBar } from "@/components/illinois/IllinoisTrustBar";
import { IllinoisProcessSection } from "@/components/illinois/IllinoisProcessSection";
import { IllinoisWhoQualifiesSection } from "@/components/illinois/IllinoisWhoQualifiesSection";
import { IllinoisRequirementsSection } from "@/components/illinois/IllinoisRequirementsSection";
import { IllinoisWhyChooseUsSection } from "@/components/illinois/IllinoisWhyChooseUsSection";
import { IllinoisBenefitsSection } from "@/components/illinois/IllinoisBenefitsSection";
import { IllinoisLawsSection } from "@/components/illinois/IllinoisLawsSection";
import { IllinoisScamsSection } from "@/components/illinois/IllinoisScamsSection";
import { IllinoisPsdVsEsaSection } from "@/components/illinois/IllinoisPsdVsEsaSection";
import { IllinoisAvailableCitiesSection } from "@/components/illinois/IllinoisAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Illinois ESA Letter Evaluation by Licensed Professionals | My ESA Therapist",
  description:
    "Get an official Illinois ESA Letter online from state-licensed mental health professionals. 100% compliant with Illinois state laws and the Fair Housing Act.",
};

export default function IllinoisEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <IllinoisHeroSection />

        <IllinoisTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <IllinoisProcessSection />

        <IllinoisWhoQualifiesSection />

        <IllinoisRequirementsSection />

        <IllinoisWhyChooseUsSection />

        <IllinoisBenefitsSection />

        <IllinoisLawsSection />

        <IllinoisScamsSection />

        <IllinoisPsdVsEsaSection />

        <IllinoisAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your Illinois ESA Evaluation?"
          description="Connect with an Illinois-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
