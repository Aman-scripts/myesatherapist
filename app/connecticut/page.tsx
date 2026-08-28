import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { ConnecticutHeroSection } from "@/components/connecticut/ConnecticutHeroSection";
import { ConnecticutTrustBar } from "@/components/connecticut/ConnecticutTrustBar";
import { ConnecticutProcessSection } from "@/components/connecticut/ConnecticutProcessSection";
import { ConnecticutWhoQualifiesSection } from "@/components/connecticut/ConnecticutWhoQualifiesSection";
import { ConnecticutRequirementsSection } from "@/components/connecticut/ConnecticutRequirementsSection";
import { ConnecticutBenefitsSection } from "@/components/connecticut/ConnecticutBenefitsSection";
import { ConnecticutLawsSection } from "@/components/connecticut/ConnecticutLawsSection";
import { ConnecticutScamsSection } from "@/components/connecticut/ConnecticutScamsSection";
import { ConnecticutPsdVsEsaSection } from "@/components/connecticut/ConnecticutPsdVsEsaSection";
import { ConnecticutAvailableCitiesSection } from "@/components/connecticut/ConnecticutAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Connecticut ESA Letter Evaluations by Licensed Professionals - My ESA Therapist",
  description:
    "Connect with Connecticut licensed therapists for legitimate emotional support animal evaluations through a secure telehealth platform. Private, professional, and supportive care.",
};

export default function ConnecticutEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <ConnecticutHeroSection />

        <ConnecticutTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <ConnecticutProcessSection />

        <ConnecticutWhoQualifiesSection />

        <ConnecticutRequirementsSection />

        <WhyChooseUs />

        <TestimonialsSection />
        <ConnecticutBenefitsSection />

        <ConnecticutLawsSection />

        <ConnecticutScamsSection />

        <ConnecticutPsdVsEsaSection />

        <ConnecticutAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your Connecticut ESA Evaluation?"
          description="Connect with a Connecticut-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
