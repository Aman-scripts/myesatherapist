import React from "react";
import type { Metadata } from "next";

import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EsaLawsStateHero } from "@/components/esa-laws/EsaLawsStateHero";
import { BlogTableOfContents } from "@/components/blogs/BlogTableOfContents";
import { BlogArticleContent } from "@/components/blogs/BlogArticleContent";
import { BlogMetaBar } from "@/components/blogs/BlogMetaBar";
import { BlogAuthorBio } from "@/components/blogs/BlogAuthorBio";
import { BlogMoreResources } from "@/components/blogs/BlogMoreResources";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import type { BlogArticle } from "@/data/blogsData";
import {
  ALABAMA_CTA,
  ALABAMA_FINAL_THOUGHTS,
  ALABAMA_HERO,
  ALABAMA_META,
  ALABAMA_SECTIONS,
  ALABAMA_TOC,
} from "@/data/esaLawsAlabamaData";

// Schema.org Structured Data
import { esaLawsAlabamaSchemas } from "@/data/schemas/esaLawsAlabamaSchema";

export const metadata: Metadata = {
  title: "Alabama ESA Laws: Rules for Tenants & Landlords | My ESA Therapist",
  description:
    "Learn Alabama ESA laws, FHA housing protections, ESA letter requirements, tenant rights, landlord rules, fees, and assistance animal regulations.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://myesatherapist.com/esa-laws/alabama/",
  },
  openGraph: {
    title: "Alabama ESA Laws: Rules for Tenants & Landlords | My ESA Therapist",
    description:
      "Learn Alabama ESA laws, FHA housing protections, ESA letter requirements, tenant rights, landlord rules, fees, and assistance animal regulations.",
    url: "https://myesatherapist.com/esa-laws/alabama/",
    siteName: "My ESA Therapist",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Alabama ESA Laws: Rules for Tenants & Landlords | My ESA Therapist",
    description:
      "Learn Alabama ESA laws, FHA housing protections, ESA letter requirements, tenant rights, landlord rules, fees, and assistance animal regulations.",
  },
};

// BlogArticleContent only reads the body fields (intro, sections, cta, final thoughts).
const article = {
  introParagraphs: [],
  sections: ALABAMA_SECTIONS,
  cta: ALABAMA_CTA,
  finalThoughts: ALABAMA_FINAL_THOUGHTS,
} as unknown as BlogArticle;

export default function AlabamaEsaLawsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Schema.org JSON-LD */}
      {esaLawsAlabamaSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
      ))}

      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <EsaLawsStateHero
          title={ALABAMA_HERO.title}
          description={ALABAMA_HERO.description}
          imageMobile="/esalawsblog/esa-laws_alabama_herosection-mobile.png"
          imageTablet="/esalawsblog/esa-laws_alabama_herosection-tablet.png"
          imageAlt="Alabama ESA laws guide for tenants and landlords"
        />

        {/* Floating Meta/Trust Bar */}
        <div className="-mt-12 sm:-mt-16 lg:-mt-[60px] relative z-30 px-4 sm:px-6 lg:px-8">
          <BlogMetaBar {...ALABAMA_META} />
        </div>

        <div className="w-full relative flex flex-col lg:flex-row items-start justify-start -mt-12 sm:-mt-16 lg:-mt-[60px] z-10">
          <BlogTableOfContents items={ALABAMA_TOC} />
          <div className="flex-1 min-w-0 max-w-[960px] xl:max-w-[1020px] px-4 sm:px-8 lg:pl-10 xl:pl-16 lg:pr-8 xl:pr-16 pt-20 sm:pt-24 lg:pt-28 xl:pt-32 pb-16 sm:pb-20">
            <BlogArticleContent article={article} />
          </div>
        </div>

        <BlogAuthorBio
          name="Mohammed Ziauddin"
          title="Legal Writer and Researcher"
          bio="Mohammed Ziauddin is an experienced legal researcher, and leagl writer with 12 years of experience. He holds a Master of Physiotherapy in Sports from Jamia Hamdard University and has expertise in health assessment, rehabilitation, pain management, patient care, and evidence-based healthcare practices."
          image="/author/mohammed-ziauddin-image.webp"
          bioHref="/author/mohammed-ziauddin/"
          linkedin="https://www.linkedin.com/in/physiozia/"
        />

        <BlogMoreResources />

        <FaqSection id="faq" bg="bg-[#FAF7F2]" />

        <CtaBanner buttonHref="/pricing/" bgColor="bg-[#FAF7F2]" className="pb-12 sm:pb-16" />
      </main>

      <Footer />
    </div>
  );
}
