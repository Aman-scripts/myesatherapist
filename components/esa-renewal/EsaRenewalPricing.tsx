"use client";

import React from "react";
import { PricingSection } from "@/components/home/PricingSection";

const RENEWAL_CARDS = [
  {
    title: "New ESA Letter",
    description: "For first-time applicants",
    price: "$129",
    features: [
      "Initial evaluation completed by a licensed mental health professional",
      "ESA documentation may be issued based on the provider’s independent evaluation",
      "Intended for housing-related accommodation requests",
      "Evaluation session conducted by phone or secure video",
      "Independent professional determination required",
      "Professional clinical assessment (no guaranteed approval)",
    ],
    buttonText: "Get Started",
  },
  {
    title: "ESA Letter Renewal",
    description: "For individuals with an existing ESA letter",
    price: "$129",
    features: [
      "Evaluation conducted by a state-licensed mental health professional",
      "Scheduled phone or secure video session",
      "Review of your current emotional support-related needs",
      "Updated ESA documentation may be issued if determined appropriate by the provider",
      "Intended for housing accommodation requests",
      "Professional review (no guaranteed outcome)",
    ],
    buttonText: "Get Started",
  },
];

export function EsaRenewalPricing() {
  return (
    <PricingSection
      sectionId="pricing"
      heading="ESA Renewal Pricing"
      headingClassName="heading-h2"
      descriptionOverride="Understand your evaluation options and pricing before getting started"
      showTabs={false}
      showDog
      popularCardIndex={1}
      cards={RENEWAL_CARDS}
      ctaHref="/pricing/#evaluation"
      sectionClassName="pt-16 lg:pt-24 pb-8 lg:pb-12"
    />
  );
}
