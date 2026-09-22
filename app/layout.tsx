import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display, Lato, Space_Grotesk } from "next/font/google";
import Script from "next/script";
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
  verification: {
    google: "hZEn7s77TUksTd08P_-V4gKQzGdXE0dkQeF4-B7vzuY",
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
        {/* Google Tag Manager: deferred until first interaction (or a short
            idle timeout) so GTM and the tags it injects (GA, chat widget,
            analytics) don't compete with the initial render for the main
            thread. Still fires for every real visitor within a few seconds. */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
function loadGtm(){
  if (w.__gtmLoaded) return;
  w.__gtmLoaded = true;
  w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
}
var events=['pointerdown','mousemove','keydown','touchstart','scroll'];
function onInteract(){
  events.forEach(function(e){w.removeEventListener(e,onInteract);});
  loadGtm();
}
events.forEach(function(e){w.addEventListener(e,onInteract,{passive:true,once:true});});
setTimeout(loadGtm,4000);
})(window,document,'script','dataLayer','GTM-MRLDDQG');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRLDDQG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}

