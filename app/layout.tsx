import type { Metadata } from "next";
import { Manrope, Playfair_Display, Lato, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My ESA Therapist | Official Emotional Support Animal Letters Online",
  description:
    "Get legitimate ESA letters online certified by licensed mental health professionals in your state. 100% compliant with Fair Housing Act (FHA) & 100% Money-Back Guarantee.",
  keywords: [
    "ESA Letter",
    "Emotional Support Animal",
    "PSD Letter",
    "Psychiatric Service Dog",
    "Fair Housing Act",
    "LMHP ESA Letter",
    "ESA Therapist",
  ],
  authors: [{ name: "My ESA Therapist" }],
  openGraph: {
    title: "My ESA Therapist | Official ESA Letters from Licensed Therapists",
    description:
      "Qualify online in 2 minutes. State-licensed therapists, 100% legal under Fair Housing Act, no pet rent, money-back guarantee.",
    url: "https://myesatherapist.com",
    siteName: "My ESA Therapist",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        manrope.variable,
        playfair.variable,
        lato.variable,
        spaceGrotesk.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-[#2E5A66]/20 selection:text-[#2E5A66]">
        {children}
      </body>
    </html>
  );
}

