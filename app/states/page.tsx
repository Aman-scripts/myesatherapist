import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StatesHeroSection } from "@/components/states/StatesHeroSection";
import { FederalHousingRulesSection } from "@/components/states/FederalHousingRulesSection";
import { ChooseStateGridSection } from "@/components/states/ChooseStateGridSection";
import { FaqSection, FaqItem } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";
import { statesSchema } from "@/data/schemas/statesSchema";

export const metadata: Metadata = {
  title: "ESA Evaluations by State | My ESA Therapist",
  description:
    "Explore ESA evaluation options by state. Connect with licensed mental health professionals for compliant emotional support animal assessments.",
  openGraph: {
    title: "ESA Evaluations by State | My ESA Therapist",
    description:
      "Explore ESA evaluation options by state. Connect with licensed mental health professionals for compliant emotional support animal assessments.",
    url: "https://myesatherapist.com/states",
    type: "website",
  },
  alternates: {
    canonical: "https://myesatherapist.com/states",
  },
};

const STATES_FAQS: FaqItem[] = [
  {
    num: "01.",
    q: "Which States Have the Strict ESA Laws?",
    a: "States like California, Montana, Arkansas, Louisiana, and Iowa require ESA owners to have at least a 30-day relationship with their mental health professional before an ESA evaluation can be conducted.",
  },
  {
    num: "02.",
    q: "Can a Landlord Deny an ESA in Any State?",
    a: "No. Under the Fair Housing Act (FHA), landlords cannot deny an emotional support animal (ESA) as long as you have a legitimate ESA letter based on an evaluation conducted by a licensed professional.",
  },
  {
    num: "03.",
    q: "Can an Online ESA Letter Be Valid in My State?",
    a: "Yes, if the letter comes from a licensed mental health professional who conducts a legitimate telehealth evaluation. Documentation generated instantly or through automated processes without a proper clinical assessment may be rejected by housing providers.",
  },
  {
    num: "04.",
    q: "Do ESA Owners Need Additional Documentation in Certain States?",
    a: "Generally, a valid ESA letter is sufficient in all 50 states. However, some states require an established 30-day patient-provider relationship with the licensed mental health professional conducting the evaluation. Many states also note that ESA letters expire after 12 months and must be renewed.",
  },
  {
    num: "05.",
    q: "Can I Use an ESA Letter From Another State?",
    a: "You generally cannot use emotional support documentation issued by a professional licensed in another state. The evaluation must be completed by a mental health professional licensed in the state where you currently reside to meet state-specific requirements and Fair Housing Act (FHA) standards. States such as California, Arkansas, Iowa, Louisiana, and Montana also require an established patient–provider relationship. If you move, a new in-state evaluation is typically needed to remain compliant.",
  },
];

export default function StatesDirectoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900 selection:bg-[#E8B92C]/30">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(statesSchema) }}
      />

      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        {/* 1. Hero Section with Map Pin Icon and State Dropdown */}
        <StatesHeroSection />

        {/* 2. Federal Housing Protections & State ESA Rules */}
        <FederalHousingRulesSection />

        {/* 3. 4-Column Grid of All 50 US States */}
        <ChooseStateGridSection />

        {/* 4. Frequently Asked Questions Section */}
        <FaqSection
          title="Frequently Asked Questions"
          subtitle="Answers to your most common questions about ESA assessment and housing rules by state."
          faqs={STATES_FAQS}
        />

        {/* 5. Common CTA Banner Section */}
        <CtaBanner buttonHref="#choose-state-section" />

        {/* 6. Content Reviewed by Doctor Badge */}
        <StateReviewerBanner />
      </main>

      <Footer />
    </div>
  );
}
