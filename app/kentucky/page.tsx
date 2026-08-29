import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { KentuckyHeroSection } from "@/components/kentucky/KentuckyHeroSection";
import { KentuckyTrustBar } from "@/components/kentucky/KentuckyTrustBar";
import { KentuckyProcessSection } from "@/components/kentucky/KentuckyProcessSection";
import { KentuckyWhoQualifiesSection } from "@/components/kentucky/KentuckyWhoQualifiesSection";
import { KentuckyRequirementsSection } from "@/components/kentucky/KentuckyRequirementsSection";
import { KentuckyWhyChooseUsSection } from "@/components/kentucky/KentuckyWhyChooseUsSection";
import { KentuckyBenefitsSection } from "@/components/kentucky/KentuckyBenefitsSection";
import { KentuckyLawsSection } from "@/components/kentucky/KentuckyLawsSection";
import { KentuckyScamsSection } from "@/components/kentucky/KentuckyScamsSection";
import { KentuckyPsdVsEsaSection } from "@/components/kentucky/KentuckyPsdVsEsaSection";
import { KentuckyAvailableCitiesSection } from "@/components/kentucky/KentuckyAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Kentucky ESA Letter From Licensed Professionals | My ESA Therapist",
  description:
    "Kentucky ESA Letter evaluations conducted by licensed mental health professionals. Secure telehealth, transparent pricing, and compliant ESA documentation.",
};

export default function KentuckyEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <KentuckyHeroSection />
        <KentuckyTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <KentuckyProcessSection />
        <KentuckyWhoQualifiesSection />
        <KentuckyRequirementsSection />
        <KentuckyWhyChooseUsSection />
        <KentuckyBenefitsSection />
        <KentuckyLawsSection />
        <KentuckyScamsSection />
        <KentuckyPsdVsEsaSection />
        <KentuckyAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Kentucky ESA Evaluation?"
          description="Connect with a Kentucky-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
