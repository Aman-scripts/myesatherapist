import React from "react";
import type { Metadata } from "next";

import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { EsaOnlineHero } from "@/components/esa-online/EsaOnlineHero";
import { EsaOnlineTrustCards } from "@/components/esa-online/EsaOnlineTrustCards";
import { EsaOnlineHowItWorks } from "@/components/esa-online/EsaOnlineHowItWorks";
import { EsaOnlineWhatIs } from "@/components/esa-online/EsaOnlineWhatIs";
import { EsaOnlineWhatComes } from "@/components/esa-online/EsaOnlineWhatComes";
import { EsaOnlineEligible } from "@/components/esa-online/EsaOnlineEligible";
import { EsaOnlineComparison } from "@/components/esa-online/EsaOnlineComparison";
import { EsaOnlineLegalStandards } from "@/components/esa-online/EsaOnlineLegalStandards";
import { EsaOnlineHousingRights } from "@/components/esa-online/EsaOnlineHousingRights";
import { EsaOnlineSupportAnimals } from "@/components/esa-online/EsaOnlineSupportAnimals";
import { EsaOnlineAllStates } from "@/components/esa-online/EsaOnlineAllStates";

// Shared Site Components
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { socialImage, withFeatureImage } from "@/data/socialImages";
import { esaLetterOnlineSchema } from "@/data/schemas/esaLetterOnlineSchema";

export const metadata: Metadata = {
  title: "ESA Letter Online From Licensed Therapist | My ESA Therapist",
  description:
    "Get an ESA letter online through a confidential evaluation with a licensed mental health professional. Start your ESA evaluation securely from home with My ESA Therapist.",
  alternates: {
    canonical: "https://myesatherapist.com/esa-letter-online/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "ESA Letter Online From Licensed Therapist | My ESA Therapist",
    description:
      "Get an ESA letter online through a confidential evaluation with a licensed mental health professional. Start your ESA evaluation securely from home with My ESA Therapist.",
    type: "website",
    url: "https://myesatherapist.com/esa-letter-online/",
    siteName:
      "My ESA Therapist | Licensed ESA Therapists & Emotional Support Animal Services",
    locale: "en_US",
    images: socialImage("esa-letter-online", "Cozy telehealth call with a golden retriever").openGraph,
  },
  twitter: {
    card: "summary_large_image",
    title: "ESA Letter Online From Licensed Therapist | My ESA Therapist",
    description:
      "Get an ESA letter online through a confidential evaluation with a licensed mental health professional. Start your ESA evaluation securely from home with My ESA Therapist.",
    site: "@MyESATherapist",
    creator: "@MyESATherapist",
    images: socialImage("esa-letter-online", "Cozy telehealth call with a golden retriever").twitter,
  },
};

export default function EsaLetterOnlinePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(withFeatureImage(esaLetterOnlineSchema, "esa-letter-online")) }}
      />
      <TopBanner />
      <Header />

      <main className="flex-1">
        <EsaOnlineHero
          imageMobile="/esa-online/esa-online-herosection_mobile.png"
          imageTablet="/esa-online/esa-online-herosection_tablet.png"
        />
        <EsaOnlineTrustCards />
        <EsaOnlineHowItWorks />
        <EsaOnlineWhatIs />
        <EsaOnlineWhatComes />
        <EsaOnlineEligible />
        <WhyChooseUs />
        <EsaOnlineComparison />
        <TestimonialsSection />
        <EsaOnlineLegalStandards />
        <EsaOnlineHousingRights />
        <EsaOnlineSupportAnimals />
        <EsaOnlineAllStates />
        <FaqSection id="faq" bg="bg-[#FAF7F2]" />
        <CtaBanner buttonHref="/pricing/" bgColor="bg-[#FAF7F2]" className="pb-12 sm:pb-16" />
      </main>

      <Footer />
    </div>
  );
}
