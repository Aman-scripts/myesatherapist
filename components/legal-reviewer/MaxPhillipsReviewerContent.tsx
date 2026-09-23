"use client";

import React from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { X, ChevronRight } from "lucide-react";
import { SectionBadge, GoldLipBadge, FocusCard } from "./ReviewerUI";

// Reusable profile credentials, licensure & focus areas
function ProfileDetails() {
  return (
    <>
      {/* Badges: Active Now & 16 Years Experience */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
        {/* Active Now */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-white/20 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[11px]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00BA00] shadow-[0_0_6px_rgba(0,186,0,0.5)] shrink-0" />
          <span className="font-lato font-bold text-[13px] sm:text-[14px] leading-[20px] text-[#2E5A66] tracking-[-0.017em]">
            Active Now
          </span>
        </div>

        {/* 16 Years Experience */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-white/20 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[11px]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00BA00] shadow-[0_0_6px_rgba(0,186,0,0.5)] shrink-0" />
          <span className="font-lato font-bold text-[13px] sm:text-[14px] leading-[20px] text-[#2E5A66] tracking-[-0.017em]">
            16 Years Experience
          </span>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[1px] bg-white/20" />

      {/* Educational Qualifications */}
      <div className="space-y-4">
        <h3 className="font-heading font-bold text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-[#FAF7F2]/40 tracking-[-0.017em]">
          Educational Qualifications
        </h3>
        <ul className="space-y-3 font-lato text-[14px] leading-[22px] text-[#FAF7F2] tracking-[-0.017em]">
          <li className="flex items-center justify-between gap-4">
            <span>Master of Social Work (MSW)</span>
            <span className="font-medium text-[#FAF7F2]/90">2020</span>
          </li>
          <li className="flex items-center justify-between gap-4">
            <span>Bachelor of Science in Justice Systems, Pre-Law</span>
            <span className="font-medium text-[#FAF7F2]/90">2017</span>
          </li>
          <li className="flex items-center justify-between gap-4">
            <span>Licensed Clinical Social Worker (LCSW)</span>
            <span className="font-medium text-[#FAF7F2]/90">Present</span>
          </li>
        </ul>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[1px] bg-white/20" />

      {/* Authorized to Practice */}
      <div className="space-y-3">
        <h3 className="font-heading font-bold text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-[#FAF7F2]/40 tracking-[-0.017em]">
          Authorized to Practice
        </h3>
        <p className="font-lato text-[14px] leading-[22px] text-[#FAF7F2] tracking-[-0.017em]">
          Missouri
        </p>
      </div>
    </>
  );
}

export function MaxPhillipsReviewerContent() {
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
            ========================================================================= */}
        <aside
          className="hidden lg:flex w-[382px] shrink-0 sticky top-[126px] z-20 self-start text-[#FAF7F2] flex-col max-h-[calc(100vh-140px)] rounded-none mb-0 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)",
            borderRadius: "0px",
          }}
        >
          {/* 1. FIXED TOP PROFILE SECTION */}
          <div className="shrink-0 p-6 sm:p-8 lg:px-[31px] lg:pt-[45px] pb-3">
            <div className="flex flex-col items-center lg:items-start space-y-5">
              {/* Avatar with circular white frame */}
              <div className="w-[138px] h-[138px] rounded-full p-[5px] bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0">
                <div className="relative w-[128px] h-[128px] rounded-full overflow-hidden">
                  <Image
            quality={90}
                    src="/author/max-phill.webp"
                    alt="Max Phillips - Trauma Therapist & Licensed Clinical Social Worker"
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
                  Max Phillips
                </h1>

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
                    MSW, LCSW
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. SCROLLABLE BOTTOM CONTENT */}
          <div className="flex-1 overflow-y-auto no-scrollbar p-6 sm:p-8 lg:px-[31px] lg:pt-2 lg:pb-10 space-y-6">
            <ProfileDetails />
          </div>
        </aside>

        {/* ---------------------------------------------------- */}
        {/* MOBILE & TABLET TRIGGER + PORTAL DRAWER (< 1024px)   */}
        {/* ---------------------------------------------------- */}
        {mounted &&
          createPortal(
            <>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Open Reviewer Profile"
                className="lg:hidden fixed left-0 top-[55%] sm:top-[50%] -translate-y-1/2 z-[80] w-[34px] sm:w-[40px] h-[64px] sm:h-[76px] rounded-r-full shadow-[2px_4px_16px_rgba(26,61,79,0.45)] flex items-center justify-center pl-0.5 text-white transition-all hover:w-[44px] active:scale-95 group cursor-pointer"
                style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#FAF7F2] stroke-[2.5] group-hover:translate-x-0.5 group-hover:text-[#E8B92C] transition-all" />
              </button>

              <div
                className={`fixed inset-0 z-[99999] flex transition-all duration-300 ${
                  isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
                }`}
                role="dialog"
                aria-modal="true"
                aria-label="Reviewer Profile Drawer"
              >
                <div
                  onClick={() => setIsOpen(false)}
                  className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div
                  className={`relative w-[320px] sm:w-[360px] md:w-[382px] h-full max-h-screen overflow-hidden z-[100000] text-[#FAF7F2] shadow-2xl flex flex-col justify-start transition-transform duration-300 ease-out transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
                  style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  <div className="shrink-0 px-6 sm:px-8 pt-8 sm:pt-10">
                    <div className="flex items-start justify-between mb-5 sm:mb-6">
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

                      <button
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 hover:border-white text-white/90 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer mt-1"
                        aria-label="Close Profile Drawer"
                      >
                        <X className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#FAF7F2] stroke-[2.2]" />
                      </button>
                    </div>

                    <div className="w-full h-[0.5px] bg-white/30" />
                  </div>

                  <div
                    className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-6 sm:px-8 pt-5 sm:pt-6 pb-10 space-y-6"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    <div className="flex flex-col items-start space-y-4">
                      <div className="w-[128px] h-[128px] rounded-full p-[5px] bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0">
                        <div className="relative w-[118px] h-[118px] rounded-full overflow-hidden">
                          <Image
            quality={90}
                            src="/author/max-phill.webp"
                            alt="Max Phillips - Trauma Therapist & Licensed Clinical Social Worker"
                            fill
                            className="object-cover object-top"
                            sizes="118px"
                          />
                        </div>
                      </div>

                      <div className="text-left space-y-1.5">
                        <h2 className="font-heading font-bold text-2xl sm:text-3xl leading-[1.15] text-[#FAF7F2] tracking-[-0.00015em]">
                          Max Phillips
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
                            MSW, LCSW
                          </span>
                        </div>
                      </div>
                    </div>

                    <ProfileDetails />
                  </div>
                </div>
              </div>
            </>,
            document.body
          )}

        {/* =========================================================================
            RIGHT COLUMN (Main Reviewer Content)
            ========================================================================= */}
        <div className="flex-1 min-w-0 max-w-[1055px] px-4 sm:px-8 lg:px-[74px] pt-8 lg:pt-[50px] pb-0 space-y-10 lg:space-y-[48px]">
          {/* SECTION 1: ABOUT */}
          <div className="space-y-6 lg:space-y-7">
            <SectionBadge title="About" />

            <h2 className="font-heading font-bold text-3xl sm:text-[38px] lg:text-[32px] xl:text-[36px] leading-[1.22] text-[#2E5A66] tracking-[-0.00015em]">
              Where Clinical Knowledge Meets the Realities of Mental Health
            </h2>

            <p className="font-sans font-semibold text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#5F6B6F]">
              Max Phillips, MSW, LCSW, is a trauma therapist and licensed
              clinical social worker based in Missouri who contributes
              clinical insight to mental health content at My ESA Therapist.
              With six years of experience as a therapist and ten years as a
              social worker, he focuses on helping individuals heal from
              childhood trauma and build a life worth living. His areas of
              expertise include PTSD, BPD, anxiety, ADHD, autism, OCD, DID,
              sexual trauma, suicidal ideation, and self-harming behaviors.
            </p>

            <p className="font-sans font-semibold text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#5F6B6F]">
              His therapeutic approaches include EMDR, DBT, psychodynamic
              therapy, attachment theory, feminist theory, anger management,
              and motivational interviewing. Max also brings his clinical
              perspective to educational resources covering autism and
              working with gender-diverse clients.
            </p>

            {/* 3 Focus Cards */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2">
              <FocusCard title="Trauma Therapy" subtitle="PTSD & Healing" />
              <FocusCard
                title="Clinical Social Work"
                subtitle="Diagnosis & Treatment"
              />
              <FocusCard
                title="Therapeutic Approaches"
                subtitle="EMDR & DBT"
              />
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-[#5F6B6F]/25" />

          {/* SECTION 2: EDUCATION & ACADEMIC BACKGROUND */}
          <div className="space-y-8 lg:space-y-10">
            <SectionBadge title="Education & Academic Background" />

            {/* Degree 1: MSW */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-xl sm:text-[24px] leading-[32px] text-[#2E5A66]">
                Master of Social Work (MSW)
              </h3>
              <p className="font-lato text-[15px] sm:text-[16px] leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                University of Southern California, 2020
              </p>
            </div>

            {/* Degree 2: BS Justice Systems */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-xl sm:text-[24px] leading-[32px] text-[#2E5A66]">
                Bachelor of Science in Justice Systems, Pre-Law
              </h3>
              <p className="font-lato text-[15px] sm:text-[16px] leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                Truman State University, 2017
              </p>
            </div>

            {/* Credential: LCSW */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-xl sm:text-[24px] leading-[32px] text-[#2E5A66]">
                Licensed Clinical Social Worker (LCSW)
              </h3>
              <p className="font-lato text-[15px] sm:text-[16px] leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                Missouri, License #2023001049
              </p>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-[#5F6B6F]/25" />

          {/* SECTION 3: FOCUS AREAS */}
          <div className="space-y-6">
            <SectionBadge title="Focus Areas" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2.5 gap-x-8 lg:gap-x-16 font-lato text-[15px] sm:text-[16px] leading-[30px] sm:leading-[32px] text-[#5F6B6F] tracking-[-0.017em]">
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0" />
                  <span>Trauma and PTSD</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0" />
                  <span>Anxiety and OCD</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0" />
                  <span>ADHD and Autism</span>
                </li>
              </ul>

              <ul className="space-y-2.5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0" />
                  <span>BPD and Emotional Regulation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0" />
                  <span>Suicidal Ideation and Self-Harm</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0" />
                  <span>Sexual Trauma and Identity</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-[#5F6B6F]/25" />

          {/* SECTION 4: CONTENT REVIEW RESPONSIBILITIES */}
          <div className="space-y-9">
            <SectionBadge title="Content Review Responsibilities" />

            <div className="space-y-7 sm:space-y-8">
              {/* Step 01 */}
              <div className="flex items-start gap-4 sm:gap-6">
                <span aria-hidden="true" data-num="01" className="font-heading font-bold text-3xl sm:text-[44px] leading-[1.15] text-[#5F6B6F]/45 shrink-0 w-10 sm:w-14 before:content-[attr(data-num)]" />
                <div className="space-y-2 flex-1">
                  <h3 className="font-heading font-bold text-lg sm:text-[24px] leading-[30px] sm:leading-[32px] text-[#2E5A66]">
                    Clinical Accuracy
                  </h3>
                  <p className="font-lato text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                    Reviews mental health content for clinical accuracy,
                    ensuring information reflects established therapeutic
                    principles, terminology, and evidence-informed practices.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="flex items-start gap-4 sm:gap-6">
                <span aria-hidden="true" data-num="02" className="font-heading font-bold text-3xl sm:text-[44px] leading-[1.15] text-[#5F6B6F]/45 shrink-0 w-10 sm:w-14 before:content-[attr(data-num)]" />
                <div className="space-y-2 flex-1">
                  <h3 className="font-heading font-bold text-lg sm:text-[24px] leading-[30px] sm:leading-[32px] text-[#2E5A66]">
                    Trauma-Informed Review
                  </h3>
                  <p className="font-lato text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                    Evaluates content involving trauma, PTSD, anxiety, and
                    related concerns through a trauma-informed lens that
                    prioritizes accuracy and appropriate context.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="flex items-start gap-4 sm:gap-6">
                <span aria-hidden="true" data-num="03" className="font-heading font-bold text-3xl sm:text-[44px] leading-[1.15] text-[#5F6B6F]/45 shrink-0 w-10 sm:w-14 before:content-[attr(data-num)]" />
                <div className="space-y-2 flex-1">
                  <h3 className="font-heading font-bold text-lg sm:text-[24px] leading-[30px] sm:leading-[32px] text-[#2E5A66]">
                    Mental Health Clarity
                  </h3>
                  <p className="font-lato text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                    Helps ensure complex mental health topics are presented
                    clearly, responsibly, and in language that is accessible
                    to a general audience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-[#5F6B6F]/25" />

          {/* SECTION 5: CLINICAL REVIEW STATEMENT */}
          <div className="space-y-6">
            <SectionBadge title="Clinical Review Statement" />

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
                    fill="url(#quote_gradient_max)"
                  />
                  <defs>
                    <linearGradient
                      id="quote_gradient_max"
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

              <p className="font-lato text-[15px] sm:text-[16px] leading-[26px] text-[#5F6B6F] tracking-[-0.017em]">
                My role is to review mental health content for clinical
                accuracy, clarity, appropriate terminology, and responsible
                presentation. I evaluate mental health information through my
                clinical experience and trauma-informed perspective, helping
                ensure content is accurate, accessible, and appropriate for a
                general audience.
              </p>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-[#5F6B6F]/25" />

          {/* SECTION 6: REVIEWER DISCLOSURE CARD */}
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
                  establish a therapist-client relationship with website
                  visitors or constitute individual mental health treatment or
                  professional advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
