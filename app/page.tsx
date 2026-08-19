import React from "react";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { JourneySection } from "@/components/home/JourneySection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LicensedProviderSection } from "@/components/home/LicensedProviderSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { EmotionalSupportSection } from "@/components/home/EmotionalSupportSection";
import { QualifyingConditions } from "@/components/home/QualifyingConditions";
import { PricingSection } from "@/components/home/PricingSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EEEBE0] text-slate-900">
      {/* Top announcement banner */}
      <TopBanner />

      {/* Main navigation */}
      <Header />

      <main className="flex-1">
        {/* Hero — full-width warm beige with woman+dog photo */}
        <HeroSection />

        {/* As Seen On media logos */}
        <AsSeenOnSection />

        {/* ESA Journey — 3 stat cards */}
        <JourneySection />

        {/* How It Works — 3 step circles */}
        <HowItWorks />

        {/* Hear From a Licensed ESA Provider — Video */}
        <LicensedProviderSection />

        {/* Qualifying Conditions — floating badges + dog */}
        <QualifyingConditions />

        {/* Licensed Therapists cards */}
        <TherapistsSection />

        {/* Why Choose Us — 6 feature cards */}
        <WhyChooseUs />

        {/* <EmotionalSupportSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />

        <CtaBanner /> */}
      </main>

      <Footer />
    </div>
  );
}
