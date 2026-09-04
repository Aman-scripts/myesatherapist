"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const FOOTER_GRADIENT = "linear-gradient(180deg, #082935 0%, #041821 50%, #000000 100%)";

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Meet our Therapists", href: "#therapists" },
  { label: "HIPAA Compliance", href: "#compliance" },
  { label: "Video Testimonials", href: "#testimonials" },
  { label: "Customer Reviews", href: "#reviews" },
];

const quickLinks = [
  { label: "ESA Letter Online", href: "#how-it-works" },
  { label: "ESA Letter for Housing", href: "#housing" },
  { label: "ESA Letter Renewal", href: "#renewal" },
  { label: "ESA Letter by State", href: "#states" },
  { label: "ESA Letter Cost", href: "/pricing" },
  { label: "ESA FAQs", href: "/faq" },
  { label: "ESA Resources", href: "/blogs" },
];

function HipaaBadge() {
  return (
    <div className="w-[155px] h-[67px] bg-white rounded-xl border-[3.5px] border-[#E8B92C] flex items-center justify-center p-2 shadow-md">
      <div className="relative w-full h-full">
        <Image
          src="/common/hippa_log.png"
          alt="HIPAA Compliant"
          fill
          unoptimized
          priority
          className="object-contain"
          sizes="155px"
        />
      </div>
    </div>
  );
}

export function Footer({ bgColor = "bg-[#FAF7F2]" }: { bgColor?: string }) {
  return (
    <footer className={`w-full ${bgColor} pt-10 sm:pt-14 lg:pt-16`}>
      {/* 100% Full-Width Dark Gradient Container with Rounded Top Corners */}
      <div
        className="w-full rounded-t-[40px] sm:rounded-t-[60px] pt-16 pb-10 text-white relative overflow-hidden"
        style={{ backgroundImage: FOOTER_GRADIENT }}
      >
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14">
          {/* Top Centered Section */}
          <div className="flex flex-col items-center text-center max-w-[700px] mx-auto space-y-5">
            {/* Logo Card with Gold Border (Frame 1000011910) */}
            <div className="w-[240px] h-[90px] bg-white rounded-2xl border-[3.5px] border-[#E8B92C] p-3 flex items-center justify-center shadow-xl">
              <div className="relative w-full h-full">
                <Image
                  src="/common/myesa-logo.svg"
                  alt="My ESA Therapist"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* Heading with Gold Highlight */}
            <h3 className="font-heading text-3xl sm:text-[38px] font-bold text-white leading-tight">
              My ESA <span className="text-[#E8B92C]">Therapist</span>
            </h3>

            {/* Subtitle */}
            <p className="text-[#FAF7F2] text-sm sm:text-[16px] font-semibold leading-[26px] sm:leading-[28px] font-sans max-w-[640px] opacity-90">
              A 100% legal platform providing emotional support animal evaluations to those who suffer from any mental or emotional disability — trusted, professional &amp; confidential.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 h-[46px] rounded-full bg-[#E8B92C] text-[#04161C] font-[family-name:var(--font-lato)] font-bold text-[16px] shadow-md hover:brightness-105 transition-all"
              >
                Apply your ESA Letter
              </a>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 h-[46px] rounded-full border-[1.5px] border-[#FAF7F2] text-[#FAF7F2] font-[family-name:var(--font-lato)] font-bold text-[16px] hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Full-width Divider Line */}
          <div className="w-full border-t border-white/15 my-14" />

          {/* 4 Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Column 1: ABOUT US */}
            <div className="space-y-4">
              <h4 className="text-[#E8B92C] font-sans font-semibold text-sm tracking-wider uppercase">
                ABOUT US
              </h4>
              <p className="text-[#FAF7F2]/80 text-xs font-semibold leading-relaxed font-sans pr-2">
                We connect you with licensed therapists across all 50 US states to obtain legitimate ESA letters quickly, securely, and affordably.
              </p>
              <div className="pt-2">
                <HipaaBadge />
              </div>
            </div>

            {/* Column 2: COMPANY */}
            <div className="space-y-4">
              <h4 className="text-[#E8B92C] font-sans font-semibold text-sm tracking-wider uppercase">
                COMPANY
              </h4>
              <ul className="space-y-3 font-sans">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-xs font-semibold text-[#FAF7F2] hover:text-[#E8B92C] transition-colors"
                    >
                      <span className="text-[#FAF7F2]/60 group-hover:text-[#E8B92C] text-xs transition-colors">
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
              <h4 className="text-[#E8B92C] font-sans font-semibold text-sm tracking-wider uppercase">
                QUICK LINKS
              </h4>
              <ul className="space-y-3 font-sans">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-xs font-semibold text-[#FAF7F2] hover:text-[#E8B92C] transition-colors"
                    >
                      <span className="text-[#FAF7F2]/60 group-hover:text-[#E8B92C] text-xs transition-colors">
                        ›
                      </span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: GET IN TOUCH */}
            <div className="space-y-4">
              <h4 className="text-[#E8B92C] font-sans font-semibold text-sm tracking-wider uppercase">
                GET IN TOUCH
              </h4>
              <div className="space-y-4 font-sans">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8B92C]/20 border border-[#E8B92C]/40 flex items-center justify-center shrink-0">
                    <Image
                      src="/common/footer-phone-icon.svg"
                      alt=""
                      width={14}
                      height={14}
                      className="object-contain"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="text-xs font-semibold text-[#FAF7F2]">
                      +1 (888) 412-4041
                    </div>
                    <div className="text-[10px] font-bold text-[#FAF7F2]/60 mt-0.5">
                      24/7 Online Support
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8B92C]/20 border border-[#E8B92C]/40 flex items-center justify-center shrink-0">
                    <Image
                      src="/common/footer-email-icon.svg"
                      alt=""
                      width={14}
                      height={14}
                      className="object-contain"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="text-xs font-semibold text-[#FAF7F2]">
                      info@myesatherapist.com
                    </div>
                    <div className="text-[10px] font-bold text-[#FAF7F2]/60 mt-0.5">
                      Email us anytime
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8B92C]/20 border border-[#E8B92C]/40 flex items-center justify-center shrink-0">
                    <Image
                      src="/common/footer-clock-icon.svg"
                      alt=""
                      width={14}
                      height={14}
                      className="object-contain"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="text-xs font-semibold text-[#FAF7F2]">
                      Mon - Sat: 9AM - 6PM
                    </div>
                    <div className="text-[10px] font-bold text-[#FAF7F2]/60 mt-0.5">
                      Sunday: Closed
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8B92C]/20 border border-[#E8B92C]/40 flex items-center justify-center shrink-0">
                    <Image
                      src="/common/footer-location-icon.svg"
                      alt=""
                      width={14}
                      height={14}
                      className="object-contain"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="text-xs font-semibold text-[#FAF7F2]">
                      Serving All 50 US States
                    </div>
                    <div className="text-[10px] font-bold text-[#FAF7F2]/60 mt-0.5">
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#FAF7F2]">
            <p className="font-semibold">
              &copy; 2026 <span className="text-[#E8B92C]">myesatherapist.com</span> — All Rights Reserved
            </p>
            <div className="flex items-center gap-8 font-semibold">
              <Link href="#privacy" className="hover:text-[#E8B92C] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#refund" className="hover:text-[#E8B92C] transition-colors">
                Refund Policy
              </Link>
              <Link href="#terms" className="hover:text-[#E8B92C] transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
