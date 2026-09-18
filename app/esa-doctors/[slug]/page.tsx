import { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DoctorInternalHeroSection } from "@/components/doctors/DoctorInternalHeroSection";
import { DoctorTrustBar } from "@/components/doctors/DoctorTrustBar";
import { BlogsFeaturedArticle } from "@/components/blogs/BlogsFeaturedArticle";
import { QualifyingConditions } from "@/components/home/QualifyingConditions";
import { ChooseStateGridSection } from "@/components/states/ChooseStateGridSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";
import { getDoctorBySlug, getAllDoctorSlugs } from "@/data/doctorsData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllDoctorSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    return {
      title: "Doctor Profile Not Found | My ESA Therapist",
    };
  }

  return {
    title: `${doctor.name} - ${doctor.title} | My ESA Therapist`,
    description: doctor.heroBio || doctor.bio,
    alternates: {
      canonical: `https://myesatherapist.com/esa-doctors/${doctor.slug}/`,
    },
    openGraph: {
      title: `${doctor.name} - ${doctor.title} | My ESA Therapist`,
      description: doctor.heroBio || doctor.bio,
      url: `https://myesatherapist.com/esa-doctors/${doctor.slug}/`,
      type: "profile",
      images: [
        {
          url: doctor.avatar.startsWith("http")
            ? doctor.avatar
            : `https://myesatherapist.com${doctor.avatar}`,
          width: 800,
          height: 800,
          alt: doctor.name,
        },
      ],
    },
  };
}

export default async function DoctorInternalPage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  const doctorSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `https://myesatherapist.com/esa-doctors/${doctor.slug}/#webpage`,
        url: `https://myesatherapist.com/esa-doctors/${doctor.slug}/`,
        name: `${doctor.name} - ${doctor.title}`,
        description: doctor.heroBio || doctor.bio,
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
              name: "ESA Doctors",
              item: "https://myesatherapist.com/esa-doctors/",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: doctor.name,
              item: `https://myesatherapist.com/esa-doctors/${doctor.slug}/`,
            },
          ],
        },
        mainEntity: {
          "@type": "Person",
          "@id": `https://myesatherapist.com/esa-doctors/${doctor.slug}/#person`,
          name: doctor.name,
          jobTitle: doctor.title,
          image: doctor.avatar.startsWith("http")
            ? doctor.avatar
            : `https://myesatherapist.com${doctor.avatar}`,
          sameAs: doctor.linkedin ? [doctor.linkedin] : [],
          worksFor: {
            "@type": "Organization",
            name: "My ESA Therapist",
            url: "https://myesatherapist.com/",
          },
          knowsAbout: [
            "Emotional Support Animal (ESA) Evaluations",
            "Fair Housing Act (FHA) Compliance",
            "Clinical Mental Health Assessment",
            "Telehealth Therapy Consultations",
          ],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />

      {/* Top Banner & Header */}
      <TopBanner />
      <Header />

      <main className="min-h-screen bg-[#FAF7F2]">
        {/* 1. Doctors Internal Hero Section */}
        <DoctorInternalHeroSection doctor={doctor} />

        {/* Floating Trust Stats Bar (same as State pages) */}
        <DoctorTrustBar doctor={doctor} />

        {/* 2. 7 Things to Know Before Getting an ESA Letter Section */}
        <BlogsFeaturedArticle className="pt-2 sm:pt-4 lg:pt-6 pb-8 sm:pb-12 lg:pb-14" />

        {/* 3. Common Qualifying Conditions Section */}
        <QualifyingConditions />

        {/* 4. Choose Your State For ESA Evaluation Section */}
        <ChooseStateGridSection />

        {/* 5. CTA Banner */}
        <CtaBanner
          bgColor="bg-white"
          title={`Ready to Connect With a\nLicensed Professional?`}
          description="Understand how the ESA evaluation process works and begin your confidential telehealth assessment today."
          buttonText="Start your Evaluation"
          buttonHref="/pricing/"
        />

        {/* 6. State Reviewer Banner */}
        <StateReviewerBanner />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
