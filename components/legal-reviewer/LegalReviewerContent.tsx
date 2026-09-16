"use client";

import React from "react";
import Image from "next/image";

// Custom Pill Badge with standard styling
function SectionBadge({ title }: { title: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-[#E4E4E4] shadow-[0px_1px_0px_rgba(64,64,64,0.15)] text-[#5F6B6F] font-lato text-[14px] sm:text-[15px] leading-normal tracking-[-0.017em]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F]/60" />
      <span>{title}</span>
    </div>
  );
}

// Gold-rimmed tag / credential badge (Figma Frame 1000011816 pattern)
function GoldLipBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-block pt-[4px] bg-[#E8B92C] rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-0.5 duration-200 ${className}`}
    >
      <div className="bg-white rounded-[18px] px-3.5 sm:px-4 py-1.5 sm:py-2 text-center text-[#5F6B6F] font-lato text-[12px] leading-tight tracking-[-0.017em] shadow-xs">
        {children}
      </div>
    </div>
  );
}

// Gold-rimmed featured publication card
function PublicationCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="pt-[5px] bg-[#E8B92C] rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-1 hover:shadow-md duration-200 flex-1 min-w-[200px] max-w-[260px]">
      <div className="bg-white rounded-[18px] py-4 px-5 text-center shadow-xs flex flex-col items-center justify-center min-h-[58px]">
        <h4 className="font-sans font-semibold text-[16px] leading-[24px] text-[#2E5A66]">
          {title}
        </h4>
        <p className="font-sans font-normal text-[12px] leading-[18px] text-[#5F6B6F] tracking-[-0.017em] mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function LegalReviewerContent() {
  return (
    <section className="w-full bg-[#FAF7F2] relative pb-16 lg:pb-24">
      <div className="w-full flex flex-col lg:flex-row items-start justify-start">
        {/* =========================================================================
            LEFT COLUMN (Profile Sidebar)
            Figma: Frame 1000011828 (382px wide, left: 0px, flush to screen edge)
            Sticky / Fixed on desktop, aligned with bottom of Reviewer Disclosure card
            ========================================================================= */}
        <aside
          className="w-full lg:w-[382px] shrink-0 lg:sticky lg:top-[126px] z-20 self-start text-[#FAF7F2] flex flex-col max-h-[calc(100vh-140px)] rounded-none shadow-md lg:shadow-none mb-0 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)",
            borderRadius: "0px",
          }}
        >
          {/* =========================================================
              1. FIXED TOP PROFILE SECTION (Frame 1000011839 + Line 11)
              Avatar, Awais Arshad, Attorney at Law, Badges, Divider
              This section is completely static & pinned at the top.
              ========================================================= */}
          <div className="shrink-0 p-6 sm:p-8 lg:px-[31px] lg:pt-[45px] pb-0">
            {/* Avatar & Basic Identity */}
            <div className="flex flex-col items-center lg:items-start space-y-6">
              {/* Avatar with circular white frame (Frame 1000011843) */}
              <div className="w-[138px] h-[138px] rounded-full p-[5px] bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0">
                <div className="relative w-[128px] h-[128px] rounded-full overflow-hidden">
                  <Image
                    src="/legal_reviewer/legal-reviwer.png"
                    alt="Awais Arshad - Legal Reviewer & Attorney at Law"
                    fill
                    priority
                    unoptimized
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

              {/* Badges: Active Now & 12 Years Experience */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
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
            </div>

            {/* Divider Line 11 */}
            <div className="w-full h-[1px] bg-white/20 mt-7" />
          </div>

          {/* =========================================================
              2. SCROLLABLE BOTTOM CONTENT (Frame 1000011841 + Frame 1000011840)
              Licensure, Authorize to Practice, Professional Profiles
              This is the only part that moves / scrolls!
              ========================================================= */}
          <div className="flex-1 overflow-y-auto no-scrollbar p-6 sm:p-8 lg:px-[31px] lg:pt-6 lg:pb-10 space-y-6">
            {/* Licensure Section (Frame 1000011837) */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-[20px] leading-[28px] text-[#FAF7F2]/40 tracking-[-0.017em]">
                Licensure
              </h3>
              <ul className="space-y-3 font-lato text-[14px] leading-[22px] text-[#FAF7F2] tracking-[-0.017em]">
                <li className="flex items-center justify-between gap-4">
                  <span>Southern District of New York</span>
                  <span className="font-medium text-[#FAF7F2]/90">2024</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>State of New York</span>
                  <span className="font-medium text-[#FAF7F2]/90">2023</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>England &amp; Wales</span>
                  <span className="font-medium text-[#FAF7F2]/90">2016</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>Pakistan</span>
                  <span className="font-medium text-[#FAF7F2]/90">2016</span>
                </li>
              </ul>
            </div>

            {/* Authorize to Practice (Frame 1000011840) */}
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-[20px] leading-[28px] text-[#FAF7F2]/40 tracking-[-0.017em]">
                Authorize to Practice
              </h3>
              <p className="font-lato text-[14px] leading-[22px] text-[#FAF7F2] tracking-[-0.017em]">
                · New York · United Kingdom · Pakistan
              </p>
            </div>

            {/* Divider Line 13 */}
            <div className="w-full h-[1px] bg-white/20" />

            {/* Professional Profiles (Frame 1000011840 / 1000011842) */}
            <div className="space-y-3.5">
              <h3 className="font-heading font-bold text-[20px] leading-[28px] text-[#FAF7F2]/40 tracking-[-0.017em]">
                Professional Profiles
              </h3>
              <div className="space-y-2.5 font-lato text-[14px] leading-[22px] text-[#FAF7F2] tracking-[-0.017em]">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/awais-arshad-a51b31113/"
                  target="_blank"
                  rel="noopener noreferrer"
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
          </div>
        </aside>

        {/* =========================================================================
            RIGHT COLUMN (Main Legal Reviewer Content)
            Figma: Frame 1000011878 (padding 0px 74px, gap 53px)
            ========================================================================= */}
        <div className="flex-1 min-w-0 max-w-[1055px] px-4 sm:px-8 lg:px-[74px] pt-8 lg:pt-[50px] pb-0 space-y-10 lg:space-y-[48px]">
          {/* SECTION 1: ABOUT */}
          <div className="space-y-6 lg:space-y-7">
            <SectionBadge title="About" />

            <h2 className="font-heading font-bold text-3xl sm:text-[38px] lg:text-[44px] leading-[1.22] text-[#2E5A66] tracking-[-0.00015em]">
              Nearly a decade writing, editing, and fact-checking U.S. legal
              content.
            </h2>

            <p className="font-sans font-semibold text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#5F6B6F]">
              Awais Arshad is a New York-licensed attorney with nearly half a
              decade of experience writing, editing, and fact-checking U.S.
              legal content for public-facing audiences. He has worked
              extensively on complex legal and regulatory topics, including
              federal law, compliance, investigations, enforcement risk, and
              client-facing legal education.
            </p>

            {/* 3 Featured Publication Cards (Billboard, The Champion, Bloomberg Tax) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2">
              <PublicationCard
                title="Billboard"
                subtitle="Entertainment & Media Law"
              />
              <PublicationCard
                title="The Champion"
                subtitle="Criminal Defense"
              />
              <PublicationCard
                title="Bloomberg Tax"
                subtitle="Tax & Regulatory"
              />
            </div>
          </div>

          {/* Divider Line 14 */}
          <hr className="border-t border-[#5F6B6F]/25" />

          {/* SECTION 2: EDUCATION */}
          <div className="space-y-8 lg:space-y-10">
            <SectionBadge title="Education" />

            {/* Degree 1: LL.M. */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-heading font-bold text-xl sm:text-[24px] leading-[32px] text-[#2E5A66]">
                  LL.M.
                </h3>
                <span className="font-lato text-[14px] leading-[32px] text-[#5F6B6F] tracking-[-0.017em]">
                  May 2021
                </span>
              </div>
              <p className="font-lato text-[15px] sm:text-[16px] leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                Columbia Law School, Columbia University, New York
              </p>

              {/* Honor Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <GoldLipBadge>Fulbright Scholar</GoldLipBadge>
                <GoldLipBadge>
                  Joseph V. Heffernan Scholarship ($40,000)
                </GoldLipBadge>
                <GoldLipBadge>Columbia Public Interest Honoree</GoldLipBadge>
                <GoldLipBadge>Harlan Fiske Stone Scholar</GoldLipBadge>
              </div>
            </div>

            {/* Degree 2: Bar Professional Training Course */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-heading font-bold text-xl sm:text-[24px] leading-[32px] text-[#2E5A66]">
                  Bar Professional Training Course
                </h3>
                <span className="font-lato text-[14px] leading-[32px] text-[#5F6B6F] tracking-[-0.017em]">
                  November 2015
                </span>
              </div>
              <p className="font-lato text-[15px] sm:text-[16px] leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                BPP University, London, United Kingdom
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <GoldLipBadge>Very Competent</GoldLipBadge>
                <GoldLipBadge>
                  Called to the Bar of England &amp; Wales in 2016
                </GoldLipBadge>
                <GoldLipBadge>
                  Member of The Honorable Society of Lincoln&apos;s Inn
                </GoldLipBadge>
              </div>
            </div>

            {/* Degree 3: LL.B. (Hons.) */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-heading font-bold text-xl sm:text-[24px] leading-[32px] text-[#2E5A66]">
                  LL.B. (Hons.), Upper Division — Second Class Honors
                </h3>
                <span className="font-lato text-[14px] leading-[32px] text-[#5F6B6F] tracking-[-0.017em]">
                  September 2014
                </span>
              </div>
              <p className="font-lato text-[15px] sm:text-[16px] leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                BPP University, London, United Kingdom
              </p>

              {/* Badge */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <GoldLipBadge>Merit Scholarship</GoldLipBadge>
              </div>
            </div>
          </div>

          {/* Divider Line 15 */}
          <hr className="border-t border-[#5F6B6F]/25" />

          {/* SECTION 3: AREA OF EXPERTISE */}
          <div className="space-y-6">
            <SectionBadge title="Area of Expertise" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2.5 gap-x-8 lg:gap-x-16 font-lato text-[15px] sm:text-[16px] leading-[30px] sm:leading-[32px] text-[#5F6B6F] tracking-[-0.017em]">
              {/* Left Column */}
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0" />
                  <span>White Collar Criminal Defense</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0" />
                  <span>Regulatory Compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0" />
                  <span>Criminal Law and Procedure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0" />
                  <span>U.S. Legal Research &amp; Content Review</span>
                </li>
              </ul>

              {/* Right Column */}
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0" />
                  <span>Government Investigations &amp; Enforcement</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0" />
                  <span>Financial and Business Law</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0" />
                  <span>Administrative Law</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0" />
                  <span>Client-Facing Legal Education</span>
                </li>
              </ul>
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
                <span className="font-heading font-bold text-3xl sm:text-[44px] leading-[1.15] text-[#5F6B6F]/45 shrink-0 w-10 sm:w-14">
                  01
                </span>
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
                <span className="font-heading font-bold text-3xl sm:text-[44px] leading-[1.15] text-[#5F6B6F]/45 shrink-0 w-10 sm:w-14">
                  02
                </span>
                <div className="space-y-2 flex-1">
                  <h3 className="font-heading font-bold text-lg sm:text-[24px] leading-[30px] sm:leading-[32px] text-[#2E5A66]">
                    Legal review process
                  </h3>
                  <p className="font-lato text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                    I first identify the legal claims being made, then check
                    whether each claim is accurate, current, properly qualified,
                    and supported by reliable authority. I flag overbroad,
                    outdated, misleading, or jurisdiction-specific statements,
                    then revise the content for legal accuracy, clarity, tone,
                    and reader accessibility.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="font-heading font-bold text-3xl sm:text-[44px] leading-[1.15] text-[#5F6B6F]/45 shrink-0 w-10 sm:w-14">
                  03
                </span>
                <div className="space-y-2 flex-1">
                  <h3 className="font-heading font-bold text-lg sm:text-[24px] leading-[30px] sm:leading-[32px] text-[#2E5A66]">
                    How I verify legal accuracy
                  </h3>
                  <p className="font-lato text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                    I revise content for legal accuracy, clarity, tone, and
                    reader accessibility — ensuring it remains both legally
                    reliable and understandable for a non-lawyer audience.
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-badge: AREA I SPECIFICALLY EVALUATE */}
            <div className="pt-2 space-y-4">
              <SectionBadge title="AREA I SPECIFICALLY EVALUATE" />

              {/* 12 Tags Matrix */}
              <div className="flex flex-wrap items-center gap-2.5">
                <GoldLipBadge>Legal Accuracy</GoldLipBadge>
                <GoldLipBadge>
                  Statutory and regulatory compliance
                </GoldLipBadge>
                <GoldLipBadge>Citation and source support</GoldLipBadge>
                <GoldLipBadge>Currentness of law</GoldLipBadge>
                <GoldLipBadge>Legal terminology</GoldLipBadge>
                <GoldLipBadge>Federal versus state-specific rules</GoldLipBadge>
                <GoldLipBadge>Overbroad or misleading claims</GoldLipBadge>
                <GoldLipBadge>Disclaimers</GoldLipBadge>
                <GoldLipBadge>Readability</GoldLipBadge>
                <GoldLipBadge>
                  Suitability for a non-lawyer audience
                </GoldLipBadge>
                <GoldLipBadge>Consistency</GoldLipBadge>
                <GoldLipBadge>Tone</GoldLipBadge>
              </div>
            </div>
          </div>

          {/* Divider Line 17 */}
          <hr className="border-t border-[#5F6B6F]/25" />

          {/* SECTION 5: LEGAL REVIEW STATEMENT */}
          <div className="space-y-6">
            <SectionBadge title="Legal Review Statement" />

            <div className="flex items-start gap-4 sm:gap-5">
              {/* Gradient Quotation Icon */}
              <div className="shrink-0 pt-1">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-[#3E8D69]"
                  viewBox="0 0 42 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 18.2857C0 8.19048 6.72 0 17.28 0V7.61905C11.52 7.61905 8.64 11.4286 8.64 16.7619H17.28V32H0V18.2857ZM24.72 18.2857C24.72 8.19048 31.44 0 42 0V7.61905C36.24 7.61905 33.36 11.4286 33.36 16.7619H42V32H24.72V18.2857Z"
                    fill="url(#quote_gradient)"
                  />
                  <defs>
                    <linearGradient
                      id="quote_gradient"
                      x1="0"
                      y1="0"
                      x2="42"
                      y2="32"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3E8D69" />
                      <stop offset="1" stopColor="#24553F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Statement Text */}
              <p className="font-lato text-[15px] sm:text-[16px] leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                My role is to review legal content for accuracy, clarity, source
                support, and compliance with applicable legal standards. I
                verify legal claims against credible authority, flag overbroad
                or misleading language, and revise content so it remains both
                legally reliable and understandable for a non-lawyer audience.
              </p>
            </div>
          </div>

          {/* SECTION 6: REVIEWER DISCLOSURE CARD (Frame 1000011876) */}
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
