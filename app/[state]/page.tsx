import React from "react";
import { serializeLd } from "@/lib/site";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { socialImage, hasSocialImage, withFeatureImage } from "@/data/socialImages";
import { pageSocial, applySheetSeo } from "@/lib/seo";
import { STATES_DATA, getStateData } from "@/data/statesData";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StateHeroSection } from "@/components/state/StateHeroSection";
import { StateTrustBar } from "@/components/state/StateTrustBar";
import { StateProcessSection } from "@/components/state/StateProcessSection";
import { StateWhoQualifiesSection } from "@/components/state/StateWhoQualifiesSection";
import { StateRequirementsSection } from "@/components/state/StateRequirementsSection";
import { StateBenefitsSection } from "@/components/state/StateBenefitsSection";
import { StateLawsSection } from "@/components/state/StateLawsSection";
import { StateHousingRequestsSection } from "@/components/state/StateHousingRequestsSection";
import { StateScamsSection } from "@/components/state/StateScamsSection";
import { StatePsdVsEsaSection } from "@/components/state/StatePsdVsEsaSection";
import { TrustedByPetOwnersSection } from "@/components/home/TrustedByPetOwnersSection";
import { PricingSection } from "@/components/home/PricingSection";
import { StateAvailableCitiesSection } from "@/components/state/StateAvailableCitiesSection";
import { StateTableOfContents } from "@/components/state/StateTableOfContents";
import { AsSeenOnSection } from "@/components/home/AsSeenOnSection";
import { TherapistsSection } from "@/components/home/TherapistsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

interface Props {
  params: Promise<{ state: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const data = getStateData(state);

  if (!data) {
    return applySheetSeo({
      title: "State Page Not Found | My ESA Therapist",
      description: "The requested state ESA page could not be found.",
    });
  }

  const canonicalUrl = `https://myesatherapist.com/esa-letter-${data.slug}/`;

  const webPageSchema = data.schema?.["@graph"]?.find(
    (item: any) => item["@type"] === "WebPage"
  );

  const title = data.metaTitle;
  const description =
    data.metaDescription ||
    webPageSchema?.description ||
    `Get an ESA letter in ${data.name} from a ${data.name}-licensed therapist. Secure telehealth evaluation and transparent pricing.`;

  const imageKey = `state-${data.slug}`;
  const image = hasSocialImage(imageKey) ? socialImage(imageKey, `ESA letter in ${data.name}`) : null;

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
    ...pageSocial({
      title,
      description,
      url: canonicalUrl,
      images: image ?? undefined,
    }),
  });
}

export async function generateStaticParams() {
  return Object.keys(STATES_DATA).map((slug) => ({
    state: `esa-letter-${slug}`,
  }));
}

export default async function DynamicStatePage({ params }: Props) {
  const { state } = await params;
  const data = getStateData(state);

  if (!data) {
    notFound();
  }

  // Redirect any legacy or non-prefixed state routes to the canonical /esa-letter-[state]/ route
  if (state !== `esa-letter-${data.slug}`) {
    permanentRedirect(`/esa-letter-${data.slug}/`);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* State JSON-LD Structured Data */}
      {data.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeLd(withFeatureImage(data.schema, `state-${data.slug}`)) }}
        />
      )}

      <TopBanner />
      <Header />

      {/* State Table of Contents Drawer & Left Edge Toggle */}
      <StateTableOfContents stateName={data.name} data={data} />

      <main className="flex-1 bg-background">
        <StateHeroSection data={data} />
        <StateTrustBar data={data} />
        <AsSeenOnSection bgColor="bg-background" />
        <div id="therapists">
          <TherapistsSection
            title={data.therapistsTitle || "Our Licensed Clinicians"}
            subtitle={data.therapistsSubtitle || `Evaluations for ${data.name} are completed by a clinician licensed in ${data.name}.`}
            licensureNote={data.therapistsLicensureNote}
            therapistsList={data.therapistsList}
            refundText={data.benefitsRefundNote === "" ? null : undefined}
          />
        </div>
        <div id="process"><StateProcessSection data={data} /></div>
        <div id="who-qualifies"><StateWhoQualifiesSection data={data} /></div>
        <StateRequirementsSection data={data} />
        {data.whyChooseItems && data.whyChooseItems.length > 0 && (
          <div id="why-choose">
            <WhyChooseUs
              bgColor="bg-white"
              title={data.whyChooseTitle}
              subtitle={data.whyChooseSubtitle}
              features={data.whyChooseItems}
            />
          </div>
        )}
        {data.reviewsTitle && (
          <div id="reviews">
            <TestimonialsSection
              title={data.reviewsTitle}
              subtitle={data.reviewsSubtitle}
            />
          </div>
        )}
        <div id="benefits"><StateBenefitsSection data={data} /></div>
        <div id="laws"><StateLawsSection data={data} /></div>
        <StateHousingRequestsSection data={data} />
        <div id="scams"><StateScamsSection data={data} /></div>
        <div id="psd-vs-esa"><StatePsdVsEsaSection data={data} /></div>
        {data.trustedReviews && data.trustedReviews.length > 0 && (
          <div id="trusted-reviews">
            <TrustedByPetOwnersSection
              stateName={data.name}
              title={data.trustedReviewsTitle}
              subtitle={data.trustedReviewsSubtitle}
              testimonials={data.trustedReviews}
            />
          </div>
        )}
        {data.slug !== "vermont" && data.slug !== "tennessee" && data.slug !== "rhode-island" && <PricingSection
          sectionId="pricing"
          heading={`The Cost of an ESA Letter in ${data.name}`}
          headingClassName="heading-h2"
          descriptionOverride={`Choose the option that best matches your needs in ${data.name}: an ESA letter evaluation, a combined ESA and PSD evaluation, or a professional assessment if you're unsure which type of support may be appropriate. Recommendations and documentation depend on a licensed clinician's assessment.`}
        />}
        <div id="available-cities"><StateAvailableCitiesSection data={data} /></div>
        <div id="faq">
          <FaqSection
            title={data.faqTitle}
            subtitle={data.faqSubtitle}
            faqs={data.faqs}
          />
        </div>
        {data.ctaTitle && (
          <div id="cta">
            <CtaBanner
              title={data.ctaTitle}
              description={data.ctaSubtitle || `Connect with a ${data.name}-licensed mental health professional today for a legitimate, FHA-compliant ESA letter.`}
              note={data.ctaNote}
              buttonText={data.ctaButtonText || "Start your Evaluation"}
              buttonHref="#faq"
              flushBottom
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
