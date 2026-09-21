import { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogsHero } from "@/components/blogs/BlogsHero";
import { BlogsTrustBar } from "@/components/blogs/BlogsTrustBar";
import { BlogsGrid } from "@/components/blogs/BlogsGrid";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

import { blogSchema } from "@/data/schemas/blogSchema";
import { socialImage, withFeatureImage } from "@/data/socialImages";

export const metadata: Metadata = {
  title: "ESA Blog: Emotional Support Animal Articles & Resources | My ESA Therapist",
  description:
    "Explore expert-written articles covering emotional support animals, ESA housing information, therapist evaluations, mental health support, and more.",
  alternates: {
    canonical: "https://myesatherapist.com/blog/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    title: "ESA Blog: Emotional Support Animal Articles & Resources | My ESA Therapist",
    description:
      "Explore expert-written articles covering emotional support animals, ESA housing information, therapist evaluations, mental health support, and more.",
    url: "https://myesatherapist.com/blog/",
    siteName: "My ESA Therapist",
    type: "article",
    images: socialImage("blog-hub-page", "Resource hub for emotional support animals").openGraph,
  },
  twitter: {
    card: "summary_large_image",
    title: "ESA Blog: Emotional Support Animal Articles & Resources | My ESA Therapist",
    description:
      "Explore expert-written articles covering emotional support animals, ESA housing information, therapist evaluations, mental health support, and more.",
    images: socialImage("blog-hub-page", "Resource hub for emotional support animals").twitter,
  },
};


export default function BlogHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(withFeatureImage(blogSchema, "blog-hub-page")) }}
      />

      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        {/* 1. Hero Banner */}
        <BlogsHero />

        {/* 2. Trust Features Bar (HIPAA, Response 24-72h, Licensed in 50 states) */}
        <BlogsTrustBar />

        {/* 4. 3x3 Blogs Grid (9 Articles) */}
        <BlogsGrid />

        {/* 5. Frequently Asked Questions */}
        <FaqSection />

        {/* 6. PSD Letter Call to Action */}
        <CtaBanner
          title="Need help with a PSD letter?"
          description="Connect with a state-licensed mental health professional to discuss your needs and see if a psychiatric service dog letter may be right for you."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
          bgColor="bg-[#EEEBE0]"
        />

        {/* 7. Content Reviewed by Doctor Badge */}
        <StateReviewerBanner />
      </main>

      <Footer />
    </div>
  );
}
