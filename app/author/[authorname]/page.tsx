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

  const description = author.bioParagraphs[0];

  return {
    title: `${author.name} - ${author.title} | My ESA Therapist`,
    description,
    alternates: {
      canonical: `https://myesatherapist.com/author/${author.slug}/`,
    },
    openGraph: {
      title: `${author.name} - ${author.title} | My ESA Therapist`,
      description,
      url: `https://myesatherapist.com/author/${author.slug}/`,
      type: "profile",
      images: [
        {
          url: author.avatar.startsWith("http")
            ? author.avatar
            : `https://myesatherapist.com${author.avatar}`,
          width: 800,
          height: 1067,
          alt: author.name,
        },
      ],
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
        description: author.bioParagraphs[0],
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
