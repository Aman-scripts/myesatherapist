import React from "react";
import { serializeLd } from "@/lib/site";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StatesHeroSection } from "@/components/states/StatesHeroSection";
import { FederalHousingRulesSection } from "@/components/states/FederalHousingRulesSection";
import { ChooseStateGridSection } from "@/components/states/ChooseStateGridSection";
import { StateRulesTable } from "@/components/states/StateRulesTable";
import { FaqSection, FaqItem } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { statesSchema } from "@/data/schemas/statesSchema";
import { socialImage, withFeatureImage } from "@/data/socialImages";

export const metadata: Metadata = {
  title: "ESA Evaluations by State | My ESA Therapist",
  description:
    "Explore ESA evaluation options by state. Connect with licensed mental health professionals for compliant emotional support animal assessments.",
  alternates: {
    canonical: "https://myesatherapist.com/state/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "ESA Evaluations by State | My ESA Therapist",
    description:
      "Explore ESA evaluation options by state. Connect with licensed mental health professionals for compliant emotional support animal assessments.",
    url: "https://myesatherapist.com/state/",
    siteName: "My ESA Therapist",
    type: "website",
    images: socialImage("esa-by-state", "ESA letter by state").openGraph,
  },
  twitter: {
    card: "summary_large_image",
    title: "ESA Evaluations by State | My ESA Therapist",
    description:
      "Explore ESA evaluation options by state. Connect with licensed mental health professionals for compliant emotional support animal assessments.",
    images: socialImage("esa-by-state", "ESA letter by state").twitter,
  },
};

const STATES_FAQS: FaqItem[] = [
  {
    num: "01.",
    q: "Which States Have Strict ESA Laws?",
    a: "Some states have additional rules addressing ESA documentation, misrepresentation, or housing accommodations. However, federal Fair Housing Act protections generally apply nationwide, subject to eligibility requirements and applicable exceptions.",
  },
  {
    num: "02.",
    q: "Can a Landlord Deny an ESA in Any State?",
    a: "A landlord generally cannot deny a valid ESA accommodation request solely because of a no-pet policy. However, denial may be permitted in certain circumstances, such as undue hardship, direct threats, or significant property damage.",
  },
  {
    num: "03.",
    q: "Can an Online ESA Letter Be Valid in My State?",
    a: "Yes. An online ESA letter may be valid if it follows applicable requirements and is provided by a qualified mental health professional licensed or otherwise authorized to practice in your state after an appropriate evaluation.",
  },
  {
    num: "04.",
    q: "Do ESA Owners Need Additional Documentation in Certain States?",
    a: "Some states have additional documentation rules, including requirements related to the professional relationship or evaluation process. However, there is no universal federal ESA certificate or registration requirement for housing.",
  },
  {
    num: "05.",
    q: "Can I Use an ESA Letter From Another State?",
    a: "An ESA letter from another state may not automatically meet your state's requirements. The professional issuing it must be appropriately licensed or authorized to practice where you live, and the documentation must meet applicable standards.",
  },
];

export default function StatesDirectoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent/30">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeLd(withFeatureImage(statesSchema, "esa-by-state")) }}
      />

      <TopBanner />
      <Header />

      <main className="flex-1 bg-background">
        {/* 1. Hero Section with Map Pin Icon and State Dropdown */}
        <StatesHeroSection />

        {/* 2. Federal Housing Protections & State ESA Rules */}
        <FederalHousingRulesSection />
        <StateRulesTable />
        <ChooseStateGridSection
          title="ESA Letter by State"
          description="Open a state page for the local rule, a short summary, and a link to start an evaluation with a clinician licensed in that state."
        />

        {/* 4. Frequently Asked Questions Section */}
        <FaqSection
          title="Frequently Asked Questions"
          subtitle="Explore ESA letter information by state, including local requirements, housing rights, applicable laws, and the process for getting an ESA letter."
          faqs={STATES_FAQS}
        />

        {/* 5. Common CTA Banner Section */}
        <CtaBanner buttonText="Start your ESA Evaluation" buttonHref="/pricing/" />
      </main>

      <Footer />
    </div>
  );
}
