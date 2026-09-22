import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Video Testimonials Components
import { VideoTestimonialsHeroSection } from "@/components/video-testimonials/VideoTestimonialsHeroSection";
import { VideoTestimonialsGridSection } from "@/components/video-testimonials/VideoTestimonialsGridSection";

// Shared Components
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

import { videoTestimonialsSchemas } from "@/data/schemas/videoTestimonialsSchema";
import { socialImage, withFeatureImage } from "@/data/socialImages";

export const metadata: Metadata = {
  title: "ESA Letter Reviews - Video Reviews | My ESA Therapist",
  description:
    "Watch real customer video testimonials about their ESA letter experience with My ESA Therapist. See how our process helps you get started quickly and easily.",
  alternates: {
    canonical: "https://myesatherapist.com/video-testimonials/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "ESA Letter Reviews - Video Reviews | My ESA Therapist",
    description:
      "Watch real customer video testimonials about their ESA letter experience with My ESA Therapist. See how our process helps you get started quickly and easily.",
    url: "https://myesatherapist.com/video-testimonials/",
    siteName: "My ESA Therapist",
    type: "website",
    images: socialImage("video-testimonials", "Customer video testimonials").openGraph,
  },
  twitter: {
    card: "summary_large_image",
    title: "ESA Letter Reviews - Video Reviews | My ESA Therapist",
    description:
      "Watch real customer video testimonials about their ESA letter experience with My ESA Therapist. See how our process helps you get started quickly and easily.",
    images: socialImage("video-testimonials", "Customer video testimonials").twitter,
  },
};

export default function VideoTestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1A1A] selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Schema.org JSON-LD Structured Data */}
      {videoTestimonialsSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(withFeatureImage(schemaObj, "video-testimonials")) }}
        />
      ))}

      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section (with Trust Stats Bar positioned exactly half on hero bottom and half on section below) */}
        <VideoTestimonialsHeroSection />

        {/* 2. Client Video Testimonials Grid (7 Cards with Video Modal) */}
        <VideoTestimonialsGridSection />

        {/* 4. Ready to Start Your ESA Evaluation? CTA Banner */}
        <CtaBanner
          title="Ready to Start Your ESA Evaluation?"
          description={
            "If you believe an Emotional Support Animal may be appropriate\n" +
            "for your situation, you can begin a professional evaluation today."
          }
          buttonText="Start your Evaluation"
          buttonHref="/pricing/"
          className="pb-0"
        />

        {/* 5. Content Reviewed by Doctor Badge */}
        <StateReviewerBanner
          reviewerName="Dr. Nicole"
          updatedDate="May 12, 2026"
          reviewerImage="/blogs/dr-nicole-reviewer.webp"
          reviewerLinkedin="https://www.linkedin.com/in/nicole-artrader/"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
