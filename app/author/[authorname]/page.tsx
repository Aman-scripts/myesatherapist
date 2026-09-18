import { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthorProfileContent } from "@/components/author/AuthorProfileContent";
import { getAuthorBySlug, getAllAuthorSlugs } from "@/data/authorsData";

interface PageProps {
  params: Promise<{
    authorname: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllAuthorSlugs();
  return slugs.map((authorname) => ({
    authorname,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { authorname } = await params;
  const author = getAuthorBySlug(authorname);

  if (!author) {
    return {
      title: "Author Not Found | My ESA Therapist",
    };
  }

  const title = author.metaTitle || `${author.name} - ${author.title} | My ESA Therapist`;
  const description =
    author.metaDescription !== undefined
      ? author.metaDescription
      : author.bioParagraphs[0];
  const canonicalUrl = `https://myesatherapist.com/author/${author.slug}/`;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function AuthorProfilePage({ params }: PageProps) {
  const { authorname } = await params;
  const author = getAuthorBySlug(authorname);

  if (!author) {
    notFound();
  }

  const authorSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `https://myesatherapist.com/author/${author.slug}/#webpage`,
        url: `https://myesatherapist.com/author/${author.slug}/`,
        name: `${author.name} - ${author.title}`,
        description: author.metaDescription || author.bioParagraphs[0],
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://myesatherapist.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: author.name,
              item: `https://myesatherapist.com/author/${author.slug}/`,
            },
          ],
        },
        mainEntity: {
          "@type": "Person",
          "@id": `https://myesatherapist.com/author/${author.slug}/#person`,
          name: author.name,
          jobTitle: author.title,
          image: author.avatar.startsWith("http")
            ? author.avatar
            : `https://myesatherapist.com${author.avatar}`,
          worksFor: {
            "@type": "Organization",
            name: "My ESA Therapist",
            url: "https://myesatherapist.com/",
          },
          alumniOf: author.educationDetails.map((edu) => ({
            "@type": "EducationalOrganization",
            name: edu.institution,
          })),
          knowsAbout: author.focusAreas,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col justify-between text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />

      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      {/* Main Author Content Area */}
      <main className="flex-1 bg-[#FAF7F2]">
        <AuthorProfileContent author={author} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
