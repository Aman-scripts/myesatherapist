export interface AuthorProfile {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  credentials: string;
  title: string;
  avatar: string;
  experienceLabel: string;
  heroTagline: string;
  bioParagraphs: string[];
  skillTags?: string[];
  focusCards?: Array<{ title: string; subtitle: string }>;
  sidebarEducation: Array<{ label: string; year: string }>;
  sidebarFocusAreas: string[];
  educationDetails: Array<{
    degree: string;
    field?: string;
    institution: string;
    year: string;
  }>;
  focusAreas: string[];
  contentSections: Array<{
    heading: string;
    intro?: string;
    bullets?: string[];
    closing?: string;
  }>;
  disclaimerParagraphs: string[];
  articlesNote?: string;
}

export const AUTHORS_DATA: AuthorProfile[] = [
  {
    id: "allyson-valley",
    slug: "allyson-valley",
    name: "Allyson Valley",
    credentials: "Ph.D., LPC",
    title: "Mental Health Writer & Research Contributor",
    avatar: "/blogs/blogs_trustbar-author.png",
    experienceLabel: "11 Years of Experience",
    heroTagline:
      "Over a Decade of Mental Health Research and Counseling Experience",
    bioParagraphs: [
      "Allyson Valley, Ph.D., LPC, is a mental health writer, researcher, and licensed professional counselor with more than 11 years of experience in emotional wellness, counseling support, and crisis management. She specializes in creating educational, easy-to-understand mental health content that helps readers better understand emotional support resources, mental wellness topic professional counselors, and ESA-related guidance.",
      "Her writing focuses on clarity, accessibility, and responsible communication, ensuring readers receive trustworthy and informative content without confusion or misleading claims.",
      "At My ESA Therapist, Allyson contributes educational articles and research-based content related to emotional support animals, mental health awareness, emotional wellness, and supportive care resources.",
    ],
    skillTags: [
      "Mental Health",
      "Counseling & Therapy",
      "Emotional Wellness",
      "Crisis Management",
      "ESA & Housing",
      "Legal Guidance",
    ],
    sidebarEducation: [
      { label: "Doctor of Philosophy (Ph.D.)", year: "2026" },
      { label: "Master of Science (MS)", year: "2019" },
      { label: "Bachelor's of Arts (BA)", year: "2016" },
    ],
    sidebarFocusAreas: [
      "ESA Education",
      "ESA Housing Information",
      "Anxiety & Support Topics",
    ],
    educationDetails: [
      {
        degree: "Doctor of Philosophy (Ph.D.)",
        field: "Counselor Education and Supervision",
        institution: "Capella University",
        year: "2026",
      },
      {
        degree: "Master of Science (MS)",
        field: "Clinical Mental Health Counseling",
        institution: "Capella University",
        year: "2019",
      },
      {
        degree: "Bachelor of Arts (BA)",
        field: "Psychology",
        institution: "University of Arkansas",
        year: "2016",
      },
    ],
    focusAreas: [
      "Emotional Support Animal Education",
      "Mental Health Awareness",
      "Emotional Wellness Resources",
      "Anxiety & Stress Support Topics",
      "ESA Housing Information",
    ],
    contentSections: [
      {
        heading: "Role at My ESA Therapist",
        intro:
          "At My ESA Therapist, Allyson Valley works as a mental health content writer and research contributor. Her role includes creating educational and informational content designed to help users better understand:",
        bullets: [
          "Mental health and emotional wellness topics",
          "ESA housing accommodation guidance",
          "Emotional support resources",
          "Ethical and responsible ESA-related information",
          "Anxiety, stress, and emotional wellness education",
        ],
        closing:
          "Her content is written to support readers through clear, accurate, and user-friendly educational resources.",
      },
      {
        heading: "Editorial Standards & Research Approach",
        intro:
          "Allyson follows strict editorial and research standards when creating mental health and ESA-related content. Her approach includes:",
        bullets: [
          "Using reliable and publicly available sources",
          "Writing clear and accessible educational content",
          "Supporting ethical and transparent communication",
          "Following platform editorial review standards",
          "Creating user-focused content designed for readability and trust",
          "Avoiding misleading claims or approval guarantees",
        ],
        closing:
          "Her work is intended to educate readers while maintaining accuracy, professionalism, and responsible communication practices.",
      },
      {
        heading: "Commitment to Accuracy & Transparency",
        intro: "Allyson is committed to producing content that is:",
        bullets: [
          "Clear and easy to understand",
          "Reviewed for accuracy and consistency",
          "Written with transparency and professionalism",
          "Focused on educational value",
        ],
        closing:
          "She works closely with the My ESA Therapist editorial process to help ensure all published material supports ethical and responsible communication practices.",
      },
    ],
    disclaimerParagraphs: [
      "Content written by Allyson Valley, Ph.D., LPC, is intended for educational and informational purposes only and should not be considered medical, psychological, or legal advice.",
      "ESA evaluations referenced on this website are conducted independently by licensed mental health professionals. Information provided does not guarantee approval, documentation, or specific outcomes.",
    ],
    articlesNote:
      "Articles written by Allyson Valley appear throughout the My ESA Therapist website, covering emotional support animal education, mental health awareness resources, emotional wellness guidance, and user-focused educational content.",
  },
  {
    id: "mohammed-ziauddin",
    slug: "mohammed-ziauddin",
    name: "Mohammed Ziauddin",
    credentials: "Health Writer",
    title: "Health Writer",
    avatar: "/common/therapist-avatar.png",
    experienceLabel: "12 Years of Experience",
    heroTagline: "Connecting Healthcare Practice With Research-Based Education",
    bioParagraphs: [
      "Mohammed Ziauddin is an experienced healthcare professional, medical researcher, and health writer with 12 years of experience in healthcare, clinical practice, and academic research. He holds a Master of Physiotherapy in Sports from Jamia Hamdard University and has expertise in health assessment, rehabilitation, pain management, patient care, and evidence-based healthcare practices.",
      "His writing combines clinical experience and research-based knowledge, which helps convert complicated health topics into clear and accurate information.",
      "At My ESA Therapist, Mohammed contributes research-based content covering mental health, emotional wellness, healthcare, and emotional support resources. His approach emphasizes medical accuracy, clarity, responsible communication, and presenting complex health information in a way that is easy for readers to understand.",
    ],
    focusCards: [
      { title: "Clinical Practice", subtitle: "Rehabilitation & Pain Care" },
      { title: "Health Research", subtitle: "Evidence-Based Writing" },
      { title: "Patient Care", subtitle: "Health Assessment" },
    ],
    sidebarEducation: [
      { label: "Master of Physiotherapy (MPT)", year: "2026" },
      { label: "Postgraduate Diploma (PG Diploma)", year: "2019" },
      { label: "Medical Writing", year: "2014" },
    ],
    sidebarFocusAreas: [
      "Emotional Support Animal Education",
      "ESA Laws & Regulatory Information",
      "ESA Housing & Accommodation Guidance",
      "Mental Health & Emotional Wellness",
      "ESA Eligibility & Documentation",
      "Healthcare Research & Evidence-Based Information",
    ],
    educationDetails: [
      {
        degree: "Master of Physiotherapy (MPT)",
        field: "Sports Physiotherapy",
        institution: "Jamia Hamdard University",
        year: "2026",
      },
      {
        degree: "Postgraduate Diploma (PG Diploma)",
        field: "Exercise and Sports Medicine",
        institution: "Asia College of Exercise & Sports Medicine",
        year: "2019",
      },
      {
        degree: "Medical Writing",
        field: "Professional Training",
        institution: "University of Chicago",
        year: "2014",
      },
    ],
    focusAreas: [
      "Emotional Support Animal Education",
      "ESA Laws & Regulatory Information",
      "ESA Housing & Accommodation Guidance",
      "Mental Health & Emotional Wellness",
      "ESA Eligibility & Documentation",
      "Healthcare Research & Evidence-Based Information",
    ],
    contentSections: [
      {
        heading: "Role at My ESA Therapist",
        intro:
          "At My ESA Therapist, Mohammed Ziauddin works as a legal writer and research contributor, using his background in healthcare and research to develop reliable, reader-focused content. His work covers:",
        bullets: [
          "Emotional support and mental wellness",
          "ESA-related healthcare information",
          "Housing accommodations and ESA guidance",
          "Anxiety, stress, and emotional wellness",
          "Research-based ESA and mental health education",
        ],
        closing:
          "His content emphasizes accuracy, context, and clarity, helping readers better understand the connection between mental health, emotional well-being, and emotional support animals.",
      },
      {
        heading: "Editorial Standards & Research Approach",
        intro:
          "Mohammed Ziauddin approaches health and ESA-related content with a focus on medical accuracy, research, and reader understanding. His content development process focuses on:",
        bullets: [
          "Reviewing relevant healthcare and mental health research",
          "Presenting ESA information within an appropriate clinical context",
          "Differentiating general education from individualized medical advice",
          "Explaining complex health concepts in simple language",
          "Prioritizing factual, balanced, and responsible information",
          "Keeping content aligned with current healthcare and ESA guidance",
        ],
        closing:
          "His goal is to make health and ESA-related information informative, understandable, and grounded in responsible research practices.",
      },
      {
        heading: "Commitment to Accuracy & Transparency",
        intro:
          "Mohammed Ziauddin is committed to creating health and ESA-related content that is:",
        bullets: [
          "Accurate and research-informed",
          "Clear and accessible to readers",
          "Carefully reviewed for factual consistency",
          "Responsible when discussing ESA laws and regulations",
          "Focused on providing practical educational value",
        ],
        closing:
          "Through his work with My ESA Therapist, he contributes to content that prioritizes factual accuracy, transparency, and responsible communication, particularly when covering mental health, ESA rights, and related legal considerations.",
      },
    ],
    disclaimerParagraphs: [
      "Content written by Mohammed Ziauddin is intended for educational and informational purposes only and should not be considered medical, psychological, or legal advice.",
      "ESA evaluations referenced on this website are conducted independently by licensed mental health professionals. Information provided by Mohammed does not guarantee ESA eligibility, approval, documentation, housing accommodation, or any specific outcome.",
    ],
    articlesNote:
      "Articles written by Mohammed Ziauddin appear throughout the My ESA Therapist website, covering ESA laws and regulations, housing accommodations, emotional support animal education, mental health topics, and research-informed health resources. His content is designed to help readers better understand ESA-related requirements and make informed decisions about available support resources.",
  },
];

export function getAuthorBySlug(slug: string): AuthorProfile | undefined {
  const normalized = slug.toLowerCase().replace(/\/$/, "");
  return AUTHORS_DATA.find(
    (a) =>
      a.slug.toLowerCase() === normalized ||
      a.id.toLowerCase() === normalized ||
      a.aliases?.some((alias) => alias.toLowerCase() === normalized)
  );
}

export function getAllAuthorSlugs(): string[] {
  const slugs: string[] = [];
  AUTHORS_DATA.forEach((a) => {
    slugs.push(a.slug);
    if (a.aliases) {
      slugs.push(...a.aliases);
    }
  });
  return Array.from(new Set(slugs));
}
