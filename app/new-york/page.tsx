import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { NewYorkHeroSection } from "@/components/new-york/NewYorkHeroSection";
import { NewYorkTrustBar } from "@/components/new-york/NewYorkTrustBar";
import { NewYorkProcessSection } from "@/components/new-york/NewYorkProcessSection";
import { NewYorkWhoQualifiesSection } from "@/components/new-york/NewYorkWhoQualifiesSection";
import { NewYorkRequirementsSection } from "@/components/new-york/NewYorkRequirementsSection";
import { NewYorkWhyChooseUsSection } from "@/components/new-york/NewYorkWhyChooseUsSection";
import { NewYorkBenefitsSection } from "@/components/new-york/NewYorkBenefitsSection";
import { NewYorkLawsSection } from "@/components/new-york/NewYorkLawsSection";
import { NewYorkScamsSection } from "@/components/new-york/NewYorkScamsSection";
import { NewYorkPsdVsEsaSection } from "@/components/new-york/NewYorkPsdVsEsaSection";
import { NewYorkAvailableCitiesSection } from "@/components/new-york/NewYorkAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "New York ESA Letter Online with Licensed Therapist | My ESA Therapist",
  description:
    "Get an official New York ESA Letter online from state-licensed mental health professionals. 100% compliant with New York State laws and the federal Fair Housing Act.",
};

export default function NewYorkEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <NewYorkHeroSection />

        <NewYorkTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <NewYorkProcessSection />

        <NewYorkWhoQualifiesSection />

        <NewYorkRequirementsSection />

        <NewYorkWhyChooseUsSection />

        <NewYorkBenefitsSection />

        <NewYorkLawsSection />

        <NewYorkScamsSection />

        <NewYorkPsdVsEsaSection />

        <NewYorkAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your New York ESA Evaluation?"
          description="Connect with a New York-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
