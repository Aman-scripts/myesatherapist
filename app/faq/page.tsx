import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqAccordionSection } from "@/components/faq/FaqAccordionSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

export const metadata: Metadata = {
  title: "Emotional Support Animal (ESA) FAQs | My ESA Therapist",
  description:
    "Find clear, reliable answers to the top 20 questions about Emotional Support Animal (ESA) letters, legal housing protections under FHA, qualifications, and legitimate evaluations.",
  keywords: [
    "ESA FAQ",
    "Emotional Support Animal Questions",
    "ESA Letter Rules",
    "Fair Housing Act ESA",
    "How to get ESA letter",
    "ESA qualifications",
  ],
  openGraph: {
    title: "ESA Questions? We're Here to Help | My ESA Therapist",
    description:
      "Find simple, reliable answers to help you understand the ESA process, housing laws, and legitimate therapist evaluations.",
    url: "https://myesatherapist.com/faq",
    siteName: "My ESA Therapist",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://myesatherapist.com/faq",
  },
};

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1A1A]">
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
          buttonHref="/pricing"
        />

        {/* 4. Content Reviewed by Doctor Badge (Between CTA & Footer) */}
        <StateReviewerBanner
          reviewerName="Dr. Nicole"
          updatedDate="May 12, 2026"
          reviewerImage="/blogs/dr-nicole-reviewer.jpg"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
