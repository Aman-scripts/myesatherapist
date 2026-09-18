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
      "Independent clinical therapist licensed in over 30 states, dedicated to patient-centered emotional health evaluations and therapeutic support.",
    bio: "Robert Staaf, LCSW is an Independent Clinical Social Worker and Therapist, currently licensed to practice at the clinical level in over 30 states. Mr. Staaf has extensive experience in psychotherapy and child and family welfare. He is a pet owner and an animal lover, and an advocate for highlighting how animals can be utilized in mental health treatment.",
    stats: {
      years: "18+",
      states: "30+",
      focusAreas: "8",
    },
    licensedIn: "30+ States",
    method: "Video or Phone",
    focus: "Anxiety, Stress",
    avatar: "/doctors/robert-staaf-profile-image.webp",
    linkedin: "https://www.linkedin.com/in/robert-staaf-b57b53333/",
    trustStats: [
      {
        value: "8,500+",
        label: "Clients Evaluated",
      },
      {
        value: "4.9/5.0",
        label: "Average Verified Ratings",
      },
      {
        value: "18+ years",
        label: "Clinical Experience",
      },
      {
        value: "$149",
        label: "All inclusive, no surprises",
      },
      {
        value: "30+ States",
        label: "State Board Licensure",
      },
    ],
    education: [
      "Master of Social Work (MSW)",
      "Bachelor of Social Work (BSW)",
    ],
    licenses: [
      "Licensed Clinical Social Worker (LCSW) in 30+ States",
      "Board Certified Clinical Social Work Examiner",
    ],
    aboutParagraphs: [
      "Robert Staaf has dedicated his professional career to providing compassionate, accessible psychotherapy and emotional support assessments to individuals and families across the country.",
      "With multi-state clinical licensure covering more than 30 states, Robert specializes in tele-mental health evaluations, helping clients find relief from severe anxiety, panic disorders, and situational life stressors.",
    ],
  },
  {
    id: "gaurav-patel",
    slug: "dr-gaurav-patel",
    aliases: ["gaurav-patel", "dr-gaurav-patel-md"],
    name: "Dr. Gaurav Patel, MD",
    title: "Family Medicine Physician",
    credentials: "MD, Board-Certified Physician",
    heroBio:
      "Board-certified physician with extensive clinical expertise across urgent care, outpatient therapy, and comprehensive telehealth evaluations.",
    bio: "Dr. Gaurav Patel, MD is a board-certified physician with extensive background across urgent care, outpatient clinical practice, and telehealth consultations. He is committed to empathetic, patient-centered care and evaluating emotional wellness through thorough clinical assessments.",
    stats: {
      years: "12+",
      states: "17+",
      focusAreas: "6",
    },
    licensedIn: "17 States",
    method: "Video or Phone",
    focus: "Chronic Illness, Sleep",
    avatar: "/doctors/dr-gaurav-patel-image.webp",
    linkedin: "https://www.linkedin.com/in/gaurav-patel-m-d-b5565916",
    trustStats: [
      {
        value: "5,000+",
        label: "Patients Evaluated",
      },
      {
        value: "4.9/5.0",
        label: "Average Verified Ratings",
      },
      {
        value: "12+ years",
        label: "Clinical Experience",
      },
      {
        value: "$149",
        label: "All inclusive, no surprises",
      },
      {
        value: "Board Certified",
        label: "FHA & Clinical Compliance",
      },
    ],
    education: [
      "Doctor of Medicine (MD)",
      "Residency in Family Medicine",
    ],
    licenses: [
      "Board Certified Physician in Family Medicine",
      "Active Medical Licensure in 17 US States",
    ],
    aboutParagraphs: [
      "Dr. Gaurav Patel combines deep medical expertise with an empathetic approach to whole-person care. He understands the intricate connection between physical well-being, chronic conditions, sleep disorders, and mental health.",
      "Through secure telehealth evaluations, Dr. Patel conducts thorough reviews to understand each patient's lifestyle, symptoms, and coping mechanisms, recommending supportive care plans and ESA letters when clinically indicated.",
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
