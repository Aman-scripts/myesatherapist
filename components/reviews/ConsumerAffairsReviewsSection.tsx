"use client";

import React from "react";
import { InitialsAvatar } from "@/components/common/InitialsAvatar";
import { CONSUMERAFFAIRS_REVIEWS, type CustomerReview } from "@/data/trustpilotReviews";

function ConsumerAffairsMark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#095691" aria-hidden="true">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={i < rating ? "#FDD264" : "#FFEEC1"} className="shrink-0">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </svg>
      ))}
    </div>
  );
}

export function ConsumerAffairsReviewsSection() {
  const rowOne = CONSUMERAFFAIRS_REVIEWS.slice(0, 3);
  const rowTwo = CONSUMERAFFAIRS_REVIEWS.slice(3, 6);

  return (
    <section id="consumer-affairs-reviews" className="w-full bg-[#FFFFFF] py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="heading-h2 text-primary">
            Consumer Affairs Reviews
          </h2>
        </div>

        <div className="max-w-[1065px] mx-auto mb-14 lg:mb-16 bg-white shadow-[0px_2px_12px_rgba(103,103,103,0.08)] rounded-[18px] flex items-stretch gap-4 sm:gap-5 pl-4 sm:pl-5 pr-4 sm:pr-6 py-4 sm:py-5">
          <div className="hidden sm:block w-[7px] self-stretch rounded-full bg-primary shrink-0 my-0.5" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center sm:justify-start">
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#1A3D4F"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#1A3D4F"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#1A3D4F"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#1A3D4F"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <div className="flex items-center gap-1" role="img" aria-label="4 out of 5 stars">
                {["#E8B92C", "#E8B92C", "#E8B92C", "#E8B92C", "#F3E3A8"].map((fill, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={fill} className="shrink-0" aria-hidden="true">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
              <span className="font-sans font-semibold text-[16px] leading-[26px] text-[#1A3D4F] whitespace-nowrap">
                Consumer Affairs · Verified reviews
              </span>
            </div>

            <a
              href="https://www.consumeraffairs.com/pets/my-esa-therapist.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 h-[44px] rounded-full bg-accent text-primary font-sans font-semibold text-[15px] leading-[22px] hover:opacity-95 transition-opacity whitespace-nowrap shrink-0"
            >
              View Source
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid: Matches Figma Frame 1261153766 */}
        <div className="flex flex-col items-center gap-10 lg:gap-[68px]">
          {/* Row 1: 3 cards on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-[24px] w-full max-w-[1280px] justify-items-center">
            {rowOne.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Row 2: 1 card centered on desktop (or responsive) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-[24px] w-full max-w-[1280px] justify-items-center">
            {rowTwo.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
}: {
  review: CustomerReview;
}) {
  return (
    <div className="flex flex-col items-start gap-5 sm:gap-6 w-full max-w-[411px]">
      {/* Speech Bubble Box */}
      <div className="relative w-full">
        <div
          className="w-full rounded-[20px] p-6 flex flex-col gap-3 min-h-[222px] shadow-[0px_4px_10px_rgba(82,82,82,0.1)] transition-all duration-200 hover:shadow-lg"
          style={{ backgroundImage: "var(--color-gradient)" }}
        >
          {/* Top row: Google / source logo + 5 Stars */}
          <div className="flex items-center gap-3 h-[24px]">
            <ConsumerAffairsMark className="w-[24px] h-[24px] shrink-0" />
            <StarRating rating={review.rating} />
          </div>

          {/* Quote Text */}
          <p className="font-sans font-semibold text-[15px] sm:text-[16px] text-background leading-[26px]">
            {review.quote}
          </p>
        </div>

        {/* Speech Bubble Tail pointing down towards avatar at left: 42px */}
        <div className="absolute -bottom-[12px] left-[42px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-[#1D6E72]" />
      </div>

      {/* Avatar + Name + State */}
      <div className="flex items-center gap-4 pl-1">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative shadow-sm border-2 border-white/80 shrink-0 bg-[#E8F0F1]">
          <InitialsAvatar name={review.name} index={review.id} className="absolute inset-0 text-[20px]" />
        </div>
        <div className="flex flex-col justify-center gap-0.5">
          <h3 className="font-heading font-bold text-[19px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-[#2C2C2C]">
            {review.name}
          </h3>
          <span className="font-sans text-[14px] sm:text-[16px] leading-[20px] text-[#696969]">
            {review.location} · {review.date}
          </span>
        </div>
      </div>
    </div>
  );
}
