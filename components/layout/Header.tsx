"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

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

      {/* States Bar (Bottom row matching Screenshot 1 & Screenshot 2) */}
      <div className="hidden lg:block bg-[#FAF7F2]">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-8 flex items-center justify-between py-2.5 text-[13px] xl:text-[14px] font-medium text-[#5F6B6F]">
          <div className="flex items-center gap-4 xl:gap-7">
            {["California", "Texas", "New York", "Florida", "Colorado", "Illinois", "Washington", "Wisconsin", "Wyoming"].map((state) => {
              const href = state === "California" ? "/california" : state === "Texas" ? "/texas" : state === "Washington" ? "/washington" : state === "Wisconsin" ? "/wisconsin" : state === "Wyoming" ? "/wyoming" : "#";
              const isActive = (pathname === "/california" && state === "California") || (pathname === "/texas" && state === "Texas") || (pathname === "/washington" && state === "Washington") || (pathname === "/wisconsin" && state === "Wisconsin") || (pathname === "/wyoming" && state === "Wyoming");
              return (
                <Link
                  key={state}
                  href={href}
                  className={`hover:text-[#1E3E47] transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-[#1E3E47] font-bold underline underline-offset-4 decoration-[#E8B92C]"
                      : ""
                  }`}
                >
                  {state}
                </Link>
              );
            })}
          </div>
          <a href="#" className="text-[#5F6B6F] hover:text-[#1E3E47] font-semibold transition-colors flex items-center gap-1 whitespace-nowrap">
            See all 50 States &rarr;
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white   px-6 py-5 space-y-4 shadow-lg">
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
