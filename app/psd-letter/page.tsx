import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// PSD Letter Dedicated Components
import { PsdHeroSection } from "@/components/psd-letter/PsdHeroSection";
import { PsdTrustBarSection } from "@/components/psd-letter/PsdTrustBarSection";
import { WhatIsPsdSection } from "@/components/psd-letter/WhatIsPsdSection";
import { PsdBenefitsSection } from "@/components/psd-letter/PsdBenefitsSection";
import { PsdProcessSection } from "@/components/psd-letter/PsdProcessSection";
import { WhoBenefitsSection } from "@/components/psd-letter/WhoBenefitsSection";
import { LicensedProfessionalsSection } from "@/components/psd-letter/LicensedProfessionalsSection";
import { PsdCapabilitiesSection } from "@/components/psd-letter/PsdCapabilitiesSection";
import { PsdComparisonTable } from "@/components/psd-letter/PsdComparisonTable";

// Reused Common Components from Homepage
import { PricingSection } from "@/components/home/PricingSection";
import { QualifyingConditions } from "@/components/home/QualifyingConditions";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Psychiatric Service Dog (PSD) Letter Assistance | My ESA Therapist",
  description:
    "Connect with state-licensed mental health professionals for psychiatric service dog letter evaluations under ADA and federal housing guidelines.",
};

export default function PsdLetterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Navigation */}
      <TopBanner />
      <Header />

      <main className="flex-1">
        {/* 1. PSD Hero Section */}
        <PsdHeroSection />

        {/* 2. Trust Bar & As Seen On Section */}
        <PsdTrustBarSection />

        {/* 3. What is a PSD Letter Section */}
        <WhatIsPsdSection />

        {/* 4. Understanding PSD Letter Benefits */}
        <PsdBenefitsSection />

        {/* 5. Simple 3-Step Process */}
        <PsdProcessSection />

        {/* 6. Plans & Pricing (Warm background bg-[#FAF7F2] matching Benefits Section) */}
        <div id="pricing">
          <PricingSection bgColor="bg-[#FAF7F2]" />
        </div>

        {/* 7. PSD vs ESA Comparison Table (Dedicated Section) */}
        <PsdComparisonTable />

        {/* 8. Common Qualifying Conditions (Common Section) */}
        <QualifyingConditions />

        {/* 9. Who Benefits Most From PSD Letter */}
        <WhoBenefitsSection />

        {/* 10. Licensed Professionals Ready to Help (Frame 1000011783) */}
        <LicensedProfessionalsSection />

        {/* 11. What a Psychiatric Service Dog Can Do */}
        <PsdCapabilitiesSection />

        {/* 12. Frequently Asked Questions (Common Section) */}
        <FaqSection />

        {/* 13. Call to Action Banner (PSD Letter Specific Content) */}
        <CtaBanner
          title="Need help with a PSD letter?"
          description="Connect with a state-licensed mental health professional to discuss your needs and see if a psychiatric service dog letter may be right for you."
          buttonText="Start your Evaluation"
          buttonHref="#pricing"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
