
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
      "Professional ESA letter from a state-licensed mental health professional for housing accommodations.",
    price: "$149",
    features: PLAN_FEATURES,
    buttonText: "Start your ESA Evaluation",
  },
  {
    title: "ESA + PSD\nCombo",
    price: "$199",
    description:
      "ESA and PSD letters from a state-licensed mental health professional when each is clinically appropriate.",
    features: PLAN_FEATURES,
    buttonText: "Start your ESA Evaluation",
  },
];

const DOC_PRICING_SLUGS = new Set([
  "alabama",
  "alaska",
  "arizona",
  "arkansas",
  "california",
  "colorado",
  "connecticut",
  "delaware",
  "florida",
  "georgia",
  "hawaii",
  "idaho",
  "illinois",
  "indiana",
  "iowa",
  "kansas",
  "kentucky",
  "louisiana",
  "maine",
  "maryland",
  "massachusetts",
  "michigan",
  "minnesota",
  "mississippi",
  "missouri",
  "montana",
  "nebraska",
  "nevada",
  "new-hampshire",
  "new-jersey",
  "new-mexico",
  "new-york",
  "north-carolina",
  "north-dakota",
  "ohio",
  "oklahoma",
  "oregon",
  "pennsylvania",
  "south-carolina",
  "south-dakota",
  "texas",
  "utah",
  "virginia",
  "washington",
  "west-virginia",
  "wisconsin",
  "wyoming",
]);

const DOC_DATA_PLAN_SLUGS = new Set([
  "arizona",
  "arkansas",
  "california",
  "colorado",
  "connecticut",
  "delaware",
  "florida",
  "georgia",
  "hawaii",
  "idaho",
  "illinois",
  "indiana",
  "iowa",
  "kansas",
  "kentucky",
  "louisiana",
  "maine",
  "maryland",
  "massachusetts",
  "michigan",
  "minnesota",
  "mississippi",
  "missouri",
  "montana",
  "nebraska",
  "nevada",
  "new-hampshire",
  "new-jersey",
  "new-mexico",
  "north-carolina",
  "north-dakota",
  "ohio",
  "oklahoma",
  "oregon",
  "pennsylvania",
  "south-carolina",
  "south-dakota",
  "texas",
  "utah",
  "virginia",
  "washington",
  "west-virginia",
  "wisconsin",
  "wyoming",
]);

export function StatePricingSection({ data }: StatePricingSectionProps) {
  if (!data?.pricingTitle && !data?.pricingPlan1Title) return null;
  const slug = data?.slug ?? "";
  const useDocPricing = DOC_PRICING_SLUGS.has(slug);
  const useDataPlans = Boolean(
    DOC_DATA_PLAN_SLUGS.has(slug) && data?.pricingPlan1Title && data?.pricingPlan2Title,
  );

  if (useDataPlans && data) {
    return (
      <PricingSection
        sectionId="state-pricing"
        heading={data.pricingTitle || "The Cost of an ESA Letter"}
        headingClassName="heading-h2"
        descriptionOverride={data.pricingSubtitle}
        showTabs={false}
        showDog={false}
        maxCards={2}
        popularCardIndex={-1}
        headerHeight={310}
        cards={[
          {
            title: data.pricingPlan1Title || "ESA Letter",
            description: data.pricingPlan1Description || "",
            price: data.pricingPlan1Price || "$149",
            features: data.pricingPlan1Features || [],
            buttonText: "Start your ESA Evaluation",
          },
          {
            title: data.pricingPlan2Title || "ESA Letter + PSD Letter Combo",
            description: data.pricingPlan2Description || "",
            price: data.pricingPlan2Price || "$199",
            features: data.pricingPlan2Features || [],
            buttonText: "Start your ESA Evaluation",
          },
        ]}
        ctaHref="#faq"
        bgColor="bg-background"
        sectionClassName="py-14 sm:py-18 lg:py-24"
      />
    );
  }

  if (useDocPricing && data) {
    return (
      <PricingSection
        sectionId="state-pricing"
        heading={data.pricingTitle || "The Cost of an ESA Letter"}
        headingClassName="heading-h2"
        descriptionOverride={data.pricingSubtitle}
        showTabs={false}
        showDog={false}
        maxCards={3}
        popularCardIndex={0}
        headerHeight={310}
        ctaHref="#faq"
        bgColor="bg-background"
        sectionClassName="py-14 sm:py-18 lg:py-24"
      />
    );
  }

  return (
    <PricingSection
      sectionId="state-pricing"
      heading="Emotional Support Animal"
      headingClassName="heading-h2"
      descriptionOverride="Choose the plan that fits your needs. All plans include essential features to get you started, with Each plan is a one-time evaluation. No subscriptions and no ID cards."
      showTabs={false}
      showDog={false}
      maxCards={2}
      popularCardIndex={1}
      headerHeight={310}
      cards={STATE_PLAN_CARDS}
      ctaHref="#faq"
      bgColor="bg-background"
      sectionClassName="py-14 sm:py-18 lg:py-24"
    />
  );
}
