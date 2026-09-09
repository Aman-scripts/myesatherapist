import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { STATES_DATA, getStateData } from "@/data/statesData";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StateHeroSection } from "@/components/state/StateHeroSection";
import { StateTrustBar } from "@/components/state/StateTrustBar";
import { StateProcessSection } from "@/components/state/StateProcessSection";
import { StateWhoQualifiesSection } from "@/components/state/StateWhoQualifiesSection";
import { StateRequirementsSection } from "@/components/state/StateRequirementsSection";
import { StateBenefitsSection } from "@/components/state/StateBenefitsSection";
import { StateLawsSection } from "@/components/state/StateLawsSection";
import { StateScamsSection } from "@/components/state/StateScamsSection";
import { StatePsdVsEsaSection } from "@/components/state/StatePsdVsEsaSection";
import { TrustedByPetOwnersSection } from "@/components/home/TrustedByPetOwnersSection";
import { StatePricingSection } from "@/components/state/StatePricingSection";
import { StateAvailableCitiesSection } from "@/components/state/StateAvailableCitiesSection";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";
import { StateTableOfContents } from "@/components/state/StateTableOfContents";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

interface Props {
  params: Promise<{ state: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const data = getStateData(state);

  if (!data) {
    return {
      title: "State Page Not Found | My ESA Therapist",
      description: "The requested state ESA page could not be found.",
    };
  }

  const canonicalUrl = `https://myesatherapist.com/${data.slug}`;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: canonicalUrl,
      type: "website",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export async function generateStaticParams() {
  const paramsList: Array<{ state: string }> = [];

  Object.keys(STATES_DATA).forEach((slug) => {
    paramsList.push({ state: slug });
    paramsList.push({ state: `esa-${slug}` });
    paramsList.push({ state: `esa-letter-${slug}` });
  });

  return paramsList;
}

export default async function DynamicStatePage({ params }: Props) {
  const { state } = await params;
  const data = getStateData(state);

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      <TopBanner />
      <Header />

      {/* State Table of Contents Drawer & Left Edge Toggle */}
      <StateTableOfContents stateName={data.name} data={data} />

      <main className="flex-1 bg-[#FAF7F2]">
        <StateHeroSection data={data} />
        <StateTrustBar data={data} />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <div id="therapists">
          <TherapistsSection
            title={data.therapistsTitle}
            subtitle={data.therapistsSubtitle}
            licensureNote={data.therapistsLicensureNote}
            therapistsList={data.therapistsList}
          />
        </div>
        <div id="process"><StateProcessSection data={data} /></div>
        <div id="who-qualifies"><StateWhoQualifiesSection data={data} /></div>
        <StateRequirementsSection data={data} />
        <div id="why-choose">
          <WhyChooseUs
            bgColor="bg-white"
            title={data.whyChooseTitle}
            subtitle={data.whyChooseSubtitle}
            features={data.whyChooseItems}
          />
        </div>
        <div id="reviews">
          <TestimonialsSection
            title={data.reviewsTitle}
            subtitle={data.reviewsSubtitle}
          />
        </div>
        <div id="benefits"><StateBenefitsSection data={data} /></div>
        <div id="laws"><StateLawsSection data={data} /></div>
        <div id="scams"><StateScamsSection data={data} /></div>
        <div id="psd-vs-esa"><StatePsdVsEsaSection data={data} /></div>
        <div id="trusted-reviews">
          <TrustedByPetOwnersSection
            stateName={data.name}
            title={data.trustedReviewsTitle}
            subtitle={data.trustedReviewsSubtitle}
            testimonials={data.trustedReviews}
          />
        </div>
        <div id="pricing"><StatePricingSection stateName={data.name} data={data} /></div>
        <div id="available-cities"><StateAvailableCitiesSection data={data} /></div>
        <div id="faq">
          <FaqSection
            title={data.faqTitle}
            subtitle={data.faqSubtitle}
            faqs={data.faqs}
          />
        </div>
        <div id="cta">
          <CtaBanner
            title={data.ctaTitle || `Ready to Start Your\n${data.name} ESA Evaluation?`}
            description={data.ctaSubtitle || `Connect with a ${data.name}-licensed mental health professional today for a legitimate, FHA-compliant ESA letter.`}
            note={data.ctaNote}
            buttonText="Start your Evaluation"
            buttonHref="#faq"
          />
        </div>
        <StateReviewerBanner />
      </main>

      <Footer />
    </div>
  );
}
