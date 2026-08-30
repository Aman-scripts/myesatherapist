"use client";

import React from "react";

export function ContactMap() {
  return (
    <section id="map" className="w-full bg-[#EEEBE0] py-8 sm:py-10 lg:py-14">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-none overflow-hidden shadow-lg border border-[#EAE5DC] relative">
          <iframe
            title="Virginia Beach Office Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.215579976378!2d-76.0825!3d36.8189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae9415444a7ab%3A0x2424b52b22f4cf00!2s780%20Lynnhaven%20Pkwy%20%23400%2C%20Virginia%20Beach%2C%20VA%2023452!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
