import { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalReviewerContent } from "@/components/legal-reviewer/LegalReviewerContent";

// Schema.org Structured Data
import { awaisArshadSchemas } from "@/data/schemas/awaisArshadSchema";

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
        url: "https://myesatherapist.com/legal_reviewer/legal-reviwer.webp",
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

export default function AwaisArshadContributorPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col justify-between text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Schema.org JSON-LD */}
      {awaisArshadSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
      ))}

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
