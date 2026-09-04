import { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHeroSection } from "@/components/about-us/AboutHeroSection";
import { AboutLegitimateSection } from "@/components/about-us/AboutLegitimateSection";
import { AboutWhyTrustSection } from "@/components/about-us/AboutWhyTrustSection";
import { AboutWhoWeHelpSection } from "@/components/about-us/AboutWhoWeHelpSection";
import { AboutVsFakeSection } from "@/components/about-us/AboutVsFakeSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AboutTransparentPricingSection } from "@/components/about-us/AboutTransparentPricingSection";
import { AboutTestimonialSection } from "@/components/about-us/AboutTestimonialSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

export const metadata: Metadata = {
  title: "About Us | My ESA Therapist - Legitimate ESA & PSD Letters",
  description:
    "Learn about My ESA Therapist. We connect individuals with state-licensed mental health professionals for 100% legal, HIPAA-compliant ESA and PSD evaluations in all 50 US states.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col justify-between text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      <TopBanner />
      <Header />
      <main className="flex-1 bg-[#FAF7F2]">
        {/* Section 1: Hero */}
        <AboutHeroSection />

        {/* Section 2: Legitimate ESA Letter Evaluations You Can Trust */}
        <AboutLegitimateSection />

        {/* Section 3: Why Pet Owners Trust MY ESA Therapist */}
        <AboutWhyTrustSection />

        {/* Section 4: Who We Help */}
        <AboutWhoWeHelpSection />

        {/* Section 5: My ESA Therapist vs Fake ESA Sites */}
        <AboutVsFakeSection />

        {/* Section 6: How Online ESA Evaluation Works */}
        <HowItWorks />

        {/* Section 7: Transparent, Honest ESA Evaluations */}
        <AboutTransparentPricingSection />

        {/* Section 8: What Our Clients Say */}
        <AboutTestimonialSection />

        {/* Section 9: FAQ */}
        <FaqSection />

        {/* Section 10: PSD Letter CTA Banner */}
        <CtaBanner
          title="Need help with a PSD letter?"
          description="Connect with a state-licensed mental health professional to discuss your needs and see if a psychiatric service dog letter may be right for you."
          buttonText="Start your Evaluation"
          buttonHref="/psd-letter"
          bgColor="bg-[#FAF7F2]"
        />

        {/* Section 11: Content Reviewed by Doctor Badge */}
        <StateReviewerBanner />
      </main>
      <Footer bgColor="bg-[#FAF7F2]" />
    </div>
  );
}
