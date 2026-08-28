import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { DelawareHeroSection } from "@/components/delaware/DelawareHeroSection";
import { DelawareTrustBar } from "@/components/delaware/DelawareTrustBar";
import { DelawareProcessSection } from "@/components/delaware/DelawareProcessSection";
import { DelawareWhoQualifiesSection } from "@/components/delaware/DelawareWhoQualifiesSection";
import { DelawareRequirementsSection } from "@/components/delaware/DelawareRequirementsSection";
import { DelawareBenefitsSection } from "@/components/delaware/DelawareBenefitsSection";
import { DelawareLawsSection } from "@/components/delaware/DelawareLawsSection";
import { DelawareScamsSection } from "@/components/delaware/DelawareScamsSection";
import { DelawarePsdVsEsaSection } from "@/components/delaware/DelawarePsdVsEsaSection";
import { DelawareAvailableCitiesSection } from "@/components/delaware/DelawareAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Delaware ESA Letter Evaluations by Licensed Professionals - My ESA Therapist",
  description:
    "Connect with Delaware licensed therapists for legitimate emotional support animal evaluations through a secure telehealth platform. Private, professional, and supportive care.",
};

export default function DelawareEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <DelawareHeroSection />

        <DelawareTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <DelawareProcessSection />

        <DelawareWhoQualifiesSection />

        <DelawareRequirementsSection />

        <WhyChooseUs />

        <TestimonialsSection />
        <DelawareBenefitsSection />

        <DelawareLawsSection />

        <DelawareScamsSection />

        <DelawarePsdVsEsaSection />

        <DelawareAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your Delaware ESA Evaluation?"
          description="Connect with a Delaware-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
