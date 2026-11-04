export interface ContributorCardData {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  linkedin: string;
  href: string;
  badges: Array<{ label: string; value: string }>;
}

export const AUTHORS: ContributorCardData[] = [
  {
    id: "allyson-valley",
    name: "Allyson Valley",
    title: "Mental Health Writer & Research Contributor",
    bio: "Allyson Valley, Ph.D., LPC, is a licensed counselor with 11 years of experience, creating research-based content on emotional wellness, ESA guidance, and mental health education.",
    avatar: "/blogs/blogs-trustbar-author.webp",
    linkedin: "https://www.linkedin.com/in/allyson-valley/",
    href: "/contributors/allyson-valley/",
    badges: [
      { label: "Credentials", value: "Ph.D., LPC" },
      { label: "Experience", value: "11 Years" },
      { label: "Focus Areas", value: "Mental Health" },
    ],
  },
  {
    id: "mohammed-ziauddin",
    name: "Mohammed Ziauddin",
    title: "Health Writer",
    bio: "Mohammed Ziauddin is a healthcare professional, medical researcher, and health writer with 12 years of experience creating research-based content on ESA guidance, mental health, and emotional wellness.",
    avatar: "/author/mohammed-ziauddin-image.webp",
    linkedin: "https://www.linkedin.com/in/physiozia/",
    href: "/contributors/mohammed-ziauddin/",
    badges: [
      { label: "Role", value: "Health Writer" },
      { label: "Experience", value: "12 Years" },
      { label: "Focus Areas", value: "Clinical Practice, Health Research" },
    ],
  },
];

export const REVIEWERS: ContributorCardData[] = [
  {
    id: "max-phillips",
    name: "Max Phillips",
    title: "Medical Reviewer",
    bio: "Max Phillips, MSW, LCSW, is a Missouri-licensed clinical social worker with 16 years of experience, reviewing mental health content for clinical accuracy and trauma-informed guidance.",
    avatar: "/author/max-phill.webp",
    linkedin: "https://www.linkedin.com/in/max-phillips-883485a5/",
    href: "/contributors/max-phillips/",
    badges: [
      { label: "Credentials", value: "MSW, LCSW" },
      { label: "Based In", value: "Missouri" },
      { label: "Focus Areas", value: "PTSD, BPD, Anxiety" },
    ],
  },
  {
    id: "awais-arshad",
    name: "Awais Arshad",
    title: "Legal Reviewer",
    bio: "Awais Arshad is a New York-licensed attorney with 12 years of legal experience, reviewing ESA content for accuracy, compliance, and alignment with federal and state laws.",
    avatar: "/legal-reviewer/legal-reviwer.webp",
    linkedin: "https://www.linkedin.com/in/awais-arshad-a51b31113/",
    href: "/contributors/awais-arshad/",
    badges: [
      { label: "Role", value: "Attorney at Law" },
      { label: "Licensed In", value: "New York" },
      { label: "Experience", value: "12 Years" },
    ],
  },
];

export const CONTRIBUTORS_FAQS = [
  {
    q: "What is the difference between an author and a reviewer?",
    a: "An author researches and writes website content, while a reviewer evaluates it for accuracy, clarity, and reliability. At My ESA Therapist, both contribute to providing readers with trustworthy and informative resources.",
  },
  {
    q: "How do contributors help maintain the accuracy of website content?",
    a: "Our contributors use credible sources, professional knowledge, and careful research to create and review content. Their work helps ensure information is accurate, clear, relevant, and useful to readers.",
  },
  {
    q: "Does content review replace professional medical or legal advice?",
    a: "No. Our content is for educational purposes only. It does not replace individualized advice from a licensed healthcare professional or qualified attorney.",
  },
];
