import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { ColoradoHeroSection } from "@/components/colorado/ColoradoHeroSection";
import { ColoradoTrustBar } from "@/components/colorado/ColoradoTrustBar";
import { ColoradoProcessSection } from "@/components/colorado/ColoradoProcessSection";
import { ColoradoWhoQualifiesSection } from "@/components/colorado/ColoradoWhoQualifiesSection";
import { ColoradoRequirementsSection } from "@/components/colorado/ColoradoRequirementsSection";
import { ColoradoWhyChooseUsSection } from "@/components/colorado/ColoradoWhyChooseUsSection";
import { ColoradoBenefitsSection } from "@/components/colorado/ColoradoBenefitsSection";
import { ColoradoLawsSection } from "@/components/colorado/ColoradoLawsSection";
import { ColoradoScamsSection } from "@/components/colorado/ColoradoScamsSection";
import { ColoradoPsdVsEsaSection } from "@/components/colorado/ColoradoPsdVsEsaSection";
import { ColoradoAvailableCitiesSection } from "@/components/colorado/ColoradoAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Colorado ESA Letter Evaluation by Licensed Therapists - My ESA Therapist",
  description:
    "Get an official Colorado ESA Letter online from state-licensed mental health professionals. 100% compliant with Colorado state laws and the federal Fair Housing Act.",
};

export default function ColoradoEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <ColoradoHeroSection />

        <ColoradoTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <ColoradoProcessSection />

        <ColoradoWhoQualifiesSection />

        <ColoradoRequirementsSection />

        <ColoradoWhyChooseUsSection />

        <ColoradoBenefitsSection />

        <ColoradoLawsSection />

        <ColoradoScamsSection />

        <ColoradoPsdVsEsaSection />

        <ColoradoAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your Colorado ESA Evaluation?"
          description="Connect with a Colorado-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
