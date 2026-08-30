import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactMap } from "@/components/contact/ContactMap";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Contact Us | My ESA Therapist - 24/7 Professional Support",
  description:
    "Get in touch with My ESA Therapist. Contact our team 24/7 for assistance with Emotional Support Animal evaluations and Psychiatric Service Dog letters.",
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-between">
      <Header />
      <article className="flex-1">
        <ContactHero />
        <ContactInfoCards />
        <ContactMap />
        <FaqSection />
        <CtaBanner
          title="Need help with a PSD letter?"
          description="Connect with a state-licensed mental health professional to discuss your needs and see if a psychiatric service dog letter may be right for you."
          buttonText="Start your Evaluation"
        />
      </article>
      <Footer />
    </main>
  );
}
