import { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogHeroSection } from "@/components/blogs/BlogHeroSection";
import { BlogMetaBar } from "@/components/blogs/BlogMetaBar";
import { BlogTableOfContents } from "@/components/blogs/BlogTableOfContents";
import { BlogArticleContent } from "@/components/blogs/BlogArticleContent";
import { BlogAuthorBio } from "@/components/blogs/BlogAuthorBio";
import { BlogMoreResources } from "@/components/blogs/BlogMoreResources";
import { BlogGoogleSourceBanner } from "@/components/blogs/BlogGoogleSourceBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "How to Verify If an ESA Letter Is Legitimate: A Landlord & Tenant Checklist | My ESA Therapist",
  description:
    "Learn how landlords and tenants can verify an ESA letter for legitimacy. Check qualifications, state laws, LMHP credentials, and red flags under FHA guidelines.",
  openGraph: {
    title: "How to Verify If an ESA Letter Is Legitimate: A Landlord & Tenant Checklist",
    description:
      "A practical checklist to help landlords and tenants determine whether an emotional support animal letter is legitimate and FHA-compliant.",
    url: "https://myesatherapist.com/blogs/how-to-verify-if-an-esa-letter-is-legitimate",
    type: "article",
  },
};

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        {/* 1. Full-width Hero Section (Responsive Mobile, Tablet & Desktop) */}
        <BlogHeroSection />

        {/* 2. Floating Meta/Trust Bar (Layered above Table of Contents & Hero bottom) */}
        <div className="-mt-12 sm:-mt-16 lg:-mt-[60px] relative z-30 px-4 sm:px-6 lg:px-8">
          <BlogMetaBar />
        </div>

        {/* 3. Main Article Content with Left-Aligned Sticky Table of Contents */}
        <div className="w-full relative flex flex-col lg:flex-row items-start justify-start -mt-12 sm:-mt-16 lg:-mt-[60px] z-10">
          <BlogTableOfContents />
          <div className="flex-1 min-w-0 max-w-[960px] xl:max-w-[1020px] px-4 sm:px-8 lg:pl-10 xl:pl-16 lg:pr-8 xl:pr-16 pt-20 sm:pt-24 lg:pt-28 xl:pt-32 pb-16 sm:pb-20">
            <BlogArticleContent />
          </div>
        </div>

        {/* 4. About the Author */}
        <BlogAuthorBio />

        {/* 5. More ESA Resources (3 Cards) */}
        <BlogMoreResources />

        {/* 6. Google Search Highlight Banner */}
        <BlogGoogleSourceBanner />

        {/* 7. FAQ Section */}
        <FaqSection />

        {/* 8. PSD CTA Banner */}
        <CtaBanner
          title="Need help with a PSD letter?"
          description="Connect with a state-licensed mental health professional to discuss your needs and see if a psychiatric service dog letter may be right for you."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
          bgColor="bg-[#FAF7F2]"
        />
      </main>

      <Footer />
    </div>
  );
}
