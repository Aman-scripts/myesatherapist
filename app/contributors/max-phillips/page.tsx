import { applySheetSeo } from "@/lib/seo";
import { Metadata } from "next";
import { serializeLd } from "@/lib/site";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MaxPhillipsReviewerContent } from "@/components/legal-reviewer/MaxPhillipsReviewerContent";

import { maxPhillipsSchemas } from "@/data/schemas/maxPhillipsSchema";

export const metadata: Metadata = applySheetSeo({
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
    locale: "en_US",
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
    site: "@MyESATherapist",
    creator: "@MyESATherapist",
    title: "Max Phillips – Medical Reviewer | My ESA Therapist",
    description:
      "Meet Max Phillips, Medical Reviewer at My ESA Therapist. Learn about his role in reviewing health and mental health content related to emotional support animals and ESA evaluations.",
  },
});

export default function MaxPhillipsContributorPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between selection:bg-accent/30 selection:text-current">
      {maxPhillipsSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeLd(schemaObj) }}
        />
      ))}

      <TopBanner />
      <Header />

      <main className="flex-1 bg-background">
        <MaxPhillipsReviewerContent />
      </main>

      <Footer />
    </div>
  );
}
