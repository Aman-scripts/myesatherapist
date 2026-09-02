import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StatesHeroSection } from "@/components/states/StatesHeroSection";
import { FederalHousingRulesSection } from "@/components/states/FederalHousingRulesSection";
import { ChooseStateGridSection } from "@/components/states/ChooseStateGridSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "ESA Evaluation For Every State | My ESA Therapist",
  description:
    "Access professional, licensed evaluations for Emotional Support Animal (ESA) letters that comply with the Fair Housing Act (FHA) and your state's specific laws.",
  openGraph: {
    title: "ESA Evaluation For Every State | My ESA Therapist",
    description:
      "Access professional, licensed evaluations for Emotional Support Animal (ESA) letters that comply with the Fair Housing Act (FHA) and your state's specific laws.",
    url: "https://myesatherapist.com/states",
    type: "website",
  },
  alternates: {
    canonical: "https://myesatherapist.com/states",
  },
};

export default function StatesDirectoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900 selection:bg-[#E8B92C]/30">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        {/* 1. Hero Section with Map Pin Icon and State Dropdown */}
        <StatesHeroSection />

        {/* 2. Federal Housing Protections & State ESA Rules */}
        <FederalHousingRulesSection />

        {/* 3. 4-Column Grid of All 50 US States */}
        <ChooseStateGridSection />

        {/* 4. Common Frequently Asked Questions Section */}
        <FaqSection />

        {/* 5. Common CTA Banner Section */}
        <CtaBanner buttonHref="#choose-state-section" />
      </main>

      <Footer />
    </div>
  );
}
