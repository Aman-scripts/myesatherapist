import StatesDirectoryPage from "../states/page";
import type { Metadata } from "next";
import { socialImage } from "@/data/socialImages";
import { pageSocial } from "@/lib/seo";

const STATE_TITLE = "ESA Letter by State | My ESA Therapist";
const STATE_DESCRIPTION =
  "Compare ESA letter rules by state, including which states require a 30-day clinician relationship, and open your state page.";

export const metadata: Metadata = {
  title: STATE_TITLE,
  description: STATE_DESCRIPTION,
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
  ...pageSocial({
    title: STATE_TITLE,
    description: STATE_DESCRIPTION,
    url: "https://myesatherapist.com/state/",
    images: socialImage("esa-by-state", "ESA letter by state"),
  }),
};

export default StatesDirectoryPage;
