"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { CtaButton } from "@/components/common/CtaButton";
import { openEsaEligibilityChecker } from "@/components/common/evaluationCta";


const AVAILABLE_STATES = [
  { name: "Alabama", slug: "alabama" },
  { name: "Alaska", slug: "alaska" },
  { name: "Arizona", slug: "arizona" },
  { name: "Arkansas", slug: "arkansas" },
  { name: "California", slug: "california" },
  { name: "Colorado", slug: "colorado" },
  { name: "Connecticut", slug: "connecticut" },
  { name: "Delaware", slug: "delaware" },
  { name: "Florida", slug: "florida" },
  { name: "Georgia", slug: "georgia" },
  { name: "Hawaii", slug: "hawaii" },
  { name: "Idaho", slug: "idaho" },
  { name: "Illinois", slug: "illinois" },
  { name: "Indiana", slug: "indiana" },
  { name: "Iowa", slug: "iowa" },
  { name: "Kansas", slug: "kansas" },
  { name: "Kentucky", slug: "kentucky" },
  { name: "Louisiana", slug: "louisiana" },
  { name: "Maine", slug: "maine" },
  { name: "Maryland", slug: "maryland" },
  { name: "Massachusetts", slug: "massachusetts" },
  { name: "Michigan", slug: "michigan" },
  { name: "Minnesota", slug: "minnesota" },
  { name: "Mississippi", slug: "mississippi" },
  { name: "Missouri", slug: "missouri" },
  { name: "Montana", slug: "montana" },
  { name: "Nebraska", slug: "nebraska" },
  { name: "Nevada", slug: "nevada" },
  { name: "New Hampshire", slug: "new-hampshire" },
  { name: "New Jersey", slug: "new-jersey" },
  { name: "New Mexico", slug: "new-mexico" },
  { name: "New York", slug: "new-york" },
  { name: "North Carolina", slug: "north-carolina" },
  { name: "North Dakota", slug: "north-dakota" },
  { name: "Ohio", slug: "ohio" },
  { name: "Oklahoma", slug: "oklahoma" },
  { name: "Oregon", slug: "oregon" },
  { name: "Pennsylvania", slug: "pennsylvania" },
  { name: "Rhode Island", slug: "rhode-island" },
  { name: "South Carolina", slug: "south-carolina" },
  { name: "South Dakota", slug: "south-dakota" },
  { name: "Tennessee", slug: "tennessee" },
  { name: "Texas", slug: "texas" },
  { name: "Utah", slug: "utah" },
  { name: "Vermont", slug: "vermont" },
  { name: "Virginia", slug: "virginia" },
  { name: "Washington", slug: "washington" },
  { name: "Washington, DC", slug: "washington-dc" },
  { name: "West Virginia", slug: "west-virginia" },
  { name: "Wisconsin", slug: "wisconsin" },
  { name: "Wyoming", slug: "wyoming" },
];

const RESOURCE_LINKS = [
  { label: "ESA Laws By State", href: "/esa-laws/" },
  { label: "ESA Guide", href: "/blog/esa-guide/" },
  { label: "PSD Letter", href: "/psd-letter/" },
  { label: "ESA Letter Online", href: "/esa-letter-online/" },
  { label: "ESA by State", href: "/state/" },
];

function ResourcesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Resources"
        className={`flex items-center gap-1.5 whitespace-nowrap body-small text-body-text hover:text-[#1D6E72] transition-colors cursor-pointer ${
          open ? "text-[#1D6E72]" : ""
        }`}
      >
        Resources
        <ChevronDown
          aria-hidden="true"
          className={`w-3.5 h-3.5 xl:w-4 xl:h-4 text-body-text transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-1/2 top-full z-50 mt-4 w-[260px] -translate-x-1/2 rounded-[18px] border border-[#EAE5DC] bg-white py-2 shadow-[0_12px_32px_rgba(26,61,79,0.16)]"
        >
          {RESOURCE_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-7 py-3.5 body-text font-semibold text-body-text hover:bg-background hover:text-[#1D6E72] transition-colors font-sans"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const pathname = usePathname();

  const isPsd = pathname === "/psd-letter/";
  const isDoctors = pathname === "/esa-doctors/" || pathname === "/esa-doctors/";
  const isLegalReviewer =
    pathname?.includes("legal-reviewer") ||
    pathname?.includes("reviewer") ||
    pathname?.includes("contributors");

  return (
    <>
    <header className="sticky top-0 z-50 bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.25)]">
      <div className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] h-20 lg:h-[98px] flex items-center justify-between">

          <Link href="/" className="flex items-center shrink min-w-0">
            <Image quality={90}
              src="/common/myesa-logo.svg"
              alt="My ESA Therapist"
              width={171}
          sizes="171px"
              height={71}
              priority
              loading="eager"
              unoptimized
              className="h-12 sm:h-16 lg:h-[71px] w-auto max-w-full object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-[28px] mx-6 shrink-0 text-body-text">
            <Link
              href="/esa-doctors/"
              className={`body-small text-body-text hover:text-[#1D6E72] transition-colors whitespace-nowrap text-[16px] ${
                isDoctors ? "text-[#1D6E72] font-bold" : ""
              }`}
            >
              Our Therapists
            </Link>
            <Link
              href="/about-us/"
              className="body-small text-body-text hover:text-[#1D6E72] transition-colors whitespace-nowrap text-[16px]"
            >
              About Us
            </Link>
            <ResourcesMenu />
            <Link
              href="/contact-us/"
              className="body-small text-body-text hover:text-[#1D6E72] transition-colors whitespace-nowrap text-[16px]"
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-[8px] justify-end shrink-0">
            {isPsd ? (
              <CtaButton
                href="#pricing"
                className="w-auto px-6 h-[54px] text-[16px]"
              >
                Start Your Consultation
              </CtaButton>
            ) : isDoctors || isLegalReviewer ? (
              <CtaButton
                href={isLegalReviewer ? "/#pricing" : "#therapists"}
                className="w-auto px-6 h-[54px] text-[16px]"
              >
                Start Your ESA Evaluation
              </CtaButton>
            ) : (
              <>
                <CtaButton
                  variant="secondary"
                  className="w-auto px-6 h-[54px] text-[16px]"
                  onClick={() => openEsaEligibilityChecker()}
                >
                  Free ESA Eligibility Checker
                </CtaButton>

                <CtaButton
                  href="#pricing"
                  forceStateModal
                  className="w-auto h-[54px] text-[16px]"
                >
                  Start Your ESA Evaluation
                </CtaButton>
              </>
            )}
          </div>

          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <CtaButton
              variant="accent"
              letter={isPsd ? "psd" : "esa"}
              forceStateModal
              className="!h-11 !min-w-0 w-auto !gap-2 !pl-4 !pr-1 !text-[14px] [&>span:last-child]:!h-8 [&>span:last-child]:!w-8 [&_img]:!h-4 [&_img]:!w-4"
              onClick={() => setMobileOpen(false)}
            >
              Start Evaluation
            </CtaButton>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="h-10 w-8 text-primary flex items-center justify-center shrink-0"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      <div className="hidden lg:block bg-background w-full h-[37px]">
        <div className="max-w-[1278px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-0 h-full flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-[26px] h-[26px] overflow-x-auto no-scrollbar">
            {[
              { name: "California", slug: "california" },
              { name: "Texas", slug: "texas" },
              { name: "New York", slug: "new-york" },
              { name: "Florida", slug: "florida" },
              { name: "Colorado", slug: "colorado" },
              { name: "Illinois", slug: "illinois" },
              { name: "Washington", slug: "washington" },
            ].map((st) => {
              const href = `/esa-letter-${st.slug}/`;
              const isActive =
                pathname === href ||
                pathname === `/esa-${st.slug}` ||
                pathname === `/esa-letter-${st.slug}`;

              return (
                <Link
                  key={st.slug}
                  href={href}
                  className={`font-sans font-medium text-[13px] xl:text-[14px] leading-[26px] text-body-text transition-colors whitespace-nowrap ${
                    isActive ? "font-bold" : ""
                  }`}
                >
                  {st.name}
                </Link>
              );
            })}
          </div>

          <Link
            href="/state/"
            className="font-sans font-medium text-[13px] xl:text-[14px] leading-[26px] text-body-text hover:opacity-85 transition-opacity flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>See All 50 States</span>
            <ArrowRight className="w-4 h-4 text-body-text" strokeWidth={1.5} />
          </Link>
        </div>
      </div>



      {mobileOpen && (
        <div id="mobile-navigation" className="lg:hidden bg-white px-6 py-5 space-y-4 shadow-lg">
          <Link
            href="/esa-doctors/"
            className="block py-2 text-body-text font-medium text-base min-h-[44px] flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            Our Therapists
          </Link>
          <Link
            href="/about-us/"
            className="block py-2 text-body-text font-medium text-base min-h-[44px] flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </Link>
          <button
            type="button"
            className="w-full py-2 text-body-text font-medium text-base min-h-[44px] flex items-center justify-between cursor-pointer"
            aria-expanded={mobileResourcesOpen}
            onClick={() => setMobileResourcesOpen((v) => !v)}
          >
            <span>Resources</span>
            <ChevronDown className={`w-4 h-4 text-body-text transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileResourcesOpen && (
            <div className="ml-3 flex flex-col border-l-2 border-[#F6EBCB] pl-4">
              {RESOURCE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2.5 text-body-text font-bold text-[15px] min-h-[44px] flex items-center"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileResourcesOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
          <Link
            href="/contact-us/"
            className="block py-2 text-body-text font-medium text-base min-h-[44px] flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/state/"
            className="py-2 text-body-text font-medium text-base min-h-[44px] flex items-center justify-between gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <span>See All 50 States</span>
            <ArrowRight className="w-4 h-4 text-body-text shrink-0" strokeWidth={1.5} />
          </Link>

          <div className="pt-2 space-y-2.5">
            {!isPsd && (
              <CtaButton
                variant="secondary"
                className="w-full justify-center h-[48px]"
                onClick={() => {
                  setMobileOpen(false);
                  openEsaEligibilityChecker();
                }}
              >
                Free ESA Eligibility Checker
              </CtaButton>
            )}
            <CtaButton
              href="#pricing"
              centerLabel
              forceStateModal
              letter={isPsd ? "psd" : "esa"}
              className="w-full h-[48px]"
              onClick={() => setMobileOpen(false)}
            >
              {isPsd ? "Start Your Consultation" : "Start Your ESA Evaluation"}
            </CtaButton>
          </div>
        </div>
      )}
    </header>
    </>
  );
}

