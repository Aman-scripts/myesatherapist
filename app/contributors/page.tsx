import React from "react";
import type { Metadata } from "next";

import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EsaOnlineHero } from "@/components/esa-online/EsaOnlineHero";
import { ContributorsSection } from "@/components/contributors/ContributorsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { AUTHORS, REVIEWERS } from "@/data/contributorsData";

// Schema.org Structured Data
import { contributorsSchemas } from "@/data/schemas/contributorsSchema";

export const metadata: Metadata = {
  title: "My ESA Therapist Contributors: Authors & Reviewers",
  description:
    "Meet the authors, medical reviewers, and legal reviewers who contribute to My ESA Therapist’s educational content about emotional support animals, ESA letters, and housing.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://myesatherapist.com/contributors/",
  },
  openGraph: {
    title: "My ESA Therapist Contributors: Authors & Reviewers",
    description:
      "Meet the authors, medical reviewers, and legal reviewers who contribute to My ESA Therapist’s educational content about emotional support animals, ESA letters, and housing.",
    url: "https://myesatherapist.com/contributors/",
    siteName: "My ESA Therapist",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "My ESA Therapist Contributors: Authors & Reviewers",
    description:
      "Meet the authors, medical reviewers, and legal reviewers who contribute to My ESA Therapist’s educational content about emotional support animals, ESA letters, and housing.",
  },
};

export default function ContributorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      {/* Schema.org JSON-LD */}
      {contributorsSchemas.map((schemaObj, index) => (
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
          title="Meet our contributors"
          description="Thoughtful, evidence-informed content starts with people who care. Get to know the authors and reviewers who help make My ESA Therapist a trusted resource."
          buttonText="Explore the Team"
          buttonHref="#authors"
          image="/contributors/contributors_herosection.png"
          imageMobile="/contributors/contributors_herosection-mobile.png"
          imageTablet="/contributors/contributors_herosection-tablet.png"
          imageAlt="Legal reviewers at a desk with books on disability rights and tenant protections"
        />

        <ContributorsSection
          id="authors"
          title="Our Authors"
          description="Our authors turn complex topics into useful, welcoming information for people and their support animals."
          people={AUTHORS}
        />

        <ContributorsSection
          id="reviewers"
          title="Our Reviewers"
          description="Our reviewers help keep each piece clear, responsible, and useful—so you can feel confident in the information you find here."
          people={REVIEWERS}
          bg="bg-white"
        />

        <FaqSection id="faq" bg="bg-[#FAF7F2]" />

        <CtaBanner
          title="Ready to Explore ESA Evaluation?"
          description="Connect with licensed mental health professionals who can evaluate your needs and provide a legitimate ESA letter if you qualify."
          buttonHref="/pricing/"
          bgColor="bg-[#FAF7F2]"
          className="pb-12 sm:pb-16"
        />
      </main>

      <Footer />
    </div>
  );
}
