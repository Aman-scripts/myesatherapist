import { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHeroSection } from "@/components/about-us/AboutHeroSection";
import { AboutTrustBySection } from "@/components/about-us/AboutTrustBySection";
import { AboutLegitimateSection } from "@/components/about-us/AboutLegitimateSection";
import { AboutWhyTrustSection } from "@/components/about-us/AboutWhyTrustSection";
import { AboutWhoWeHelpSection } from "@/components/about-us/AboutWhoWeHelpSection";
import { AboutVsFakeSection } from "@/components/about-us/AboutVsFakeSection";
import { AboutProcessSection } from "@/components/about-us/AboutProcessSection";
import { AboutTransparentPricingSection } from "@/components/about-us/AboutTransparentPricingSection";
import { AboutTestimonialSection } from "@/components/about-us/AboutTestimonialSection";
import { FaqSection, FaqItem } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { aboutUsSchema } from "@/data/schemas/aboutUsSchema";
import { socialImage, withFeatureImage } from "@/data/socialImages";

export const metadata: Metadata = {
  title: "About My ESA Therapist | Licensed ESA Evaluations You Can Trust",
  description:
    "Learn how My ESA Therapist provides legitimate, HIPAA-compliant ESA evaluations through state-licensed mental health professionals across all 50 states.",
  alternates: {
    canonical: "https://myesatherapist.com/about-us/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "About My ESA Therapist | Licensed ESA Evaluations You Can Trust",
    description:
      "Learn how My ESA Therapist provides legitimate, HIPAA-compliant ESA evaluations through state-licensed mental health professionals across all 50 states.",
    url: "https://myesatherapist.com/about-us/",
    siteName: "My ESA Therapist",
    type: "website",
    images: socialImage("about-us", "About My ESA Therapist").openGraph,
  },
  twitter: {
    card: "summary_large_image",
    title: "About My ESA Therapist | Licensed ESA Evaluations You Can Trust",
    description:
      "Learn how My ESA Therapist provides legitimate, HIPAA-compliant ESA evaluations through state-licensed mental health professionals across all 50 states.",
    images: socialImage("about-us", "About My ESA Therapist").twitter,
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
    q: "Who Conducts the ESA Evaluations?",
    a: "All evaluations are conducted exclusively by state-licensed mental health professionals. Eligibility is determined solely through professional clinical review, with clinical conclusions made independently by the provider without platform influence.",
  },
  {
    num: "03.",
    q: "Does My ESA Therapist Provide Nationwide Coverage?",
    a: "Yes. My ESA Therapist offers ESA evaluations in all 50 states, providing accessible telehealth services while ensuring evaluations meet local licensing requirements.",
  },
  {
    num: "04.",
    q: "Who Does My ESA Therapist Help?",
    a: "My ESA Therapist serves renters facing housing restrictions on pets, individuals experiencing mental health concerns, remote or telehealth users, first-time and returning ESA applicants, and people seeking a professional assessment of whether an emotional support animal may be clinically appropriate.",
  },
  {
    num: "05.",
    q: "How Is My ESA Therapist Different From Automated ESA Services?",
    a: "The difference is a professional, evaluation-based process. My ESA Therapist works with state-licensed professionals, secure consultations, confidential systems, and guidelines relevant to ESA housing accommodations.",
  },
  {
    num: "06.",
    q: "What Does the ESA Evaluation Process Involve?",
    a: "The clinical process includes a review of relevant mental health concerns, symptoms, and history, followed by an individualized assessment by a licensed mental health professional. If documentation is clinically appropriate, it is prepared in line with applicable legal requirements.",
  },
  {
    num: "07.",
    q: "What Happens If a Refund is Needed?",
    a: "If a licensed mental health professional determines an ESA letter is not clinically appropriate, after the evaluation is completed, a 100% refund will be issued.",
  },
  {
    num: "08.",
    q: "Are There Hidden Fees?",
    a: "No. Pricing is upfront and transparent, with no surprise charges or recurring fees. One payment covers the complete evaluation, and all payments are processed securely through encrypted systems.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between text-slate-900 selection:bg-accent/30 selection:text-[#1E3E47]">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(withFeatureImage(aboutUsSchema, "about-us")) }}
      />

      <TopBanner />
      <Header />
      <main className="flex-1 bg-background">
        {/* Section 1: Hero */}
        <AboutHeroSection />

        {/* Section 2: Trust / Why Choose My ESA Therapist */}
        <AboutTrustBySection />

        {/* Section 3: Legitimate ESA Letter Evaluations You Can Trust */}
        <AboutLegitimateSection />

        {/* Section 3: Why Pet Owners Trust MY ESA Therapist */}
        <AboutWhyTrustSection />

        {/* Section 4: Who We Help */}
        <AboutWhoWeHelpSection />

        {/* Section 5: My ESA Therapist vs. Automated ESA Sites */}
        <AboutVsFakeSection />

        {/* Section 6: How Does Our Online ESA Evaluation Work? */}
        <AboutProcessSection />

        {/* Section 7: Clear Policies & Transparent Pricing for ESA Evaluations */}
        <AboutTransparentPricingSection />

        {/* Section 8: Trusted by Thousands of ESA Owners */}
        <AboutTestimonialSection />

        {/* Section 9: FAQ */}
        <FaqSection
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about our mission, evaluations, and process."
          faqs={ABOUT_FAQS}
        />

        {/* Section 10: ESA Evaluation CTA Banner */}
        <CtaBanner
          title="Ready to Start Your ESA Evaluation?"
          description="Begin the evaluation process today and connect with your state-licensed mental health professional for a clinical assessment."
          buttonText="Start Evaluation"
          buttonHref="/pricing/"
          bgColor="bg-background"
          className="pb-12 sm:pb-16 lg:pb-24"
        />
      </main>
      <Footer bgColor="bg-background" />
    </div>
  );
}
