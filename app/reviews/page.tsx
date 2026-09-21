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

import { reviewsSchema } from "@/data/schemas/reviewsSchema";
import { socialImage, withFeatureImage } from "@/data/socialImages";

export const metadata: Metadata = {
  title: "My ESA Therapist Reviews | Real Customer Experiences & Ratings",
  description:
    "Read verified My ESA Therapist reviews from real customers. See ratings, experiences, and why clients trust our fast, legitimate ESA letter services.",
  alternates: {
    canonical: "https://myesatherapist.com/reviews/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "My ESA Therapist Reviews | Real Customer Experiences & Ratings",
    description:
      "Read verified My ESA Therapist reviews from real customers. See ratings, experiences, and why clients trust our fast, legitimate ESA letter services.",
    url: "https://myesatherapist.com/reviews/",
    siteName: "My ESA Therapist",
    type: "website",
    images: socialImage("customer-reviews", "Five-star customer reviews").openGraph,
  },
  twitter: {
    card: "summary_large_image",
    title: "My ESA Therapist Reviews | Real Customer Experiences & Ratings",
    description:
      "Read verified My ESA Therapist reviews from real customers. See ratings, experiences, and why clients trust our fast, legitimate ESA letter services.",
    images: socialImage("customer-reviews", "Five-star customer reviews").twitter,
  },
};


export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(withFeatureImage(reviewsSchema, "customer-reviews")) }}
      />

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
          className="pb-12 sm:pb-16 lg:pb-24"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
