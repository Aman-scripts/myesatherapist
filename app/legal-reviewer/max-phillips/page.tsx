import { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MaxPhillipsReviewerContent } from "@/components/legal-reviewer/MaxPhillipsReviewerContent";

export const metadata: Metadata = {
  title: "Max Phillips - Clinical Reviewer, MSW, LCSW | My ESA Therapist",
  description:
    "Max Phillips, MSW, LCSW, is a trauma therapist and licensed clinical social worker based in Missouri who contributes clinical insight to mental health content at My ESA Therapist.",
  alternates: {
    canonical: "https://myesatherapist.com/legal-reviewer/max-phillips/",
  },
  openGraph: {
    title: "Max Phillips - Clinical Reviewer, MSW, LCSW | My ESA Therapist",
    description:
      "Max Phillips, MSW, LCSW, is a trauma therapist and licensed clinical social worker based in Missouri who contributes clinical insight to mental health content at My ESA Therapist.",
    url: "https://myesatherapist.com/legal-reviewer/max-phillips/",
    type: "profile",
    images: [
      {
        url: "https://myesatherapist.com/author/max-phill.webp",
        width: 800,
        height: 1067,
        alt: "Max Phillips - Clinical Reviewer",
      },
    ],
  },
};

const maxPhillipsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://myesatherapist.com/legal-reviewer/max-phillips/#webpage",
      "url": "https://myesatherapist.com/legal-reviewer/max-phillips/",
      "name": "Max Phillips - Clinical Reviewer, MSW, LCSW",
      "description":
        "Professional biography, licensure, credentials, and content review responsibilities of Max Phillips at My ESA Therapist.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://myesatherapist.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Max Phillips",
            "item": "https://myesatherapist.com/legal-reviewer/max-phillips/",
          },
        ],
      },
      "mainEntity": {
        "@type": "Person",
        "@id": "https://myesatherapist.com/legal-reviewer/max-phillips/#person",
        "name": "Max Phillips",
        "jobTitle": "Trauma Therapist & Licensed Clinical Social Worker",
        "image": "https://myesatherapist.com/author/max-phill.webp",
        "worksFor": {
          "@type": "Organization",
          "name": "My ESA Therapist",
          "url": "https://myesatherapist.com/",
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "University of Southern California",
          },
          {
            "@type": "EducationalOrganization",
            "name": "Truman State University",
          },
        ],
        "knowsAbout": [
          "Trauma and PTSD",
          "Anxiety and OCD",
          "ADHD and Autism",
          "BPD and Emotional Regulation",
          "Suicidal Ideation and Self-Harm",
          "Sexual Trauma and Identity",
        ],
      },
    },
  ],
};

export default function MaxPhillipsReviewerPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col justify-between text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(maxPhillipsSchema) }}
      />

      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      {/* Main Reviewer Content Area */}
      <main className="flex-1 bg-[#FAF7F2]">
        <MaxPhillipsReviewerContent />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
