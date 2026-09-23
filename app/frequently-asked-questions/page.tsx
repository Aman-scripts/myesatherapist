import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqAccordionSection } from "@/components/faq/FaqAccordionSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

// Schema.org Structured Data
import { frequentlyAskedQuestionsSchemas } from "@/data/schemas/frequentlyAskedQuestionsSchema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions About ESA Letters | My ESA Therapist",
  description:
    "Find answers to frequently asked questions about ESA letters, eligibility, the evaluation process, housing accommodations, and emotional support animals.",
  alternates: {
    canonical: "https://myesatherapist.com/frequently-asked-questions/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Frequently Asked Questions About ESA Letters | My ESA Therapist",
    description:
      "Find answers to frequently asked questions about ESA letters, eligibility, the evaluation process, housing accommodations, and emotional support animals.",
    url: "https://myesatherapist.com/frequently-asked-questions/",
    siteName: "My ESA Therapist",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Frequently Asked Questions About ESA Letters | My ESA Therapist",
    description:
      "Find answers to frequently asked questions about ESA letters, eligibility, the evaluation process, housing accommodations, and emotional support animals.",
  },
};

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1A1A]">
      {/* Schema.org JSON-LD */}
      {frequentlyAskedQuestionsSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
      ))}

      {/* Top Announcement Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section with Responsive Background Artworks, Stat Pills, State Selector & Trustpilot */}
        <FaqHero />

        {/* 2. Full 20 FAQ Accordions List */}
        <FaqAccordionSection />

        {/* 3. Ready to Start Your ESA Evaluation CTA Banner (Project Standard CTA) */}
        <CtaBanner
          title="Ready to Start Your ESA Evaluation?"
          description="If you believe an Emotional Support Animal may be appropriate for your situation, you can begin a professional evaluation today."
          buttonText="Start your Evaluation"
          buttonHref="/pricing/"
        />

        {/* 4. Content Reviewed by Doctor Badge (Between CTA & Footer) */}
        <StateReviewerBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
