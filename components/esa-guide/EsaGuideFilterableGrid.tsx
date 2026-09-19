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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {ESA_GUIDE_POSTS.map((art) => (
          <div
            key={art.id}
            className="bg-white rounded-[20px] overflow-hidden shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col justify-between group hover:shadow-md transition-all duration-300 min-h-[580px] border border-[#EAE5DC]/60"
          >
            {/* Card Image */}
            <Link
              href={art.url}
              className="w-full h-[260px] sm:h-[280px] lg:h-[317px] relative overflow-hidden bg-[#FAF7F2] shrink-0 block cursor-pointer"
            >
              <Image
                src={art.cardImage}
                alt={art.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#1D6E72] font-sans font-bold text-xs px-3 py-1 rounded-full shadow-xs border border-[#1D6E72]/20">
                {art.category}
              </span>
            </Link>

            {/* Card Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3.5">
                <div className="space-y-1.5">
                  <Link href={art.url}>
                    <h3 className="font-heading text-xl sm:text-[22px] font-bold text-[#2E5A66] leading-[1.3] group-hover:text-[#1D6E72] transition-colors cursor-pointer line-clamp-2">
                      {art.title}
                    </h3>
                  </Link>
                  <div className="text-xs sm:text-sm font-sans font-medium text-[#8E9A9F]">
                    by {art.author.name} • {art.publishDate}
                  </div>
                </div>

                <p className="font-sans font-semibold text-sm sm:text-[15px] leading-[24px] sm:leading-[26px] text-[#475467] line-clamp-3">
                  {art.shortDescription}
                </p>
              </div>

              {/* Read Guide Button */}
              <div className="pt-2">
                <Link
                  href={art.url}
                  className="inline-flex items-center justify-between pl-6 pr-1.5 w-[171px] h-[48px] rounded-[30px] text-white font-sans font-semibold text-base shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-all group/btn"
                  style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  <span>Read Guide</span>
                  <span className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#FAF7F2] shadow-[0px_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0 group-hover/btn:scale-105 transition-transform">
                    <Image
                      src="/common/send-icon.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="w-[16px] h-[16px] object-contain"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
