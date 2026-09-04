import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Pricing Page Components
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingPlansSection } from "@/components/pricing/PricingPlansSection";
import { PricingWhyTrustSection } from "@/components/pricing/PricingWhyTrustSection";

// Common Components from Homepage
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

export const metadata: Metadata = {
  title: "ESA & PSD Letter Plans & Pricing | My ESA Therapist",
  description:
    "Transparent pricing for official Emotional Support Animal and Psychiatric Service Dog recommendation letters. No hidden fees, evaluations by licensed professionals.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section with Stat Pills, State Selector & Trustpilot */}
        <PricingHero />

        {/* 2. Emotional Support Animal & Psychiatric Service Dog Plans + More Than One Pet Add-on */}
        <PricingPlansSection />

        {/* 3. Why ESA Owners Trust Us (4 Feature Cards) */}
        <PricingWhyTrustSection />

        {/* 4. Commonly Used FAQ Section */}
        <FaqSection />

        {/* 5. Commonly Used PSD Letter CTA Banner */}
        <CtaBanner
          title="Need help with a PSD letter?"
          description="Connect with a state-licensed mental health professional to discuss your needs and see if a psychiatric service dog letter may be right for you."
          buttonText="Start your Evaluation"
          buttonHref="/psd-letter"
        />

        {/* 6. Content Reviewed by Doctor Badge */}
        <StateReviewerBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
