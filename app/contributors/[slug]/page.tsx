import { applySheetSeo } from "@/lib/seo";
import { Metadata } from "next";
import { serializeLd } from "@/lib/site";
import { notFound } from "next/navigation";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthorProfileContent } from "@/components/author/AuthorProfileContent";
import { getAuthorBySlug, getAllAuthorSlugs } from "@/data/authorsData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllAuthorSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return applySheetSeo({
      title: "Author Not Found | My ESA Therapist",
    });
  }

  const title = author.metaTitle || `${author.name} - ${author.title} | My ESA Therapist`;
  const description =
    author.metaDescription !== undefined
      ? author.metaDescription
      : author.bioParagraphs[0];
  const canonicalUrl = `https://myesatherapist.com/contributors/${author.slug}/`;

  return applySheetSeo({
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
      locale: "en_US",
      siteName: "My ESA Therapist",
    },
    twitter: {
      card: "summary",
      site: "@MyESATherapist",
      creator: "@MyESATherapist",
      title,
      description,
    },
  });
}

export default async function ContributorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const authorSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `https://myesatherapist.com/contributors/${author.slug}/#webpage`,
        url: `https://myesatherapist.com/contributors/${author.slug}/`,
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
              item: `https://myesatherapist.com/contributors/${author.slug}/`,
            },
          ],
        },
        mainEntity: {
          "@type": "Person",
          "@id": `https://myesatherapist.com/contributors/${author.slug}/#person`,
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
    <div className="min-h-screen bg-background flex flex-col justify-between selection:bg-accent/30 selection:text-current">
      {author.schemas && author.schemas.length > 0 ? (
        author.schemas.map((schemaObj, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serializeLd(schemaObj) }}
          />
        ))
      ) : (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeLd(authorSchema) }}
        />
      )}

      <TopBanner />
      <Header />

      <main className="flex-1 bg-background">
        <AuthorProfileContent author={author} />
      </main>

      <Footer />
    </div>
  );
}
