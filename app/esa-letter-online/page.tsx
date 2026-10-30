import React from "react";
import { serializeLd } from "@/lib/site";
import type { Metadata } from "next";

import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { EsaOnlineHero } from "@/components/esa-online/EsaOnlineHero";
import { EsaOnlineHowItWorks } from "@/components/esa-online/EsaOnlineHowItWorks";
import { EsaOnlineWhatIs } from "@/components/esa-online/EsaOnlineWhatIs";
import { EsaOnlineWhatComes } from "@/components/esa-online/EsaOnlineWhatComes";
import { EsaOnlineEligible } from "@/components/esa-online/EsaOnlineEligible";
import { EsaOnlineLegalStandards } from "@/components/esa-online/EsaOnlineLegalStandards";
import { EsaOnlineHousingRights } from "@/components/esa-online/EsaOnlineHousingRights";
import { EsaOnlineSupportAnimals } from "@/components/esa-online/EsaOnlineSupportAnimals";
import { EsaOnlineAllStates } from "@/components/esa-online/EsaOnlineAllStates";

// Shared Site Components
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { socialImage, withFeatureImage } from "@/data/socialImages";
import { esaLetterOnlineSchema } from "@/data/schemas/esaLetterOnlineSchema";

export const metadata: Metadata = {
  title: "ESA Letter Online From Licensed Therapist | My ESA Therapist",
  description:
    "Get an ESA letter online through a confidential evaluation with a licensed mental health professional. Start your ESA evaluation securely from home with My ESA Therapist.",
  alternates: {
    canonical: "https://myesatherapist.com/esa-letter-online/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "ESA Letter Online From Licensed Therapist | My ESA Therapist",
    description:
      "Get an ESA letter online through a confidential evaluation with a licensed mental health professional. Start your ESA evaluation securely from home with My ESA Therapist.",
    type: "website",
    url: "https://myesatherapist.com/esa-letter-online/",
    siteName:
      "My ESA Therapist | Licensed ESA Therapists & Emotional Support Animal Services",
    locale: "en_US",
    images: socialImage("esa-letter-online", "Cozy telehealth call with a golden retriever").openGraph,
  },
  twitter: {
    card: "summary_large_image",
    title: "ESA Letter Online From Licensed Therapist | My ESA Therapist",
    description:
      "Get an ESA letter online through a confidential evaluation with a licensed mental health professional. Start your ESA evaluation securely from home with My ESA Therapist.",
    site: "@MyESATherapist",
    creator: "@MyESATherapist",
    images: socialImage("esa-letter-online", "Cozy telehealth call with a golden retriever").twitter,
  },
};

export default function EsaLetterOnlinePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeLd(withFeatureImage(esaLetterOnlineSchema, "esa-letter-online")) }}
      />
      <TopBanner />
      <Header />

      <main className="flex-1">
        <EsaOnlineHero
          showStats
          imageMobile="/esa-online/esa-online-herosection_mobile.webp"
          imageTablet="/esa-online/esa-online-herosection_tablet.webp"
        />
        <EsaOnlineHowItWorks />
        <EsaOnlineWhatIs />
        <EsaOnlineWhatComes />
        <EsaOnlineEligible />
        <WhyChooseUs
          subtitle="You get a simplified online emotional support animal evaluation experience, designed with efficiency and legal compliance in mind. Here’s what you can expect from this evaluation experience."
          features={[
            {
              title: "Licensed Professionals",
              description: "All evaluations are conducted by independent U.S.-licensed mental health professionals authorized to conduct ESA evaluations.",
            },
            {
              title: "Secure Telehealth Platform",
              description: "HIPAA-compliant systems ensure your information remains confidential and protected.",
            },
            {
              title: "Clinical Integrity First",
              description: "ESA approval is never guaranteed. Any recommendation you receive is based solely on clinical judgment.",
            },
            {
              title: "Legitimate ESA Documentation",
              description: "Your ESA letter is issued in line with applicable federal and state housing guidelines.",
            },
            {
              title: "Nationwide Access",
              description: "You can access telehealth evaluations across the United States, subject to clinician availability.",
            },
            {
              title: "Transparent Process",
              description: "You get clear steps, clear expectations, and no misleading claims.",
            },
          ]}
        />
        <TestimonialsSection />
        <EsaOnlineLegalStandards />
        <EsaOnlineHousingRights />
        <EsaOnlineSupportAnimals />
        <EsaOnlineAllStates />
        <FaqSection
          id="faq"
          bg="bg-background"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about getting your ESA letter"
          faqs={[
            {
              num: "01.",
              q: "Who issues the emotional support animal letter?",
              a: "Emotional support animal (ESA) letters are issued by a state-licensed mental health professional (LMHP), such as a psychologist, psychiatrist, licensed clinical social worker, or therapist, following a clinical evaluation. The clinician must have a therapeutic relationship with you and independently determine that an emotional support animal is necessary to help alleviate symptoms of a mental or emotional disability, in accordance with Fair Housing Act (FHA) guidelines.",
            },
            {
              num: "02.",
              q: "Is an ESA letter guaranteed after the evaluation?",
              a: "No. An emotional support animal recommendation is issued only if the authorized professional finds it suitable following an independent evaluation. There are no automatic approvals.",
            },
            {
              num: "03.",
              q: "How much does an ESA letter cost, and are there any hidden fees?",
              a: "With My ESA Therapist, the cost of an ESA documentation is $149. This fee includes a clinical evaluation conducted by a state-licensed mental health professional, the telehealth platform fee, and the letter if clinically approved. Pricing is clearly displayed before booking, and there are no hidden fees. You are paying for a professional assessment, not a guaranteed letter. If the letter is not clinically appropriate, no document is issued.",
            },
            {
              num: "04.",
              q: "How long does it take to receive an ESA recommendation after the evaluation (if approved)?",
              a: "If the clinician determines that an emotional support animal is appropriate, the ESA document is typically issued shortly after the evaluation, often within 24-48 hours. Timing may vary based on the clinician and state requirements, but approved letters are sent promptly.",
            },
            {
              num: "05.",
              q: "Is the ESA approval letter delivered digitally, and can I download or print it?",
              a: "Yes. With My ESA Therapist, when the letter is issued, it is sent directly to your email in digital format. You can easily download, save, and print the document for housing accommodation requests whenever needed.",
            },
            {
              num: "06.",
              q: "How can I tell if an ESA letter is legitimate or fake?",
              a: "A legitimate document is issued only after a clinical evaluation by a licensed mental health professional and typically includes: the clinician’s name, signature, and license number; confirmation that the professional is authorized to practice in your state; the date of issuance; and clear language supporting an ESA accommodation under the Fair Housing Act. Be cautious of websites that promise instant approval, sell letters without an evaluation, or fail to provide verifiable clinician credentials. These are common signs of invalid or non-compliant ESA documents.",
            },
            {
              num: "07.",
              q: "What is the difference between an ESA and a service animal?",
              a: "Emotional Support Animals (ESAs) provide comfort through companionship but are not trained to perform specific tasks, unlike service animals. Because of this, ESAs do not have the same legal access rights and are generally not allowed in public spaces like restaurants, stores, or businesses, whereas service animals are permitted under disability laws.",
            },
            {
              num: "08.",
              q: "What does the professional consider before issuing ESA documentation?",
              a: "A licensed mental health professional evaluates the individual’s emotional and mental health to determine whether a qualifying condition is present. They then assess whether an emotional support animal would meaningfully alleviate related symptoms and support the individual’s overall treatment plan. ESA documentation is issued solely at the clinician’s discretion and is never guaranteed.",
            },
          ]}
        />
        <CtaBanner
          buttonHref="/pricing/"
          bgColor="bg-background"
          className="pb-12 sm:pb-16"
          title="Ready to Protect Your Housing Rights?"
          description="If you believe an emotional support animal is appropriate for your situation, you can begin a professional consultation today. ESA letters are issued only by licensed mental health professionals following a professional evaluation."
          buttonText="Start Your Confidential ESA Evaluation"
        />
      </main>

      <Footer />
    </div>
  );
}
