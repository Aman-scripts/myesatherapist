import type { Metadata, Viewport } from "next";
import React from "react";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { JourneySection } from "@/components/home/JourneySection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LicensedProviderSection } from "@/components/home/LicensedProviderSection";
import { QualifyingConditions } from "@/components/home/QualifyingConditions";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { EmotionalSupportSection } from "@/components/home/EmotionalSupportSection";
import { DoYouNeedEsaSection } from "@/components/home/DoYouNeedEsaSection";
import { TrustedByPetOwnersSection } from "@/components/home/TrustedByPetOwnersSection";
import { PricingSection } from "@/components/home/PricingSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";
import { Footer } from "@/components/layout/Footer";
import { homeSchema } from "@/data/schemas/homeSchema";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "ESA Evaluations by Licensed Therapists - My ESA Therapist",
  description:
    "Connect with state-licensed mental health professionals for legitimate ESA Letter evaluations conducted through secure telehealth.",
  alternates: {
    canonical: "https://myesatherapist.com/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    title: "ESA Evaluations by Licensed Professionals - My ESA Therapist",
    description:
      "Connect with U.S.-licensed mental health professionals for legitimate ESA Letter evaluations conducted through secure telehealth.",
    type: "article",
    url: "https://myesatherapist.com/",
    siteName:
      "My ESA Therapist | Licensed ESA Therapists & Emotional Support Animal Services",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "ESA Evaluations by Licensed Professionals - My ESA Therapist",
    description:
      "Connect with U.S.-licensed mental health professionals for legitimate ESA Letter evaluations conducted through secure telehealth.",
    site: "@MyESATherapist",
    creator: "@MyESATherapist",
  },
  verification: {
    google: "hZEn7s77TUksTd08P_-V4gKQzGdXE0dkQeF4-B7vzuY",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      <TopBanner />
      <Header />
      <main className="flex-1 bg-[#FAF7F2]">
        <HeroSection />

        <AsSeenOnSection />

        <JourneySection />

        <HowItWorks />

        <LicensedProviderSection />

        <QualifyingConditions />

        <TherapistsSection />

        <WhyChooseUs />

        <EmotionalSupportSection />
        <TestimonialsSection />

        <DoYouNeedEsaSection />
        <PricingSection />
        <TrustedByPetOwnersSection />

        <CommunitySection />

        <ComparisonTable />

        <FaqSection />

        <CtaBanner
          description={"If you believe an Emotional Support Animal may be appropriate\nfor your situation, you can begin a professional evaluation today."}
        />

        <StateReviewerBanner />
      </main>

      <Footer />
    </div>
  );
}
