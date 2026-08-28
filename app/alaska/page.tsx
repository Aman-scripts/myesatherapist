import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { AlaskaHeroSection } from "@/components/alaska/AlaskaHeroSection";
import { AlaskaTrustBar } from "@/components/alaska/AlaskaTrustBar";
import { AlaskaProcessSection } from "@/components/alaska/AlaskaProcessSection";
import { AlaskaWhoQualifiesSection } from "@/components/alaska/AlaskaWhoQualifiesSection";
import { AlaskaRequirementsSection } from "@/components/alaska/AlaskaRequirementsSection";
import { AlaskaWhyChooseUsSection } from "@/components/alaska/AlaskaWhyChooseUsSection";
import { AlaskaBenefitsSection } from "@/components/alaska/AlaskaBenefitsSection";
import { AlaskaLawsSection } from "@/components/alaska/AlaskaLawsSection";
import { AlaskaScamsSection } from "@/components/alaska/AlaskaScamsSection";
import { AlaskaPsdVsEsaSection } from "@/components/alaska/AlaskaPsdVsEsaSection";
import { AlaskaAvailableCitiesSection } from "@/components/alaska/AlaskaAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Alaska ESA Letter by Licensed Professionals | My ESA Therapist",
  description:
    "Connect with Alaska licensed therapists for ESA letter evaluations through a secure telehealth platform. Private, professional, and supportive care.",
};

export default function AlaskaEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <AlaskaHeroSection />

        <AlaskaTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <AlaskaProcessSection />

        <AlaskaWhoQualifiesSection />

        <AlaskaRequirementsSection />

        <AlaskaWhyChooseUsSection />

        <AlaskaBenefitsSection />

        <AlaskaLawsSection />

        <AlaskaScamsSection />

        <AlaskaPsdVsEsaSection />

        <AlaskaAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your Alaska ESA Evaluation?"
          description="Connect with an Alaska-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
