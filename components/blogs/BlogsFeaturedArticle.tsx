"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function BlogsFeaturedArticle() {
  return (
    <section id="featured" className="w-full bg-[#FAF7F2] py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Frame 1261153609: Responsive Flex Container (Optimized for 1024px tablet & 1440px desktop) */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-[380px] lg:min-h-[463px]">
          
          {/* Left Image: image 40 (w-full lg:w-[55%] xl:w-[628px], h-[340px] sm:h-[420px] lg:h-[463px], rounded-[20px]) */}
          <div className="w-full lg:w-[55%] xl:w-[628px] h-[340px] sm:h-[420px] lg:h-[463px] relative rounded-[20px] overflow-hidden shrink-0 shadow-sm z-0">
            <Image
              src="/blogs/blog_seven-things-to_know.png"
              alt="7 Things to Know Before Getting an ESA Letter"
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(min-width: 1280px) 628px, (min-width: 1024px) 55vw, 100vw"
            />
          </div>

          {/* Right Content Card: Frame 1261153606 */}
          <div className="w-full lg:w-[53%] xl:w-[701px] min-h-[340px] sm:min-h-[372px] bg-white rounded-[20px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[0px_2px_4px_rgba(0,0,0,0.15)] lg:-ml-16 xl:-ml-[49px] relative z-10 flex flex-col justify-center space-y-4 sm:space-y-5 my-auto mt-4 lg:mt-auto">
            
            {/* Frame 1261153608: Title & Description */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[54px] tracking-[-0.00015em]">
                7 Things to Know Before Getting an ESA Letter
              </h2>

              <p className="font-sans font-semibold text-[15px] sm:text-[18px] text-[#5F6B6F] leading-[24px] sm:leading-[30px] max-w-[541px]">
                Thinking about getting an ESA letter? Here are important things to understand before beginning the process.
              </p>
            </div>

            {/* Frame 1000011890: CTA Button */}
            <div className="pt-1">
              <Link
                href="/blog/how-to-verify-if-an-esa-letter-is-legitimate"
                className="inline-flex items-center justify-between pl-6 pr-1.5 w-[171px] h-[48px] rounded-[30px] text-white font-sans font-semibold text-base shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-all group"
                style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              >
                <span>Get Started</span>
                <span className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#FAF7F2] shadow-[0px_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
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
      </div>
    </section>
  );
}
