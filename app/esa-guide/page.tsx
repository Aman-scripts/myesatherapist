import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Page Components
import { EsaGuideHero } from "@/components/esa-guide/EsaGuideHero";
import { EsaGuideFeaturedGuide } from "@/components/esa-guide/EsaGuideFeaturedGuide";
import { EsaGuideFilterableGrid } from "@/components/esa-guide/EsaGuideFilterableGrid";
import { EsaGuideWhyResearch } from "@/components/esa-guide/EsaGuideWhyResearch";
import { EsaGuideTrustHub } from "@/components/esa-guide/EsaGuideTrustHub";

// Shared Site Components
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

// Schema.org Structured Data
import { esaGuideSchemas } from "@/data/schemas/esaGuideSchema";

export const metadata: Metadata = {
  title: "ESA Guide: Emotional Support Animal Information & Resources | My ESA Therapist",
  description:
    "Explore emotional support animal laws, housing rights, ESA benefits, therapist evaluations, and expert guidance in one complete ESA resource center.",
  alternates: {
    canonical: "https://myesatherapist.com/esa-guide/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "ESA Guide: Emotional Support Animal Information & Resources | My ESA Therapist",
    description:
      "Explore emotional support animal laws, housing rights, ESA benefits, therapist evaluations, and expert guidance in one complete ESA resource center.",
    url: "https://myesatherapist.com/esa-guide/",
    siteName: "My ESA Therapist",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "ESA Guide: Emotional Support Animal Information & Resources | My ESA Therapist",
    description:
      "Explore emotional support animal laws, housing rights, ESA benefits, therapist evaluations, and expert guidance in one complete ESA resource center.",
  },
};

const esaGuideFaqs = [
  {
    num: "01.",
    q: "Why do people have emotional support animals?",
    a: "Many individuals find comfort, companionship, and emotional reassurance through their relationship with an emotional support animal. Companion animals may help support emotional wellness routines and reduce feelings of isolation for some individuals.",
  },
  {
    num: "02.",
    q: "Are emotional support animals considered pets?",
    a: "Although emotional support animals are companion animals, certain housing accommodations may apply when an individual has valid documentation from a licensed professional.",
  },
  {
    num: "03.",
    q: "Can emotional support animals help with emotional wellness?",
    a: "Some individuals report that emotional support animals help create emotional stability, routine, and companionship during stressful or emotionally difficult periods.",
  },
  {
    num: "04.",
    q: "Do emotional support animals require specialized training?",
    a: "Unlike service animals, emotional support animals are not required to complete task-specific training programs.",
  },
];

export default function EsaGuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1A1A] selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Schema.org JSON-LD Structured Data */}
      {esaGuideSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
      ))}

      {/* Top Banner & Header */}
      <TopBanner />
      <Header />


      <main className="flex-1">
        {/* 1. Hero: Resource Hub & Introduction */}
        <EsaGuideHero />

        {/* 2. Featured Guide Card */}
        <EsaGuideFeaturedGuide />

        <EsaGuideFilterableGrid />

        {/* 4. Why People Research ESAs (2-column editorial context) */}
        <EsaGuideWhyResearch />

        {/* 5. Your Trusted ESA Resource Hub (3 trust pillars) */}
        <EsaGuideTrustHub />

        {/* 6. Standard Project FAQ Section */}
        <FaqSection
          id="faq"
          title="Frequently Asked Questions"
          subtitle="Answers to the most common ESA questions"
          faqs={esaGuideFaqs}
          bg="bg-white"
        />

        {/* 7. Standard Project CTA Banner */}
        <CtaBanner
          title="Educational Resource Commitment"
          description="At My ESA Therapist, educational content is designed to help individuals better understand emotional support animals, housing accommodations, and mental wellness resources through accessible and easy-to-follow information. The goal of this resource center is to support responsible education while encouraging individuals to seek guidance from qualified licensed professionals when appropriate."
          buttonText="Start your Evaluation"
          buttonHref="/pricing"
          bgColor="bg-white"
        />

        {/* 8. Content Reviewed by Doctor Badge */}
        <StateReviewerBanner
          reviewerName="Dr. Nicole"
          updatedDate="May 12, 2026"
          reviewerImage="/blogs/dr-nicole-reviewer.jpg"
          reviewerLinkedin="https://www.linkedin.com/in/nicole-artrader/"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
