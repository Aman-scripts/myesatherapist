import { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";
import { getBlogBySlug, getAllBlogs } from "@/data/blogsData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs
    .filter((b) => b.categorySlug === "qualifying-conditions")
    .map((b) => ({
      slug: b.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogBySlug(slug);

  if (!article || article.categorySlug !== "qualifying-conditions") {
    return {
      title: "Article Not Found | My ESA Therapist",
    };
  }

  return {
    title: `${article.title} | My ESA Therapist`,
    description: article.shortDescription,
    openGraph: {
      title: article.title,
      description: article.shortDescription,
      url: article.canonicalUrl,
      type: "article",
      images: [
        {
          url: article.cardImage,
          alt: article.title,
        },
      ],
    },
    alternates: {
      canonical: article.canonicalUrl,
    },
  };
}

export default async function QualifyingConditionsBlogPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogBySlug(slug);

  if (!article || article.categorySlug !== "qualifying-conditions") {
    notFound();
  }

  // Generate structured schema JSON-LD for this article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${article.canonicalUrl}#blogposting`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.canonicalUrl,
    },
    url: article.canonicalUrl,
    headline: article.title,
    description: article.shortDescription,
    articleSection: article.category,
    datePublished: article.publishDate,
    dateModified: article.lastUpdated,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.title,
    },
    reviewedBy: {
      "@type": "Person",
      name: article.reviewedBy.name,
      jobTitle: article.reviewedBy.credentials,
      url: article.reviewedBy.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: "My ESA Therapist",
      url: "https://myesatherapist.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://myesatherapist.com/common/myesa-logo.svg",
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Article Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <TopBanner />
      <Header />

      <main className="flex-1 bg-[#FAF7F2]">
        {/* 1. Full-width Hero Section */}
        <BlogHeroSection
          title={article.title}
          subtitle={article.shortDescription}
          category={article.category}
          categorySlug={article.categorySlug}
        />

        {/* 2. Floating Meta/Trust Bar */}
        <div className="-mt-12 sm:-mt-16 lg:-mt-[60px] relative z-30 px-4 sm:px-6 lg:px-8">
          <BlogMetaBar
            authorName={article.author.name}
            authorRole={article.author.role}
            authorCredentials={article.author.credentials}
            authorImage={article.author.image}
            publishDate={article.publishDate}
            lastUpdated={article.lastUpdated}
            reviewerName={article.reviewedBy.name}
            reviewerCredentials={article.reviewedBy.credentials}
            reviewerImage={article.reviewedBy.image}
          />
        </div>

        {/* 3. Main Article Content with Left-Aligned Sticky Table of Contents */}
        <div className="w-full relative flex flex-col lg:flex-row items-start justify-start -mt-12 sm:-mt-16 lg:-mt-[60px] z-10">
          <BlogTableOfContents items={article.tocItems} />
          <div className="flex-1 min-w-0 max-w-[960px] xl:max-w-[1020px] px-4 sm:px-8 lg:pl-10 xl:pl-16 lg:pr-8 xl:pr-16 pt-20 sm:pt-24 lg:pt-28 xl:pt-32 pb-16 sm:pb-20">
            <BlogArticleContent article={article} />
          </div>
        </div>

        {/* 4. About the Author */}
        <BlogAuthorBio />

        {/* 5. More ESA Resources (Other Blog Cards) */}
        <BlogMoreResources currentSlug={article.slug} />

        {/* 6. Google Search Highlight Banner */}
        <BlogGoogleSourceBanner />

        {/* 7. FAQ Section (Article-specific FAQs from Google Docs) */}
        <FaqSection
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about ESA letters and our service."
          faqs={article.faqs}
        />

        {/* 8. PSD CTA Banner */}
        <CtaBanner
          title="Need help with a PSD letter?"
          description="Connect with a state-licensed mental health professional to discuss your needs and see if a psychiatric service dog letter may be right for you."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
          bgColor="bg-[#FAF7F2]"
        />

        {/* 9. Content Reviewed by Doctor Badge */}
        <StateReviewerBanner />
      </main>

      <Footer />
    </div>
  );
}
