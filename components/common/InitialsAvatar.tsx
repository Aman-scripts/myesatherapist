import React from "react";

const PALETTE = [
  { bg: "#FFE3D3", fg: "#3B2A20" },
  { bg: "#E3DAFF", fg: "#2A2350" },
  { bg: "#D4F7D9", fg: "#1F4025" },
  { bg: "#E5F0A8", fg: "#3A4210" },
  { bg: "#FBD9E4", fg: "#4A2030" },
  { bg: "#D6ECF7", fg: "#1D3A4D" },
];

function initials(name: string): string {
  const parts = name.replace(/,.*$/, "").trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/** Circular initials avatar (like Trustpilot's) for reviewers without a photo. */
export function InitialsAvatar({ name, index = 0, className = "" }: { name: string; index?: number; className?: string }) {
  const c = PALETTE[Math.abs(index) % PALETTE.length];
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center rounded-full font-sans font-semibold ${className}`}
      style={{ backgroundColor: c.bg, color: c.fg }}
    >
      {initials(name)}
    </div>
  );
}
