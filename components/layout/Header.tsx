"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

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
  { name: "Illinois", slug: "illinois" },
  { name: "New York", slug: "new-york" },
  { name: "Texas", slug: "texas" },
  { name: "Washington", slug: "washington" },
  { name: "Wisconsin", slug: "wisconsin" },
  { name: "Wyoming", slug: "wyoming" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [allStatesOpen, setAllStatesOpen] = useState(false);
  const pathname = usePathname();

  // Check if current route is PSD Letter page
  const isPsd = pathname === "/psd-letter";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#EAE5DC] shadow-xs">
      {/* Main Navigation Bar */}
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-8">
        <div className="flex items-center justify-between h-20 lg:h-[84px]">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/myesa-logo.svg"
              alt="My ESA Therapist"
              width={171}
              height={71}
              priority
              unoptimized
              className="h-9 lg:h-10 xl:h-12 w-auto shrink-0"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          {/* Desktop Nav (Exact menu items matching Screenshot 1 & Screenshot 2) */}
          <nav className="hidden lg:flex items-center gap-3 lg:gap-4 xl:gap-9 font-sans shrink-0">
            <a
              href="#therapists"
              className="text-[#1E3E47] font-medium text-[13px] xl:text-[15px] hover:text-[#1D6E72] transition-colors whitespace-nowrap"
            >
              Our Therapists
            </a>
            <a
              href="#about"
              className="text-[#1E3E47] font-medium text-[13px] xl:text-[15px] hover:text-[#1D6E72] transition-colors whitespace-nowrap"
            >
              About Us
            </a>
            <a
              href="#resources"
              className="text-[#1E3E47] font-medium text-[13px] xl:text-[15px] hover:text-[#1D6E72] transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              Resources <ChevronDown className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#1E3E47]" />
            </a>
            <a
              href="#contact"
              className="text-[#1E3E47] font-medium text-[13px] xl:text-[15px] hover:text-[#1D6E72] transition-colors whitespace-nowrap"
            >
              Contact Us
            </a>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2 lg:gap-2.5 xl:gap-3 shrink-0">
            {isPsd ? (
              /* Screenshot 2 (PSD Letter Page): Single "Start Your Consultation" Button */
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 lg:gap-3 pl-4 lg:pl-5 xl:pl-6 pr-1.5 lg:pr-2 py-1.5 lg:py-2 rounded-full text-white font-bold text-[13px] xl:text-[15px] shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap"
                style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              >
                <span>Start Your Consultation</span>
                <span className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                  <Image
                    src="/send-icon.svg"
                    alt=""
                    width={19}
                    height={21}
                    className="w-[16px] h-[18px] xl:w-[19px] xl:h-[21px]"
                  />
                </span>
              </a>
            ) : (
              /* Screenshot 1 (Homepage): 2 Buttons ("Free ESA Eligibility Checker" + "Get Started") */
              <>
                <a
                  href="#eligibility"
                  className="px-3 lg:px-3.5 xl:px-5 py-2 lg:py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#F5EFE6] text-[#1E3E47] font-bold text-[12px] lg:text-[13px] xl:text-[14.5px] border border-[#EAE5DC] transition-colors whitespace-nowrap"
                >
                  Free ESA Eligibility Checker
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 lg:gap-2.5 xl:gap-3 pl-3.5 lg:pl-4 xl:pl-5 pr-1.5 lg:pr-2 py-1.5 lg:py-2 rounded-full text-white font-bold text-[13px] xl:text-[15px] shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  <span>Get Started</span>
                  <span className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                    <Image
                      src="/send-icon.svg"
                      alt=""
                      width={19}
                      height={21}
                      className="w-[16px] h-[18px] xl:w-[19px] xl:h-[21px]"
                    />
                  </span>
                </a>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1E3E47] min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* States Bar */}
      <div className="hidden lg:block bg-[#FAF7F2] relative">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-8 flex items-center justify-between py-2.5 text-[13px] xl:text-[14px] font-medium text-[#5F6B6F]">
          <div className="flex items-center gap-6 xl:gap-8 overflow-x-auto no-scrollbar">
            {[
              { name: "California", slug: "california" },
              { name: "Texas", slug: "texas" },
              { name: "New York", slug: "new-york" },
              { name: "Florida", slug: "florida" },
              { name: "Colorado", slug: "colorado" },
              { name: "Illinois", slug: "illinois" },
              { name: "Washington", slug: "washington" },
            ].map((st) => {
              const href = `/${st.slug}`;
              const isActive =
                pathname === href ||
                pathname === `/esa-${st.slug}` ||
                pathname === `/esa-letter-${st.slug}`;

              return (
                <Link
                  key={st.slug}
                  href={href}
                  className={`hover:text-[#1E3E47] transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-[#1E3E47] font-bold underline underline-offset-4 decoration-[#E8B92C]"
                      : ""
                  }`}
                >
                  {st.name}
                </Link>
              );
            })}
          </div>

          {/* See All 50 States Button */}
          <button
            onClick={() => setAllStatesOpen(!allStatesOpen)}
            className="text-[#5F6B6F] hover:text-[#1E3E47] font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer border-none bg-transparent"
          >
            <span>See all 50 States</span>
            <ChevronDown className={`w-4 h-4 text-[#1E3E47] transition-transform duration-200 ${allStatesOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Dropdown for All 50 States (5 states per row grid) */}
        {allStatesOpen && (
          <div className="absolute top-full left-0 right-0 w-full bg-white border-b border-[#EAE5DC] shadow-[0_20px_50px_rgba(26,61,79,0.15)] z-50 animate-in fade-in duration-200">
            <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-8 py-6">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#F0EBE1]">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#1E3E47]">
                    Select Your State (Available States)
                  </h3>
                  <p className="font-sans text-xs text-[#5F6B6F]">
                    Connect with a licensed therapist in your state for a legitimate ESA letter evaluation.
                  </p>
                </div>
                <button
                  onClick={() => setAllStatesOpen(false)}
                  className="p-1.5 rounded-full hover:bg-[#FAF7F2] text-[#5F6B6F] hover:text-[#1E3E47] transition-colors cursor-pointer"
                  aria-label="Close states menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Grid: 5 columns on desktop -> 5 states in each row! */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
                {AVAILABLE_STATES.map((st) => {
                  const href = `/${st.slug}`;
                  const isCurrentActive =
                    pathname === href ||
                    pathname === `/esa-${st.slug}` ||
                    pathname === `/esa-letter-${st.slug}`;

                  return (
                    <Link
                      key={st.slug}
                      href={href}
                      onClick={() => setAllStatesOpen(false)}
                      className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs sm:text-[13px] font-semibold transition-all duration-150 ${
                        isCurrentActive
                          ? "bg-[#1E3E47] text-white border-[#1E3E47] shadow-xs"
                          : "bg-[#FAF7F2] text-[#1E3E47] border-[#EAE5DC] hover:border-[#184F59]/40 hover:bg-[#E7F5EE] hover:text-[#184F59]"
                      }`}
                    >
                      <span>{st.name}</span>
                      <ArrowRight
                        className={`w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0 stroke-[2.5] transition-transform group-hover:translate-x-0.5 ${
                          isCurrentActive ? "text-[#E8B92C]" : "text-[#5F6B6F] group-hover:text-[#184F59]"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white px-6 py-5 space-y-4 shadow-lg">
          <a
            href="#therapists"
            className="block py-2 text-[#1E3E47] font-medium text-base min-h-[44px] flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            Our Therapists
          </a>
          <a
            href="#about"
            className="block py-2 text-[#1E3E47] font-medium text-base min-h-[44px] flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </a>
          <a
            href="#resources"
            className="block py-2 text-[#1E3E47] font-medium text-base min-h-[44px] flex items-center justify-between"
            onClick={() => setMobileOpen(false)}
          >
            <span>Resources</span>
            <ChevronDown className="w-4 h-4 text-[#1E3E47]" />
          </a>
          <a
            href="#contact"
            className="block py-2 text-[#1E3E47] font-medium text-base min-h-[44px] flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </a>

          {/* Mobile All Available States section */}
          <div className="border-t border-[#EAE5DC] pt-4">
            <button
              onClick={() => setAllStatesOpen(!allStatesOpen)}
              className="w-full flex items-center justify-between py-2 text-[#1E3E47] font-semibold text-base"
            >
              <span>See all 50 States</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${allStatesOpen ? "rotate-180" : ""}`} />
            </button>
            {allStatesOpen && (
              <div className="grid grid-cols-2 gap-2 pt-3 max-h-60 overflow-y-auto">
                {AVAILABLE_STATES.map((st) => (
                  <Link
                    key={st.slug}
                    href={`/${st.slug}`}
                    onClick={() => {
                      setAllStatesOpen(false);
                      setMobileOpen(false);
                    }}
                    className="flex items-center justify-between px-3 py-2 bg-[#FAF7F2] rounded-lg text-xs font-semibold text-[#1E3E47] border border-[#EAE5DC]"
                  >
                    <span>{st.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#5F6B6F] stroke-[2.5]" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="pt-2 space-y-2.5">
            {!isPsd && (
              <a
                href="#eligibility"
                className="block text-center py-2.5 rounded-full bg-[#FAF7F2] text-[#1E3E47] font-bold text-sm border border-[#EAE5DC]"
                onClick={() => setMobileOpen(false)}
              >
                Free ESA Eligibility Checker
              </a>
            )}
            <a
              href="#pricing"
              className="flex items-center justify-between pl-6 pr-2 py-2.5 rounded-full text-white font-bold text-base shadow-sm"
              style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              onClick={() => setMobileOpen(false)}
            >
              <span>{isPsd ? "Start Your Consultation" : "Get Started"}</span>
              <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                <Image
                  src="/send-icon.svg"
                  alt=""
                  width={19}
                  height={21}
                  className="w-[19px] h-[21px]"
                />
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

