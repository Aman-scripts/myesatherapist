import { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MaxPhillipsReviewerContent } from "@/components/legal-reviewer/MaxPhillipsReviewerContent";

// Schema.org Structured Data
import { maxPhillipsSchemas } from "@/data/schemas/maxPhillipsSchema";

export const metadata: Metadata = {
  title: "Max Phillips – Medical Reviewer | My ESA Therapist",
  description:
    "Meet Max Phillips, Medical Reviewer at My ESA Therapist. Learn about his role in reviewing health and mental health content related to emotional support animals and ESA evaluations.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://myesatherapist.com/contributors/max-phillips/",
  },
  openGraph: {
    title: "Max Phillips – Medical Reviewer | My ESA Therapist",
    description:
      "Meet Max Phillips, Medical Reviewer at My ESA Therapist. Learn about his role in reviewing health and mental health content related to emotional support animals and ESA evaluations.",
    url: "https://myesatherapist.com/contributors/max-phillips/",
    type: "website",
    siteName: "My ESA Therapist",
    images: [
      {
        url: "https://myesatherapist.com/author/max-phill.webp",
        width: 800,
        height: 1067,
        alt: "Max Phillips – Medical Reviewer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Max Phillips – Medical Reviewer | My ESA Therapist",
    description:
      "Meet Max Phillips, Medical Reviewer at My ESA Therapist. Learn about his role in reviewing health and mental health content related to emotional support animals and ESA evaluations.",
  },
};

export default function MaxPhillipsContributorPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col justify-between text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Schema.org JSON-LD */}
      {maxPhillipsSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
      ))}

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
