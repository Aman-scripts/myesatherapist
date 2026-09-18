export interface DoctorProfile {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  title: string;
  credentials: string;
  metaTitle?: string;
  metaDescription?: string;
  metaRobots?: Record<string, string | number>;
  schemas?: any[];
  heroBio: string;
  bio: string;
  stats: {
    years: string;
    states: string;
    focusAreas: string;
  };
  licensedIn: string;
  method: string;
  focus: string;
  avatar: string;
  linkedin: string;
  education?: string[];
  licenses?: string[];
  experienceYears?: number;
  aboutParagraphs?: string[];
  trustStats?: Array<{ value: string; label: string }>;
  aboutSection?: {
    heading: string;
    paragraphs: string[];
  };
  philosophySection?: {
    heading: string;
    paragraphs: string[];
  };
  conditionsSection?: {
    heading: string;
    description: string;
    conditions: string[];
  };
  licensedStatesSection?: {
    heading: string;
    description: string;
    states: string[];
  };
  ctaSection?: {
    eyebrow?: string;
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

import { robertStaafSchemas } from "@/data/schemas/robertStaafSchema";
import { leslieGambleSchemas } from "@/data/schemas/leslieGambleSchema";
import { gauravPatelSchemas } from "@/data/schemas/gauravPatelSchema";

export const DOCTORS_DATA: DoctorProfile[] = [
  {
    id: "leslie-gamble",
    slug: "dr-leslie-k-gamble",
    aliases: ["leslie-gamble", "leslie-k-gamble"],
    name: "Leslie K. Gamble, LICSW",
    title: "Licensed Independent Clinical Social Worker",
    credentials: "LICSW, LCSW",
    metaTitle: "ESA Evaluations by Leslie K. Gamble, LICSW | My ESA Therapist",
    metaDescription:
      "Get evaluated by Leslie K. Gamble, LICSW, an experienced therapist offering ESA assessments and compassionate mental wellness care.",
    metaRobots: { "max-image-preview": "large" },
    schemas: leslieGambleSchemas,
    heroBio:
      "Compassionate therapist with 13+ years of experience helping individuals, couples, and families manage their mental wellness through evidence-based, patient-focused care.",
    bio: "Leslie K. Gamble has been a therapist for about 13 years, with a professional background primarily in healthcare. She has worked with individuals across all age groups, as well as couples and families, providing therapy tailored to their needs.",
    stats: {
      years: "13+",
      states: "15+",
      focusAreas: "7",
    },
    licensedIn: "15+ States",
    method: "Video or Phone",
    focus: "Depression, PTSD",
    avatar: "/doctors/leslie-gamble-hero-image.webp",
    linkedin: "https://www.linkedin.com/in/leslie-gamble-727571366",
    trustStats: [
      {
        value: "13+",
        label: "Years of Experience",
      },
      {
        value: "15+",
        label: "States Licensed",
      },
      {
        value: "7",
        label: "Key Condition Areas",
      },
      {
        value: "LICSW",
        label: "Medical Credential",
      },
      {
        value: "Audio/Video",
        label: "Availability",
      },
    ],
    aboutSection: {
      heading: "About Leslie K. Gamble",
      paragraphs: [
        "Leslie K. Gamble has been a therapist for about 13 years, with a professional background primarily in healthcare. She has worked with individuals across all age groups, as well as couples and families, providing therapy tailored to their needs.",
        "She values the opportunity to support people through therapy and believes in creating a flexible, patient-focused approach. Leslie identifies treatment goals early in the therapeutic process to help guide each session toward what the patient hopes to accomplish.",
        "She also encourages patients to continue working on their treatment goals between sessions through practical \"homework\" that supports ongoing progress outside of therapy.",
      ],
    },
    philosophySection: {
      heading: "My Philosophy",
      paragraphs: [
        "My goal is to provide compassionate, ethical, and accessible mental health support for individuals seeking ESA evaluations.",
      ],
    },
    conditionsSection: {
      heading: "Conditions Dr. Leslie K. Gamble Reviews",
      description:
        "Leslie K. Gamble's clinical training and experience cover a range of mental health concerns, with a focus on the areas she most commonly supports.",
      conditions: [
        "Anxiety",
        "Depression",
        "PTSD",
        "Stress Management",
        "Mental Wellness Support",
        "ESA Evaluations",
        "Housing ESA Documentation",
      ],
    },
    licensedStatesSection: {
      heading: "States Where Dr. Leslie K. Gamble Is Licensed",
      description:
        "Explore the states where Dr. Leslie K. Gamble's clinical expertise is available to individuals seeking professional mental health support.",
      states: [
        "Arkansas",
        "Washington",
        "Louisiana",
        "Maryland",
        "Mississippi",
        "Montana",
        "North Carolina",
        "North Dakota",
        "Nebraska",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "South Dakota",
        "Virginia",
      ],
    },
    ctaSection: {
      eyebrow: "Ready to Take the Next Step?",
      title: "Explore Your ESA Evaluation With Dr. Leslie K. Gamble",
      description:
        "Take the next step with a personalized telehealth consultation. Dr. Leslie K. Gamble will review your concerns, health history, and individual circumstances as part of the evaluation process.",
      buttonText: "Begin Your Evaluation",
      buttonHref: "/pricing/",
    },
  },
  {
    id: "robert-staaf",
    slug: "dr-robert-staff",
    aliases: ["dr-robert-staaf", "robert-staaf", "robert-staff"],
    name: "Robert Staaf, LCSW",
    title: "Licensed Clinical Social Worker",
    credentials: "LCSW, LISW",
    metaTitle: "Robert Staaf - Licensed Clinical Social Worker | My ESA Therapist",
    metaDescription:
      "Consult Robert Staaf, a licensed therapist and animal advocate. Fast, secure ESA evaluations online with experienced mental health support.",
    schemas: robertStaafSchemas,
    heroBio:
      "Independent clinical social worker and therapist licensed in 30+ states, dedicated to providing compassionate, evidence-based mental health care to individuals and families.",
    bio: "Robert Staaf is an independent clinical social worker and therapist, currently licensed to practice at the clinical level in over 30 states. With extensive experience in psychotherapy and child and family welfare, Dr. Staaf is dedicated to providing compassionate, evidence-based mental health care to individuals and families.",
    stats: {
      years: "20+",
      states: "30+",
      focusAreas: "6",
    },
    licensedIn: "30+ States",
    method: "Video or Phone",
    focus: "Anxiety, Stress",
    avatar: "/doctors/robert-staaf-hero-image.webp",
    linkedin: "https://www.linkedin.com/in/robert-staaf-b57b53333/",
    trustStats: [
      {
        value: "20+",
        label: "Years of Experience",
      },
      {
        value: "30+",
        label: "States Licensed",
      },
      {
        value: "6",
        label: "Key Condition Areas",
      },
      {
        value: "LCSW",
        label: "Medical Credential",
      },
      {
        value: "Audio/Video",
        label: "Availability",
      },
    ],
    aboutSection: {
      heading: "About Robert Staaf",
      paragraphs: [
        "Robert Staaf is an independent clinical social worker and therapist, currently licensed to practice at the clinical level in over 30 states. With extensive experience in psychotherapy and child and family welfare, Dr. Staaf is dedicated to providing compassionate, evidence-based mental health care to individuals and families.",
        "As a pet owner and animal lover, Dr. Staaf is passionate about highlighting how animals can be utilized in mental health treatment. He believes in the healing power of the human-animal bond and integrates this understanding into his therapeutic approach.",
      ],
    },
    philosophySection: {
      heading: "My Philosophy",
      paragraphs: [
        "My therapeutic approach is client-centered and evidence-based, tailored to meet the unique needs of each individual and family while creating a safe, supportive environment for lasting positive change.",
      ],
    },
    conditionsSection: {
      heading: "Conditions Dr. Robert Staaf Reviews",
      description:
        "Dr. Staaf's clinical experience covers a range of mental health and therapeutic support services, with a focus on emotional well-being and quality of life.",
      conditions: [
        "Individual Psychotherapy",
        "Child and Family Welfare",
        "Family Therapy",
        "Mental Health Counseling",
        "Animal-Assisted Therapy",
        "Clinical Social Work",
      ],
    },
    licensedStatesSection: {
      heading: "States Where Dr. Robert Staaf Is Licensed",
      description:
        "Dr. Robert Staaf is licensed across multiple U.S. states, extending his clinical expertise to individuals seeking professional mental health support.",
      states: [
        "Virginia",
        "Washington",
        "Maryland",
        "Florida",
        "Massachusetts",
        "Maine",
        "New Hampshire",
        "Utah",
        "Connecticut",
        "Oklahoma",
        "Ohio",
        "Minnesota",
        "North Carolina",
        "Vermont",
        "Illinois",
        "Idaho",
        "Alabama",
        "Texas",
        "Georgia",
        "New Jersey",
        "Michigan",
        "Mississippi",
        "South Carolina",
        "Kentucky",
        "Nevada",
        "Arizona",
        "New Mexico",
        "Colorado",
        "Indiana",
        "Montana",
      ],
    },
    ctaSection: {
      eyebrow: "Ready to Take the Next Step?",
      title: "Explore Your ESA Evaluation With Dr. Staaf",
      description:
        "Take the next step with a personalized telehealth consultation. Dr. Robert Staaf will review your concerns, health history, and individual circumstances as part of the evaluation process.",
      buttonText: "Begin Your Evaluation",
      buttonHref: "/pricing/",
    },
  },
  {
    id: "gaurav-patel",
    slug: "dr-gaurav-patel",
    aliases: ["gaurav-patel", "dr-gaurav-patel-md", "gaurav-patel-md"],
    name: "Gaurav Patel, MD",
    title: "Board-Certified Family Medicine Physician",
    credentials: "MD, Board-Certified Physician",
    metaTitle: "Dr. Gaurav Patel, MD | Family Medicine Physician | My ESA Therapist",
    metaDescription:
      "Consult Dr. Gaurav Patel, MD, a Family Medicine Physician offering professional medical guidance and compassionate support through secure online consultations.",
    metaRobots: { "max-image-preview": "large" },
    schemas: gauravPatelSchemas,
    heroBio:
      "Board-certified family medicine physician with experience providing evidence-based, patient-focused care across inpatient, urgent care, outpatient, and telemedicine settings.",
    bio: "Board-certified family medicine physician with experience providing evidence-based, patient-focused care across inpatient, urgent care, outpatient, and telemedicine settings.",
    stats: {
      years: "15+",
      states: "17",
      focusAreas: "10+",
    },
    licensedIn: "17 States",
    method: "Audio/Video",
    focus: "Depression, Anxiety, Chronic Health",
    avatar: "/doctors/dr-gaurav-patel-image.webp",
    linkedin: "https://www.linkedin.com/in/gaurav-patel-m-d-b5565916",
    trustStats: [
      {
        value: "15+",
        label: "Years of Experience",
      },
      {
        value: "17",
        label: "States Licensed",
      },
      {
        value: "10+",
        label: "Key Condition Areas",
      },
      {
        value: "MD",
        label: "Medical Credential",
      },
      {
        value: "Audio/Video",
        label: "Availability",
      },
    ],
    aboutSection: {
      heading: "About Dr. Gaurav Patel",
      paragraphs: [
        "Dr. Gaurav Patel is a board-certified family medicine physician with experience providing evidence-based care across inpatient, urgent care, outpatient, and telemedicine settings. He has cared for patients in both rural and suburban communities across the United States. His approach combines clinical assessment, diagnostic expertise, and patient education to support individual health needs.",
        "Dr. Patel also has a strong interest in medical education and understands the importance of accessible, patient-focused care throughout the treatment process.",
      ],
    },
    philosophySection: {
      heading: "My Patient Care Philosophy",
      paragraphs: [
        "I focus on evidence-based, patient-centered care, combining careful evaluation with clear communication and clinical judgment. My goal is to understand each patient's needs and provide thoughtful, accessible care across different healthcare settings.",
      ],
    },
    conditionsSection: {
      heading: "Conditions Dr. Patel Reviews",
      description:
        "Dr. Patel considers each patient’s medical history, symptoms, functional needs, and overall health when conducting an evaluation. His clinical approach is informed by evidence-based medicine and individualized patient assessment. Where relevant, he considers the patient’s health needs alongside applicable clinical and state-specific requirements.",
      conditions: [
        "Depressive Disorders",
        "Anxiety-Related Conditions",
        "Chronic Health Conditions",
        "Stress-Related Symptoms",
        "Sleep-Related Concerns",
        "Other Qualifying Health Conditions",
      ],
    },
    licensedStatesSection: {
      heading: "States Where Dr. Patel Is Licensed",
      description:
        "Learn about the states where Dr. Gourav Patel serves patients through his medical practice.",
      states: [
        "Georgia",
        "New Hampshire",
        "Mississippi",
        "Maryland",
        "Wisconsin",
        "Arizona",
        "South Carolina",
        "Ohio",
        "Illinois",
        "Missouri",
        "New Mexico",
        "Oklahoma",
        "Texas",
        "Idaho",
        "Colorado",
        "Wyoming",
      ],
    },
    ctaSection: {
      eyebrow: "Ready to Take the Next Step?",
      title: "Explore Your ESA Evaluation With Dr. Patel",
      description:
        "Take the next step with a personalized telehealth consultation. Dr. Patel\nwill review your concerns, health history, and individual circumstances as\npart of the evaluation process.",
      buttonText: "Begin Your Evaluation",
      buttonHref: "/pricing/",
    },
    education: [
      "Doctor of Medicine (MD)",
      "Residency in Family Medicine",
    ],
    licenses: [
      "Board Certified Physician in Family Medicine",
      "Active Medical Licensure in 17 US States",
    ],
    aboutParagraphs: [
      "Dr. Gaurav Patel is a board-certified family medicine physician with experience providing evidence-based care across inpatient, urgent care, outpatient, and telemedicine settings. He has cared for patients in both rural and suburban communities across the United States. His approach combines clinical assessment, diagnostic expertise, and patient education to support individual health needs.",
      "Dr. Patel also has a strong interest in medical education and understands the importance of accessible, patient-focused care throughout the treatment process.",
    ],
  },
];

export function getDoctorBySlug(slug: string): DoctorProfile | undefined {
  const normalized = slug.toLowerCase().replace(/\/$/, "");
  return DOCTORS_DATA.find(
    (doc) =>
      doc.slug.toLowerCase() === normalized ||
      doc.id.toLowerCase() === normalized ||
      doc.aliases?.some((a) => a.toLowerCase() === normalized)
  );
}

export function getAllDoctorSlugs(): string[] {
  const slugs: string[] = [];
  DOCTORS_DATA.forEach((doc) => {
    slugs.push(doc.slug);
    if (doc.aliases) {
      slugs.push(...doc.aliases);
    }
  });
  return Array.from(new Set(slugs));
}
