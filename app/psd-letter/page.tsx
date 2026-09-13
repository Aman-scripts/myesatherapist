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
import { PsdQualifyingConditions } from "@/components/psd-letter/PsdQualifyingConditions";
import { WhoBenefitsSection } from "@/components/psd-letter/WhoBenefitsSection";
import { LicensedProfessionalsSection } from "@/components/psd-letter/LicensedProfessionalsSection";
import { PsdCapabilitiesSection } from "@/components/psd-letter/PsdCapabilitiesSection";
import { PsdComparisonTable } from "@/components/psd-letter/PsdComparisonTable";
import { PsdCtaSection } from "@/components/psd-letter/PsdCtaSection";

// Reused Common Components from Homepage
import { PricingSection } from "@/components/home/PricingSection";
import { FaqSection, FaqItem } from "@/components/home/FaqSection";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

export const metadata: Metadata = {
  title: "Psychiatric Service Dog (PSD) Letter Assistance | My ESA Therapist",
  description:
    "Connect with state-licensed mental health professionals for psychiatric service dog letter evaluations under ADA and federal housing guidelines.",
};

const PSD_FAQS: FaqItem[] = [
  {
    num: "01.",
    q: "What is a Psychiatric Service Dog (PSD) Letter?",
    a: "A PSD letter is an official document from a licensed mental health professional confirming you have a qualifying mental health condition under the ADA. It serves as backup documentation for your psychiatric service dog and includes the provider's license details, signature, and date of issue.",
  },
  {
    num: "02.",
    q: "Is a PSD Letter Required by Law?",
    a: "Under the ADA, a PSD letter is not legally required for public access. However, it is highly recommended as backup documentation and is often requested by airlines, landlords, and housing providers to verify your legitimate need for a service dog.",
  },
  {
    num: "03.",
    q: "What Conditions Qualify for a PSD Letter?",
    a: "Common qualifying conditions include anxiety disorders, depression, PTSD, panic disorder, and other mental health conditions recognized under the ADA. A licensed mental health professional will make the determination during your consultation based on your individual circumstances.",
  },
  {
    num: "04.",
    q: "How Long Does It Take to Get a PSD Letter?",
    a: "If you qualify, you may receive your PSD letter within 24-72 hours after your consultation, delivered via secure email. Timelines may vary based on therapist availability and the complexity of your case.",
  },
  {
    num: "05.",
    q: "What’s Included in a PSD Letter?",
    a: "Your letter will include a statement confirming you have an ADA-eligible mental health condition, the date of issue, the provider's signature, their license number, contact information, and clinic letterhead for easy verification.",
  },
  {
    num: "06.",
    q: "Can a PSD Letter Help With Housing and Air Travel?",
    a: "Your letter may support your needs for housing under the Fair Housing Act (subject to landlord approval) and may assist with air travel documentation requirements (subject to current airline policies). Always verify specific requirements with your housing provider or airline.",
  },
  {
    num: "07.",
    q: "Do I Need to Have a Service Dog Already?",
    a: "No, you do not need to have a service dog already. The PSD letter establishes that you have a qualifying disability, which is the first step toward obtaining and using a psychiatric service dog. Training and certification of the dog itself is a separate process.",
  },
  {
    num: "08.",
    q: "Is My PSD Letter Consultation Confidential?",
    a: "Yes, all PSD letter consultations are 100% HIPAA-compliant and confidential. Your information is protected under federal privacy laws and is only shared with your assigned licensed mental health professional.",
  },
];

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

        {/* 8. Common Qualifying Conditions for a PSD Letter */}
        <PsdQualifyingConditions />

        {/* 9. Who Benefits Most From PSD Letter */}
        <WhoBenefitsSection />

        {/* 10. Our Licensed Professionals for PSD Support */}
        <LicensedProfessionalsSection />

        {/* 11. What Can a Psychiatric Service Dog Do? */}
        <PsdCapabilitiesSection />

        {/* 12. Frequently Asked Questions */}
        <FaqSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about psychiatric service dog letters, the consultation process, and what to expect."
          faqs={PSD_FAQS}
        />

        {/* 13. Call to Action Banner (PSD Letter Specific Content) */}
        <PsdCtaSection />

        {/* 14. Content Reviewed by Doctor Badge */}
        <StateReviewerBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
