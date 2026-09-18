export interface DoctorProfile {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  title: string;
  credentials: string;
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

export const DOCTORS_DATA: DoctorProfile[] = [
  {
    id: "leslie-gamble",
    slug: "dr-leslie-k-gamble",
    aliases: ["leslie-gamble", "leslie-k-gamble"],
    name: "Leslie K. Gamble, LICSW",
    title: "Licensed Independent Clinical Social Worker",
    credentials: "LICSW, LCSW",
    heroBio:
      "Compassionate therapist with 13+ years of experience helping individuals, couples, and families navigate mental wellness through evidence-based, patient-focused care.",
    bio: "Leslie K. Gamble, LICSW is an experienced clinical social worker and therapist licensed across multiple states. With over 13 years of clinical practice, she specializes in cognitive behavioral approaches, trauma-informed therapy, and evaluating emotional support animals for patients managing chronic emotional challenges.",
    stats: {
      years: "13+",
      states: "15+",
      focusAreas: "7",
    },
    licensedIn: "15+ States",
    method: "Video or Phone",
    focus: "Depression, PTSD",
    avatar: "/doctors/leslie-k.-gamble-licsw-image.webp",
    linkedin: "https://www.linkedin.com/in/leslie-gamble-727571366",
    trustStats: [
      {
        value: "6,000+",
        label: "Clients Evaluated",
      },
      {
        value: "4.9/5.0",
        label: "Average Verified Ratings",
      },
      {
        value: "13+ years",
        label: "Clinical Experience",
      },
      {
        value: "$149",
        label: "All inclusive, no surprises",
      },
      {
        value: "Compliant",
        label: "State Board & FHA Practice",
      },
    ],
    aboutSection: {
      heading: "About Leslie K. Gamble, LICSW",
      paragraphs: [
        "Leslie K. Gamble brings over a decade of dedicated clinical practice in mental health therapy, psychotherapy, and patient advocacy. She has guided hundreds of patients through comprehensive mental health assessments, helping them overcome anxiety, depression, post-traumatic stress, and situational stress.",
        "As a certified telehealth provider and ESA clinical evaluator, Leslie ensures every assessment strictly adheres to state licensing guidelines, ethical standards, and federal Fair Housing Act (FHA) requirements.",
      ],
    },
    philosophySection: {
      heading: "Patient Care Philosophy",
      paragraphs: [
        "Her evaluation philosophy focuses on empathetic listening, objective clinical determination, and practical mental wellness strategies to support individuals and families in their journey toward mental and emotional wellbeing.",
      ],
    },
    education: [
      "Master of Social Work (MSW) - Clinical Social Work",
      "Bachelor of Arts in Psychology",
    ],
    licenses: [
      "Licensed Independent Clinical Social Worker (LICSW)",
      "Licensed Clinical Social Worker (LCSW) across 15+ US jurisdictions",
    ],
    aboutParagraphs: [
      "Leslie K. Gamble brings over a decade of dedicated clinical practice in mental health therapy, psychotherapy, and patient advocacy. She has guided hundreds of patients through comprehensive mental health assessments, helping them overcome anxiety, depression, post-traumatic stress, and situational stress.",
      "As a certified telehealth provider and ESA clinical evaluator, Leslie ensures every assessment strictly adheres to state licensing guidelines, ethical standards, and federal Fair Housing Act (FHA) requirements. Her evaluation philosophy focuses on empathetic listening, objective clinical determination, and practical mental wellness strategies.",
    ],
  },
  {
    id: "robert-staaf",
    slug: "dr-robert-staff",
    aliases: ["dr-robert-staaf", "robert-staaf", "robert-staff"],
    name: "Robert Staaf, LCSW",
    title: "Licensed Clinical Social Worker",
    credentials: "LCSW, LISW",
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
    avatar: "/doctors/robert-staaf-profile-image.webp",
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
