"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, MapPin } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 lg:py-[13px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/myesa-logo.svg"
              alt="My ESA Therapist"
              width={171}
              height={71}
              className="h-10 w-auto lg:h-[62px]"
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {["Our Therapists", "About Us"].map((item) => (
              <a key={item} href="#" className="text-primary font-medium text-sm hover:opacity-80 transition-opacity">
                {item}
              </a>
            ))}
            <a href="#" className="text-primary font-medium text-sm hover:opacity-80 transition-opacity flex items-center gap-1">
              Resources <ChevronDown className="w-4 h-4" />
            </a>
            <a href="#" className="text-primary font-medium text-sm hover:opacity-80 transition-opacity">
              Contact Us
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="px-[27px] h-12 flex items-center rounded-full bg-[#FAF7F2] font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              >
                Free ESA Eligibilty Checker
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 pl-9 pr-[3px] h-12 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              Get Started
              <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/send-icon.svg" alt="" width={18} height={20} style={{ width: "auto", height: "auto" }} />
              </span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-primary min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* States Bar — full-bleed background, content constrained */}
      <div className="hidden lg:block bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-2.5 text-sm text-[#5F6B6F]">
          <div className="flex items-center gap-6">
            {["California", "Texas", "New York", "Florida", "Colorado", "Illinois", "Washington"].map((state) => (
              <a key={state} href="#" className="hover:text-primary transition-colors">{state}</a>
            ))}
          </div>
          <a href="#" className="text-primary font-semibold hover:underline flex items-center gap-1">
            See all 50 States →
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3">
          {["Our Therapists", "About Us", "Resources", "Contact Us"].map((item) => (
            <a key={item} href="#" className="block py-2 text-primary font-medium text-base min-h-[44px] flex items-center" onClick={() => setMobileOpen(false)}>
              {item}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-3">
            <a href="#" className="text-center py-3 rounded-full bg-[#FAF7F2] font-semibold text-sm min-h-[44px] flex items-center justify-center">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              >
                Free ESA Eligibilty Checker
              </span>
            </a>
            <a
              href="#"
              className="text-center py-3 rounded-full text-white font-semibold text-sm min-h-[44px] flex items-center justify-center"
              style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
