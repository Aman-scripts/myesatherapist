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

// Schema.org Structured Data
import { esaTrainingSchemas } from "@/data/schemas/esaTrainingSchema";

export const metadata: Metadata = {
  title: "Does Your ESA Actually Need Training? | My ESA Therapist",
  description:
    "Wondering whether your emotional support animal needs training? Here's the honest, complete answer, including what changed in 2026 and what it means for your housing rights.",
  alternates: {
    canonical: "https://myesatherapist.com/blog/esa-training/",
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
    url: "https://myesatherapist.com/blog/esa-training/",
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
      {esaTrainingSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
      ))}

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

        {/* 5. Training by Animal Type */}
        <EsaTrainingBySpeciesSection />

        {/* 6. Can You Train Your ESA Yourself? (DIY vs Professional) */}
        <EsaTrainingDiySection />

        {/* 7. Mental Health Condition-Specific Training Support */}
        <EsaTrainingConditionsSection />

        {/* 8. The Human-Animal Bond */}
        <EsaTrainingBondSection />

        {/* 9. Common ESA Training Mistakes to Avoid */}
        <EsaTrainingMistakesSection />

        {/* 10. Frequently Asked Questions */}
        <FaqSection
          id="faq"
          title="ESA Training FAQs"
          subtitle="Common Questions"
          faqs={esaTrainingFaqs}
          bg="bg-[#FAF7F2]"
        />

        {/* 11. CTA Banner */}
        <CtaBanner
          title="Training Helps. A Licensed Evaluation Makes It Official."
          description={
            "Training makes your ESA a better companion, but it's not what qualifies\n" +
            "them as an ESA. That comes from a licensed mental health professional\n" +
            "who evaluates your need and confirms the therapeutic benefit\n" +
            "your animal provides."
          }
          buttonText="Start Your ESA Evaluation Now"
          buttonHref="/pricing/"
          bgColor="bg-[#FAF7F2]"
          className="pb-12 sm:pb-16"
        />
      </main>

      <Footer />
    </div>
  );
}
