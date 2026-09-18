import { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalReviewerContent } from "@/components/legal-reviewer/LegalReviewerContent";

export const metadata: Metadata = {
  title: "Awais Arshad – Legal Reviewer | My ESA Therapist",
  description:
    "Meet Awais Arshad, Legal Reviewer at My ESA Therapist. Learn about his role in reviewing legal and housing-related content concerning emotional support animals and ESA laws.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://myesatherapist.com/contributors/awais-arshad/",
  },
  openGraph: {
    title: "Awais Arshad – Legal Reviewer | My ESA Therapist",
    description:
      "Meet Awais Arshad, Legal Reviewer at My ESA Therapist. Learn about his role in reviewing legal and housing-related content concerning emotional support animals and ESA laws.",
    url: "https://myesatherapist.com/contributors/awais-arshad/",
    type: "website",
    siteName: "My ESA Therapist",
    images: [
      {
        url: "https://myesatherapist.com/legal_reviewer/legal-reviwer.png",
        width: 800,
        height: 1067,
        alt: "Awais Arshad – Legal Reviewer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Awais Arshad – Legal Reviewer | My ESA Therapist",
    description:
      "Meet Awais Arshad, Legal Reviewer at My ESA Therapist. Learn about his role in reviewing legal and housing-related content concerning emotional support animals and ESA laws.",
  },
};

const legalReviewerSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://myesatherapist.com/contributors/awais-arshad/#webpage",
      "url": "https://myesatherapist.com/contributors/awais-arshad/",
      "name": "Awais Arshad – Legal Reviewer | My ESA Therapist",
      "description":
        "Meet Awais Arshad, Legal Reviewer at My ESA Therapist. Learn about his role in reviewing legal and housing-related content concerning emotional support animals and ESA laws.",
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
            "name": "Awais Arshad",
            "item": "https://myesatherapist.com/contributors/awais-arshad/",
          },
        ],
      },
      "mainEntity": {
        "@type": "Person",
        "@id": "https://www.linkedin.com/in/awais-arshad-a51b31113/#person",
        "name": "Awais Arshad",
        "jobTitle": "Attorney at Law & Legal Reviewer",
        "image": "https://myesatherapist.com/legal_reviewer/legal-reviwer.png",
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

export default function AwaisArshadContributorPage() {
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
