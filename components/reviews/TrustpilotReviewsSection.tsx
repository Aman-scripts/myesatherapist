"use client";

import React from "react";
import { InitialsAvatar } from "@/components/common/InitialsAvatar";
import { TRUSTPILOT_REVIEWS, type TrustpilotReview } from "@/data/trustpilotReviews";

function TrustpilotMark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00B67A" aria-hidden="true">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FDD264" className="shrink-0">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </svg>
      ))}
    </div>
  );
}

export function TrustpilotReviewsSection() {
  const rowOne = TRUSTPILOT_REVIEWS.slice(0, 3);
  const rowTwo = TRUSTPILOT_REVIEWS.slice(3, 6);

  return (
    <section id="trustpilot-reviews" className="w-full bg-[#FAF7F2] py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] leading-tight lg:leading-[54px] font-bold text-[#2E5A66] tracking-[-0.00015em]">
            Trustpilot Reviews
          </h2>
        </div>

        {/* Reviews Cards: Matches Figma Frame 1261153766 */}
        <div className="flex flex-col items-center gap-10 lg:gap-[68px]">
          {/* Row 1: 3 cards on desktop, responsive wrap */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-[24px] w-full max-w-[1281px] justify-items-center">
            {rowOne.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Row 2: 2 cards centered on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-[24px] w-full max-w-[1281px] justify-items-center">
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
  review: TrustpilotReview;
}) {
  return (
    <div className="flex flex-col items-start gap-5 sm:gap-6 w-full max-w-[411px]">
      {/* Speech Bubble Box */}
      <div className="relative w-full">
        <div
          className="w-full rounded-[20px] p-6 flex flex-col gap-3 min-h-[222px] shadow-[0px_4px_10px_rgba(82,82,82,0.1)] transition-all duration-200 hover:shadow-lg"
          style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
        >
          {/* Top row: Google / source logo + 5 Stars */}
          <div className="flex items-center gap-3 h-[24px]">
            <TrustpilotMark className="w-[24px] h-[24px] shrink-0" />
            <StarRating />
          </div>

          {/* Quote Text */}
          <p className="font-sans font-semibold text-[15px] sm:text-[16px] text-[#FAF7F2] leading-[26px]">
            {review.quote}
          </p>
        </div>

        {/* Speech Bubble Tail pointing down towards avatar at left: 42px */}
        <div className="absolute -bottom-[12px] left-[42px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-[#1D6E72]" />
      </div>

      {/* Avatar + Name + State */}
      <div className="flex items-center gap-4 pl-1">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative shadow-sm border-2 border-white/80 shrink-0 bg-[#E8F0F1]">
          <InitialsAvatar name={review.name} index={review.id - 1} className="absolute inset-0 text-[20px]" />
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
