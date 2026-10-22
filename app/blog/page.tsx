import { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogsHero } from "@/components/blogs/BlogsHero";
import { BlogsGrid } from "@/components/blogs/BlogsGrid";
import { CtaBanner } from "@/components/home/CtaBanner";

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
    <div className="min-h-screen flex flex-col bg-background text-slate-900 selection:bg-accent/30 selection:text-current">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(withFeatureImage(blogSchema, "blog-hub-page")) }}
      />

      <TopBanner />
      <Header />

      <main className="flex-1 bg-background">
        {/* 1. Hero Banner */}
        <BlogsHero />

        {/* 2. Categorized Blogs Grid (ESA Guide, Qualifying Conditions, ESA Training) */}
        <BlogsGrid />

        {/* 3. Can ESA Be Right For You Call to Action */}
        <CtaBanner
          title="Can ESA be Right for you"
          description="Learning about emotional support animals is the first step. When you're ready, speak with a licensed mental health professional to determine whether an ESA is appropriate for your individual needs."
          buttonText="Start Your Evaluation"
          buttonHref="/pricing/"
          bgColor="bg-background"
          className="pb-0"
        />
      </main>

      <Footer />
    </div>
  );
}
