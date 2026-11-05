import { applySheetSeo } from "@/lib/seo";
import React from "react";
import { serializeLd } from "@/lib/site";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { ReviewsHeroSection } from "@/components/reviews/ReviewsHeroSection";
import { TrustpilotReviewsSection } from "@/components/reviews/TrustpilotReviewsSection";
import { ConsumerAffairsReviewsSection } from "@/components/reviews/ConsumerAffairsReviewsSection";

import { CtaBanner } from "@/components/home/CtaBanner";

import { reviewsSchema } from "@/data/schemas/reviewsSchema";
import { socialImage, withFeatureImage } from "@/data/socialImages";

export const metadata: Metadata = applySheetSeo({
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
    locale: "en_US",
    images: socialImage("customer-reviews", "Five-star customer reviews").openGraph,
  },
  twitter: {
    card: "summary",
    site: "@MyESATherapist",
    creator: "@MyESATherapist",
    title: "My ESA Therapist Reviews | Real Customer Experiences & Ratings",
    description:
      "Read verified My ESA Therapist reviews from real customers. See ratings, experiences, and why clients trust our fast, legitimate ESA letter services.",
    images: socialImage("customer-reviews", "Five-star customer reviews").twitter,
  },
});


export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent/30 selection:text-current">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeLd(withFeatureImage(reviewsSchema, "customer-reviews")) }}
      />

      <TopBanner />
      <Header />

      <main className="flex-1">
        <ReviewsHeroSection />

        <TrustpilotReviewsSection />

        <ConsumerAffairsReviewsSection />

        <CtaBanner
          title="Ready to Start Your ESA Evaluation?"
          description="If you believe an Emotional Support Animal may be appropriate for your situation, you can begin a professional evaluation today."
          buttonText="Start Your Evaluation"
          buttonHref="#trustpilot-reviews"
        />
      </main>

      <Footer />
    </div>
  );
}
