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

export const metadata: Metadata = {
  title: "Client Video Testimonials | Real Stories, Real Impact | My ESA Therapist",
  description:
    "Hear directly from our clients about their journey with emotional support animal therapy and how we’ve helped them live better lives with legitimate ESA letters.",
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
    title: "Client Video Testimonials | Real Stories, Real Impact | My ESA Therapist",
    description:
      "Hear directly from our clients about their journey with emotional support animal therapy and how we’ve helped them live better lives with legitimate ESA letters.",
    url: "https://myesatherapist.com/video-testimonials/",
    siteName: "My ESA Therapist",
    type: "website",
    images: [
      {
        url: "https://myesatherapist.com/video_testimonial/video_testimonial-herosection.png",
        width: 1440,
        height: 624,
        alt: "Client Video Testimonials - My ESA Therapist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Video Testimonials | Real Stories, Real Impact | My ESA Therapist",
    description:
      "Hear directly from our clients about their journey with emotional support animal therapy and how we’ve helped them live better lives with legitimate ESA letters.",
    images: ["https://myesatherapist.com/video_testimonial/video_testimonial-herosection.png"],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
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
          description="If you believe an Emotional Support Animal may be appropriate for your situation, you can begin a professional evaluation today."
          buttonText="Start your Evaluation"
          buttonHref="/pricing"
          className="pb-0"
        />

        {/* 5. Content Reviewed by Doctor Badge */}
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
