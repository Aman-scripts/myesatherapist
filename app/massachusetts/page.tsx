import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { MassachusettsHeroSection } from "@/components/massachusetts/MassachusettsHeroSection";
import { MassachusettsTrustBar } from "@/components/massachusetts/MassachusettsTrustBar";
import { MassachusettsProcessSection } from "@/components/massachusetts/MassachusettsProcessSection";
import { MassachusettsWhoQualifiesSection } from "@/components/massachusetts/MassachusettsWhoQualifiesSection";
import { MassachusettsRequirementsSection } from "@/components/massachusetts/MassachusettsRequirementsSection";
import { MassachusettsWhyChooseUsSection } from "@/components/massachusetts/MassachusettsWhyChooseUsSection";
import { MassachusettsBenefitsSection } from "@/components/massachusetts/MassachusettsBenefitsSection";
import { MassachusettsLawsSection } from "@/components/massachusetts/MassachusettsLawsSection";
import { MassachusettsScamsSection } from "@/components/massachusetts/MassachusettsScamsSection";
import { MassachusettsPsdVsEsaSection } from "@/components/massachusetts/MassachusettsPsdVsEsaSection";
import { MassachusettsAvailableCitiesSection } from "@/components/massachusetts/MassachusettsAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Massachusetts ESA Letter from Licensed Therapists | My ESA Therapist",
  description:
    "Connect with state-accredited mental health experts in Massachusetts to receive a comprehensive evaluation for your emotional and mental well-being.",
};

export default function MassachusettsEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <MassachusettsHeroSection />
        <MassachusettsTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <MassachusettsProcessSection />
        <MassachusettsWhoQualifiesSection />
        <MassachusettsRequirementsSection />
        <MassachusettsWhyChooseUsSection />
        <MassachusettsBenefitsSection />
        <MassachusettsLawsSection />
        <MassachusettsScamsSection />
        <MassachusettsPsdVsEsaSection />
        <MassachusettsAvailableCitiesSection />
        <FaqSection />
        <CtaBanner
          title="Ready to Start Your Massachusetts ESA Evaluation?"
          description="Connect with a Massachusetts-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
