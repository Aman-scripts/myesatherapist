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
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
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
              className="h-10 lg:h-12 w-auto"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          {/* Desktop Nav (Exact menu items matching Screenshot 1 & Screenshot 2) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-9 font-sans">
            <a
              href="#therapists"
              className="text-[#1E3E47] font-medium text-[15px] hover:text-[#1D6E72] transition-colors"
            >
              Our Therapists
            </a>
            <a
              href="#about"
              className="text-[#1E3E47] font-medium text-[15px] hover:text-[#1D6E72] transition-colors"
            >
              About Us
            </a>
            <a
              href="#resources"
              className="text-[#1E3E47] font-medium text-[15px] hover:text-[#1D6E72] transition-colors flex items-center gap-1.5"
            >
              Resources <ChevronDown className="w-4 h-4 text-[#1E3E47]" />
            </a>
            <a
              href="#contact"
              className="text-[#1E3E47] font-medium text-[15px] hover:text-[#1D6E72] transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {isPsd ? (
              /* Screenshot 2 (PSD Letter Page): Single "Start Your Consultation" Button */
              <a
                href="#pricing"
                className="inline-flex items-center gap-3.5 pl-6 pr-2 py-2 rounded-full text-white font-bold text-[15px] shadow-sm hover:shadow transition-all duration-200"
                style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              >
                <span>Start Your Consultation</span>
                <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                  <Image
                    src="/send-icon.svg"
                    alt=""
                    width={16}
                    height={16}
                    unoptimized
                    priority
                    className="object-contain"
                    style={{ width: "auto", height: "auto" }}
                  />
                </span>
              </a>
            ) : (
              /* Screenshot 1 (Homepage): 2 Buttons ("Free ESA Eligibility Checker" + "Get Started") */
              <>
                <a
                  href="#eligibility"
                  className="px-5 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#F5EFE6] text-[#1E3E47] font-bold text-sm lg:text-[14.5px] border border-[#EAE5DC] transition-colors"
                >
                  Free ESA Eligibility Checker
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full text-white font-bold text-[15px] shadow-sm hover:shadow transition-all duration-200"
                  style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  <span>Get Started</span>
                  <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                    <Image
                      src="/send-icon.svg"
                      alt=""
                      width={16}
                      height={16}
                      unoptimized
                      priority
                      className="object-contain"
                      style={{ width: "auto", height: "auto" }}
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
      <div className="hidden lg:block bg-[#FAF7F2]  ">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2.5 text-[14px] font-medium text-[#5F6B6F]">
          <div className="flex items-center gap-7">
            {["California", "Texas", "New York", "Florida", "Colorado", "Illinois", "Washington"].map((state) => (
              <a key={state} href="#" className="hover:text-[#1E3E47] transition-colors">
                {state}
              </a>
            ))}
          </div>
          <a href="#" className="text-[#5F6B6F] hover:text-[#1E3E47] font-semibold transition-colors flex items-center gap-1">
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
                  width={16}
                  height={16}
                  unoptimized
                  priority
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
