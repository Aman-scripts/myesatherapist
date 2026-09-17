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
    <section className="w-full pt-8 pb-4 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2.5 text-xs sm:text-sm text-[#5F6B6F] font-sans font-semibold">
        <Link href="/" className="hover:text-[#2E5A66] transition-colors">
          Home
        </Link>
        <span className="text-[#DECDBB]">/</span>
        {!["privacy-policy", "terms-of-use", "disclaimer", "disclaimer-and-policies"].includes(policy.slug) && (
          <>
            <Link href="/privacy-policy/" className="hover:text-[#2E5A66] transition-colors text-[#5F6B6F]">
              Policies
            </Link>
            <span className="text-[#DECDBB]">/</span>
          </>
        )}
        <span className="text-[#2E5A66] font-bold">{policy.pageTitle}</span>
      </nav>

      {/* Hero Card with Project Brand Theme */}
      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-white border border-[#EAE5DC] p-6 sm:p-10 lg:p-12 shadow-[0px_4px_25px_rgba(26,61,79,0.06)]">
        {/* Ambient Warm Accent Glow */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#E8B92C]/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-16 right-1/3 h-64 w-64 rounded-full bg-[#2E5A66]/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[840px]">
          {/* Eyebrow Badge */}
          {policy.eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF7F2] border border-[#EAE5DC] px-4 py-1.5 text-xs sm:text-sm font-sans font-bold text-[#2E5A66] shadow-2xs mb-4 sm:mb-5">
              <svg className="w-4 h-4 text-[#E8B92C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>{policy.eyebrow}</span>
            </div>
          )}

          {/* Main Headline H1 */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-bold tracking-tight text-[#2E5A66] leading-[1.15] mb-4">
            {accentIdx !== -1 ? (
              <>
                {beforeAccent}
                <span className="text-[#E8B92C] font-heading font-bold">{matchAccent}</span>
                {afterAccent}
              </>
            ) : (
              policy.pageTitle
            )}
          </h1>

          {/* Subtitle / Lede */}
          {policy.lede && (
            <p className="font-sans text-base sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-[#5F6B6F] font-medium mb-6 max-w-[740px]">
              {policy.lede}
            </p>
          )}

          {/* Hero Stats (e.g. HIPAA) */}
          {policy.heroStats && policy.heroStats.length > 0 && (
            <div className="grid grid-cols-3 gap-3 sm:gap-4 my-6 max-w-[540px]">
              {policy.heroStats.map((st, i) => (
                <div key={i} className="bg-[#FAF7F2] border border-[#EAE5DC] rounded-[16px] p-3.5 sm:p-4 text-center shadow-2xs">
                  <div className="font-heading text-xl sm:text-2xl font-bold text-[#2E5A66]">{st.num}</div>
                  <div className="font-sans text-xs sm:text-[13px] text-[#5F6B6F] font-semibold leading-tight mt-1">{st.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Metadata Chips: Last updated date & Reviewer */}
          <div className="flex flex-wrap items-center gap-3 mb-4 pt-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF7F2] border border-[#EAE5DC] px-3.5 py-1.5 text-xs sm:text-sm font-sans font-semibold text-[#5F6B6F]">
              <svg className="w-4 h-4 text-[#E8B92C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Last updated: {policy.updatedDate}</span>
            </div>

            {policy.reviewerLine && (
              <Link
                href="/legal-reviewer/awais-arshad"
                className="inline-flex items-center gap-2 rounded-full bg-[#FAF7F2] border border-[#EAE5DC] px-3.5 py-1.5 text-xs sm:text-sm font-sans font-semibold text-[#2E5A66] hover:bg-white hover:border-[#2E5A66]/30 transition-colors"
              >
                <svg className="w-4 h-4 text-[#2E5A66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>{policy.reviewerLine}</span>
              </Link>
            )}
          </div>

          {/* Related Policy Pills */}
          {policy.relatedLinks && policy.relatedLinks.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#EAE5DC]/80 mt-5">
              <span className="text-xs font-sans font-bold text-[#7C8B8E] mr-1 uppercase tracking-wider">Related Policies:</span>
              {policy.relatedLinks.map((link, idx) => {
                const slugMap: Record<string, string> = {
                  "terms of use": "/terms-of-use/",
                  "privacy policy": "/privacy-policy/",
                  "refund policy": "/policies/refund-policy/",
                  "consent for telehealth": "/policies/consent-for-telehealth/",
                  "hipaa compliance": "/policies/hipaa-compliance/",
                  "editorial policy": "/policies/editorial-policy/",
                  "disclaimer & policies": "/disclaimer/",
                  "disclaimer": "/disclaimer/",
                  "medical disclaimer": "/disclaimer/",
                  "accessibility statement": "/policies/accessibility-statement/",
                };
                const mappedHref = slugMap[link.text.toLowerCase()] || link.href;

                return (
                  <Link
                    key={idx}
                    href={mappedHref}
                    className="inline-flex items-center gap-1 rounded-full border border-[#EAE5DC] bg-[#FAF7F2] hover:bg-white hover:border-[#2E5A66]/40 px-3 py-1 text-xs font-sans font-semibold text-[#2E5A66] transition-all"
                  >
                    <span>{link.text}</span>
                    <svg className="w-3 h-3 text-[#E8B92C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
