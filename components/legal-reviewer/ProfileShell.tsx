"use client";

import React from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { X, ChevronRight } from "lucide-react";
import { SidebarDivider } from "./ReviewerUI";

export interface ProfileShellProps {
  name: string;
  title?: string;
  avatar: string;
  avatarAlt: string;
  badges?: string[];
  /** Sidebar content below the first divider (SidebarSection / SidebarDivider blocks) */
  sidebar: React.ReactNode;
  /** Main column sections, separated by SectionDivider */
  children: React.ReactNode;
}

function ActiveCheck() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="7" cy="7" r="7" fill="#00BA00" />
      <path
        d="M4 7.2L6 9.2L10 5"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Avatar, name, title and status pills (Figma Frame 1000011839)
function ProfileIdentity({
  name,
  title,
  avatar,
  avatarAlt,
  badges,
  inDrawer,
}: Omit<ProfileShellProps, "sidebar" | "children"> & { inDrawer?: boolean }) {
  // The drawer repeats the identity block, so it uses h2 to keep one h1 per page
  const NameHeading = inDrawer ? "h2" : "h1";
  return (
    <div className="flex flex-col gap-[27px]">
      <div className="flex flex-col gap-6">
        <div className="w-[138px] h-[138px] p-[5px] rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] shrink-0">
          <div className="relative w-[128px] h-[128px] rounded-full overflow-hidden">
            <Image
              quality={90}
              src={avatar}
              alt={avatarAlt}
              fill
              priority={!inDrawer}
              className="object-cover object-top"
              sizes="128px"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <NameHeading className="heading-h1 text-background">
            {name}
          </NameHeading>
          {title && (
            <div className="flex items-center gap-[10px]">
              <Image
                quality={90}
                src="/legal_reviewer/legal_reviewer-bag-icon.svg"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 shrink-0"
              />
              <span className="body-large text-background">{title}</span>
            </div>
          )}
        </div>
      </div>

      {badges && badges.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-[5px] h-[34px] px-2 rounded-[20px] bg-white border border-white/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] body-text text-primary whitespace-nowrap"
            >
              <ActiveCheck />
              {badge}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function SidebarBody(
  props: Omit<ProfileShellProps, "children"> & { inDrawer?: boolean },
) {
  return (
    <div className="flex flex-col">
      <ProfileIdentity {...props} />
      <div className="mt-[23px]">
        <SidebarDivider />
      </div>
      <div className="flex flex-col gap-10 pt-[27px]">{props.sidebar}</div>
    </div>
  );
}

/**
 * Page layout for author / contributor / reviewer profiles (Figma "Legal Reviewer Page"):
 * a 382px teal sidebar on desktop (slide-out drawer below 1024px) and a 1055px main
 * column with 74px side padding.
 */
export function ProfileShell(props: ProfileShellProps) {
  const { name, children } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll and close on Escape while the drawer is open
  React.useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <section className="w-full bg-background relative pb-16 lg:pb-24">
      <div className="w-full flex flex-col lg:flex-row items-start">
        {/* Desktop sidebar (Figma Frame 1000011828: 382px, padding 57px 31px) */}
        <aside className="hidden lg:block w-[382px] shrink-0 sticky top-[126px] self-start z-20 max-h-[calc(100vh-126px)] overflow-y-auto overflow-x-hidden no-scrollbar color-gradient px-[31px] pt-[57px] pb-12">
          <SidebarBody {...props} />
        </aside>

        {/* Mobile & tablet: edge toggle + slide-out drawer */}
        {mounted &&
          createPortal(
            <>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label={`Open ${name} profile`}
                className="lg:hidden fixed left-0 top-[55%] sm:top-[50%] -translate-y-1/2 z-[80] w-[34px] sm:w-[40px] h-[64px] sm:h-[76px] rounded-r-full shadow-[2px_4px_16px_rgba(26,61,79,0.45)] flex items-center justify-center pl-0.5 color-gradient transition-all hover:w-[44px] active:scale-95 group cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-background stroke-[2.5] group-hover:translate-x-0.5 group-hover:text-accent transition-all" />
              </button>

              <div
                className={`fixed inset-0 z-[99999] flex transition-all duration-300 ${isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"}`}
                role="dialog"
                aria-modal="true"
                aria-label={`${name} profile`}
              >
                <div
                  onClick={() => setIsOpen(false)}
                  className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                />

                <div
                  className={`relative w-[320px] sm:w-[382px] h-full max-h-screen overflow-y-auto overflow-x-hidden no-scrollbar z-[100000] color-gradient shadow-2xl px-[31px] pt-6 pb-10 transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                  <div className="flex justify-end mb-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="w-9 h-9 rounded-full border border-white/40 hover:border-white hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer"
                      aria-label="Close profile"
                    >
                      <X className="w-5 h-5 text-background stroke-[2.2]" />
                    </button>
                  </div>
                  <SidebarBody {...props} inDrawer />
                </div>
              </div>
            </>,
            document.body,
          )}

        {/* Main column (Figma Frame 1000011878: padding 0 74px, gap 53px) */}
        <div className="flex-1 min-w-0 max-w-[1055px] px-4 sm:px-8 lg:px-[74px] pt-10 lg:pt-[74px] flex flex-col gap-10 lg:gap-[53px]">
          {children}
        </div>
      </div>
    </section>
  );
}
