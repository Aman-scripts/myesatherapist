"use client";

import React from "react";
import { PricingSection } from "@/components/home/PricingSection";
import { StateData } from "@/data/statesData";

interface StatePricingSectionProps {
  stateName?: string;
  data?: StateData;
}

const PLAN_FEATURES = [
  "Online ESA evaluation",
  "Licensed mental health professional",
  "Disability-related need assessment",
  "ESA letter if clinically approved",
  "Secure email delivery",
];

const STATE_PLAN_CARDS = [
  {
    title: "ESA Letter -\nHousing",
    description:
      "Professional ESA letters from a state-licensed mental health professional for housing and service dog needs.",
    price: "$199",
    features: PLAN_FEATURES,
    buttonText: "Start Evaluation",
  },
  {
    title: "ESA Letter +\nID Card",
    price: "$149",
    description:
      "Professional ESA letter from a state-licensed mental health professional for housing accommodations.",
    features: PLAN_FEATURES,
    buttonText: "Get Started",
  },
];

export function StatePricingSection(_props: StatePricingSectionProps) {
  return (
    <PricingSection
      sectionId="state-pricing"
      heading="Emotional Support Animal"
      headingClassName="heading-h2"
      descriptionOverride="Choose the plan that fits your needs. All plans include essential features to get you started, with options to scale as you grow. No hidden fees and the flexibility to change anytime."
      showTabs={false}
      showDog={false}
      maxCards={2}
      popularCardIndex={1}
      headerHeight={270}
      cards={STATE_PLAN_CARDS}
      ctaHref="#faq"
      bgColor="bg-background"
      sectionClassName="py-14 sm:py-18 lg:py-24"
    />
  );
}
