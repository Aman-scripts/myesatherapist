import type { Metadata } from "next";
import HomePage from "../page";

export const metadata: Metadata = {
  title: "ESA Letter for Housing Online | Licensed & FHA-Compliant - My ESA Therapist",
  description:
    "Facing 'no-pet' housing rules? Get an FHA-compliant ESA letter for housing online from a licensed therapist. Secure, confidential and pay only if approved.",
  alternates: {
    canonical: "https://myesatherapist.com/esa-letter-for-housing/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "ESA Letter for Housing Online | Licensed & FHA-Compliant - My ESA Therapist",
    description:
      "Facing 'no-pet' housing rules? Get an FHA-compliant ESA letter for housing online from a licensed therapist. Secure, confidential and pay only if approved.",
    type: "website",
    url: "https://myesatherapist.com/esa-letter-for-housing/",
    siteName:
      "My ESA Therapist | Licensed ESA Therapists & Emotional Support Animal Services",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "ESA Letter for Housing Online | Licensed & FHA-Compliant - My ESA Therapist",
    description:
      "Facing 'no-pet' housing rules? Get an FHA-compliant ESA letter for housing online from a licensed therapist. Secure, confidential and pay only if approved.",
    site: "@MyESATherapist",
    creator: "@MyESATherapist",
  },
};

export default HomePage;
