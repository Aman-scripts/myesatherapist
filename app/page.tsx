import type { Metadata, Viewport } from "next";
import { serializeLd } from "@/lib/site";
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
import { EsaDogBenefitsSection } from "@/components/home/EsaDogBenefitsSection";
import { PricingSection } from "@/components/home/PricingSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { FaqSection } from "@/components/home/FaqSection";
import { HOME_FAQS } from "@/data/homeFaqs";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";
import { homeSchema } from "@/data/schemas/homeSchema";
import { socialImage, withFeatureImage } from "@/data/socialImages";
import { pageSocial, applySheetSeo } from "@/lib/seo";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const HOME_TITLE = "ESA Evaluations by Licensed Therapists- My ESA Therapist";
const HOME_DESCRIPTION =
  "Connect with state licensed mental health professionals for legitimate ESA Letter evaluations conducted through secure telehealth.";

export const metadata: Metadata = applySheetSeo({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: "https://myesatherapist.com/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  ...pageSocial({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "https://myesatherapist.com/",
    images: socialImage("homepage", "Telehealth with a happy companion"),
  }),
  verification: {
    google: "hZEn7s77TUksTd08P_-V4gKQzGdXE0dkQeF4-B7vzuY",
  },
});

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-clip">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeLd(withFeatureImage(homeSchema, "homepage")) }}
      />

      <TopBanner />
      <Header />
      <main className="flex-1 bg-background overflow-x-clip">
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
        <EsaDogBenefitsSection />

        <CommunitySection />

        <ComparisonTable />

        <FaqSection faqs={HOME_FAQS} />

        <CtaBanner
          title="Ready to Start Your ESA Evaluation?"
          description="If you believe an emotional support animal may be appropriate for your situation, you can begin a professional evaluation today."
          buttonText="Start Your Evaluation"
        />
      </main>

      <Footer />
    </div>
  );
}
