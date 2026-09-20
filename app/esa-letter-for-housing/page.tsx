import React from "react";
import type { Metadata } from "next";

import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { EsaOnlineHero } from "@/components/esa-online/EsaOnlineHero";
import { EsaOnlineHowItWorks } from "@/components/esa-online/EsaOnlineHowItWorks";
import { EsaHousingBarriers } from "@/components/esa-housing/EsaHousingBarriers";
import { EsaHousingLaws } from "@/components/esa-housing/EsaHousingLaws";
import { EsaHousingMoveForward } from "@/components/esa-housing/EsaHousingMoveForward";
import { EsaHousingQualify } from "@/components/esa-housing/EsaHousingQualify";
import { EsaHousingWhoCanIssue } from "@/components/esa-housing/EsaHousingWhoCanIssue";
import { EsaHousingCredentials } from "@/components/esa-housing/EsaHousingCredentials";
import { EsaHousingLandlordRefuse } from "@/components/esa-housing/EsaHousingLandlordRefuse";
import { EsaHousingDenied } from "@/components/esa-housing/EsaHousingDenied";

// Shared Site Components
import { QualifyingConditions } from "@/components/home/QualifyingConditions";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

// Schema.org Structured Data
import { esaLetterForHousingSchemas } from "@/data/schemas/esaLetterForHousingSchema";

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
  },
  twitter: {
    card: "summary",
    title: "ESA Letter for Housing Online | Licensed & FHA-Compliant - My ESA Therapist",
    description:
      "Facing 'no-pet' housing rules? Get an FHA-compliant ESA letter for housing online from a licensed therapist. Secure, confidential and pay only if approved.",
  },
};

export default function EsaLetterForHousingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      {/* Schema.org JSON-LD */}
      {esaLetterForHousingSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
      ))}

      <TopBanner />
      <Header />

      <main className="flex-1">
        <EsaOnlineHero
          title="Start Your Online Evaluation For Housing ESA Letter"
          description="Connect with a licensed mental health professional for a secure online ESA evaluation. When clinically appropriate, documentation may be provided to support a housing-related accommodation request."
          buttonText="Start your Application"
          image="/esa-housing/esa-letter-housing_herosection.png"
          imageAlt="Woman on a video call with a licensed therapist while sitting with her dog"
        />
        <EsaHousingBarriers />
        <EsaHousingLaws />
        <EsaOnlineHowItWorks />
        <EsaHousingMoveForward />
        <QualifyingConditions
          title="Conditions Commonly Considered During an ESA Evaluation"
          description="Emotional Support Animals may be considered for individuals experiencing DSM-recognized emotional or mental health conditions such as anxiety, depression, or PTSD. Eligibility is not based on diagnosis alone and depends on an individualized evaluation by a licensed mental health professional."
        />
        <EsaHousingQualify />
        <EsaHousingWhoCanIssue />
        <EsaHousingCredentials />
        <EsaHousingLandlordRefuse />
        <EsaHousingDenied />
        <FaqSection id="faq" bg="bg-[#FAF7F2]" />
        <CtaBanner buttonHref="/pricing/" bgColor="bg-[#FAF7F2]" className="pb-12 sm:pb-16" />
      </main>

      <Footer />
    </div>
  );
}
