import React from "react";
import type { Metadata } from "next";

import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { EsaRenewalHero } from "@/components/esa-renewal/EsaRenewalHero";
import { EsaRenewalTrustCards } from "@/components/esa-renewal/EsaRenewalTrustCards";
import { EsaRenewalWhySection } from "@/components/esa-renewal/EsaRenewalWhySection";
import { EsaRenewalHowItWorks } from "@/components/esa-renewal/EsaRenewalHowItWorks";
import { EsaRenewalPricing } from "@/components/esa-renewal/EsaRenewalPricing";
import { EsaRenewalImportantCallout } from "@/components/esa-renewal/EsaRenewalImportantCallout";
import { EsaRenewalHousingSection } from "@/components/esa-renewal/EsaRenewalHousingSection";
import { EsaRenewalLicensedPros } from "@/components/esa-renewal/EsaRenewalLicensedPros";
import { EsaRenewalForWhom } from "@/components/esa-renewal/EsaRenewalForWhom";
import { EsaRenewalWhatToKnow } from "@/components/esa-renewal/EsaRenewalWhatToKnow";

// Shared Site Components
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

// Schema.org Structured Data
import { esaRenewalSchemas } from "@/data/schemas/esaRenewalSchema";
import { socialImage, withFeatureImage } from "@/data/socialImages";

export const metadata: Metadata = {
  title: "ESA Letter Renewal Online by Licensed Therapists | My ESA Therapist",
  description:
    "Need to renew your ESA letter? My ESA Therapist offers simple online renewals with licensed therapists and quick turnaround.",
  alternates: {
    canonical: "https://myesatherapist.com/esa-letter-renewal/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "ESA Letter Renewal Online by Licensed Therapists | My ESA Therapist",
    description:
      "Need to renew your ESA letter? My ESA Therapist offers simple online renewals with licensed therapists and quick turnaround.",
    url: "https://myesatherapist.com/esa-letter-renewal/",
    siteName: "My ESA Therapist",
    type: "website",
    images: socialImage("esa-letter-renewal", "Online ESA letter renewal").openGraph,
  },
  twitter: {
    card: "summary_large_image",
    title: "ESA Letter Renewal Online by Licensed Therapists | My ESA Therapist",
    description:
      "Need to renew your ESA letter? My ESA Therapist offers simple online renewals with licensed therapists and quick turnaround.",
    images: socialImage("esa-letter-renewal", "Online ESA letter renewal").twitter,
  },
};

const esaRenewalFaqs = [
  {
    num: "01.",
    q: "Is My ESA Therapist Legitimate?",
    a: "Yes. My ESA Therapist connects you directly with independent, state-licensed mental health professionals (LMHPs) who conduct clinical assessments in full compliance with federal Fair Housing Act (FHA) and HUD regulations. Every letter issued includes the clinician's official state license number, contact details, and clinical verification.",
  },
  {
    num: "02.",
    q: "How Does My ESA Therapist Work?",
    a: "Our process is simple and transparent: 1) Complete a confidential online pre-screening questionnaire; 2) Schedule a telehealth consultation with a licensed clinician in your state; 3) If qualified, receive your official ESA recommendation letter delivered securely via email.",
  },
  {
    num: "03.",
    q: "Is My Information Safe With My ESA?",
    a: "Yes. We take privacy extremely seriously. All personal and clinical information is encrypted, transmitted securely, and protected under strict HIPAA-compliant protocols. We will never share or sell your private information.",
  },
  {
    num: "04.",
    q: "Do I Need to Renew My ESA Letter Every Year?",
    a: "Most housing providers and property managers request that an ESA recommendation letter be dated within the last 12 months. An annual renewal evaluation helps ensure that your documentation accurately reflects your current emotional support animal needs.",
  },
  {
    num: "05.",
    q: "Can a Landlord Reject an ESA Letter?",
    a: "Under the Fair Housing Act, landlords cannot deny reasonable accommodation for emotional support animals with valid documentation from a licensed provider, except under specific narrow exemptions (such as owner-occupied buildings with four or fewer units).",
  },
  {
    num: "06.",
    q: "How Quickly Can I Receive My Renewal Letter?",
    a: "After your telehealth evaluation is completed and your renewal is approved by the licensed professional, your official renewed ESA letter is delivered electronically in PDF format within 24 to 48 hours.",
  },
];

export default function EsaRenewalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      {/* Schema.org JSON-LD */}
      {esaRenewalSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(withFeatureImage(schemaObj, "esa-letter-renewal")) }}
        />
      ))}

      {/* 1. Global Notification Banner */}
      <TopBanner />

      {/* 2. Global Header */}
      <Header />

      {/* 3. Page Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Quick States Ribbon, Stats, and Ratings */}
        <EsaRenewalHero />

        {/* 4 Trust Feature Cards */}
        <EsaRenewalTrustCards />

        {/* Why Consider Renewing Section */}
        <EsaRenewalWhySection />

        {/* 3-Step Process: How the ESA Letter Renewal Process Works */}
        <EsaRenewalHowItWorks />

        {/* Plans & Pricing (New Letter vs Renewal) */}
        <EsaRenewalPricing />

        {/* Important Disclaimer Callout */}
        <EsaRenewalImportantCallout />

        {/* Renewals for Housing Accommodation Requests */}
        <EsaRenewalHousingSection />

        {/* Licensed Professionals Across All 50 States */}
        <EsaRenewalLicensedPros />

        {/* Who This Renewal Service is For (Ideal For vs Not Intended For) */}
        <EsaRenewalForWhom />

        {/* What to Know Before You Start */}
        <EsaRenewalWhatToKnow />

        {/* Frequently Asked Questions */}
        <FaqSection
          id="faq"
          title="Frequently Asked Questions"
          subtitle="Answers to the most common ESA renewal questions"
          faqs={esaRenewalFaqs}
          bg="bg-[#FAF7F2]"
        />

        {/* Pre-Footer Call to Action Banner */}
        <CtaBanner
          buttonHref="#pricing"
          bgColor="bg-[#FAF7F2]"
          className="pb-12 sm:pb-16"
        />
      </main>

      {/* 4. Global Footer */}
      <Footer />
    </div>
  );
}
