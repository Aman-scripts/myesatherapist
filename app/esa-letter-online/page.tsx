import type { Metadata } from "next";
import HomePage from "../page";

export const metadata: Metadata = {
  title: "ESA Letter Online From Licensed Therapist | My ESA Therapist",
  description:
    "Get an ESA letter online through a confidential evaluation with a licensed mental health professional. Start your ESA evaluation securely from home with My ESA Therapist.",
  alternates: {
    canonical: "https://myesatherapist.com/esa-letter-online/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "ESA Letter Online From Licensed Therapist | My ESA Therapist",
    description:
      "Get an ESA letter online through a confidential evaluation with a licensed mental health professional. Start your ESA evaluation securely from home with My ESA Therapist.",
    type: "website",
    url: "https://myesatherapist.com/esa-letter-online/",
    siteName:
      "My ESA Therapist | Licensed ESA Therapists & Emotional Support Animal Services",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "ESA Letter Online From Licensed Therapist | My ESA Therapist",
    description:
      "Get an ESA letter online through a confidential evaluation with a licensed mental health professional. Start your ESA evaluation securely from home with My ESA Therapist.",
    site: "@MyESATherapist",
    creator: "@MyESATherapist",
  },
};

export default HomePage;
