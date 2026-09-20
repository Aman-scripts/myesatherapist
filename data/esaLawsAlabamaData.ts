import type { BlogSection, BlogTocItem } from "@/data/blogsData";

export const ALABAMA_HERO = {
  title: "Alabama ESA Laws Explained: A Guide for Tenants and Landlords.",
  description:
    "Understand your rights under Alabama ESA laws, including housing accommodations, documentation requirements, and landlord responsibilities. Learn what tenants should know when requesting an emotional support animal accommodation, what information a landlord may request, and how ESA rules apply to housing situations. This guide provides clear answers to help you understand the Alabama ESA process and avoid common mistakes when requesting or reviewing an ESA accommodation.",
};

export const ALABAMA_TOC: BlogTocItem[] = [
  { id: "alabama-esa-laws-at-a-glance", label: "Alabama ESA Laws at a Glance" },
  { id: "the-legal-foundation-fha-and-alabama", label: "The Legal Foundation: FHA and Alabama" },
  { id: "who-qualifies-for-an-esa-in-alabama", label: "Who Qualifies for an ESA in Alabama?" },
  { id: "rights-and-responsibilities-of-tenants", label: "Rights and Responsibilities of Tenants" },
  { id: "rights-and-responsibilities-of-landlords", label: "Rights and Responsibilities of Landlords" },
  { id: "public-access-and-travel-rules", label: "Public Access and Travel Rules" },
  { id: "misrepresenting-an-assistance-animal-in-alabama", label: "Misrepresenting an Assistance Animal in Alabama" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

export const ALABAMA_SECTIONS: BlogSection[] = [
  {
    id: "alabama-esa-laws-at-a-glance",
    title: "Alabama ESA Laws at a Glance",
    paragraphs: [
      "ESA protections in Alabama come from the Fair Housing Act (FHA) and the Alabama Assistance and Service Animal Integrity in Housing Act. Alabama has a state law (Ala. Code §§ 24-8A-1 through 24-8A-5) that provides rules for assistance animals in housing. Alabama does not require ESA registration, certification, or official ESA identification cards. Qualified tenants can request reasonable housing accommodations for ESAs, including in no-pet housing. Landlords generally cannot charge pet rent, pet deposits, or pet fees for approved ESAs. ESAs do not have public access rights like service animals under the ADA. Valid ESA requests should be supported by documentation from a licensed mental health professional. Alabama’s Act 2019-478 addresses fraudulent service animal claims but does not create ESA-specific penalties.",
      "If you’re renting in Alabama and thinking about an emotional support animal (ESA), both federal and state laws matter. The federal Fair Housing Act (FHA) requires housing providers to make reasonable accommodations for qualified individuals with disabilities, while Alabama’s Assistance and Service Animal Integrity in Housing Act provides additional state-level rules for assistance animals in housing. Understanding how these laws work together can help both tenants and landlords know their rights, responsibilities, and when an ESA request may be approved or denied.",
    ],
  },
  {
    id: "the-legal-foundation-fha-and-alabama",
    title: "The Legal Foundation: FHA and Alabama",
    paragraphs: [
      "ESA housing accommodations in Alabama are governed by both the federal Fair Housing Act and the Alabama Assistance and Service Animal Integrity in Housing Act (Ala. Code §§ 24-8A-1 through 24-8A-5). Together, these laws establish when housing providers must consider reasonable accommodation requests for emotional support animals.",
    ],
    subsections: [
      {
        title: "Key Legal Points",
        listItems: [
          "ESAs are not classified as pets under the FHA",
          "Landlords must consider ESA requests even in “no-pet” housing",
          "Housing providers cannot charge pet rent or pet fees for ESAs",
          "ESA accommodations apply only to housing, not public access",
        ],
        afterListParagraphs: ["This federal standard ensures consistency across states, including Alabama."],
      },
    ],
    bannerImage: {
      src: "/esalawsblog/eslalaws_blogsimages.png",
      alt: "ESA rights clipboard with a law book and a golden retriever in front of the Alabama State Capitol",
    },
    bannerPosition: "bottom",
  },
  {
    id: "who-qualifies-for-an-esa-in-alabama",
    title: "Who Qualifies for an ESA in Alabama?",
    paragraphs: [
      "Eligibility is not predetermined. It is determined through a clinical evaluation by a licensed mental health professional using diagnostic standards, including the DSM-5-TR.",
    ],
    subsections: [
      {
        title: "Common Qualifying Conditions",
        listItems: [
          "Anxiety disorders",
          "Depression and mood disorders",
          "PTSD",
          "Personality disorders (e.g., OCPD)",
          "Eating disorders",
        ],
        afterListParagraphs: [
          "To qualify, the condition must significantly impact daily functioning, and the ESA must be shown to provide meaningful emotional support.",
          "[Learn more about conditions that may qualify for an ESA](/blog/qualifying-conditions/) and how a licensed mental health professional evaluates eligibility.",
        ],
      },
    ],
  },
  {
    id: "rights-and-responsibilities-of-tenants",
    title: "Rights and Responsibilities of Tenants",
    paragraphs: ["Tenants in Alabama benefit from FHA protections but must also follow certain rules."],
    subsections: [
      {
        title: "Tenant Rights",
        listItems: [
          "Request reasonable accommodation for an ESA",
          "Live with an ESA in “no-pet” housing",
          "Avoid pet-related fees or deposits",
          "Maintain ESA accommodation during lease renewals (if eligibility remains valid)",
        ],
      },
      {
        title: "Tenant Responsibilities",
        listItems: [
          "Provide a legitimate ESA letter upon request",
          "Ensure the animal does not cause damage or safety risks",
          "Maintain proper control and care of the animal",
        ],
        afterListParagraphs: [
          "ESA protection is not unconditional. It depends on responsible ownership and valid documentation.",
        ],
      },
    ],
  },
  {
    id: "rights-and-responsibilities-of-landlords",
    title: "Rights and Responsibilities of Landlords",
    paragraphs: ["Landlords are required to comply with federal law but retain important rights."],
    subsections: [
      {
        title: "Landlord Rights",
        listItems: [
          "Request reliable documentation when the disability or need for the ESA is not obvious",
          "Deny requests that lack proper documentation",
          "Evaluate health, safety, and property risks",
          "Refuse accommodation if it creates an undue financial or administrative burden",
        ],
      },
      {
        title: "Legal Grounds for Denial",
        paragraphs: ["A landlord may legally deny an ESA if:"],
        listItems: [
          "The animal poses a direct threat to others",
          "It causes significant property damage",
          "The housing provider qualifies for a legal exemption under the FHA",
          "The requested accommodation is not considered reasonable under the Fair Housing Act",
        ],
      },
      {
        title: "FHA Exemptions May Include",
        listItems: ["Owner-occupied buildings with 4 or fewer units", "Single-family homes rented without a broker"],
        afterListParagraphs: ["Even in exempt housing, a lot of landlords still choose to look at ESA requests."],
      },
      {
        title: "Alabama Assistance Animal Law",
        paragraphs: [
          "In addition to the Fair Housing Act, Alabama enforces the Assistance and Service Animal Integrity in Housing Act (Ala. Code §§ 24-8A-1 through 24-8A-5). This law defines an assistance animal as an animal other than a service animal that qualifies as a reasonable accommodation under the Fair Housing Act including emotional support animals. The law also outlines how housing providers may evaluate accommodation requests and reinforces that ESAs are considered assistance animals rather than pets when they qualify under federal law.",
        ],
      },
    ],
  },
  {
    id: "public-access-and-travel-rules",
    title: "Public Access and Travel Rules",
    paragraphs: ["A common misconception is that ESAs have the same rights everywhere. This is incorrect."],
    listItems: [
      "ESAs do not have access rights to restaurants, stores, or public places",
      "Airlines are no longer required to accommodate ESAs under the Air Carrier Access Act (ACAA) updates",
      "Entry into public or private spaces depends entirely on individual policies",
    ],
    afterListParagraphs: ["Always verify policies before traveling or visiting establishments."],
  },
  {
    id: "misrepresenting-an-assistance-animal-in-alabama",
    title: "Misrepresenting an Assistance Animal in Alabama",
    paragraphs: [
      "Alabama also cracks down on people who knowingly pass off an animal as a service animal when it isn’t one. Under Act 2019-478 (Senate Bill 10) a first offense gets treated as a Class C misdemeanor which can come with court-ordered community service. Get caught again and it bumps up to a Class B misdemeanor with steeper penalties. While this law primarily addresses service animals rather than emotional support animals, it reflects Alabama’s broader effort to discourage fraudulent disability-related animal claims.",
    ],
  },
];

export const ALABAMA_CTA = {
  id: "alabama-esa-letter",
  heading: "Looking for an Alabama ESA Letter?",
  description:
    "Connect with a licensed mental health professional and follow the appropriate process for an ESA letter in Alabama.",
  buttonText: "Alabama ESA Letter Process",
  buttonHref: "/esa-letter-alabama/",
};

export const ALABAMA_FINAL_THOUGHTS = {
  title: "Final Thoughts",
  paragraphs: [
    "Once you get past the legal terms, Alabama’s ESA rules are pretty simple. The Fair Housing Act protects tenants with mental health conditions. But it also gives landlords some room to raise real concerns. If you’re a tenant, what matters most is having a real ESA letter, not one from some cheap online site that approves everyone. You also need to take care of your animal like any responsible pet owner would. If you are a landlord then it means applying the law the same way for everyone without jumping to conclusions. You can still speak up about real problems, like property damage or a pet that’s aggressive toward other tenants. When both sides do this right, ESA accommodations don’t have to be a hassle for anyone.",
  ],
};

export const ALABAMA_META = {
  authorName: "Mohammed Ziauddin",
  authorRole: "Written by",
  authorCredentials: "Legal Writer & Research Contributor",
  authorImage: "/author/mohammed-ziauddin-image.webp",
  publishDate: "August 24, 2026",
  lastUpdated: "August 24, 2026",
  reviewerName: "Awais Arshad",
  reviewerRole: "Medically Reviewed by",
  reviewerCredentials: "Attorney at Law",
  reviewerImage: "/legal_reviewer/legal-reviwer.png",
  reviewerLinkedin: "https://www.linkedin.com/in/awais-arshad-a51b31113/",
};
