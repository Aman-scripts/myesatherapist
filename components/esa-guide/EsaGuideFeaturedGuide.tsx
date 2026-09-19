import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function EsaGuideFeaturedGuide() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Link
        href="/blog/esa-letter-sample/"
        className="group grid gap-8 rounded-[24px] bg-white border border-[#E2E8F0] p-5 sm:p-6 md:grid-cols-2 shadow-[0_4px_20px_-4px_rgba(46,90,102,0.08)] hover:shadow-[0_12px_32px_-4px_rgba(46,90,102,0.16)] transition-all duration-300 hover:-translate-y-1"
      >
        {/* Left: Featured Image */}
        <div className="overflow-hidden rounded-[18px] bg-[#FAF7F2]">
          <Image
            src="/esa-guide/esa-featured.jpg"
            width={1200}
            height={912}
            alt="A woman spending a calm moment with her golden retriever"
            priority
            className="h-full min-h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center py-2">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-sans">
            <span className="rounded-full bg-[#E8B92C] px-3 py-1 font-bold text-[#1E3E47]">
              ESA letters
            </span>
            <span className="font-semibold text-[#5F6B6F]">8 min read</span>
          </div>

          <h3 className="mt-4 text-balance font-heading font-bold text-2xl sm:text-3xl leading-snug text-[#2E5A66] transition-colors group-hover:text-[#1E3E47]">
            ESA Letter Sample: What Does a Legitimate ESA Letter Look Like?
          </h3>

          <p className="mt-3 text-pretty font-sans text-base leading-relaxed text-[#5F6B6F]">
            This guide provides an ESA letter sample and explains what a valid ESA letter should include.
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-[#E2E8F0] pt-4 font-sans">
            <p className="text-sm text-[#5F6B6F]">Jul 29, 2026</p>
            <span className="inline-flex items-center gap-1.5 font-bold text-sm text-[#2E5A66] group-hover:text-[#1E3E47] transition-colors">
              Read guide <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
