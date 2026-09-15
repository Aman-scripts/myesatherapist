"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogsData";

interface BlogMoreResourcesProps {
  currentSlug?: string;
}

export function BlogMoreResources({ currentSlug }: BlogMoreResourcesProps = {}) {
  // Show up to 3 resources, prioritizing other blog posts
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== currentSlug);
  const displayPosts = otherPosts.length > 0 ? otherPosts : BLOG_POSTS;

  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-[640px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[54px] tracking-[-0.00015em]">
            More ESA Resources
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-[18px] font-semibold text-[#5F6B6F] leading-[30px]">
            Get answers to common questions about ESA letters and our service.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayPosts.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 group min-h-[540px]"
            >
              {/* Card Image */}
              <Link
                href={item.url}
                className="relative w-full h-[260px] sm:h-[280px] lg:h-[300px] overflow-hidden bg-[#FAF7F2] shrink-0 block cursor-pointer"
              >
                <Image
                  src={item.cardImage}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </Link>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3.5">
                  <Link href={item.url}>
                    <h3 className="font-heading text-lg sm:text-[22px] font-bold text-[#2E5A66] leading-[1.3] group-hover:text-[#1D6E72] transition-colors line-clamp-3">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="text-xs sm:text-sm font-sans font-medium text-[#8E9A9F]">
                    by {item.author.name}
                  </div>
                  <p className="font-sans font-semibold text-sm leading-[24px] text-[#475467] line-clamp-3">
                    {item.shortDescription}
                  </p>
                </div>

                {/* Get Started Button */}
                <div className="pt-2">
                  <Link
                    href={item.url}
                    className="inline-flex items-center justify-between pl-6 pr-1.5 w-[171px] h-[48px] rounded-[30px] text-white font-sans font-semibold text-base shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-all group/btn"
                    style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                  >
                    <span>Read Article</span>
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

      </div>
    </section>
  );
}
