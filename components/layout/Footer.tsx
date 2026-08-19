"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.95 2 14.66 2 11.98 2 10 3.66 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PawLogo() {
  return (
    <div className="inline-flex items-center gap-2.5 bg-white rounded-2xl border-2 border-gold px-5 py-2.5">
      <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shrink-0">
        <span className="text-base">🐾</span>
      </div>
      <div className="text-left leading-none">
        <span className="block text-primary font-heading font-bold text-sm">
          My ESA
        </span>
        <span className="block text-primary font-heading font-bold text-sm -mt-0.5">
          Therapist
        </span>
      </div>
    </div>
  );
}

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Meet our Therapists", href: "#" },
  { label: "HIPAA Compliance", href: "#" },
  { label: "Video Testimonials", href: "#" },
  { label: "Customer Reviews", href: "#" },
];

const quickLinks = [
  { label: "ESA Letter Online", href: "#" },
  { label: "ESA Letter for Housing", href: "#" },
  { label: "ESA Letter Renewal", href: "#" },
  { label: "ESA Letter by State", href: "#" },
  { label: "ESA Letter Cost", href: "#" },
  { label: "ESA Resources", href: "#" },
];

const socialIcons = [
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: TwitterIcon, label: "Twitter" },
  { Icon: LinkedinIcon, label: "LinkedIn" },
  { Icon: YoutubeIcon, label: "YouTube" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black via-[#040E14] to-[#081729] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Brand block */}
        <div className="text-center mb-10 space-y-4 max-w-xl mx-auto">
          <PawLogo />

          <h3 className="font-heading text-2xl sm:text-3xl font-bold pt-2">
            My ESA <span className="text-gold">Therapist</span>
          </h3>

          <p className="text-warm-bg/80 text-sm sm:text-base font-sans font-semibold leading-relaxed">
            A 100% legal platform providing emotional support animal
            evaluations to those who suffer from any mental or emotional
            disability — trusted, professional &amp; confidential.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#"
              className="px-6 py-2.5 rounded-full bg-gold text-white font-sans font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Apply your ESA Letter
            </a>
            <a
              href="#"
              className="px-6 py-2.5 rounded-full border border-warm-bg/40 text-warm-bg font-sans font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-3 pt-4">
            {socialIcons.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-gold flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-10 pt-10 border-t border-white/10">
          {/* About Us */}
          <div>
            <h4 className="text-gold font-sans font-semibold text-sm mb-4 tracking-wide">
              ABOUT US
            </h4>
            <p className="text-warm-bg/70 text-xs leading-relaxed font-sans font-semibold">
              We connect you with licensed therapists across all 50 US states
              to obtain legitimate ESA letters quickly, securely, and
              affordably.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gold font-sans font-semibold text-sm mb-4 tracking-wide">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-warm-bg/80 text-xs font-sans font-semibold">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-sans font-semibold text-sm mb-4 tracking-wide">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-warm-bg/80 text-xs font-sans font-semibold">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-gold font-sans font-semibold text-sm mb-4 tracking-wide">
              GET IN TOUCH
            </h4>
            <ul className="space-y-4 text-xs font-sans">
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </span>
                <div>
                  <div className="text-warm-bg font-semibold text-xs">
                    +1 (888) 412-4041
                  </div>
                  <div className="text-warm-bg/60 font-bold text-[10px]">
                    24/7 Online Support
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-white" />
                </span>
                <div>
                  <div className="text-warm-bg font-semibold text-xs">
                    info@myesatherapist.com
                  </div>
                  <div className="text-warm-bg/60 font-bold text-[10px]">
                    Email us anytime
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-white" />
                </span>
                <div>
                  <div className="text-warm-bg font-semibold text-xs">
                    Mon - Sat: 9AM - 6PM
                  </div>
                  <div className="text-warm-bg/60 font-bold text-[10px]">
                    Sunday: Closed
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </span>
                <div>
                  <div className="text-warm-bg font-semibold text-xs">
                    Serving All 50 US States
                  </div>
                  <div className="text-warm-bg/60 font-bold text-[10px]">
                    Nationwide Service
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-white/10 text-xs font-sans">
          <p className="text-warm-bg/70">
            &copy; {currentYear} myesatherapist.com — All Rights Reserved
          </p>
          <div className="flex items-center gap-6 text-warm-bg/70">
            <Link href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gold transition-colors">
              Refund Policy
            </Link>
            <Link href="#" className="hover:text-gold transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
