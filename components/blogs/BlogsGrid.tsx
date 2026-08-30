"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ARTICLES = [
  {
    id: 1,
    title: "Emotional Support Animal vs. Service Animal: What's the Difference?",
    author: "by DR Marcus Cole",
    excerpt: "Explore the key differences between Emotional Support Animals, service animals, and psychiatric service dogs.",
    image: "/blog_cards.png",
  },
  {
    id: 2,
    title: "How an Emotional Support Animal Can Support Daily Well-Being",
    author: "by DR Marcus Cole",
    excerpt: "Explore how emotional support animals assist individuals coping with anxiety, depression, and mental health challenges.",
    image: "/blog_seven-things-to_know.png",
  },
  {
    id: 3,
    title: "What Makes an Emotional Support Animal Letter Legitimate?",
    author: "by DR Marcus Cole",
    excerpt: "Learn the essential legal requirements for a valid ESA letter, including clinician licensing and housing verification.",
    image: "/blog_cards.png",
  },
  {
    id: 4,
    title: "Moving With an Emotional Support Animal: What to Know about ESA",
    author: "by DR Marcus Cole",
    excerpt: "Key guidelines for notifying landlords, submitting ESA documentation under Fair Housing laws, and avoiding common issues.",
    image: "/blog_cards.png",
  },
  {
    id: 5,
    title: "Understanding ESA Housing Rights Under the Fair Housing Act",
    author: "by DR Marcus Cole",
    excerpt: "Comprehensive breakdown of tenant rights under federal FHA guidelines, fee waivers, and no-pet policy exemptions.",
    image: "/blog_seven-things-to_know.png",
  },
  {
    id: 6,
    title: "How to Talk to Your Therapist About an Emotional Support Animal",
    author: "by DR Marcus Cole",
    excerpt: "Tips on discussing your mental health needs and requesting an ESA recommendation from a licensed healthcare provider.",
    image: "/blog_cards.png",
  },
];

export function BlogsGrid() {
  return (
    <section className="w-full bg-[#EEEBE0] pb-16 sm:pb-24 pt-4 sm:pt-6">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* 3-Column Grid matching Frame 1261153615 (Sharp top corners, rounded bottom corners) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {ARTICLES.map((art) => (
            /* Frame 1000011907 Card Component (Sharp top corners, rounded bottom corners) */
            <div
              key={art.id}
              className="bg-white rounded-t-none rounded-b-[20px] overflow-hidden shadow-[0_6px_25px_rgba(0,0,0,0.04)] border border-[#EAE5DC] flex flex-col justify-between group hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[580px]"
            >
              {/* Card Header Image: aspect-[410/317] (Sharp top corners) */}
              <div className="w-full h-[250px] sm:h-[270px] lg:h-[280px] relative overflow-hidden bg-[#FAF7F2] shrink-0 rounded-t-none">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>

              {/* Card Body (Frame 1000011890) */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  
                  {/* Title & Author Block matching screenshot */}
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl sm:text-[22px] font-bold text-[#1E3E47] leading-[1.28] group-hover:text-[#1D6E72] transition-colors">
                      {art.title}
                    </h3>
                    <div className="text-sm font-sans font-medium text-[#8E9A9F] text-right">
                      {art.author}
                    </div>
                  </div>

                  {/* Excerpt Description */}
                  <p className="text-sm sm:text-[15px] text-[#5F6B6F] font-sans leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                {/* Read More Pill Button with Circular Icon (Frame 1000011890) */}
                <div className="pt-2">
                  <Link
                    href={`/blog/${art.id}`}
                    className="inline-flex items-center gap-3 pl-6 sm:pl-7 pr-2 py-2 sm:py-2.5 rounded-[30px] text-white font-sans font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 group/btn w-fit"
                    style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                  >
                    <span>Read More</span>
                    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs group-hover/btn:scale-105 transition-transform">
                      <Image
                        src="/send-icon.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] object-contain"
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
