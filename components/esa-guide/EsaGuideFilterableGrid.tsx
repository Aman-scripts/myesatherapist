import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogsData";

const PREFERRED_ORDER = [
  "how-to-verify-an-esa-letter",
  "is-esa-registration-legit",
  "hud-guidance-for-emotional-support-animals",
  "can-landlords-deny-emotional-support-animals",
  "emotional-support-animal",
  "esa-letter-sample",
  "esa-for-children",
];

const ESA_GUIDE_POSTS = [...BLOG_POSTS.filter(
  (p) => p.categorySlug === "esa-guide" || p.category.toLowerCase() === "esa guide"
)].sort((a, b) => {
  const iA = PREFERRED_ORDER.indexOf(a.id);
  const iB = PREFERRED_ORDER.indexOf(b.id);
  if (iA !== -1 && iB !== -1) return iA - iB;
  if (iA !== -1) return -1;
  if (iB !== -1) return 1;
  return 0;
});

export function EsaGuideFilterableGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header */}
      <div className="mb-8 sm:mb-12 text-center">
        <h2 className="font-heading text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-[#2E5A66] tracking-[-0.01em] leading-tight lg:leading-[52px]">
          Latest ESA guides
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {ESA_GUIDE_POSTS.map((art) => (
          <Link
            key={art.id}
            href={art.url}
            className="group flex flex-col rounded-[24px] bg-[#FDFAF4] border border-[#E4DCCB] p-4 sm:p-[18px] shadow-[0_2px_10px_-2px_rgba(46,90,102,0.08)] hover:shadow-[0_12px_28px_-6px_rgba(46,90,102,0.18)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Card Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[18px] bg-[#FAF7F2] shrink-0">
              <Image
                src={art.cardImage}
                alt={art.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col pt-4 px-1">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-sans">
                <span className="rounded-full bg-[#EDE0C8] px-3.5 py-1.5 font-bold text-[#1D5A4E]">
                  {art.category}
                </span>
              </div>

              <h3 className="mt-4 font-heading text-xl sm:text-[22px] font-bold text-[#1A1A1A] leading-[1.3] line-clamp-3">
                {art.title}
              </h3>

              <p className="mt-3 font-sans text-sm sm:text-[15px] leading-[26px] text-[#5F6B6F] line-clamp-3">
                {art.shortDescription}
              </p>

              <div className="mt-auto flex items-center justify-between border-t border-[#E4DCCB] pt-4 font-sans">
                <span className="text-sm text-[#5F6B6F]">{art.publishDate}</span>
                <span className="inline-flex items-center gap-1.5 font-bold text-sm text-[#1D5A4E]">
                  Read <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
