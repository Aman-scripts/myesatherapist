import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { CaliforniaHeroSection } from "@/components/california/CaliforniaHeroSection";
import { CaliforniaTrustBar } from "@/components/california/CaliforniaTrustBar";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "California ESA Letter Online with Licensed Therapist | My ESA Therapist",
  description:
    "Get an official California ESA Letter online from state-licensed mental health professionals. 100% compliant with California AB 468 and the federal Fair Housing Act.",
};

export default function CaliforniaEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        {/* 1. California Hero Section */}
        <CaliforniaHeroSection />

        {/* 2. California Trust Bar (Floating centered between Hero & As Seen On) */}
        <CaliforniaTrustBar />

        {/* 3. As Seen On Section */}
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        {/* 4. Therapists Section */}
        <TherapistsSection />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Testimonials Section (Video Reviews) */}
        <TestimonialsSection />

        {/* 7. Frequently Asked Questions */}
        <FaqSection />

        {/* 8. CTA Banner */}
        <CtaBanner
          title="Ready to Start Your California ESA Evaluation?"
          description="Connect with a California-licensed mental health professional today for a legitimate, AB 468 compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
