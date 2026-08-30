"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function BlogsFeaturedArticle() {
  return (
    <section className="w-full bg-[#EEEBE0] py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Frame 1261153609: Responsive Flex Container (Optimized for 1024px tablet & 1440px desktop) */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-[380px] lg:min-h-[463px]">
          
          {/* Left Image: image 40 (w-full lg:w-[55%] xl:w-[628px], h-[340px] sm:h-[420px] lg:h-[463px], rounded-[20px]) */}
          <div className="w-full lg:w-[55%] xl:w-[628px] h-[340px] sm:h-[420px] lg:h-[463px] relative rounded-[20px] overflow-hidden shrink-0 shadow-sm z-0">
            <Image
              src="/blog_seven-things-to_know.png"
              alt="7 Things to Know Before Getting an ESA Letter"
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(min-width: 1280px) 628px, (min-width: 1024px) 55vw, 100vw"
            />
          </div>

          {/* Right Content Card: Frame 1261153606 */}
          {/* Overlaps image smoothly on 1024px (lg:-ml-16) and 1440px (xl:-ml-[49px]), vertically centered */}
          <div className="w-full lg:w-[53%] xl:w-[701px] min-h-[340px] sm:min-h-[372px] bg-white rounded-[20px] p-6 sm:p-8 lg:p-10 xl:p-12 border border-[#EAE5DC] shadow-[0_10px_30px_rgba(0,0,0,0.05)] lg:-ml-16 xl:-ml-[49px] relative z-10 flex flex-col justify-center space-y-4 sm:space-y-5 my-auto mt-4 lg:mt-auto">
            
            {/* Frame 1261153608: Title & Description */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[30px] xl:text-[36px] font-bold text-[#2E5A66] leading-[1.2] tracking-tight">
                7 Things to Know Before Getting an ESA Letter
              </h2>

              <p className="text-sm sm:text-base text-[#5F6B6F] font-sans font-normal leading-relaxed max-w-[541px]">
                Thinking about getting an ESA letter? Here are important things to understand before beginning the process.Thinking about getting an ESA letter? Here are important things to understand before beginning the process.
              </p>
            </div>

            {/* Frame 1000011890: CTA Button */}
            <div className="pt-1">
              <Link
                href="#read-more"
                className="inline-flex items-center justify-between pl-6 pr-1.5 w-[160px] sm:w-[171px] h-[44px] sm:h-[48px] rounded-[30px] text-white font-sans font-semibold text-sm sm:text-base shadow-md hover:opacity-95 transition-all group"
                style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              >
                <span>Read More</span>
                <span className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
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
      </div>
    </section>
  );
}
