import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { ThirdPartyErrorHandler } from "@/components/common/ThirdPartyErrorHandler";
import { GlobalDesktopScaler } from "@/components/common/GlobalDesktopScaler";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/site";
import { socialImage } from "@/data/socialImages";
import { SiteAnalytics } from "@/components/analytics/SiteAnalytics";

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

const defaultSocial = socialImage("homepage", "Telehealth with a happy companion");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
    shortcut: [{ url: "/favicon.ico" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "My ESA Therapist | Official ESA Letters from Licensed Therapists",
    description:
      "Qualify online in 2 minutes. State-licensed therapists, 100% legal under Fair Housing Act, no pet rent, money-back guarantee.",
    url: "https://myesatherapist.com/",
    siteName: "My ESA Therapist",
    locale: "en_US",
    type: "website",
    images: defaultSocial.openGraph,
  },
  twitter: {
    card: "summary_large_image",
    site: "@MyESATherapist",
    images: defaultSocial.twitter,
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
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn(
        "h-full antialiased",
        manrope.variable,
        playfair.variable,
        "font-sans"
      )}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-accent/35 selection:text-current"
      >
        <ThirdPartyErrorHandler />
        <SiteAnalytics />
        {/* Suppress non-critical third-party telemetry errors (e.g. [Tawk/Logger]) from triggering Next.js dev overlay */}
        <Script
          id="tawk-logger-filter"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){
  if (typeof window === 'undefined') return;
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();
  var origError = console.error;
  var origWarn = console.warn;
  if (!origError || origError.__tawkFiltered) return;
  var isTawk = function(first) {
    if (typeof first !== 'string') first = String(first || '');
    return first.indexOf('[Tawk/Logger]') !== -1 || first.indexOf('Tawk/Logger') !== -1 || first.indexOf('tawk') !== -1;
  };
  var filteredError = function() {
    if (isTawk(arguments[0])) return;
    origError.apply(console, arguments);
  };
  filteredError.__tawkFiltered = true;
  console.error = filteredError;
  var filteredWarn = function() {
    if (isTawk(arguments[0])) return;
    origWarn.apply(console, arguments);
  };
  console.warn = filteredWarn;
  window.addEventListener('error', function(e) {
    if (e && ((e.message && (e.message.indexOf('tawk') !== -1 || e.message.indexOf('Tawk') !== -1)) || (e.filename && e.filename.indexOf('tawk') !== -1))) {
      e.stopImmediatePropagation();
    }
  }, true);
  window.addEventListener('unhandledrejection', function(e) {
    if (e && e.reason) {
      var str = String(e.reason.message || e.reason || '');
      if (str.indexOf('tawk') !== -1 || str.indexOf('Tawk') !== -1) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
    }
  }, true);
})();`,
          }}
        />
        {/* Google Tag Manager. GA4 G-4Y59YKVXPF and Microsoft Clarity load from this container. */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MRLDDQG');`,
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
        {/* Scale the 1440px desktop design to fit 1024px-1439px screens before first paint.
            Must stay in sync with GlobalDesktopScaler, which keeps it updated on resize. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  try {
    var vw = window.innerWidth;
    if (vw < 1024 || vw >= 1440) return;
    var style = document.createElement('style');
    style.id = 'desktop-scaler-css';
    style.textContent = 'html{overflow-y:scroll;overflow-x:hidden}';
    document.head.appendChild(style);
    var scale = document.documentElement.clientWidth / 1440;
    style.textContent += 'body{zoom:' + scale + ';width:1440px!important;min-width:1440px;overflow-x:hidden}';
  } catch(e) {}
})();`,
          }}
        />
        <GlobalDesktopScaler />
        {children}
      </body>
    </html>
  );
}

