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
  { name: "South Carolina", slug: "south-carolina" },
  { name: "South Dakota", slug: "south-dakota" },
  { name: "Texas", slug: "texas" },
  { name: "Utah", slug: "utah" },
  { name: "Virginia", slug: "virginia" },
  { name: "Washington", slug: "washington" },
  { name: "West Virginia", slug: "west-virginia" },
  { name: "Wisconsin", slug: "wisconsin" },
  { name: "Wyoming", slug: "wyoming" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
              src="/common/myesa-logo.svg"
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
            <Link
              href="/about-us"
              className="text-[#1E3E47] font-medium text-[13px] xl:text-[15px] hover:text-[#1D6E72] transition-colors whitespace-nowrap"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="text-[#1E3E47] font-medium text-[13px] xl:text-[15px] hover:text-[#1D6E72] transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              Resources <ChevronDown className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#1E3E47]" />
            </Link>
            <Link
              href="/contact-us"
              className="text-[#1E3E47] font-medium text-[13px] xl:text-[15px] hover:text-[#1D6E72] transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
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
                    src="/common/send-icon.svg"
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
                      src="/common/send-icon.svg"
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

          {/* See All 50 States Direct Link to /states */}
          <Link
            href="/states"
            className="text-[#5F6B6F] hover:text-[#1E3E47] font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <span>See all 50 States</span>
            <ArrowRight className="w-4 h-4 text-[#1E3E47]" />
          </Link>
        </div>
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
          <Link
            href="/about-us"
            className="block py-2 text-[#1E3E47] font-medium text-base min-h-[44px] flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="block py-2 text-[#1E3E47] font-medium text-base min-h-[44px] flex items-center justify-between"
            onClick={() => setMobileOpen(false)}
          >
            <span>Resources</span>
            <ChevronDown className="w-4 h-4 text-[#1E3E47]" />
          </Link>
          <Link
            href="/contact-us"
            className="block py-2 text-[#1E3E47] font-medium text-base min-h-[44px] flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>

          {/* Mobile All Available States section */}
          <div className="border-t border-[#EAE5DC] pt-4">
            <Link
              href="/states"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-between py-2 text-[#1E3E47] font-semibold text-base"
            >
              <span>See all 50 States</span>
              <ArrowRight className="w-4 h-4 text-[#1E3E47]" />
            </Link>
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
                  src="/common/send-icon.svg"
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

