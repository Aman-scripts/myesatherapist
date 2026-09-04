"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ARTICLES = [
  {
    id: 1,
    slug: "how-to-verify-if-an-esa-letter-is-legitimate",
    title: "Emotional Support Animal vs. Service Animal: What's the Difference?",
    author: "by DR Marcus Cole",
    excerpt: "Explore the key differences between Emotional Support Animals, service animals, and psychiatric service dogs.",
    image: "/blogs/blog_cards.png",
  },
  {
    id: 2,
    slug: "how-to-verify-if-an-esa-letter-is-legitimate",
    title: "How an Emotional Support Animal Can Support Daily Well-Being",
    author: "by DR Marcus Cole",
    excerpt: "Explore how emotional support animals assist individuals coping with anxiety, depression, and mental health challenges.",
    image: "/blogs/blog_cards.png",
  },
  {
    id: 3,
    slug: "how-to-verify-if-an-esa-letter-is-legitimate",
    title: "What Makes an Emotional Support Animal Letter Legitimate?",
    author: "by DR Marcus Cole",
    excerpt: "Learn the essential legal requirements for a valid ESA letter, including clinician licensing and housing verification.",
    image: "/blogs/blog_cards.png",
  },
  {
    id: 4,
    slug: "how-to-verify-if-an-esa-letter-is-legitimate",
    title: "Moving With an Emotional Support Animal: What to Know about ESA",
    author: "by DR Marcus Cole",
    excerpt: "Key guidelines for notifying landlords, submitting ESA documentation under Fair Housing laws, and avoiding common issues.",
    image: "/blogs/blog_cards.png",
  },
  {
    id: 5,
    slug: "how-to-verify-if-an-esa-letter-is-legitimate",
    title: "Emotional Support Animal vs. Service Animal: What's the Difference?",
    author: "by DR Marcus Cole",
    excerpt: "Comprehensive breakdown of tenant rights under federal FHA guidelines, fee waivers, and no-pet policy exemptions.",
    image: "/blogs/blog_cards.png",
  },
  {
    id: 6,
    slug: "how-to-verify-if-an-esa-letter-is-legitimate",
    title: "Emotional Support Animal vs. Service Animal: What's the Difference?",
    author: "by DR Marcus Cole",
    excerpt: "Tips on discussing your mental health needs and requesting an ESA recommendation from a licensed healthcare provider.",
    image: "/blogs/blog_cards.png",
  },
  {
    id: 7,
    slug: "how-to-verify-if-an-esa-letter-is-legitimate",
    title: "Emotional Support Animal vs. Service Animal: What's the Difference?",
    author: "by DR Marcus Cole",
    excerpt: "Explore the key differences between Emotional Support Animals, service animals, and psychiatric service dogs.",
    image: "/blogs/blog_cards.png",
  },
  {
    id: 8,
    slug: "how-to-verify-if-an-esa-letter-is-legitimate",
    title: "Emotional Support Animal vs. Service Animal: What's the Difference?",
    author: "by DR Marcus Cole",
    excerpt: "Explore the key differences between Emotional Support Animals, service animals, and psychiatric service dogs.",
    image: "/blogs/blog_cards.png",
  },
  {
    id: 9,
    slug: "how-to-verify-if-an-esa-letter-is-legitimate",
    title: "Emotional Support Animal vs. Service Animal: What's the Difference?",
    author: "by DR Marcus Cole",
    excerpt: "Explore the key differences between Emotional Support Animals, service animals, and psychiatric service dogs.",
    image: "/blogs/blog_cards.png",
  },
];

export function BlogsGrid() {
  return (
    <section className="w-full bg-[#FAF7F2] pb-16 sm:pb-24 pt-4 sm:pt-6">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* 3-Column Grid matching Frame 1261153615 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {ARTICLES.map((art) => (
            /* Frame 1000011907 Card Component */
            <div
              key={art.id}
              className="bg-white rounded-[20px] overflow-hidden shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col justify-between group hover:shadow-md transition-all duration-300 min-h-[580px]"
            >
              {/* Card Header Image: aspect-[410/317] */}
              <Link
                href={`/blog/${art.slug}`}
                className="w-full h-[260px] sm:h-[280px] lg:h-[317px] relative overflow-hidden bg-[#FAF7F2] shrink-0 block cursor-pointer"
              >
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </Link>

              {/* Card Body (Frame 1000011908) */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3.5">
                  
                  {/* Title & Author */}
                  <div className="space-y-1.5">
                    <Link href={`/blog/${art.slug}`}>
                      <h3 className="font-heading text-xl sm:text-[24px] font-bold text-[#2E5A66] leading-[1.3] lg:leading-[32px] group-hover:text-[#1D6E72] transition-colors cursor-pointer">
                        {art.title}
                      </h3>
                    </Link>
                    <div className="text-xs sm:text-sm font-sans font-medium text-[#8E9A9F]">
                      {art.author}
                    </div>
                  </div>

                  {/* Excerpt Description */}
                  <p className="font-sans font-semibold text-sm sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#475467]">
                    {art.excerpt}
                  </p>
                </div>

                {/* Get Started Button (Frame 1000011890) */}
                <div className="pt-2">
                  <Link
                    href={`/blog/${art.slug}`}
                    className="inline-flex items-center justify-between pl-6 pr-1.5 w-[171px] h-[48px] rounded-[30px] text-white font-sans font-semibold text-base shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-all group/btn"
                    style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                  >
                    <span>Get Started</span>
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
