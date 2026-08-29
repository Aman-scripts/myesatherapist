import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { MississippiHeroSection } from "@/components/mississippi/MississippiHeroSection";
import { MississippiTrustBar } from "@/components/mississippi/MississippiTrustBar";
import { MississippiProcessSection } from "@/components/mississippi/MississippiProcessSection";
import { MississippiWhoQualifiesSection } from "@/components/mississippi/MississippiWhoQualifiesSection";
import { MississippiRequirementsSection } from "@/components/mississippi/MississippiRequirementsSection";
import { MississippiWhyChooseUsSection } from "@/components/mississippi/MississippiWhyChooseUsSection";
import { MississippiBenefitsSection } from "@/components/mississippi/MississippiBenefitsSection";
import { MississippiLawsSection } from "@/components/mississippi/MississippiLawsSection";
import { MississippiScamsSection } from "@/components/mississippi/MississippiScamsSection";
import { MississippiPsdVsEsaSection } from "@/components/mississippi/MississippiPsdVsEsaSection";
import { MississippiAvailableCitiesSection } from "@/components/mississippi/MississippiAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mississippi ESA Letter Online From Licensed Professionals | My ESA Therapist",
  description:
    "Get in touch with certified mental health experts in Mississippi for safe and secure ESA evaluations. Get professional support and clear guidance.",
};

export default function MississippiEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <MississippiHeroSection />
        <MississippiTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <MississippiProcessSection />
        <MississippiWhoQualifiesSection />
        <MississippiRequirementsSection />
        <MississippiWhyChooseUsSection />
        <MississippiBenefitsSection />
        <MississippiLawsSection />
        <MississippiScamsSection />
        <MississippiPsdVsEsaSection />
        <MississippiAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Mississippi ESA Evaluation?"
          description="Connect with a Mississippi-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
