import React from "react";
import { serializeLd } from "@/lib/site";
import type { Metadata } from "next";

import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { EsaOnlineHero } from "@/components/esa-online/EsaOnlineHero";
import { EsaHousingBarriers } from "@/components/esa-housing/EsaHousingBarriers";
import { EsaHousingLaws } from "@/components/esa-housing/EsaHousingLaws";
import { EsaHousingHowItWorks } from "@/components/esa-housing/EsaHousingHowItWorks";
import { EsaHousingMoveForward } from "@/components/esa-housing/EsaHousingMoveForward";
import { EsaHousingConditions } from "@/components/esa-housing/EsaHousingConditions";
import { EsaHousingQualify } from "@/components/esa-housing/EsaHousingQualify";
import { EsaHousingWhoCanIssue } from "@/components/esa-housing/EsaHousingWhoCanIssue";
import { EsaHousingCredentials } from "@/components/esa-housing/EsaHousingCredentials";
import { EsaHousingLandlordRefuse } from "@/components/esa-housing/EsaHousingLandlordRefuse";
import { EsaHousingDenied } from "@/components/esa-housing/EsaHousingDenied";

// Shared Site Components
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

// Schema.org Structured Data
import { esaLetterForHousingSchemas } from "@/data/schemas/esaLetterForHousingSchema";
import { socialImage, withFeatureImage } from "@/data/socialImages";

export const metadata: Metadata = {
  title: "ESA Letter for Housing Online | Licensed & FHA-Compliant - My ESA Therapist",
  description:
    "Facing 'no-pet' housing rules? Get an FHA-compliant ESA letter for housing online from a licensed therapist. Secure, confidential and pay only if approved.",
  alternates: {
    canonical: "https://myesatherapist.com/esa-letter-for-housing/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "ESA Letter for Housing Online | Licensed & FHA-Compliant - My ESA Therapist",
    description:
      "Facing 'no-pet' housing rules? Get an FHA-compliant ESA letter for housing online from a licensed therapist. Secure, confidential and pay only if approved.",
    url: "https://myesatherapist.com/esa-letter-for-housing/",
    siteName: "My ESA Therapist",
    type: "website",
    locale: "en_US",
    images: socialImage("esa-letter-for-housing", "Pet-friendly home comfort").openGraph,
  },
  twitter: {
    card: "summary_large_image",
    site: "@MyESATherapist",
    creator: "@MyESATherapist",
    title: "ESA Letter for Housing Online | Licensed & FHA-Compliant - My ESA Therapist",
    description:
      "Facing 'no-pet' housing rules? Get an FHA-compliant ESA letter for housing online from a licensed therapist. Secure, confidential and pay only if approved.",
    images: socialImage("esa-letter-for-housing", "Pet-friendly home comfort").twitter,
  },
};

const HOUSING_FAQS = [
  {
    q: "What should I do if my landlord asks for additional documents?",
    a: "A valid ESA letter from a licensed mental health professional is generally sufficient. A landlord may verify the professional’s license or contact information, but they cannot request medical records, pet deposits, or proof of specialized training.",
  },
  {
    q: "Which housing arrangements fall outside the protections of the Fair Housing Act?",
    a: "Some types of housing are not subject to all Fair Housing Act requirements. These may include certain small, owner-occupied properties, select privately rented single-family homes, and housing operated by religious organizations or private clubs for their members. Limited exemptions may also apply to qualifying age-restricted housing that meets specific legal criteria.",
  },
  {
    q: "Can a landlord say no to an ESA because it’s too difficult to accommodate?",
    a: "In limited situations, yes. A landlord may deny an ESA request if accommodating the animal would create an undue burden, such as significant operational difficulty or expense. However, inconvenience alone is not enough, there must be a legitimate, well-supported reason tied to the property or its operation.",
  },
  {
    q: "Can I get an ESA letter for housing online at no cost?",
    a: "No. Legitimate ESA letters require an evaluation by a licensed mental health professional, which involves time and professional oversight. Services offering free or instant letters are often not valid for housing purposes.",
  },
  {
    q: "How long should a landlord take to respond to an ESA request?",
    a: "Housing providers are expected to respond to reasonable accommodation requests within a reasonable timeframe, often around 10–14 days. Delays without explanation may warrant a written follow-up.",
  },
  {
    q: "Should I submit my ESA letter before or after moving?",
    a: "It’s generally best to submit your ESA letter before moving in or as soon as the need arises. Providing documentation early helps avoid delays or misunderstandings, but housing providers must still consider reasonable accommodation requests even after tenancy has begun.",
  },
  {
    q: "Can my landlord charge cleaning or wear-and-tear fees upfront?",
    a: "No. Upfront pet or cleaning fees are not allowed for ESAs. However, tenants remain responsible for actual damage beyond normal wear.",
  },
  {
    q: "Can my landlord deny my ESA because the building is furnished or newly renovated?",
    a: "No. Concern about potential damage does not justify denial. Tenants are responsible for any actual damage caused, but that risk cannot be assumed in advance.",
  },
];

export default function EsaLetterForHousingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Schema.org JSON-LD */}
      {esaLetterForHousingSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeLd(withFeatureImage(schemaObj, "esa-letter-for-housing")) }}
        />
      ))}

      <TopBanner />
      <Header />

      <main className="flex-1">
        <EsaOnlineHero
          title="Online ESA Letter for Housing From Licensed Therapist"
          description="Connect with a licensed mental health professional for a secure online ESA evaluation. When clinically appropriate, documentation may be provided to support a housing-related accommodation request."
          buttonText="Start Your Application"
          refundText="Not approved after your evaluation? You get a full refund."
          showStats
          image="/esa-housing/esa-letter-housing-herosection.webp"
          imageMobile="/hero-image-for-mobile-all.png"
          imageTablet="/esa-housing/esa-letter-housing-herosection-tablet.webp"
          imageAlt="Woman on a video call with a licensed therapist while sitting with her dog"
        />
        <EsaHousingBarriers />
        <EsaHousingLaws />
        <EsaHousingHowItWorks />
        <EsaHousingMoveForward />
        <EsaHousingConditions />
        <EsaHousingQualify />
        <EsaHousingWhoCanIssue />
        <EsaHousingCredentials />
        <EsaHousingLandlordRefuse />
        <EsaHousingDenied />
        <FaqSection
          id="faq"
          bg="bg-background"
          subtitle="Everything you need to know about an ESA letter for housing"
          faqs={HOUSING_FAQS}
        />
        <CtaBanner
          buttonHref="/pricing/"
          bgColor="bg-background"
          title="Ready to Start Your ESA Evaluation?"
          description="If you believe an Emotional Support Animal may be appropriate for your situation, you can begin a professional evaluation today."
          buttonText="Start Your ESA Evaluation"
          note="100% Refund If No ESA Letter Is Issued"
          disclaimer="ESA eligibility is determined by a licensed mental health professional following a clinical assessment. Approval is not guaranteed."
        />
      </main>

      <Footer />
    </div>
  );
}
