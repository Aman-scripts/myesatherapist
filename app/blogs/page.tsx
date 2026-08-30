import { Metadata } from "next";
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
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-between">
      <Header />
      <article className="flex-1">
        <BlogsHero />
        <BlogsTrustBar />
        <BlogsFeaturedArticle />
        <BlogsGrid />
        <FaqSection />
        <CtaBanner
          title="Need help with a PSD letter?"
          description="Connect with a state-licensed mental health professional to discuss your needs and see if a psychiatric service dog letter may be right for you."
          buttonText="Start your Evaluation"
        />
      </article>
      <Footer />
    </main>
  );
}
