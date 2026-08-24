import React from "react";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { JourneySection } from "@/components/home/JourneySection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LicensedProviderSection } from "@/components/home/LicensedProviderSection";
import { QualifyingConditions } from "@/components/home/QualifyingConditions";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { EmotionalSupportSection } from "@/components/home/EmotionalSupportSection";
import { DoYouNeedEsaSection } from "@/components/home/DoYouNeedEsaSection";
import { PricingSection } from "@/components/home/PricingSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <TopBanner />
      <Header />
      <main className="flex-1">
        <HeroSection />

        <AsSeenOnSection />

        <JourneySection />

        <HowItWorks />

        <LicensedProviderSection />

        <QualifyingConditions />

        <TherapistsSection />

        <WhyChooseUs />

        <EmotionalSupportSection />
        <TestimonialsSection />

        <DoYouNeedEsaSection />
        <PricingSection />

        <CommunitySection />

        <ComparisonTable />

        <FaqSection />

        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
