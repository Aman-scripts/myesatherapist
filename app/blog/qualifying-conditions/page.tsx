import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QualifyingConditionsHero } from "@/components/qualifying-conditions/QualifyingConditionsHero";
import { QualifyingConditionsLearnMore } from "@/components/qualifying-conditions/QualifyingConditionsLearnMore";
import { QualifyingConditionsReasons } from "@/components/qualifying-conditions/QualifyingConditionsReasons";
import { QualifyingConditionsEligibility } from "@/components/qualifying-conditions/QualifyingConditionsEligibility";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

// Schema.org Structured Data
import { qualifyingConditionsSchemas } from "@/data/schemas/qualifyingConditionsSchema";

export const metadata: Metadata = {
  title: "ESA Qualifying Conditions: What Conditions May Qualify? | My ESA Therapist",
  description:
    "Explore mental health conditions that may qualify for an ESA letter, including anxiety, depression, PTSD, ADHD, and panic disorder. Learn about ESA eligibility.",
  alternates: {
    canonical: "https://myesatherapist.com/blog/qualifying-conditions/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "ESA Qualifying Conditions: What Conditions May Qualify? | My ESA Therapist",
    description:
      "Explore mental health conditions that may qualify for an ESA letter, including anxiety, depression, PTSD, ADHD, and panic disorder. Learn about ESA eligibility.",
    url: "https://myesatherapist.com/blog/qualifying-conditions/",
    siteName: "My ESA Therapist",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "ESA Qualifying Conditions: What Conditions May Qualify? | My ESA Therapist",
    description:
      "Explore mental health conditions that may qualify for an ESA letter, including anxiety, depression, PTSD, ADHD, and panic disorder. Learn about ESA eligibility.",
  },
};

const qualifyingConditionsFaqs = [
  {
    num: "01.",
    q: "What conditions may qualify someone for an ESA?",
    a: "Conditions such as anxiety, depression, PTSD, panic disorder, and other emotional or mental health challenges may qualify, depending on an individual's circumstances and professional evaluation.",
  },
  {
    num: "02.",
    q: "Do I need a diagnosis to get an ESA letter?",
    a: "A licensed mental health professional must determine whether an emotional support animal is appropriate based on your mental or emotional health needs.",
  },
  {
    num: "03.",
    q: "Can any animal be an emotional support animal?",
    a: "Many types of animals can serve as ESAs if they provide emotional support that helps alleviate symptoms of a qualifying condition.",
  },
  {
    num: "04.",
    q: "How do emotional support animals help people?",
    a: "ESAs can provide comfort, companionship, and emotional stability, which may help reduce feelings of stress, anxiety, loneliness, or other mental health symptoms.",
  },
];

export default function QualifyingConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1A1A] selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Schema.org JSON-LD */}
      {qualifyingConditionsSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
      ))}

      <TopBanner />
      <Header />

      <main className="flex-1">
        <QualifyingConditionsHero />
        <QualifyingConditionsLearnMore />
        <QualifyingConditionsReasons />
        <QualifyingConditionsEligibility />

        <FaqSection
          id="faq"
          title="Frequently Asked Questions"
          subtitle="Answers to the most common ESA questions"
          faqs={qualifyingConditionsFaqs}
          bg="bg-white"
        />

        <CtaBanner
          title="The Importance of a Professional Clinical Evaluation"
          description={
            "Qualifying for an ESA letter depends on an individualized assessment\n" +
            "conducted by a licensed mental health professional. A diagnosis alone\n" +
            "does not automatically guarantee eligibility. The evaluation focuses on\n" +
            "whether the presence of an emotional support animal is likely to help\n" +
            "reduce symptoms and improve daily functioning and well-being."
          }
          buttonText="Start Your ESA Evaluation Now"
          buttonHref="/pricing/"
          bgColor="bg-white"
          className="pb-12 sm:pb-16"
        />
      </main>

      <Footer />
    </div>
  );
}
