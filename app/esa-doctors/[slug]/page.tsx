import { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DoctorInternalHeroSection } from "@/components/doctors/DoctorInternalHeroSection";
import { DoctorTrustBar } from "@/components/doctors/DoctorTrustBar";
import { DoctorAboutPhilosophySection } from "@/components/doctors/DoctorAboutPhilosophySection";
import { DoctorConditionsSection } from "@/components/doctors/DoctorConditionsSection";
import { QualifyingConditions } from "@/components/home/QualifyingConditions";
import { ChooseStateGridSection } from "@/components/states/ChooseStateGridSection";
import { CtaBanner } from "@/components/home/CtaBanner";
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

  const title = doctor.metaTitle || `${doctor.name} - ${doctor.title} | My ESA Therapist`;
  const description = doctor.metaDescription || doctor.heroBio || doctor.bio;
  const canonicalUrl = `https://myesatherapist.com/esa-doctors/${doctor.slug}/`;
  const robots = doctor.metaRobots || {
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  };

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      ...robots,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
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
    twitter: {
      card: "summary",
      title,
      description,
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

        {/* Floating Trust Stats Bar */}
        <DoctorTrustBar doctor={doctor} />

        {/* 2. Doctor About & Philosophy Section (Replaces 7 Things to Know / removed image) */}
        <DoctorAboutPhilosophySection doctor={doctor} />

        {/* 3. Conditions Section */}
        {doctor.conditionsSection ? (
          <DoctorConditionsSection doctor={doctor} />
        ) : (
          <QualifyingConditions />
        )}

        {/* 4. States Where Doctor Is Licensed Section */}
        <ChooseStateGridSection
          title={doctor.licensedStatesSection?.heading}
          description={doctor.licensedStatesSection?.description}
          allowedStates={doctor.licensedStatesSection?.states}
        />

        {/* 5. CTA Banner */}
        <CtaBanner
          bgColor="bg-white"
          eyebrow={doctor.ctaSection?.eyebrow}
          title={
            doctor.ctaSection?.title ||
            `Ready to Connect With a\nLicensed Professional?`
          }
          description={
            doctor.ctaSection?.description ||
            "Understand how the ESA evaluation process works and begin your confidential telehealth assessment today."
          }
          buttonText={doctor.ctaSection?.buttonText || "Start your Evaluation"}
          buttonHref={doctor.ctaSection?.buttonHref || "/pricing/"}
        />

        {/* Spacing gap between CTA banner and Footer */}
        <div className="w-full h-12 sm:h-16 lg:h-24 bg-[#FAF7F2]" />
      </main>

      {/* Global Footer */}
      <Footer bgColor="bg-[#FAF7F2]" />
    </>
  );
}
