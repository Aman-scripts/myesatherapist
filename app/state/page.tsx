import StatesDirectoryPage from "../states/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESA Evaluations by State | My ESA Therapist",
  description:
    "Explore ESA evaluation options by state. Connect with licensed mental health professionals for compliant emotional support animal assessments.",
  alternates: {
    canonical: "https://myesatherapist.com/state/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "ESA Evaluations by State | My ESA Therapist",
    description:
      "Explore ESA evaluation options by state. Connect with licensed mental health professionals for compliant emotional support animal assessments.",
    url: "https://myesatherapist.com/state/",
    siteName: "My ESA Therapist",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ESA Evaluations by State | My ESA Therapist",
    description:
      "Explore ESA evaluation options by state. Connect with licensed mental health professionals for compliant emotional support animal assessments.",
  },
};

export default StatesDirectoryPage;
