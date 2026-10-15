"use client";

import React, { useState } from "react";
import Image from "next/image";
import { YouTubePlayIcon } from "./TestimonialsSection";

const VIDEO_ID = "z139gKZv4_Y";
const VIDEO_TITLE = "A licensed ESA provider explains how ESA evaluations work";

export function LicensedProviderSection() {
  // Click-to-load facade: the YouTube player (~1 MB of JS plus ad cookies)
  // is only embedded once the visitor asks to play the video.
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="pt-4 sm:pt-6 lg:pt-12 xl:pt-16 pb-12 sm:pb-14 lg:pb-16 xl:pb-20 bg-[#FAF7F2]">
      <div className="max-w-[999px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 xl:mb-12 space-y-2.5 max-w-[999px] mx-auto">
          <h2 className="heading-h2 text-[#2E5A66] capitalize">
            Hear From A Licensed ESA Provider
          </h2>
          <p className="body-large text-[#5F6B6F] max-w-[850px] mx-auto">
            Nervous about your first evaluation? A licensed provider explains how ESA evaluations work, what questions you may be asked, and how the process helps you feel comfortable and supported.
          </p>
        </div>

        {/* YouTube Video Player */}
        <div className="max-w-[919px] mx-auto">
          <div className="relative w-full aspect-[16/9] xl:aspect-[919/511] rounded-[20px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(46,90,102,0.25)] bg-black">
            {isPlaying ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title={VIDEO_TITLE}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label={`Play video: ${VIDEO_TITLE}`}
                className="group absolute inset-0 w-full h-full cursor-pointer"
              >
                <Image
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt=""
                  fill
                  sizes="(max-width: 960px) 100vw, 920px"
                  className="object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <YouTubePlayIcon className="w-[68px] h-12 drop-shadow-lg transition-transform duration-200 group-hover:scale-110" />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
