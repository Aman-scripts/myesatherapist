import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display, Lato, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/manifest-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/manifest-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-180.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
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
      data-scroll-behavior="smooth"
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

