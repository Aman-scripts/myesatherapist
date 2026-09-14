import React from "react";
import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DoctorsHeroSection } from "@/components/doctors/DoctorsHeroSection";
import { DoctorsAllStatesSection } from "@/components/doctors/DoctorsAllStatesSection";
import { DoctorsMatchingSection } from "@/components/doctors/DoctorsMatchingSection";
import { DoctorsDisclosureSection } from "@/components/doctors/DoctorsDisclosureSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

export const metadata: Metadata = {
  title: "Meet Our Licensed Mental Health Professionals | My ESA Therapist",
  description:
    "Connect with state-licensed therapists and physicians nationwide for legitimate emotional support animal (ESA) evaluations through secure, HIPAA-compliant telehealth.",
  alternates: {
    canonical: "https://myesatherapist.com/esa-doctors/",
  },
  openGraph: {
    title: "Meet Our Licensed Mental Health Professionals | My ESA Therapist",
    description:
      "Connect with state-licensed therapists and physicians nationwide for legitimate emotional support animal (ESA) evaluations through secure, HIPAA-compliant telehealth.",
    url: "https://myesatherapist.com/esa-doctors/",
    type: "website",
    images: [
      {
        url: "/doctors/doctors_hero-section.png",
        width: 1440,
        height: 768,
        alt: "Meet Our Licensed Mental Health Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Licensed Mental Health Professionals | My ESA Therapist",
    description:
      "Connect with state-licensed therapists and physicians nationwide for legitimate emotional support animal (ESA) evaluations through secure, HIPAA-compliant telehealth.",
    images: ["/doctors/doctors_hero-section.png"],
  },
};

const doctorsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://myesatherapist.com/#organization",
      name: "My ESA Therapist",
      url: "https://myesatherapist.com",
      logo: "https://myesatherapist.com/common/myesa-logo.svg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-888-412-4041",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://myesatherapist.com/esa-doctors/#webpage",
      url: "https://myesatherapist.com/esa-doctors/",
      name: "Meet Our Licensed Mental Health Professionals | My ESA Therapist",
      description:
        "Connect with state-licensed therapists and physicians nationwide for legitimate emotional support animal (ESA) evaluations through secure, HIPAA-compliant telehealth.",
      isPartOf: {
        "@id": "https://myesatherapist.com/#website",
      },
      about: [
        {
          "@type": "Person",
          name: "Robert Staaf",
          jobTitle: "Licensed Clinical Social Worker",
          description:
            "Independent Clinical Social Worker and Therapist licensed in over 30 states specializing in psychotherapy and animal-assisted mental health treatment.",
          image: "https://myesatherapist.com/doctors/robert-staaf-profile-image.webp",
          sameAs: "https://www.linkedin.com/in/robert-staaf-b57b53333/",
        },
        {
          "@type": "Person",
          name: "Leslie K. Gamble",
          jobTitle: "Licensed Independent Clinical Social Worker",
          description:
            "Licensed therapist with 13 years of healthcare experience specializing in trauma, CBT, and clinical ESA evaluations.",
          image: "https://myesatherapist.com/doctors/leslie-k.-gamble-licsw-image.webp",
          sameAs: "https://www.linkedin.com/in/leslie-gamble-727571366",
        },
        {
          "@type": "Person",
          name: "Dr. Gaurav Patel",
          jobTitle: "Family Medicine Physician",
          description:
            "Board-certified physician providing patient-centered care and telehealth assessments across inpatient, outpatient, and telemedicine settings.",
          image: "https://myesatherapist.com/doctors/dr-gaurav-patel-image.webp",
          sameAs: "https://www.linkedin.com/in/gaurav-patel-m-d-b5565916",
        },
        {
          "@type": "Person",
          name: "Dr. Nicole",
          jobTitle: "Clinical Reviewer & Psychologist",
          description:
            "Licensed psychologist and senior content reviewer ensuring clinical assessment integrity and ethical compliance.",
          image: "https://myesatherapist.com/blogs/dr-nicole-reviewer.jpg",
          sameAs: "https://www.linkedin.com/company/myesatherapist/",
        },
      ],
    },
  ],
};

export default function DoctorsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorsSchema) }}
      />

      {/* Global Top Banner & Header */}
      <TopBanner />
      <Header />

      {/* Main Content Area */}
      <main className="min-h-screen bg-[#FAF7F2]">
        {/* Hero Section */}
        <DoctorsHeroSection />

        {/* We're in All 50 US States Section */}
        <DoctorsAllStatesSection />

        {/* How You're Matched With a Provider Section */}
        <DoctorsMatchingSection />

        {/* Important Provider Disclosure Section */}
        <DoctorsDisclosureSection />

        {/* CTA Banner Section */}
        <CtaBanner
          title={`Learn More About\nESA Evaluations`}
          description="Explore our related pages or begin an evaluation when you're ready."
          buttonText="Start your Evaluation"
          buttonHref="/pricing/"
        />

        {/* State Reviewer Banner (above footer and below cta section) */}
        <StateReviewerBanner />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
