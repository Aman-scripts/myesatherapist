"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/common/CtaButton";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

const FOOTER_GRADIENT = "linear-gradient(180deg, #082935 0%, #041821 50%, #000000 100%)";

const companyLinks = [
  { label: "About Us", href: "/about-us/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Meet our Therapists", href: "/esa-doctors/" },
  { label: "HIPAA Compliance", href: "/hipaa-compliance/" },
  { label: "Video Testimonials", href: "/video-testimonials/" },
  { label: "Customer Reviews", href: "/reviews/" },
];

const quickLinks = [
  { label: "ESA Letter Online", href: "#how-it-works" },
  { label: "ESA Letter for Housing", href: "#housing" },
  { label: "ESA Letter Renewal", href: "#renewal" },
  { label: "ESA Letter by State", href: "#states" },
  { label: "ESA Letter Cost", href: "/pricing/" },
  { label: "ESA FAQs", href: "/frequently-asked-questions/" },
  { label: "ESA Resources", href: "/blog/" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Service", href: "/terms-of-use/" },
  { label: "Medical Disclaimer", href: "/disclaimer/" },
  { label: "HIPAA Notice of Privacy Practices", href: "/hipaa-compliance/" },
  { label: "Refund Policy", href: "/refund-policy/" },
  { label: "Consent for Telehealth", href: "/consent-for-telehealth/" },
  { label: "Editorial Policy", href: "/editorial-policy/" },
  { label: "Accessibility Statement", href: "/accessibility-statement/" },
];

function HipaaBadge() {
  return (
    <div className="w-[155px] h-[67px] bg-white rounded-xl border-[3.5px] border-accent flex items-center justify-center p-2 shadow-md">
      <div className="relative w-full h-full">
        <Image
            quality={90}
          src="/common/hippa_log.webp"
          alt="HIPAA Compliant"
          fill
          className="object-contain"
          sizes="155px"
        />
      </div>
    </div>
  );
}

function FooterContent({ isDesktop = false }: { isDesktop?: boolean }) {
  return (
    <>
      {/* Top Centered Section */}
      <div className="flex flex-col items-center text-center max-w-[700px] mx-auto space-y-5">
        {/* Logo Card with Gold Border (Frame 1000011910) */}
        <div className="w-[240px] h-[90px] bg-white rounded-2xl border-[3.5px] border-accent p-3 flex items-center justify-center shadow-xl">
          <div className="relative w-full h-full">
            <Image
              quality={90}
              src="/common/myesa-logo.svg"
              alt="My ESA Therapist"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Heading with Gold Highlight */}
        <h2 className="heading-h2 text-background capitalize text-center">
          My ESA <span className="text-accent">Therapist</span>
        </h2>

        {/* Subtitle */}
        <p className="text-background body-large text-center max-w-[734px]">
          A 100% legal platform providing emotional support animal evaluations to those who suffer from any mental or emotional disability — trusted, professional &amp; confidential.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <CtaButton
            href="#how-it-works"
            variant="accent"
            className="w-[253px] h-[48px]"
          >
            Apply Your ESA Letter
          </CtaButton>

          <Link
            href="/contact-us/"
            className="inline-flex items-center justify-center w-[151px] h-[50px] px-8 rounded-[67px] border border-background [filter:drop-shadow(0px_1px_4px_var(--color-accent))] hover:bg-white/10 transition-colors"
          >
            <span className="font-manrope font-semibold text-[16px] leading-[26px] text-background whitespace-nowrap">
              Contact Us
            </span>
          </Link>
        </div>
      </div>

      {/* Full-width Divider Line */}
      <div className="w-full border-t border-white/15 my-14" />

      {/* 5 Navigation Columns */}
      <div className={isDesktop ? "grid grid-cols-5 gap-8" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"}>
        {/* Column 1: ABOUT US */}
        <div className="space-y-4">
          <div className="text-accent body-large tracking-wider uppercase">
            ABOUT US
          </div>
          <p className="text-background body-text pr-2">
            We connect you with licensed therapists across all 50 US states to obtain legitimate ESA letters quickly, securely, and affordably.
          </p>
          <div className="pt-2">
            <HipaaBadge />
          </div>
        </div>

        {/* Column 2: COMPANY */}
        <div className="space-y-4">
          <div className="text-accent body-large tracking-wider uppercase">
            COMPANY
          </div>
          <ul className="space-y-3 font-manrope">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 body-text text-background hover:text-accent transition-colors"
                >
                  <span className="text-background/60 group-hover:text-accent text-xs transition-colors">
                    ›
                  </span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: QUICK LINKS */}
        <div className="space-y-4">
          <div className="text-accent body-large tracking-wider uppercase">
            QUICK LINKS
          </div>
          <ul className="space-y-3 font-manrope">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 body-text text-background hover:text-accent transition-colors"
                >
                  <span className="text-background/60 group-hover:text-accent text-xs transition-colors">
                    ›
                  </span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: LEGAL */}
        <div className="space-y-4">
          <div className="text-accent body-large tracking-wider uppercase">
            LEGAL
          </div>
          <ul className="space-y-3 font-manrope">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 body-text text-background hover:text-accent transition-colors"
                >
                  <span className="text-background/60 group-hover:text-accent text-xs transition-colors">
                    ›
                  </span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: GET IN TOUCH */}
        <div className="space-y-4">
          <div className="text-accent body-large tracking-wider uppercase">
            GET IN TOUCH
          </div>
          <div className="space-y-4 font-manrope">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
                <Image
                  quality={90}
                  src="/common/footer-phone-icon.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="text-left leading-tight">
                <div className="body-text text-background">
                  +1 (888) 412-4041
                </div>
                <div className="body-small text-background/75">
                  24/7 Online Support
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
                <Image
                  quality={90}
                  src="/common/footer-email-icon.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="text-left leading-tight">
                <div className="body-text text-background">
                  info@myesatherapist.com
                </div>
                <div className="body-small text-background/75">
                  Email us anytime
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
                <Image
                  quality={90}
                  src="/common/footer-clock-icon.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="text-left leading-tight">
                <div className="body-text text-background">
                  Mon - Sat: 9AM - 6PM
                </div>
                <div className="body-small text-background/75">
                  Sunday: Closed
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
                <Image
                  quality={90}
                  src="/common/footer-location-icon.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="text-left leading-tight">
                <div className="body-text text-background">
                  Serving All 50 US States
                </div>
                <div className="body-small text-background/75">
                  Nationwide Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider Line */}
      <div className="w-full border-t border-white/10 mt-14 mb-6" />

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 body-small text-background">
        <p className="body-small text-background">
          &copy; 2026 <span className="text-accent">myesatherapist.com</span> — All Rights Reserved
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/privacy-policy/" className="body-small text-background hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          <Link href="/refund-policy/" className="body-small text-background hover:text-accent transition-colors">
            Refund Policy
          </Link>
          <Link href="/terms-of-use/" className="body-small text-background hover:text-accent transition-colors">
            Terms of Use
          </Link>
          <Link href="/accessibility-statement/" className="body-small text-background hover:text-accent transition-colors">
            Accessibility Statement
          </Link>
        </div>
      </div>
    </>
  );
}

export function Footer({ bgColor = "bg-background" }: { bgColor?: string }) {
  return (
    <footer className={`w-full ${bgColor} pt-4 sm:pt-6 lg:pt-8`}>
      {/* ---------------------------------------------------- */}
      {/* 1. DESKTOP FOOTER (>= 1024px)                        */}
      {/* Scaled proportionally from 1440px to 1024px          */}
      {/* ---------------------------------------------------- */}
      <DesktopScaleWrapper
        designWidth={1440}
        designHeight={980}
        className="hidden lg:block relative"
        fullBleedBackground={
          <div
            className="w-full h-full rounded-t-[60px]"
            style={{ backgroundImage: FOOTER_GRADIENT }}
          />
        }
      >
        <div className="relative w-[1440px] pt-16 pb-10 text-white">
          <div className="max-w-[1380px] mx-auto px-14">
            <FooterContent isDesktop />
          </div>
        </div>
      </DesktopScaleWrapper>

      {/* ---------------------------------------------------- */}
      {/* 2. MOBILE & TABLET FOOTER (< 1024px)                 */}
      {/* ---------------------------------------------------- */}
      <div
        className="lg:hidden w-full rounded-t-[40px] pt-16 pb-10 text-white relative overflow-hidden"
        style={{ backgroundImage: FOOTER_GRADIENT }}
      >
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10">
          <FooterContent isDesktop={false} />
        </div>
      </div>
    </footer>
  );
}
