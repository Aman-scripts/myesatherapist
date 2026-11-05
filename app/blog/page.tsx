import { applySheetSeo } from "@/lib/seo";
import { Metadata } from "next";
import { serializeLd } from "@/lib/site";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogsHero } from "@/components/blogs/BlogsHero";
import { BlogsGrid } from "@/components/blogs/BlogsGrid";
import { CtaBanner } from "@/components/home/CtaBanner";

import { blogSchema } from "@/data/schemas/blogSchema";
import { socialImage, withFeatureImage } from "@/data/socialImages";

export const metadata: Metadata = applySheetSeo({
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
    locale: "en_US",
    images: socialImage("blog-hub-page", "Resource hub for emotional support animals").openGraph,
  },
  twitter: {
    card: "summary",
    site: "@MyESATherapist",
    creator: "@MyESATherapist",
    title: "ESA Blog: Emotional Support Animal Articles & Resources | My ESA Therapist",
    description:
      "Explore expert-written articles covering emotional support animals, ESA housing information, therapist evaluations, mental health support, and more.",
    images: socialImage("blog-hub-page", "Resource hub for emotional support animals").twitter,
  },
});


export default function BlogHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent/30 selection:text-current">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeLd(withFeatureImage(blogSchema, "blog-hub-page")) }}
      />

      <TopBanner />
      <Header />

      <main className="flex-1 bg-background">
        <BlogsHero />

        <BlogsGrid />

        <CtaBanner
          title="Could an ESA Be Right for You?"
          titleClassName="normal-case"
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
