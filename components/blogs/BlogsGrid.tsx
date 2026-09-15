"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogsData";

interface BlogCategorySection {
  id: string;
  categorySlug: string;
  title: string;
  description: string;
}

const BLOG_CATEGORIES: BlogCategorySection[] = [
  {
    id: "esa-guide",
    categorySlug: "esa-guide",
    title: "ESA Guide",
    description:
      "Our ESA Guide category provides detailed information for both new and existing ESA owners. Explore blogs on housing rights, the evaluation process, federal and state laws, emotional support animal letters, common misconceptions, and other important subjects.",
  },
  {
    id: "qualifying-conditions",
    categorySlug: "qualifying-conditions",
    title: "Qualifying Conditions",
    description:
      "Many people wonder whether their mental or emotional health condition may qualify them for an emotional support animal. In this category, you'll find educational articles discussing mental health conditions that may be evaluated by licensed mental health professionals when determining whether an ESA is clinically appropriate.",
  },
  {
    id: "esa-training",
    categorySlug: "esa-training",
    title: "ESA Training",
    description:
      "A well-behaved emotional support animal can make everyday life more comfortable for both you and those around you. This category covers training tips, behavior management, socialization, and practical advice to help your ESA become a calm and well-mannered companion.",
  },
];

const PREFERRED_ESA_GUIDE_ORDER = [
  "how-to-verify-an-esa-letter",
  "is-esa-registration-legit",
  "hud-guidance-for-emotional-support-animals",
  "can-landlords-deny-emotional-support-animals",
  "emotional-support-animal",
  "esa-letter-sample",
  "esa-for-children",
];

export function BlogsGrid() {
  return (
    <div className="w-full bg-[#FAF7F2] pb-16 sm:pb-24 pt-4 sm:pt-6">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Category Navigation Pills */}
        <nav
          aria-label="Blog categories"
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-16"
        >
          {BLOG_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white border border-[#EAE5DC] text-[#2E5A66] hover:bg-[#1D6E72] hover:text-white hover:border-[#1D6E72] font-semibold text-sm sm:text-base shadow-xs transition-all duration-200"
            >
              {cat.title}
            </a>
          ))}
        </nav>

        {/* 3 Blog Category Sections */}
        <div className="space-y-16 sm:space-y-24">
          {BLOG_CATEGORIES.map((category, catIndex) => {
            const rawPosts = BLOG_POSTS.filter(
              (art) =>
                art.categorySlug === category.categorySlug ||
                art.category.toLowerCase() === category.title.toLowerCase()
            );

            const categoryPosts =
              category.id === "esa-guide"
                ? [...rawPosts].sort((a, b) => {
                    const idxA = PREFERRED_ESA_GUIDE_ORDER.indexOf(a.id);
                    const idxB = PREFERRED_ESA_GUIDE_ORDER.indexOf(b.id);
                    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
                    if (idxA !== -1) return -1;
                    if (idxB !== -1) return 1;
                    return 0;
                  })
                : rawPosts;

            return (
              <section
                key={category.id}
                id={category.id}
                className={`scroll-mt-28 ${
                  catIndex > 0 ? "pt-12 sm:pt-16 border-t border-[#EAE5DC]" : ""
                }`}
              >
                {/* Section Header */}
                <div className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#2E5A66] tracking-[-0.01em]">
                    {category.title}
                  </h2>
                  <div
                    className="w-[70px] h-[4px] mx-auto mt-3 rounded-full"
                    style={{ background: "linear-gradient(90deg, #E8B92C 0%, #1D6E72 100%)" }}
                  />
                  <p className="font-sans text-sm sm:text-base text-[#5F6B6F] font-semibold mt-4 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                  {categoryPosts.map((art) => (
                    <div
                      key={art.id}
                      className="bg-white rounded-[20px] overflow-hidden shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col justify-between group hover:shadow-md transition-all duration-300 min-h-[580px] border border-[#EAE5DC]/60"
                    >
                      {/* Card Header Image */}
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
                          {/* Title & Author */}
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

                          {/* Excerpt Description */}
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
          })}
        </div>
      </div>
    </div>
  );
}
