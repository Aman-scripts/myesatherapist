"use client";

import React from "react";
import Image from "next/image";

interface MediaLogo {
  name: string;
  src: string;
  url: string;
  imgClassName?: string;
}

const mediaLogos: MediaLogo[] = [
  {
    name: "American Press",
    src: "/As Seen on Images/american-press-logo.webp",
    url: "https://smb.americanpress.com/article/Why-My-ESA-Therapist-Prioritizes-Legitimate-ESA-Evaluations-and-Refuses-Instant-Approvals/6a50e6a116e7610b3c53dfdd",
  },
  {
    name: "America Real Estate Online",
    src: "/As Seen on Images/americarealestateonline-logo.webp",
    url: "https://www.americarealestateonline.com/article/905468413-my-esa-therapist-simplifies-the-process-to-get-an-online-esa-letter-in-2026",
  },
  {
    name: "AZ Big Media",
    src: "/As Seen on Images/azbigmedia logo.webp",
    url: "https://azbigmedia.com/business/law/when-your-arizona-esa-letter-expires-rights-and-renewal-explained/",
  },
  {
    name: "Washington City Paper",
    src: "/As Seen on Images/citypaper logo.webp",
    url: "https://pr.washingtoncitypaper.com/article/Why-My-ESA-Therapist-Prioritizes-Legitimate-ESA-Evaluations-and-Refuses-Instant-Approvals/6a50e6a116e7610b3c53dfdd",
  },
  {
    name: "Delaware Online",
    src: "/As Seen on Images/delawareonline-logo.svg",
    url: "https://www.delawareonline.com/press-release/story/127440/my-esa-therapist-simplifies-the-process-to-get-an-online-esa-letter-in-2026/",
    imgClassName: "!max-w-none !h-[24px] sm:!h-[28px] lg:!h-[30px] xl:!h-[32px] !w-auto",
  },
  {
    name: "The Columbus Dispatch",
    src: "/As Seen on Images/dispatch-logo.svg",
    url: "https://www.dispatch.com/press-release/story/173229/my-esa-therapist-simplifies-the-process-to-get-an-online-esa-letter-in-2026/",
    imgClassName: "!max-w-none !h-[26px] sm:!h-[28px] lg:!h-[30px] xl:!h-[32px] !w-auto",
  },
  {
    name: "dvm360",
    src: "/As Seen on Images/dvm 360 logo.webp",
    url: "https://www.dvm360.com/view/can-veterinarians-write-an-esa-letter-",
  },
  {
    name: "FinancialContent",
    src: "/As Seen on Images/financialcontent logo.webp",
    url: "https://www.financialcontent.com/article/accwirecq-2026-3-27-my-esa-therapist-highlights-growing-demand-for-ethical-esa-evaluations-among-gen-z",
  },
  {
    name: "FingerLakes1.com",
    src: "/As Seen on Images/fingerlakes1-logo.webp",
    url: "https://www.fingerlakes1.com/2026/04/17/my-esa-therapist-explains-how-to-get-a-legit-esa-letter-in-new-york/",
  },
  {
    name: "Legal Reader",
    src: "/As Seen on Images/legal reader logo.webp",
    url: "https://www.legalreader.com/top-5-trusted-online-esa-letter-providers-in-2026/",
  },
  {
    name: "lohud",
    src: "/As Seen on Images/lohud-logo.svg",
    url: "https://www.lohud.com/press-release/story/162150/my-esa-therapist-simplifies-the-process-to-get-an-online-esa-letter-in-2026/",
    imgClassName: "!max-w-none !h-[28px] sm:!h-[32px] lg:!h-[34px] xl:!h-[36px] !w-auto",
  },
  {
    name: "Muddy River News",
    src: "/As Seen on Images/muddyrivernews logo.webp",
    url: "https://muddyrivernews.com/business/sponsored-content/my-esa-therapist-data-shows-rising-demand-for-online-esa-letters-among-illinois-renters/20260415085053/",
  },
  {
    name: "The National Law Review",
    src: "/As Seen on Images/national law review logo.webp",
    url: "https://natlawreview.com/press-releases/my-esa-therapist-simplifies-process-get-online-esa-letter-2026",
    imgClassName: "!max-w-none !h-[24px] sm:!h-[26px] lg:!h-[28px] xl:!h-[30px] !w-auto",
  },
  {
    name: "PR Newswire",
    src: "/As Seen on Images/pr newswire - logo.webp",
    url: "https://www.prnewswire.com/news-releases/why-my-esa-therapist-prioritizes-legitimate-ESA-Evaluations-and-Refuses-Instant-Approvals-302821988.html",
  },
  {
    name: "The Register-Guard",
    src: "/As Seen on Images/registerguard-logo.svg",
    url: "https://www.registerguard.com/press-release/story/54408/my-esa-therapist-simplifies-the-process-to-get-an-online-esa-letter-in-2026/",
    imgClassName: "!max-w-none !h-[26px] sm:!h-[28px] lg:!h-[30px] xl:!h-[32px] !w-auto",
  },
  {
    name: "RentDeals",
    src: "/As Seen on Images/rentdeals logo.webp",
    url: "https://www.rentdeals.com/blog/the-pet-rent-trap-a-housing-cost-breakdown-with-insights-from-my-esa-therapist/",
  },
  {
    name: "The Valdosta Daily Times",
    src: "/As Seen on Images/the-valdosta-daily-times-logo.webp",
    url: "https://pr.valdostadailytimes.com/article/Why-My-ESA-Therapist-Prioritizes-Legitimate-ESA-Evaluations-and-Refuses-Instant-Approvals/6a50e6a116e7610b3c53dfdd",
  },
  {
    name: "The State Journal",
    src: "/As Seen on Images/thestatejournal-image.webp",
    url: "https://smb.state-journal.com/article/Why-My-ESA-Therapist-Prioritizes-Legitimate-ESA-Evaluations-and-Refuses-Instant-Approvals/6a50e6a116e7610b3c53dfdd",
  },
  {
    name: "Yahoo! Finance",
    src: "/As Seen on Images/yahoo!_finance_logo..webp",
    url: "https://finance.yahoo.com/sectors/healthcare/articles/esa-therapist-highlights-growing-demand-165000890.html",
  },
];

interface AsSeenOnSectionProps {
  bgColor?: string;
}

export function AsSeenOnSection({ bgColor = "bg-white/40" }: AsSeenOnSectionProps) {
  return (
    <section className={`py-8 sm:py-10 lg:py-8 xl:py-[39px] ${bgColor} overflow-hidden relative backdrop-blur-xs`}>
      {/* Heading */}
      <div className="flex items-center justify-center gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8 xl:mb-[32px] px-4">
        <div className="w-[60px] sm:w-[80px] h-[1.5px] bg-[#E8B92C] rounded-[10px] shrink-0 translate-y-[1px]" />
        <h4 className="font-heading text-lg sm:text-2xl lg:text-[28px] font-bold text-[#2E5A66] text-center shrink-0 tracking-[-0.00015em] leading-none">
          As seen on
        </h4>
        <div className="w-[60px] sm:w-[80px] h-[1.5px] bg-[#E8B92C] rounded-[10px] shrink-0 translate-y-[1px]" />
      </div>

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden py-3 sm:py-4 xl:py-[14px]">
        {/* Subtle left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 lg:w-24 z-10 bg-gradient-to-r from-[#FAF7F2] to-transparent" />
        {/* Subtle right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 lg:w-24 z-10 bg-gradient-to-l from-[#FAF7F2] to-transparent" />

        <div
          className="flex w-max animate-marquee items-center py-1"
          style={{ animationDuration: "50s" }}
        >
          {/* Track 1 */}
          <div className="flex items-center gap-4 sm:gap-5 lg:gap-6 xl:gap-[25px] pr-4 sm:pr-5 lg:pr-6 xl:pr-[25px] shrink-0 py-1">
            {mediaLogos.map((logo, idx) => (
              <a
                key={`t1-${idx}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Read coverage on ${logo.name}`}
                className="bg-white rounded-[14px] lg:rounded-[16px] xl:rounded-[20px] shadow-[0_4px_18px_rgba(0,0,0,0.06)] xl:shadow-[0px_1px_4.2px_rgba(0,0,0,0.25)] border border-[#E2E8F0] h-[52px] sm:h-[60px] lg:h-[62px] xl:h-[65px] px-4 sm:px-5 lg:px-6 xl:px-7 min-w-[150px] sm:min-w-[180px] lg:min-w-[195px] xl:min-w-[204px] flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_6px_22px_rgba(0,0,0,0.09)] cursor-pointer"
              >
                <Image
                  unoptimized
                  src={logo.src}
                  alt={logo.name}
                  width={260}
                  height={65}
                  className={`shrink-0 grayscale contrast-125 opacity-100 hover:grayscale-0 hover:contrast-100 transition-all duration-300 ${
                    logo.imgClassName || "max-h-[30px] sm:max-h-[36px] lg:max-h-[40px] xl:max-h-[44px] max-w-[140px] sm:max-w-[165px] lg:max-w-[180px] xl:max-w-[195px] w-auto object-contain"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Track 2 (Identical Copy for Seamless -50% Loop) */}
          <div className="flex items-center gap-4 sm:gap-5 lg:gap-6 xl:gap-[25px] pr-4 sm:pr-5 lg:pr-6 xl:pr-[25px] shrink-0 py-1">
            {mediaLogos.map((logo, idx) => (
              <a
                key={`t2-${idx}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Read coverage on ${logo.name}`}
                className="bg-white rounded-[14px] lg:rounded-[16px] xl:rounded-[20px] shadow-[0_4px_18px_rgba(0,0,0,0.06)] xl:shadow-[0px_1px_4.2px_rgba(0,0,0,0.25)] border border-[#E2E8F0] h-[52px] sm:h-[60px] lg:h-[62px] xl:h-[65px] px-4 sm:px-5 lg:px-6 xl:px-7 min-w-[150px] sm:min-w-[180px] lg:min-w-[195px] xl:min-w-[204px] flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_6px_22px_rgba(0,0,0,0.09)] cursor-pointer"
              >
                <Image
                  unoptimized
                  src={logo.src}
                  alt={logo.name}
                  width={260}
                  height={65}
                  className={`shrink-0 grayscale contrast-125 opacity-100 hover:grayscale-0 hover:contrast-100 transition-all duration-300 ${
                    logo.imgClassName || "max-h-[30px] sm:max-h-[36px] lg:max-h-[40px] xl:max-h-[44px] max-w-[140px] sm:max-w-[165px] lg:max-w-[180px] xl:max-w-[195px] w-auto object-contain"
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


