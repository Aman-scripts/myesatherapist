"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/common/CtaButton";

interface BlogsFeaturedArticleProps {
  className?: string;
  id?: string;
  ctaHref?: string;
}

export function BlogsFeaturedArticle({
  className,
  id = "featured",
  ctaHref = "/blog/esa-guide/how-to-verify-an-esa-letter/",
}: BlogsFeaturedArticleProps = {}) {
  return (
    <section id={id} className={`w-full bg-background ${className || "py-8 sm:py-12 lg:py-16"}`}>
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Flex Container */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-[380px] lg:min-h-[463px]">
          
          {/* Left Image: image 40 with rounded corners */}
          <div className="w-full lg:w-[55%] xl:w-[628px] h-[340px] sm:h-[420px] lg:h-[463px] relative rounded-[20px] lg:rounded-[24px] overflow-hidden shrink-0 shadow-sm z-0">
            <Image
            quality={90}
              src="/blogs/blog_seven-things-to_know.webp"
              alt="7 Things to Know Before Getting an ESA Letter"
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(min-width: 1280px) 628px, (min-width: 1024px) 55vw, 100vw"
            />
          </div>

          {/* Right Content Card */}
          <div className="w-full lg:w-[53%] xl:w-[701px] min-h-[340px] sm:min-h-[372px] bg-white rounded-[20px] lg:rounded-[28px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[0px_8px_30px_rgba(26,61,79,0.08)] lg:-ml-16 xl:-ml-[49px] relative z-10 flex flex-col justify-center space-y-4 sm:space-y-5 my-auto mt-4 lg:mt-auto">
            
            {/* Title & Description */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-primary leading-tight lg:leading-[54px] tracking-[-0.00015em]">
                7 Things to Know Before Getting an ESA Letter
              </h2>

              <p className="font-sans font-semibold text-[15px] sm:text-[18px] text-body-text leading-[24px] sm:leading-[30px] max-w-[541px]">
                Thinking about getting an ESA letter? Here are important things to understand before beginning the process.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-1">
              <CtaButton
                href={ctaHref}
                className="w-[192px]"
              >
                Get Started
              </CtaButton>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
