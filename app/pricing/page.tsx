import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Pricing Page Components
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingPlansSection } from "@/components/pricing/PricingPlansSection";
import { PricingWhyTrustSection } from "@/components/pricing/PricingWhyTrustSection";

// Common Shared Components from Homepage / Project
import { FaqSection, FaqItem } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";
import { pricingSchema } from "@/data/schemas/pricingSchema";

export const metadata: Metadata = {
  title: "How Much Does an ESA Letter Cost in 2026? | My ESA Therapist",
  description:
    "Transparent pricing for official Emotional Support Animal and Psychiatric Service Dog recommendation letters. No hidden fees, evaluations by licensed professionals.",
  alternates: {
    canonical: "https://myesatherapist.com/pricing/",
  },
  openGraph: {
    title: "How Much Does an ESA Letter Cost in 2026? | My ESA Therapist",
    description:
      "Transparent pricing for official Emotional Support Animal and Psychiatric Service Dog recommendation letters. No hidden fees, evaluations by licensed professionals.",
    url: "https://myesatherapist.com/pricing/",
    type: "website",
  },
};

const PRICING_FAQS: FaqItem[] = [
  {
    num: "01.",
    q: "When exactly is my card charged?",
    a: "Your card is authorized at booking to hold your appointment slot, but the actual charge only occurs after your telehealth evaluation is completed and you are approved by the licensed professional. If not approved, no charge is made.",
  },
  {
    num: "02.",
    q: "What is included in the ID Card?",
    a: "The ID card is a supplementary identification document for your ESA or PSD. It makes it easier to identify your animal to landlords and property managers. Note that ID cards alone do not convey legal rights, the letter remains the primary legal document.",
  },
  {
    num: "03.",
    q: "Are there any hidden fees?",
    a: "No. The price listed is the price you pay with no registration fees, platform fees, or additional charges beyond the selected package price.",
  },
  {
    num: "04.",
    q: "What is the difference between ESA and PSD?",
    a: "An Emotional Support Animal (ESA) provides comfort through companionship and is recognized under housing laws (FHA). A Psychiatric Service Dog (PSD) is trained to perform specific tasks for a psychiatric disability and has broader rights under the ADA including public access. Both require a clinical evaluation.",
  },
  {
    num: "05.",
    q: "Can I add more than one pet?",
    a: "Yes. Each animal requires its own clinical evaluation and documentation. You can select the “More than one pet” add-on during checkout to include coverage for a second or additional animal.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section with Stat Pills, State Selector & Trustpilot */}
        <PricingHero />

        {/* 2. Emotional Support Animal & Psychiatric Service Dog Plans + More Than One Pet Add-on */}
        <PricingPlansSection />

        {/* 3. You Only Pay After Your Evaluation (Why Trust Us 4-Card Style) */}
        <PricingWhyTrustSection />

        {/* 5. Common ESA Letter Pricing Questions (Shared Project FaqSection) */}
        <FaqSection
          title="Common ESA Letter Pricing Questions"
          subtitle="Get answers to common questions about ESA letters and our service."
          faqs={PRICING_FAQS}
        />

        {/* 6. Ready to Start Your ESA Evaluation? (Shared Project CtaBanner) */}
        <CtaBanner
          title="Ready to Start Your ESA Evaluation?"
          description={
            <>
              Choose your package and book your appointment today. You are only{" "}
              <br className="hidden sm:inline" />
              charged after your evaluation is complete.
            </>
          }
          buttonText="Start Your ESA Evaluation"
          buttonHref="#plans"
        />

        {/* 7. Content Reviewed by Doctor Badge */}
        <StateReviewerBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
