import React from "react";
import { serializeLd } from "@/lib/site";
import type { Metadata } from "next";

import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EsaOnlineHero } from "@/components/esa-online/EsaOnlineHero";
import { ContributorsSection } from "@/components/contributors/ContributorsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { AUTHORS, REVIEWERS, CONTRIBUTORS_FAQS } from "@/data/contributorsData";

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
    <div className="min-h-screen flex flex-col bg-background">
      {/* Schema.org JSON-LD */}
      {contributorsSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeLd(schemaObj) }}
        />
      ))}

      <TopBanner />
      <Header />

      <main className="flex-1">
        <EsaOnlineHero
          title="Meet Our Contributors"
          description="Our contributors combine professional expertise, clinical knowledge, and thoughtful insights to create reliable content that helps readers make informed decisions about emotional support animals."
          buttonText="Explore The Team"
          buttonHref="#authors"
          image="/contributors/contributor-hero-desktop.webp"
          imageMobile="/Hero_image_for_mobile_all.png"
          imageTablet="/contributors/contributors_herosection-tablet.webp"
          imageAlt="Legal reviewers at a desk with books on disability rights and tenant protections"
          desktopHeight={632}
        />

        <ContributorsSection
          id="authors"
          title="Our Authors"
          description="Meet the writers who turn complex mental health and ESA topics into clear, helpful, and easy-to-understand content."
          people={AUTHORS}
        />

        <ContributorsSection
          id="reviewers"
          title="Our Reviewers"
          description="Our reviewers bring clinical and professional expertise to ensure our ESA-related content is accurate, well-researched, and aligned with current mental health and housing guidance."
          people={REVIEWERS}
          bg="bg-white"
        />

        <FaqSection
          id="faq"
          title="Frequently Asked Questions About Our Contributors"
          subtitle="Learn about our contributors' qualifications, expertise, and roles in reviewing content."
          faqs={CONTRIBUTORS_FAQS}
          bg="bg-background"
        />

        <CtaBanner
          title="Ready to Explore ESA Evaluation?"
          description="Connect with licensed mental health professionals who can evaluate your needs and provide a legitimate ESA letter if you qualify."
          buttonHref="/pricing/"
          bgColor="bg-background"
          className="pb-12 sm:pb-16"
        />
      </main>

      <Footer />
    </div>
  );
}
