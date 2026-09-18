import { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactMap } from "@/components/contact/ContactMap";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { contactUsSchemas } from "@/data/schemas/contactUsSchema";

export const metadata: Metadata = {
  title: "Contact Us | My ESA Therapist - 24/7 Professional Support",
  description:
    "Get in touch with My ESA Therapist. Contact our team 24/7 for assistance with Emotional Support Animal evaluations and Psychiatric Service Dog letters.",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col justify-between text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
      {/* Schema.org Structured Data */}
      {contactUsSchemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
      ))}

      <TopBanner />
      <Header />
      <main className="flex-1 bg-[#FAF7F2]">
        <ContactHero />
        <ContactInfoCards />
        <ContactMap />
        <FaqSection />
        <CtaBanner
          title="Need help with a PSD letter?"
          description="Connect with a state-licensed mental health professional to discuss your needs and see if a psychiatric service dog letter may be right for you."
          buttonText="Start your Evaluation"
          buttonHref="#faq"
          bgColor="bg-[#FAF7F2]"
          className="pb-12 sm:pb-16 lg:pb-24"
        />
      </main>
      <Footer bgColor="bg-[#FAF7F2]" />
    </div>
  );
}
