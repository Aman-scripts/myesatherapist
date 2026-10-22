import { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactMap } from "@/components/contact/ContactMap";
import { CtaBanner } from "@/components/home/CtaBanner";
import { contactUsSchemas } from "@/data/schemas/contactUsSchema";

export const metadata: Metadata = {
  title: "Connect With Our Customer Support Team | My ESA Therapist",
  description:
    "Have a question? Our Customer Support team is ready to help you! Feel free to call us at (888) 412-4041 email us at contact@myesatherapist.com",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://myesatherapist.com/contact-us/",
  },
  openGraph: {
    title: "Connect With Our Customer Support Team | My ESA Therapist",
    description:
      "Have a question? Our Customer Support team is ready to help you! Feel free to call us at (888) 412-4041 email us at contact@myesatherapist.com",
    url: "https://myesatherapist.com/contact-us/",
    type: "website",
    siteName: "My ESA Therapist",
  },
  twitter: {
    card: "summary",
    title: "Connect With Our Customer Support Team | My ESA Therapist",
    description:
      "Have a question? Our Customer Support team is ready to help you! Feel free to call us at (888) 412-4041 email us at contact@myesatherapist.com",
  },
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between text-slate-900 selection:bg-accent/30 selection:text-current">
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
      <main className="flex-1 bg-background">
        <ContactHero />
        <ContactInfoCards />
        <ContactMap />
        <CtaBanner
          title="Ready To Start Your ESA Evaluation?"
          description="If you believe an Emotional Support Animal may be appropriate for your situation, you can begin a professional evaluation today."
          buttonText="Start Your Evaluation"
          buttonHref="/pricing/"
          bgColor="bg-background"
        />
      </main>
      <Footer bgColor="bg-background" />
    </div>
  );
}
