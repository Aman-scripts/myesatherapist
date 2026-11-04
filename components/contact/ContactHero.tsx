"use client";

import React, { useState } from "react";
import { CtaButton } from "@/components/common/CtaButton";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";
import { ResponsiveHero, standardHeroBackgrounds } from "@/components/common/ResponsiveHero";

const cardStyle = {
  background: "rgba(245, 166, 54, 0.26)",
  border: "1px solid rgba(245, 166, 54, 0.09)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
};

const fieldClass =
  "w-full h-[40px] px-3 rounded-[5px] bg-background/30 border border-body-text/40 body-small text-body-text placeholder:text-body-text/70 focus:outline-none focus:border-primary transition-all";

export function ContactHero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <ResponsiveHero
      centered={false}
      desktopHeight={814}
      tabletMinHeight="780px"
      contentClassName="items-center lg:items-start"
      backgrounds={standardHeroBackgrounds(
        "/hero-image-for-mobile-all.webp",
        "/contact/contact-us-hero-section-tablet.webp",
        "/contact/contact-hero-section.webp",
        { mobile: "object-top", tablet: "object-top", desktop: "object-center" },
      )}
    >
      <div className="w-full max-w-[340px] space-y-4 rounded-[30px] p-5 shadow-sm sm:max-w-[520px] sm:p-8" style={cardStyle}>
        <div className="space-y-2 text-center">
          <SiteBreadcrumbs />
          <h1 className="heading-h1 text-primary">Request Info</h1>
          <p className="body-text text-body-text">
            Feel Free To Connect With Us!
            <br className="sm:hidden" /> (24×7 Available At Your Service)
          </p>
        </div>

        {submitted ? (
          <div className="color-gradient space-y-2 rounded-2xl p-6 text-center text-white shadow-xl">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent text-xl font-bold text-[#04161C]">
              ✓
            </div>
            <h2 className="heading-h3 text-white">Thank You!</h2>
            <p className="body-text text-white">Your message has been sent successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block space-y-1">
                <span className="body-text text-body-text">First Name</span>
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className={fieldClass}
                />
              </label>
              <label className="block space-y-1">
                <span className="body-text text-body-text">Last Name</span>
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="block space-y-1">
              <span className="body-text text-body-text">Email Address</span>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={fieldClass}
              />
            </label>
            <label className="block space-y-1">
              <span className="body-text text-body-text">Message</span>
              <textarea
                required
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${fieldClass} h-[72px] py-2`}
              />
            </label>
            <div className="flex flex-col items-center space-y-1 pt-1">
              <CtaButton type="submit" variant="accent">
                Get Started
              </CtaButton>
              <p className="body-small text-center text-body-text">Your information is 100% secure and private.</p>
            </div>
          </form>
        )}
      </div>
    </ResponsiveHero>
  );
}
