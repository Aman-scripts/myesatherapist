import { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactMap } from "@/components/contact/ContactMap";
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
      </main>
      <Footer bgColor="bg-[#FAF7F2]" />
    </div>
  );
}
