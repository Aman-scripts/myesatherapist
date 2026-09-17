import React from "react";
import Link from "next/link";
import { PolicyDocument } from "@/data/policiesData";

interface PolicyHeroProps {
  policy: PolicyDocument;
}

export function PolicyHero({ policy }: PolicyHeroProps) {
  // Title accent logic: highlight the accentWord or the last word
  const titleParts = policy.pageTitle.split(" ");
  const accentWord = policy.accentWord || titleParts[titleParts.length - 1];
  
  // Find where the accent word is in the title
  const accentIdx = policy.pageTitle.toLowerCase().lastIndexOf(accentWord.toLowerCase());
  const beforeAccent = accentIdx !== -1 ? policy.pageTitle.substring(0, accentIdx) : policy.pageTitle;
  const matchAccent = accentIdx !== -1 ? policy.pageTitle.substring(accentIdx, accentIdx + accentWord.length) : "";
  const afterAccent = accentIdx !== -1 ? policy.pageTitle.substring(accentIdx + accentWord.length) : "";

  return (
    <section className="w-full pt-6 pb-2 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs sm:text-sm text-[#5F6B6F] font-sans font-medium">
        <Link href="/" className="hover:text-[#2E5A66] transition-colors">Home</Link>
        <span className="text-[#DECDBB]">/</span>
        <span className="text-[#7C8B8E]">Policies</span>
        <span className="text-[#DECDBB]">/</span>
        <span className="text-[#2E5A66] font-semibold">{policy.pageTitle}</span>
      </nav>

      {/* Hero Card */}
      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-gradient-to-br from-[#163038] via-[#2E5A66] to-[#3B7280] p-6 sm:p-10 lg:p-12 text-[#EAF3F0] shadow-xl">
        {/* Ambient radial glow */}
        <div 
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" 
          aria-hidden="true" 
        />
        <div 
          className="pointer-events-none absolute -bottom-10 right-1/4 h-60 w-60 rounded-full bg-[#EFBF2F]/10 blur-2xl" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-[760px]">
          {/* Eyebrow badge */}
          {policy.eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-xs mb-4 sm:mb-5">
              <svg className="w-4 h-4 text-[#EFBF2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>{policy.eyebrow}</span>
            </div>
          )}

          {/* Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.15] mb-4">
            {accentIdx !== -1 ? (
              <>
                {beforeAccent}
                <span className="text-[#EFBF2F] italic font-serif">{matchAccent}</span>
                {afterAccent}
              </>
            ) : (
              policy.pageTitle
            )}
          </h1>

          {/* Lede / Subtitle */}
          {policy.lede && (
            <p className="text-sm sm:text-base lg:text-[17px] leading-relaxed text-[#D9EAE5] font-sans font-normal mb-5 max-w-[640px]">
              {policy.lede}
            </p>
          )}

          {/* Hero Stats (e.g. HIPAA) */}
          {policy.heroStats && policy.heroStats.length > 0 && (
            <div className="grid grid-cols-3 gap-3 sm:gap-4 my-5 max-w-[500px]">
              {policy.heroStats.map((st, i) => (
                <div key={i} className="bg-white/10 border border-white/15 rounded-xl p-3 sm:p-3.5 backdrop-blur-xs text-center">
                  <div className="font-heading text-lg sm:text-xl font-bold text-[#EFBF2F]">{st.num}</div>
                  <div className="text-[11px] sm:text-xs text-[#D9EAE5] font-medium leading-tight mt-0.5">{st.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Last updated pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white/90 mb-5">
            <svg className="w-3.5 h-3.5 text-[#EFBF2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Last updated: {policy.updatedDate}</span>
          </div>

          {/* Related policy links */}
          {policy.relatedLinks && policy.relatedLinks.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-[#D9EAE5]/80 mr-1">Related:</span>
              {policy.relatedLinks.map((link, idx) => {
                // Map link hrefs to /policies/[slug]
                const slugMap: Record<string, string> = {
                  "terms of use": "/policies/terms-of-use",
                  "privacy policy": "/policies/privacy-policy",
                  "refund policy": "/policies/refund-policy",
                  "consent for telehealth": "/policies/consent-for-telehealth",
                  "hipaa compliance": "/policies/hipaa-compliance",
                  "editorial policy": "/policies/editorial-policy",
                  "disclaimer & policies": "/policies/disclaimer-and-policies",
                  "disclaimer": "/policies/disclaimer-and-policies",
                  "accessibility statement": "/policies/accessibility-statement",
                };
                const mappedHref = slugMap[link.text.toLowerCase()] || link.href;

                return (
                  <Link
                    key={idx}
                    href={mappedHref}
                    className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-medium text-white hover:bg-white/18 hover:border-white/30 transition-all"
                  >
                    <span>{link.text}</span>
                    <svg className="w-3 h-3 text-[#EFBF2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
