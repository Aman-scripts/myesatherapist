import { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogsHero } from "@/components/blogs/BlogsHero";
import { BlogsTrustBar } from "@/components/blogs/BlogsTrustBar";
import { BlogsFeaturedArticle } from "@/components/blogs/BlogsFeaturedArticle";
import { BlogsGrid } from "@/components/blogs/BlogsGrid";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "ESA & Emotional Support Animal Guides & Articles | My ESA Therapist",
  description:
    "Explore expert guides, legal housing rights, FHA regulations, and therapy insights for Emotional Support Animals and Psychiatric Service Dogs.",
  openGraph: {
    title: "Your Guide to Emotional Support Animals | My ESA Therapist",
    description:
      "Connect ESA letters, emotional well-being, housing rights, and life with an Emotional Support Animal.",
    url: "https://myesatherapist.com/blogs",
    type: "website",
  },
};

export default function BlogsHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EEEBE0] text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#EEEBE0]">
        {/* 1. Hero Banner */}
        <BlogsHero />

        {/* 2. Trust Features Bar (HIPAA, Response 24-72h, Licensed in 50 states) */}
        <BlogsTrustBar />

        {/* 3. Featured Article Card */}
        <BlogsFeaturedArticle />

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
      </main>

      <Footer />
    </div>
  );
}
