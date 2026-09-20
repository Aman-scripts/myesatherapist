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

// Content below is taken from the existing author and reviewer profiles
// (data/authorsData.ts, app/contributors/*) and their schema LinkedIn URLs.
export const AUTHORS: ContributorCardData[] = [
  {
    id: "allyson-valley",
    name: "Allyson Valley",
    title: "Mental Health Writer & Research Contributor",
    bio: "Over a Decade of Mental Health Research and Counseling Experience",
    avatar: "/blogs/blogs_trustbar-author.png",
    linkedin: "https://www.linkedin.com/in/allyson-valley/",
    href: "/author/allyson-valley/",
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
    bio: "Connecting Healthcare Practice With Research-Based Education",
    avatar: "/author/mohammed-ziauddin-image.webp",
    linkedin: "https://www.linkedin.com/in/physiozia/",
    href: "/author/mohammed-ziauddin/",
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
    bio: "Max Phillips, MSW, LCSW, is a trauma therapist and licensed clinical social worker based in Missouri who contributes clinical insight to mental health content at My ESA Therapist.",
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
    bio: "Awais Arshad is a New York-licensed attorney and legal writer with 12 years of legal experience.",
    avatar: "/legal_reviewer/legal-reviwer.png",
    linkedin: "https://www.linkedin.com/in/awais-arshad-a51b31113/",
    href: "/contributors/awais-arshad/",
    badges: [
      { label: "Role", value: "Attorney at Law" },
      { label: "Licensed In", value: "New York" },
      { label: "Experience", value: "12 Years" },
    ],
  },
];
