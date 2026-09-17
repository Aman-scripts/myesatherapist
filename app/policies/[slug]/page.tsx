import React from "react";
import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { ALL_POLICIES_LIST, getPolicyBySlug, POLICIES_DATA } from "@/data/policiesData";
import { PolicyPageLayout } from "@/components/policies/PolicyPageLayout";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface PolicyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_POLICIES_LIST.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PolicyPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "privacy-policy") {
    return {
      title: "Privacy Policy | My ESA Therapist Data Protection & Security",
      description: "Read the Privacy Policy of My ESA Therapist to learn how we collect, use, and protect your personal and health information with secure data practices.",
      alternates: {
        canonical: "https://myesatherapist.com/privacy-policy/",
      },
    };
  }

  if (slug === "terms-of-use") {
    return {
      title: "Terms of Use | My ESA Therapist Legal & Service Policies",
      description:
        "Read the Terms of Use for My ESA Therapist, including service policies, user responsibilities, payments, and ESA evaluation guidelines.",
      alternates: {
        canonical: "https://myesatherapist.com/terms-of-use/",
      },
    };
  }

  if (slug === "disclaimer" || slug === "disclaimer-and-policies") {
    return {
      title: "Disclaimer | My ESA Therapist",
      description:
        "Review the My ESA Therapist disclaimer covering website information, educational content, professional services, and important limitations of information provided online.",
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
      alternates: {
        canonical: "https://myesatherapist.com/disclaimer/",
      },
    };
  }

  if (slug === "hipaa-compliance") {
    return {
      title: "HIPAA Compliance & Data Privacy | My ESA Therapist",
      description:
        "My ESA Therapist follows HIPAA-aligned standards to protect your data during ESA evaluations conducted by licensed mental health professionals.",
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
      alternates: {
        canonical: "https://myesatherapist.com/hipaa-compliance/",
      },
    };
  }

  if (slug === "refund-policy") {
    return {
      title: "Refund & Cancellation Policy | My ESA Therapist",
      description:
        "Review the refund policy of My ESA Therapist. Learn about eligibility, conditions, and how refunds are handled for ESA letter evaluations and services.",
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
      alternates: {
        canonical: "https://myesatherapist.com/refund-policy/",
      },
    };
  }

  if (slug === "consent-for-telehealth") {
    return {
      title: "Consent for Telehealth | My ESA Therapist",
      description:
        "Review My ESA Therapist’s telehealth consent information, including virtual care, communication, privacy, and important considerations before receiving services online.",
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
      alternates: {
        canonical: "https://myesatherapist.com/consent-for-telehealth/",
      },
    };
  }

  if (slug === "editorial-policy") {
    return {
      title: "Editorial Policy | My ESA Therapist",
      description:
        "Learn how My ESA Therapist creates, reviews, updates, and maintains accurate, trustworthy, and helpful educational content about emotional support animals and mental health.",
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
      alternates: {
        canonical: "https://myesatherapist.com/editorial-policy/",
      },
    };
  }

  const policy = getPolicyBySlug(slug);

  if (!policy) {
    return {
      title: "Policy Not Found | My ESA Therapist",
    };
  }

  const title = `${policy.pageTitle} | My ESA Therapist`;
  const description = policy.lede || `${policy.pageTitle} for My ESA Therapist. Learn how we handle evaluations, privacy, and client documentation.`;
  const canonicalUrl = `https://myesatherapist.com/policies/${policy.slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: "My ESA Therapist",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params;

  if (slug === "privacy-policy") {
    permanentRedirect("/privacy-policy/");
  }

  if (slug === "terms-of-use") {
    permanentRedirect("/terms-of-use/");
  }

  if (slug === "disclaimer" || slug === "disclaimer-and-policies") {
    permanentRedirect("/disclaimer/");
  }

  if (slug === "hipaa-compliance") {
    permanentRedirect("/hipaa-compliance/");
  }

  if (slug === "refund-policy") {
    permanentRedirect("/refund-policy/");
  }

  if (slug === "consent-for-telehealth") {
    permanentRedirect("/consent-for-telehealth/");
  }

  if (slug === "editorial-policy") {
    permanentRedirect("/editorial-policy/");
  }

  const policy = getPolicyBySlug(slug);

  if (!policy) {
    notFound();
  }

  // Schema.org WebPage & BreadcrumbList structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://myesatherapist.com/policies/${policy.slug}/#webpage`,
        "url": `https://myesatherapist.com/policies/${policy.slug}/`,
        "name": policy.pageTitle,
        "description": policy.lede,
        "dateModified": "2025-12-30",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://myesatherapist.com/#website",
          "url": "https://myesatherapist.com/",
          "name": "My ESA Therapist"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://myesatherapist.com/policies/${policy.slug}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://myesatherapist.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Policies",
            "item": "https://myesatherapist.com/policies/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": policy.pageTitle,
            "item": `https://myesatherapist.com/policies/${policy.slug}/`
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Top Announcement Banner & Header */}
      <TopBanner />
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        <PolicyPageLayout policy={policy} />
      </main>

      {/* Footer with Legal column */}
      <Footer />
    </div>
  );
}
