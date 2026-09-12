import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Reviews Components
import { ReviewsHeroSection } from "@/components/reviews/ReviewsHeroSection";
import { TrustpilotReviewsSection } from "@/components/reviews/TrustpilotReviewsSection";
import { ConsumerAffairsReviewsSection } from "@/components/reviews/ConsumerAffairsReviewsSection";

// Shared Components
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | My ESA Therapist",
  description:
    "Read verified reviews from real clients who found comfort and confidence through My ESA Therapist. Legitimate, HIPAA-compliant ESA and PSD letters accepted nationwide.",
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1">
        {/* Section 1: Reviews Hero Section with Stat Pills, State Selector & Trustpilot badge */}
        <ReviewsHeroSection />

        {/* Section 2: Trustpilot Reviews Grid */}
        <TrustpilotReviewsSection />

        {/* Section 3: Consumer Affairs Reviews Grid with Verification Bar */}
        <ConsumerAffairsReviewsSection />

        {/* Section 4: Ready to Start Your ESA Evaluation? CTA Banner */}
        <CtaBanner
          title="Ready to Start Your ESA Evaluation?"
          description="If you believe an Emotional Support Animal may be appropriate for your situation, you can begin a professional evaluation today."
          buttonText="Start your Evaluation"
          buttonHref="#trustpilot-reviews"
        />

        {/* Section 5: Medical Reviewer Banner (Dr. Nicole) */}
        <StateReviewerBanner
          reviewerName="Dr. Nicole"
          updatedDate="May 12, 2026"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
