import { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalReviewerContent } from "@/components/legal-reviewer/LegalReviewerContent";

export const metadata: Metadata = {
  title: "Awais Arshad - Legal Reviewer & Attorney | My ESA Therapist",
  description:
    "Awais Arshad is a New York-licensed attorney and legal reviewer at My ESA Therapist with over a decade of experience fact-checking U.S. legal content and ESA regulations.",
  alternates: {
    canonical: "https://myesatherapist.com/legal-reviewer/",
  },
  openGraph: {
    title: "Awais Arshad - Legal Reviewer & Attorney | My ESA Therapist",
    description:
      "Awais Arshad is a New York-licensed attorney and legal reviewer at My ESA Therapist with over a decade of experience fact-checking U.S. legal content and ESA regulations.",
    url: "https://myesatherapist.com/legal-reviewer/",
    type: "profile",
    images: [
      {
        url: "https://myesatherapist.com/legal_reviewer/legal-reviwer.webp",
        width: 800,
        height: 1067,
        alt: "Awais Arshad - Legal Reviewer",
      },
    ],
  },
};

const legalReviewerSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://myesatherapist.com/legal-reviewer/#webpage",
      "url": "https://myesatherapist.com/legal-reviewer/",
      "name": "Awais Arshad - Legal Reviewer & Attorney at Law",
      "description":
        "Professional biography, licensure, credentials, and legal content review responsibilities of Awais Arshad at My ESA Therapist.",
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
            "name": "Legal Reviewer",
            "item": "https://myesatherapist.com/legal-reviewer/",
          },
        ],
      },
      "mainEntity": {
        "@type": "Person",
        "@id": "https://www.linkedin.com/in/awais-arshad-a51b31113/#person",
        "name": "Awais Arshad",
        "jobTitle": "Attorney at Law & Legal Reviewer",
        "image": "https://myesatherapist.com/legal_reviewer/legal-reviwer.webp",
        "sameAs": [
          "https://www.linkedin.com/in/awais-arshad-a51b31113/",
          "https://courtingthelaw.com/",
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "My ESA Therapist",
          "url": "https://myesatherapist.com/",
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Columbia Law School",
          },
        ],
        "knowsAbout": [
          "Legal Writing",
          "Fact-Checking & Compliance",
          "Fair Housing Law",
          "Federal & State Regulations",
          "Legal Accessibility",
          "Clear Client Communication",
        ],
      },
    },
  ],
};

export default function LegalReviewerPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col justify-between text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalReviewerSchema) }}
      />

      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      {/* Main Legal Reviewer Content Area */}
      <main className="flex-1 bg-[#FAF7F2]">
        <LegalReviewerContent />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
