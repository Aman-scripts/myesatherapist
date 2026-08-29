import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { MissouriHeroSection } from "@/components/missouri/MissouriHeroSection";
import { MissouriTrustBar } from "@/components/missouri/MissouriTrustBar";
import { MissouriProcessSection } from "@/components/missouri/MissouriProcessSection";
import { MissouriWhoQualifiesSection } from "@/components/missouri/MissouriWhoQualifiesSection";
import { MissouriRequirementsSection } from "@/components/missouri/MissouriRequirementsSection";
import { MissouriWhyChooseUsSection } from "@/components/missouri/MissouriWhyChooseUsSection";
import { MissouriBenefitsSection } from "@/components/missouri/MissouriBenefitsSection";
import { MissouriLawsSection } from "@/components/missouri/MissouriLawsSection";
import { MissouriScamsSection } from "@/components/missouri/MissouriScamsSection";
import { MissouriPsdVsEsaSection } from "@/components/missouri/MissouriPsdVsEsaSection";
import { MissouriAvailableCitiesSection } from "@/components/missouri/MissouriAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Missouri ESA Letter Online From Licensed Professionals | My ESA Therapist",
  description:
    "Get in touch with certified mental health experts in Missouri for safe and secure ESA evaluations. Get professional support and clear guidance.",
};

export default function MissouriEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <MissouriHeroSection />
        <MissouriTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <MissouriProcessSection />
        <MissouriWhoQualifiesSection />
        <MissouriRequirementsSection />
        <MissouriWhyChooseUsSection />
        <MissouriBenefitsSection />
        <MissouriLawsSection />
        <MissouriScamsSection />
        <MissouriPsdVsEsaSection />
        <MissouriAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Missouri ESA Evaluation?"
          description="Connect with a Missouri-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
