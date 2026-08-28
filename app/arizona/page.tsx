import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { ArizonaHeroSection } from "@/components/arizona/ArizonaHeroSection";
import { ArizonaTrustBar } from "@/components/arizona/ArizonaTrustBar";
import { ArizonaProcessSection } from "@/components/arizona/ArizonaProcessSection";
import { ArizonaWhoQualifiesSection } from "@/components/arizona/ArizonaWhoQualifiesSection";
import { ArizonaRequirementsSection } from "@/components/arizona/ArizonaRequirementsSection";
import { ArizonaWhyChooseUsSection } from "@/components/arizona/ArizonaWhyChooseUsSection";
import { ArizonaBenefitsSection } from "@/components/arizona/ArizonaBenefitsSection";
import { ArizonaLawsSection } from "@/components/arizona/ArizonaLawsSection";
import { ArizonaScamsSection } from "@/components/arizona/ArizonaScamsSection";
import { ArizonaPsdVsEsaSection } from "@/components/arizona/ArizonaPsdVsEsaSection";
import { ArizonaAvailableCitiesSection } from "@/components/arizona/ArizonaAvailableCitiesSection";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Arizona ESA Letter Evaluations by Licensed Therapists - My ESA Therapist",
  description:
    "Begin a legitimate ESA Letter evaluation in Arizona with a licensed therapist. Secure, HIPAA-compliant, and aligned with Fair Housing Act guidelines.",
};

export default function ArizonaEsaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        <ArizonaHeroSection />

        <ArizonaTrustBar />
        <AsSeenOnSection bgColor="bg-[#FAF7F2]" />

        <TherapistsSection />

        <ArizonaProcessSection />

        <ArizonaWhoQualifiesSection />

        <ArizonaRequirementsSection />

        <ArizonaWhyChooseUsSection />

        <ArizonaBenefitsSection />

        <ArizonaLawsSection />

        <ArizonaScamsSection />

        <ArizonaPsdVsEsaSection />

        <ArizonaAvailableCitiesSection />

        <FaqSection />

        <CtaBanner
          title="Ready to Start Your Arizona ESA Evaluation?"
          description="Connect with an Arizona-licensed mental health professional today for a legitimate, FHA-compliant ESA letter."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
        />
      </main>

      <Footer />
    </div>
  );
}
