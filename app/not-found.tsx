import type { Metadata } from "next";
import Link from "next/link";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaButton } from "@/components/common/CtaButton";
import { serializeLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found | My ESA Therapist",
  description: "The page you requested is not on My ESA Therapist. Visit the homepage or browse ESA letter resources.",
  robots: {
    index: false,
    follow: true,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Page Not Found",
  description: "The page you requested is not on My ESA Therapist.",
  isPartOf: { "@id": "https://myesatherapist.com/#website" },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeLd(schema) }} />
      <TopBanner />
      <Header />
      <main className="flex-1 flex items-center">
        <section className="w-full max-w-[760px] mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <p className="body-large text-primary font-semibold">404</p>
          <h1 className="heading-h1 text-primary mt-3">This page could not be found</h1>
          <p className="body-large text-body-text mt-4 max-w-[520px] mx-auto">
            The address may have changed, or the page may no longer exist. You can return home or browse ESA letters by state.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CtaButton href="/">Back to Home</CtaButton>
            <Link href="/state/" className="body-text font-semibold text-primary underline underline-offset-4">
              ESA letters by state
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
