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
import { FaqSection, FaqItem } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { aboutUsSchema } from "@/data/schemas/aboutUsSchema";

export const metadata: Metadata = {
  title: "About My ESA Therapist | Licensed ESA Evaluations You Can Trust",
  description:
    "Learn how My ESA Therapist provides legitimate, HIPAA-compliant ESA evaluations through state-licensed mental health professionals across all 50 states.",
  alternates: {
    canonical: "https://myesatherapist.com/about-us/",
  },
  openGraph: {
    title: "About My ESA Therapist | Licensed ESA Evaluations You Can Trust",
    description:
      "Learn how My ESA Therapist provides legitimate, HIPAA-compliant ESA evaluations through state-licensed mental health professionals across all 50 states.",
    url: "https://myesatherapist.com/about-us/",
    type: "website",
  },
};

const ABOUT_FAQS: FaqItem[] = [
  {
    num: "01.",
    q: "What is My ESA Therapist's mission?",
    a: "My ESA Therapist's mission is to make the ESA evaluation process clear, ethical, and accessible. Individuals are connected with licensed mental health professionals through a secure ESA evaluation process, with all outcomes determined solely through an independent clinical assessment by the provider.",
  },
  {
    num: "02.",
    q: "Who conducts the ESA evaluations?",
    a: "All evaluations are conducted exclusively by state-licensed mental health professionals. Eligibility is determined solely through professional clinical review, with clinical conclusions made independently by the provider without platform influence.",
  },
  {
    num: "03.",
    q: "Does My ESA Therapist provide nationwide coverage?",
    a: "Yes. The platform offers ESA evaluations in all 50 states, providing accessible telehealth services while ensuring evaluations meet local licensing requirements.",
  },
  {
    num: "04.",
    q: "Who does My ESA Therapist help?",
    a: "The platform serves renters facing housing restrictions on pets, individuals with anxiety, depression, or PTSD, remote or telehealth users, first-time and returning ESA applicants, and emotional wellness-focused pet owners seeking a professional assessment of their needs.",
  },
  {
    num: "05.",
    q: "How is My ESA Therapist different from fake ESA sites?",
    a: "My ESA Therapist uses state-licensed mental health professionals, bases outcomes on professional assessment, conducts audio/video consultations on a secure platform, follows federal housing guidelines, and is confidential and HIPAA-compliant. This differs from automated approval-mill sites that often skip evaluation entirely, may lack privacy protections, and can be non-compliant with applicable guidelines.",
  },
  {
    num: "06.",
    q: "What does the ESA evaluation process involve?",
    a: "The clinical process includes a comprehensive mental health screening by licensed professionals, a review of symptoms and relevant mental health history, an individualized assessment based on clinical judgment, and documentation prepared in line with applicable legal guidelines.",
  },
  {
    num: "07.",
    q: "What happens if a refund is needed?",
    a: "If a licensed mental health professional determines an ESA letter is not clinically appropriate, a refund may be provided according to the platform's refund policy.",
  },
  {
    num: "08.",
    q: "Are there hidden fees?",
    a: "No. Pricing is upfront and transparent, with no surprise charges or recurring fees. One payment covers the complete evaluation, and all payments are processed securely through encrypted systems.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col justify-between text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutUsSchema) }}
      />

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
        <FaqSection
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about our mission, evaluations, and process."
          faqs={ABOUT_FAQS}
        />

        {/* Section 10: PSD Letter CTA Banner */}
        <CtaBanner
          title="Need help with a PSD letter?"
          description="Connect with a state-licensed mental health professional to discuss your needs and see if a psychiatric service dog letter may be right for you."
          buttonText="Start your Evaluation"
          buttonHref="/psd-letter"
          bgColor="bg-[#FAF7F2]"
          className="pb-12 sm:pb-16 lg:pb-24"
        />
      </main>
      <Footer bgColor="bg-[#FAF7F2]" />
    </div>
  );
}
