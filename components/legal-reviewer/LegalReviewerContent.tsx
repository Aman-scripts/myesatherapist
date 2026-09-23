"use client";

import React from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { X, ChevronRight } from "lucide-react";
import { SectionBadge, GoldLipBadge } from "./ReviewerUI";

// Reusable profile credentials, licensure, jurisdictions & professional profiles
function ProfileDetails({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <>
      {/* Badges: Active Now & 12 Years Experience */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
        {/* Active Now */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-white/20 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[11px]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00BA00] shadow-[0_0_6px_rgba(0,186,0,0.5)] shrink-0" />
          <span className="font-lato font-bold text-[13px] sm:text-[14px] leading-[20px] text-[#2E5A66] tracking-[-0.017em]">
            Active Now
          </span>
        </div>

        {/* 12 Years Experience */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-white/20 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[11px]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00BA00] shadow-[0_0_6px_rgba(0,186,0,0.5)] shrink-0" />
          <span className="font-lato font-bold text-[13px] sm:text-[14px] leading-[20px] text-[#2E5A66] tracking-[-0.017em]">
            12 Years Experience
          </span>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[1px] bg-white/20" />

      {/* Licensure Section */}
      <div className="space-y-4">
        <h3 className="font-heading font-bold text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-[#FAF7F2]/40 tracking-[-0.017em]">
          Licensure
        </h3>
        <ul className="space-y-3 font-lato text-[14px] leading-[22px] text-[#FAF7F2] tracking-[-0.017em]">
          <li className="flex items-center justify-between gap-4">
            <span>New York</span>
          </li>
          <li className="flex items-center justify-between gap-4">
            <span>England &amp; Wales</span>
            <span className="font-medium text-[#FAF7F2]/90">2016</span>
          </li>
          <li className="flex items-center justify-between gap-4">
            <span>Pakistan</span>
          </li>
        </ul>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[1px] bg-white/20" />

      {/* Professional Profiles */}
      <div className="space-y-3.5">
        <h3 className="font-heading font-bold text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-[#FAF7F2]/40 tracking-[-0.017em]">
          Professional Profiles
        </h3>
        <div className="space-y-2.5 font-lato text-[14px] leading-[22px] text-[#FAF7F2] tracking-[-0.017em]">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/awais-arshad-a51b31113/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
            className="flex items-center gap-2.5 hover:text-[#E8B92C] transition-colors group cursor-pointer"
          >
            <svg
              className="w-4 h-4 fill-current shrink-0 text-[#FAF7F2] group-hover:text-[#E8B92C] transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 0 0 1.63-1.63 1.63 1.63 0 0 0-1.63-1.63A1.63 1.63 0 0 0 4.83 7.13a1.63 1.63 0 0 0 1.63 1.63m1.4 9.74v-8.37H5.06v8.37z" />
            </svg>
            <span className="underline underline-offset-2">
              Linkedin Profile
            </span>
          </a>

          {/* Courting the Law */}
          <a
            href="https://courtingthelaw.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
            className="flex items-center gap-2.5 hover:text-[#E8B92C] transition-colors group cursor-pointer"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-2 shrink-0 text-[#FAF7F2] group-hover:text-[#E8B92C] transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            <span className="underline underline-offset-2">
              Courting the Law
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export function LegalReviewerContent() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background body scroll when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close drawer on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section className="w-full bg-[#FAF7F2] relative pb-16 lg:pb-24">
      <div className="w-full flex flex-col lg:flex-row items-start justify-start">
        {/* =========================================================================
            LEFT COLUMN (Profile Sidebar) - DESKTOP VIEW (>= 1024px)
            Hidden on mobile & tablet (< lg).
            Figma: Frame 1000011828 (382px wide, left: 0px, flush to screen edge)
            Sticky / Fixed on desktop, aligned with top: 126px
            ========================================================================= */}
        <aside
          className="hidden lg:flex w-[382px] shrink-0 sticky top-[126px] z-20 self-start text-[#FAF7F2] flex-col max-h-[calc(100vh-140px)] rounded-none mb-0 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)",
            borderRadius: "0px",
          }}
        >
          {/* =========================================================
              1. FIXED TOP PROFILE SECTION
              Only Image, Name & Title are fixed/pinned at the top.
              ========================================================= */}
          <div className="shrink-0 p-6 sm:p-8 lg:px-[31px] lg:pt-[45px] pb-3">
            {/* Avatar & Basic Identity */}
            <div className="flex flex-col items-center lg:items-start space-y-5">
              {/* Avatar with circular white frame (Frame 1000011843) */}
              <div className="w-[138px] h-[138px] rounded-full p-[5px] bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0">
                <div className="relative w-[128px] h-[128px] rounded-full overflow-hidden">
                  <Image
            quality={90}
                    src="/legal_reviewer/legal-reviwer.webp"
                    alt="Awais Arshad - Legal Reviewer & Attorney at Law"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="128px"
                  />
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center lg:text-left space-y-2">
                <h1 className="font-heading font-bold text-3xl sm:text-[38px] lg:text-[44px] leading-[1.15] text-[#FAF7F2] tracking-[-0.00015em]">
                  Awais Arshad
                </h1>

                {/* Title with Briefcase Bag SVG */}
                <div className="flex items-center justify-center lg:justify-start gap-2.5">
                  <span className="w-6 h-6 shrink-0 relative flex items-center justify-center">
                    <Image
            quality={90}
                      src="/legal_reviewer/legal_reviewer-bag-icon.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </span>
                  <span className="font-heading font-bold text-[20px] leading-[28px] text-[#FAF7F2]">
                    Attorney at Law
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              2. SCROLLABLE BOTTOM CONTENT
              Badges, Divider, Licensure, Authorize to Practice, Profiles
              Everything here moves / scrolls!
              ========================================================= */}
          <div className="flex-1 overflow-y-auto no-scrollbar p-6 sm:p-8 lg:px-[31px] lg:pt-2 lg:pb-10 space-y-6">
            <ProfileDetails />
          </div>
        </aside>

        {/* ---------------------------------------------------- */}
        {/* MOBILE & TABLET TRIGGER + PORTAL DRAWER (< 1024px)   */}
        {/* Like in the blogs page: hidden on desktop            */}
        {/* ---------------------------------------------------- */}
        {mounted &&
          createPortal(
            <>
              {/* Floating half-circle toggle button on left edge (z-[80]) */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Open Legal Reviewer Profile"
                className="lg:hidden fixed left-0 top-[55%] sm:top-[50%] -translate-y-1/2 z-[80] w-[34px] sm:w-[40px] h-[64px] sm:h-[76px] rounded-r-full shadow-[2px_4px_16px_rgba(26,61,79,0.45)] flex items-center justify-center pl-0.5 text-white transition-all hover:w-[44px] active:scale-95 group cursor-pointer"
                style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#FAF7F2] stroke-[2.5] group-hover:translate-x-0.5 group-hover:text-[#E8B92C] transition-all" />
              </button>

              {/* Sliding Drawer & Backdrop */}
              <div
                className={`fixed inset-0 z-[99999] flex transition-all duration-300 ${
                  isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
                }`}
                role="dialog"
                aria-modal="true"
                aria-label="Legal Reviewer Profile Drawer"
              >
                {/* Backdrop Overlay with smooth fade */}
                <div
                  onClick={() => setIsOpen(false)}
                  className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Sliding Content Panel */}
                <div
                  className={`relative w-[320px] sm:w-[360px] md:w-[382px] h-full max-h-screen overflow-hidden z-[100000] text-[#FAF7F2] shadow-2xl flex flex-col justify-start transition-transform duration-300 ease-out transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
                  style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  {/* Fixed Top Header (Logo + Close Button + Divider) */}
                  <div className="shrink-0 px-6 sm:px-8 pt-8 sm:pt-10">
                    <div className="flex items-start justify-between mb-5 sm:mb-6">
                      {/* Brand Logo Card (Frame 1000011910) */}
                      <div className="w-[170px] sm:w-[190px] h-[74px] sm:h-[81.5px] bg-white border-[4.5px] sm:border-[5.54px] border-[#E8B92C] rounded-[8px] flex items-center justify-center p-2.5 shadow-md">
                        <Image
            quality={90}
                          src="/common/myesa-logo.svg"
                          alt="My ESA Therapist"
                          width={135}
                          height={56}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Close Button */}
                      <button
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 hover:border-white text-white/90 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer mt-1"
                        aria-label="Close Profile Drawer"
                      >
                        <X className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#FAF7F2] stroke-[2.2]" />
                      </button>
                    </div>

                    {/* Divider Line */}
                    <div className="w-full h-[0.5px] bg-white/30" />
                  </div>

                  {/* Scrollable Profile Content */}
                  <div
                    className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-6 sm:px-8 pt-5 sm:pt-6 pb-10 space-y-6"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {/* Avatar & Identity */}
                    <div className="flex flex-col items-start space-y-4">
                      <div className="w-[128px] h-[128px] rounded-full p-[5px] bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0">
                        <div className="relative w-[118px] h-[118px] rounded-full overflow-hidden">
                          <Image
            quality={90}
                            src="/legal_reviewer/legal-reviwer.webp"
                            alt="Awais Arshad - Legal Reviewer & Attorney at Law"
                            fill
                            className="object-cover object-top"
                            sizes="118px"
                          />
                        </div>
                      </div>

                      <div className="text-left space-y-1.5">
                        <h2 className="font-heading font-bold text-2xl sm:text-3xl leading-[1.15] text-[#FAF7F2] tracking-[-0.00015em]">
                          Awais Arshad
                        </h2>

                        <div className="flex items-center justify-start gap-2.5">
                          <span className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 relative flex items-center justify-center">
                            <Image
            quality={90}
                              src="/legal_reviewer/legal_reviewer-bag-icon.svg"
                              alt=""
                              width={24}
                              height={24}
                              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                            />
                          </span>
                          <span className="font-heading font-bold text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-[#FAF7F2]">
                            Attorney at Law
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Profile Details: Badges, Licensure, Jurisdiction, Profiles */}
                    <ProfileDetails onLinkClick={() => setIsOpen(false)} />
                  </div>
                </div>
              </div>
            </>,
            document.body
          )}

        {/* =========================================================================
            RIGHT COLUMN (Main Legal Reviewer Content)
            Figma: Frame 1000011878 (padding 0px 74px, gap 53px)
            ========================================================================= */}
        <div className="flex-1 min-w-0 max-w-[1055px] px-4 sm:px-8 lg:px-[74px] pt-8 lg:pt-[50px] pb-0 space-y-10 lg:space-y-[48px]">
          {/* SECTION 1: ABOUT */}
          <div className="space-y-6 lg:space-y-7">
            <SectionBadge title="About" />

            <h2 className="font-heading font-bold text-3xl sm:text-[38px] lg:text-[32px] xl:text-[36px] leading-[1.22] text-[#2E5A66] tracking-[-0.00015em] lg:whitespace-nowrap">
              Legal Insight Behind the Information You Read
            </h2>

            <p className="font-sans font-semibold text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#5F6B6F]">
              Awais Arshad is a New York-licensed attorney and legal writer
              with 12 years of legal experience. He holds an LL.M. from
              Columbia Law School, where he was a Fulbright Scholar and
              received the Joseph V. Heffernan Scholarship. He was called to
              the Bar of England and Wales in 2016 and is also admitted in
              Pakistan. As a Legal Writer at Tax Law Offices of David W.
              Klasing, Awais has extensive experience writing, editing, and
              fact-checking U.S. legal content.
            </p>

            <p className="font-sans font-semibold text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#5F6B6F]">
              At My ESA Therapist, he reviews legal content related to
              emotional support animals, checking claims for accuracy,
              currentness, reliable source support, and compliance with
              applicable federal and state laws. He also helps ensure legal
              information remains clear and accessible to non-lawyer readers.
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <GoldLipBadge>Legal Writing</GoldLipBadge>
              <GoldLipBadge>Fact-Checking &amp; Compliance</GoldLipBadge>
              <GoldLipBadge>Fair Housing Law</GoldLipBadge>
              <GoldLipBadge>Federal &amp; State Regulations</GoldLipBadge>
              <GoldLipBadge>Legal Accessibility</GoldLipBadge>
              <GoldLipBadge>Clear Client Communication</GoldLipBadge>
            </div>
          </div>

          {/* Divider Line 14 */}
          <hr className="border-t border-[#5F6B6F]/25" />

          {/* SECTION 2: EDUCATION */}
          <div className="space-y-8 lg:space-y-10">
            <SectionBadge title="Education" />

            {/* Degree: LL.M. */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-xl sm:text-[24px] leading-[32px] text-[#2E5A66]">
                LL.M.
              </h3>
              <p className="font-lato text-[15px] sm:text-[16px] leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                Columbia Law School
              </p>

              {/* Honor Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <GoldLipBadge>Fulbright Scholar</GoldLipBadge>
                <GoldLipBadge>Joseph V. Heffernan Scholarship</GoldLipBadge>
              </div>
            </div>
          </div>

          {/* Divider Line 16 */}
          <hr className="border-t border-[#5F6B6F]/25" />

          {/* SECTION 4: CONTENT REVIEW RESPONSIBILITIES */}
          <div className="space-y-9">
            <SectionBadge title="Content Review Responsibilities" />

            {/* 3 Step Numbers (01, 02, 03) */}
            <div className="space-y-7 sm:space-y-8">
              {/* Step 01 */}
              <div className="flex items-start gap-4 sm:gap-6">
                <span aria-hidden="true" data-num="01" className="font-heading font-bold text-3xl sm:text-[44px] leading-[1.15] text-[#5F6B6F]/45 shrink-0 w-10 sm:w-14 before:content-[attr(data-num)]" />
                <div className="space-y-2 flex-1">
                  <h3 className="font-heading font-bold text-lg sm:text-[24px] leading-[30px] sm:leading-[32px] text-[#2E5A66]">
                    Types of legal content I review
                  </h3>
                  <p className="font-lato text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                    I review public-facing legal content, including website copy,
                    articles, blog posts, FAQs, legal explainers, compliance
                    summaries, client guides, and educational materials intended
                    for non-lawyer audiences.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="flex items-start gap-4 sm:gap-6">
                <span aria-hidden="true" data-num="02" className="font-heading font-bold text-3xl sm:text-[44px] leading-[1.15] text-[#5F6B6F]/45 shrink-0 w-10 sm:w-14 before:content-[attr(data-num)]" />
                <div className="space-y-2 flex-1">
                  <h3 className="font-heading font-bold text-lg sm:text-[24px] leading-[30px] sm:leading-[32px] text-[#2E5A66]">
                    Legal review process
                  </h3>
                  <p className="font-lato text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                    I identify the legal claims being made and assess whether
                    they are accurate, current, properly qualified, and
                    supported by reliable authority. I flag overbroad,
                    outdated, misleading, or jurisdiction-specific statements
                    and make revisions where needed.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="flex items-start gap-4 sm:gap-6">
                <span aria-hidden="true" data-num="03" className="font-heading font-bold text-3xl sm:text-[44px] leading-[1.15] text-[#5F6B6F]/45 shrink-0 w-10 sm:w-14 before:content-[attr(data-num)]" />
                <div className="space-y-2 flex-1">
                  <h3 className="font-heading font-bold text-lg sm:text-[24px] leading-[30px] sm:leading-[32px] text-[#2E5A66]">
                    How I verify legal accuracy
                  </h3>
                  <p className="font-lato text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                    I verify legal information using statutes, regulations,
                    agency guidance, case law, and reputable secondary legal
                    sources. I also use Westlaw and LexisNexis to research
                    current legal authority, check citations, and confirm that
                    the content accurately reflects applicable federal and
                    state laws.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-[#5F6B6F]/25" />

          {/* SECTION 5: REVIEWER DISCLOSURE CARD */}
          <div
            className="rounded-[30px] p-6 sm:p-8 lg:p-[37px] text-[#FAF7F2] shadow-sm space-y-5"
            style={{
              background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)",
            }}
          >
            <h3 className="font-heading font-bold text-lg sm:text-[20px] leading-[28px] text-[#FAF7F2] tracking-[0.05em] uppercase">
              Reviewer Disclosure
            </h3>

            <div className="space-y-3.5">
              {/* Point 1 */}
              <div className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-[#FAF7F2]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="font-lato text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#FAF7F2] tracking-[-0.017em]">
                  I authorize My ESA Therapist to display my name, photo,
                  biography, credentials, and professional information on its
                  website.
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-[#FAF7F2]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="font-lato text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#FAF7F2] tracking-[-0.017em]">
                  I have reviewed and approved the information provided.
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-[#FAF7F2]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="font-lato text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#FAF7F2] tracking-[-0.017em]">
                  I understand that my review of website content does not
                  establish an attorney-client relationship with website
                  visitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
