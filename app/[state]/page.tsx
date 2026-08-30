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
import { StateAvailableCitiesSection } from "@/components/state/StateAvailableCitiesSection";
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

      <main className="flex-1 bg-[#FAF7F2]">
        <StateHeroSection data={data} />
        <StateTrustBar data={data} />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />
        <TherapistsSection />
        <StateProcessSection data={data} />
        <StateWhoQualifiesSection data={data} />
        <StateRequirementsSection data={data} />
        <WhyChooseUs />
        <TestimonialsSection />
        <StateBenefitsSection data={data} />
        <StateLawsSection data={data} />
        <StateScamsSection data={data} />
        <StatePsdVsEsaSection data={data} />
        <StateAvailableCitiesSection data={data} />
        <FaqSection />
        <CtaBanner
          title={`Ready to Start Your ${data.name} ESA Evaluation?`}
          description={`Connect with a ${data.name}-licensed mental health professional today for a legitimate, FHA-compliant ESA letter.`}
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
