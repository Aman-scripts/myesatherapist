import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_POLICIES_LIST, getPolicyBySlug, POLICIES_DATA } from "@/data/policiesData";
import { PolicyPageLayout } from "@/components/policies/PolicyPageLayout";

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PolicyPageLayout policy={policy} />
    </>
  );
}
