import React from "react";
import { serializeLd } from "@/lib/site";
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
import { pricingSchema } from "@/data/schemas/pricingSchema";
import { socialImage, withFeatureImage } from "@/data/socialImages";
import { CHARGE_AND_REFUND, pageSocial } from "@/lib/seo";

const PRICING_TITLE = "ESA Letter Cost in 2026";
const PRICING_DESCRIPTION =
  "See ESA letter pricing, what each plan includes, and when your card is charged. No ID cards and no hidden fees.";

export const metadata: Metadata = {
  title: `${PRICING_TITLE} | My ESA Therapist`,
  description: PRICING_DESCRIPTION,
  alternates: {
    canonical: "https://myesatherapist.com/pricing/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  ...pageSocial({
    title: `${PRICING_TITLE} | My ESA Therapist`,
    description: PRICING_DESCRIPTION,
    url: "https://myesatherapist.com/pricing/",
    images: socialImage("esa-letter-cost", "ESA letter cost"),
  }),
};


const PRICING_FAQS: FaqItem[] = [
  {
    num: "01.",
    q: "When exactly is my card charged?",
    a: CHARGE_AND_REFUND,
  },
  {
    num: "02.",
    q: "Do any plans include an ESA ID card?",
    a: "No. An ESA or PSD letter is the clinical document. ID cards, registries, and certificates are not included because they are not legal proof of an assistance animal.",
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
    <div className="min-h-screen flex flex-col bg-background">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeLd(withFeatureImage(pricingSchema, "esa-letter-cost")) }}
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
          title="Frequently Asked Questions"
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
              charged when you book. See the Refund Policy for when a refund applies.
            </>
          }
          buttonText="Start Your ESA Evaluation"
          buttonHref="#plans"
          flushBottom
        />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
