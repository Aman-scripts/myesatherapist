import type { Metadata } from "next";

export { default } from "@/app/esa-training/page";

export const metadata: Metadata = {
  title: "ESA Training: Commands, Tips & Guides | My ESA Therapist",
  description:
    "Explore our full library of ESA training guides from HUD rules and legal requirements to breed-specific tips, FAQs, and expert advice, updated for 2026.",
  alternates: {
    canonical: "https://myesatherapist.com/blog/esa-training/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    title: "ESA Training: Commands, Tips & Guides | My ESA Therapist",
    description:
      "Explore our full library of ESA training guides from HUD rules and legal requirements to breed-specific tips, FAQs, and expert advice, updated for 2026.",
    url: "https://myesatherapist.com/blog/esa-training/",
    siteName: "My ESA Therapist",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "ESA Training: Commands, Tips & Guides | My ESA Therapist",
    description:
      "Explore our full library of ESA training guides from HUD rules and legal requirements to breed-specific tips, FAQs, and expert advice, updated for 2026.",
  },
};
