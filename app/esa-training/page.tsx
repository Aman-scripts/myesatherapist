import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Page Components
import { EsaTrainingHero } from "@/components/esa-training/EsaTrainingHero";
import { EsaTrainingLegalSection } from "@/components/esa-training/EsaTrainingLegalSection";
import { EsaTrainingVsServiceDog } from "@/components/esa-training/EsaTrainingVsServiceDog";
import { EsaTrainingBasicsSection } from "@/components/esa-training/EsaTrainingBasicsSection";
import { EsaTrainingBySpeciesSection } from "@/components/esa-training/EsaTrainingBySpeciesSection";
import { EsaTrainingDiySection } from "@/components/esa-training/EsaTrainingDiySection";
import { EsaTrainingConditionsSection } from "@/components/esa-training/EsaTrainingConditionsSection";
import { EsaTrainingBondSection } from "@/components/esa-training/EsaTrainingBondSection";
import { EsaTrainingMistakesSection } from "@/components/esa-training/EsaTrainingMistakesSection";

// Shared Site Components
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

// Schema.org Structured Data
import { esaTrainingSchema } from "@/data/schemas/esaTrainingSchema";

export const metadata: Metadata = {
  title: "Does Your ESA Actually Need Training? | My ESA Therapist",
  description:
    "Wondering whether your emotional support animal needs training? Here's the honest, complete answer, including what changed in 2026 and what it means for your housing rights.",
  alternates: {
    canonical: "https://myesatherapist.com/esa-training/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Does Your ESA Actually Need Training? | My ESA Therapist",
    description:
      "Wondering whether your emotional support animal needs training? Here's the honest, complete answer, including what changed in 2026 and what it means for your housing rights.",
    url: "https://myesatherapist.com/esa-training/",
    siteName: "My ESA Therapist",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Does Your ESA Actually Need Training? | My ESA Therapist",
    description:
      "Wondering whether your emotional support animal needs training? Here's the honest, complete answer, including what changed in 2026 and what it means for your housing rights.",
  },
};

const esaTrainingFaqs = [
  {
    num: "01.",
    q: "Does my ESA need a training certificate?",
    a: "No. There's no federal certification requirement. A legitimate ESA letter comes from a licensed mental health professional, not a training program.",
  },
  {
    num: "02.",
    q: "Will my landlord accept an untrained ESA?",
    a: "Legally, they still generally have to consider your accommodation request under the Fair Housing Act. With HUD's 2026 enforcement shift, though, a well-behaved animal and strong documentation matter more than they used to.",
  },
  {
    num: "03.",
    q: "Can an aggressive animal qualify as an ESA?",
    a: "An animal can be prescribed as an ESA, but reasonable accommodation has never required landlords to tolerate genuinely dangerous or destructive behavior. Training protects both your animal and your housing rights.",
  },
  {
    num: "04.",
    q: "How long does ESA training take?",
    a: "Depends on the animal and the behaviors you're working on. Basic obedience can be achieved in a few weeks of consistent practice; more complex behavioral work can take several months.",
  },
];

export default function EsaTrainingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1A1A] selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(esaTrainingSchema) }}
      />

      <TopBanner />
      <Header />

      <main className="flex-1">
        {/* 1. Hero */}
        <EsaTrainingHero />

        {/* 2. Legal Requirements */}
        <EsaTrainingLegalSection />

        {/* 3. ESA vs Service Dog Comparison Table */}
        <EsaTrainingVsServiceDog />

        {/* 4. Recommended Basics */}
        <EsaTrainingBasicsSection />

        {/* 6. Featured Training Blog Guides Cards */}

        {/* 7. Training by Animal Type */}
        <EsaTrainingBySpeciesSection />

        {/* 8. Can You Train Your ESA Yourself? (DIY vs Professional) */}
        <EsaTrainingDiySection />

        {/* 9. Mental Health Condition-Specific Training Support */}
        <EsaTrainingConditionsSection />

        {/* 10. The Human-Animal Bond */}
        <EsaTrainingBondSection />

        {/* 11. Common ESA Training Mistakes to Avoid */}
        <EsaTrainingMistakesSection />

        {/* 12. Frequently Asked Questions */}
        <FaqSection
          id="faq"
          title="ESA Training FAQs"
          subtitle="Common Questions"
          faqs={esaTrainingFaqs}
          bg="bg-[#FAF7F2]"
        />

        {/* 13. CTA Banner */}
        <CtaBanner
          title="Training Helps. A Licensed Evaluation Makes It Official."
          description="Training makes your ESA a better companion, but it's not what qualifies them as an ESA. That comes from a licensed mental health professional who evaluates your need and confirms the therapeutic benefit your animal provides."
          buttonText="Start Your ESA Evaluation Now"
          buttonHref="/pricing"
          bgColor="bg-[#FAF7F2]"
        />

        {/* 14. Reviewer Banner */}
        <StateReviewerBanner
          reviewerName="Dr. Nicole"
          updatedDate="May 12, 2026"
          reviewerImage="/blogs/dr-nicole-reviewer.jpg"
          reviewerLinkedin="https://www.linkedin.com/in/nicole-artrader/"
        />
      </main>

      <Footer />
    </div>
  );
}
