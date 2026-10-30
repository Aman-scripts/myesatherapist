"use client";

import React, { useState, useEffect, useRef } from "react";

export function ContactMap() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="map" className="w-full bg-background pb-12 sm:pb-16 lg:pb-20 pt-4">
      <div className="max-w-[1281px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="w-full h-[400px] sm:h-[500px] lg:h-[675px] rounded-[20px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.12)] relative bg-slate-100"
        >
          {isVisible ? (
            <iframe
              title="Virginia Beach Office Map Location"
              src="https://maps.google.com/maps?q=780+Lynnhaven+Pkwy+%23400,+Virginia+Beach,+VA+23452&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
              Loading map...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
