import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { CaliforniaHeroSection } from "@/components/california/CaliforniaHeroSection";
import { CaliforniaTrustBar } from "@/components/california/CaliforniaTrustBar";
import { CaliforniaProcessSection } from "@/components/california/CaliforniaProcessSection";
import { CaliforniaWhoQualifiesSection } from "@/components/california/CaliforniaWhoQualifiesSection";
import { CaliforniaRequirementsSection } from "@/components/california/CaliforniaRequirementsSection";
import { CaliforniaBenefitsSection } from "@/components/california/CaliforniaBenefitsSection";
import { CaliforniaLawsSection } from "@/components/california/CaliforniaLawsSection";
import { CaliforniaScamsSection } from "@/components/california/CaliforniaScamsSection";
import { CaliforniaPsdVsEsaSection } from "@/components/california/CaliforniaPsdVsEsaSection";
import { CaliforniaAvailableCitiesSection } from "@/components/california/CaliforniaAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "California ESA Letter Online with Licensed Therapist | My ESA Therapist",
  description:
    "Get an official California ESA Letter online from state-licensed mental health professionals. 100% compliant with California AB 468 and the federal Fair Housing Act.",
};

export default function CaliforniaEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <CaliforniaHeroSection />

        <CaliforniaTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <CaliforniaProcessSection />

        <CaliforniaWhoQualifiesSection />

        <CaliforniaRequirementsSection />

        <WhyChooseUs />

        <TestimonialsSection />
        <CaliforniaBenefitsSection />


        <CaliforniaLawsSection />

        <CaliforniaScamsSection />

        <CaliforniaPsdVsEsaSection />

        <CaliforniaAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your California ESA Evaluation?"
          description="Connect with a California-licensed mental health professional today for a legitimate, AB 468 compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
