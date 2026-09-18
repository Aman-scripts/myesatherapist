import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DoctorsHeroSection } from "@/components/doctors/DoctorsHeroSection";
import { DoctorsListingSection } from "@/components/doctors/DoctorsListingSection";
import { DoctorsAllStatesSection } from "@/components/doctors/DoctorsAllStatesSection";
import { DoctorsMatchingSection } from "@/components/doctors/DoctorsMatchingSection";
import { DoctorsDisclosureSection } from "@/components/doctors/DoctorsDisclosureSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

export const metadata: Metadata = {
  title: "Meet Our Licensed Mental Health Professionals | My ESA Therapist",
  description:
    "Connect with state-licensed therapists and physicians nationwide for legitimate emotional support animal (ESA) evaluations through secure, HIPAA-compliant telehealth.",
  alternates: {
    canonical: "https://myesatherapist.com/esa-doctors/",
  },
  openGraph: {
    title: "Meet Our Licensed Mental Health Professionals | My ESA Therapist",
    description:
      "Connect with state-licensed therapists and physicians nationwide for legitimate emotional support animal (ESA) evaluations through secure, HIPAA-compliant telehealth.",
    url: "https://myesatherapist.com/esa-doctors/",
    type: "website",
    images: [
      {
        url: "/doctors/doctors_hero-section.png",
        width: 1440,
        height: 768,
        alt: "Meet Our Licensed Mental Health Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Licensed Mental Health Professionals | My ESA Therapist",
    description:
      "Connect with state-licensed therapists and physicians nationwide for legitimate emotional support animal (ESA) evaluations through secure, HIPAA-compliant telehealth.",
    images: ["/doctors/doctors_hero-section.png"],
  },
};

import { esaDoctorsSchema } from "@/data/schemas/esaDoctorsSchema";

export default function DoctorsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(esaDoctorsSchema) }}
      />

      {/* Global Top Banner & Header */}
      <TopBanner />
      <Header />

      {/* Main Content Area */}
      <main className="min-h-screen bg-[#FAF7F2]">
        {/* Hero Section */}
        <DoctorsHeroSection />

        {/* Doctors Grid Listing Section */}
        <DoctorsListingSection />

        {/* We're in All 50 US States Section */}
        <DoctorsAllStatesSection />

        {/* How You're Matched With a Provider Section */}
        <DoctorsMatchingSection />

        {/* Important Provider Disclosure Section */}
        <DoctorsDisclosureSection />

        {/* CTA Banner Section */}
        <CtaBanner
          title={`Learn More About\nESA Evaluations`}
          description="Understand how the ESA evaluation process works."
          buttonText="Start your Evaluation"
          buttonHref="/pricing/"
        />

        {/* State Reviewer Banner (above footer and below cta section) */}
        <StateReviewerBanner />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
