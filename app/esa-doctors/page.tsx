import { applySheetSeo } from "@/lib/seo";
import React from "react";
import { serializeLd } from "@/lib/site";
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

export const metadata: Metadata = applySheetSeo({
  title: "Meet Our Licensed Clinicians | My ESA Therapist",
  description:
    "Connect with state-licensed therapists and physicians nationwide for legitimate emotional support animal (ESA) evaluations through secure, HIPAA-compliant telehealth.",
  alternates: {
    canonical: "https://myesatherapist.com/esa-doctors/",
  },
  openGraph: {
    title: "Meet Our Licensed Clinicians | My ESA Therapist",
    description:
      "Connect with state-licensed therapists and physicians nationwide for legitimate emotional support animal (ESA) evaluations through secure, HIPAA-compliant telehealth.",
    url: "https://myesatherapist.com/esa-doctors/",
    siteName: "My ESA Therapist",
    type: "website",
    locale: "en_US",
    images: socialImage("our-therapist", "Our therapists").openGraph,
  },
  twitter: {
    card: "summary",
    site: "@MyESATherapist",
    creator: "@MyESATherapist",
    title: "Meet Our Licensed Clinicians | My ESA Therapist",
    description:
      "Connect with state-licensed therapists and physicians nationwide for legitimate emotional support animal (ESA) evaluations through secure, HIPAA-compliant telehealth.",
    images: socialImage("our-therapist", "Our therapists").twitter,
  },
});

import { esaDoctorsSchema } from "@/data/schemas/esaDoctorsSchema";
import { socialImage, withFeatureImage } from "@/data/socialImages";

export default function DoctorsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeLd(withFeatureImage(esaDoctorsSchema, "our-therapist")) }}
      />

      {/* Global Top Banner & Header */}
      <TopBanner />
      <Header />

      {/* Main Content Area */}
      <main className="min-h-screen bg-background">
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
          title="Learn More About ESA Evaluations"
          description="See how licensed professionals evaluate your need for an emotional support animal."
          buttonText="Start Your Evaluation"
          buttonHref="/pricing/"
        />

        {/* Clearance so the CTA photo does not meet the footer */}
        <div className="w-full h-16 sm:h-20 lg:h-28 bg-background" />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
