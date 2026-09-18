"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface VideoReviewItem {
  id: number;
  name: string;
  rating: number;
  quote: string;
  date: string;
  videoUrl: string; // YouTube Shorts or embed URL
  thumbnail: string;
}

const VIDEO_REVIEWS: VideoReviewItem[] = Array.from({ length: 14 }).map((_, index) => ({
  id: index + 1,
  name: "Sherry H",
  rating: 5,
  quote:
    "“My ESA Therapist connected me with a licensed mental health expert who evaluated me and approved my ESA letter and trust me, it was more than just a letter. “",
  date: "24, April, 2026",
  videoUrl: "https://www.youtube.com/embed/5sBiyUaGksg?autoplay=1",
  thumbnail: "/video_testimonial/video_testimonial-videosreviewsimage.png",
}));

export function VideoTestimonialsGridSection() {
  const [activeVideo, setActiveVideo] = useState<VideoReviewItem | null>(null);

  return (
    <section className="relative w-full bg-[#FAF7F2] pb-16 sm:pb-24 lg:pb-32">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-[820px] mx-auto mb-10 sm:mb-14">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-tight sm:leading-[54px] text-[#2E5A66] tracking-[-0.00015em] mb-3 sm:mb-4">
            Client Video Testimonials
          </h2>
          <p className="font-sans font-semibold text-base sm:text-lg lg:text-[18px] leading-relaxed sm:leading-[30px] text-[#5F6B6F]">
            Watch our clients share their personal experiences and success stories
          </p>
        </div>

        {/* 14 Cards Grid: 2 Columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1256px] mx-auto">
          {VIDEO_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.15)] rounded-[20px] overflow-hidden flex flex-col sm:flex-row items-center transition-transform hover:-translate-y-1 duration-200"
            >
              {/* Left Video Thumbnail (301px x 370px) */}
              <div
                onClick={() => setActiveVideo(review)}
                className="w-full sm:w-[301px] h-[340px] sm:h-[370px] relative shrink-0 cursor-pointer group overflow-hidden bg-slate-900"
                role="button"
                tabIndex={0}
                aria-label={`Play testimonial video from ${review.name}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveVideo(review);
                  }
                }}
              >
                <Image
                  src={review.thumbnail}
                  alt={`${review.name} Video Testimonial`}
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 301px"
                />

                {/* Subtle dark gradient overlay for contrast */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />

                {/* Red play icon pill is already in the asset, but let's add an active ring on hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 duration-200">
                    <svg className="w-6 h-6 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Content Panel (273px width on desktop) */}
              <div className="flex-1 w-full p-6 sm:py-9 sm:pr-7 sm:pl-[18px] flex flex-col justify-between h-full min-h-[290px] sm:min-h-[350px]">
                {/* Name & Stars */}
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-2xl sm:text-[28px] leading-[36px] text-[#2E5A66] tracking-[-0.00015em]">
                    {review.name}
                  </h3>

                  {/* 5 Accent Gold Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 sm:w-6 h-5 sm:h-6 text-[#E8B92C] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Review Quote */}
                <p className="font-sans font-semibold text-[15px] sm:text-[16px] leading-[25px] sm:leading-[26px] text-[#5F6B6F] my-4">
                  {review.quote}
                </p>

                {/* Date */}
                <div className="text-right pt-2 border-t border-slate-100 sm:border-0">
                  <span className="font-sans font-semibold text-xs sm:text-[14px] leading-[26px] text-[#5F6B6F]">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-[420px] bg-black rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Embedded Video */}
            <iframe
              src={activeVideo.videoUrl}
              title={`${activeVideo.name} Testimonial Video`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
