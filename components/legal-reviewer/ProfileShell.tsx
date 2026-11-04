"use client";

import React from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { X, ChevronRight } from "lucide-react";
import { SidebarDivider } from "./ReviewerUI";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";

export interface ProfileShellProps {
  name: string;
  title?: string;
  avatar: string;
  avatarAlt: string;
  linkedin?: string;
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
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="4.98" cy="4.98" r="2.4" />
      <rect x="2.8" y="9.5" width="4.4" height="12.5" rx="0.5" />
      <path d="M10.5 9.5h4.2v1.8c.6-1.1 2-2.1 4.1-2.1 4.4 0 5.2 2.9 5.2 6.6v6.2h-4.4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-4.4V9.5z" />
    </svg>
  );
}

function ProfileIdentity({
  name,
  title,
  avatar,
  avatarAlt,
  linkedin,
  badges,
  inDrawer,
}: Omit<ProfileShellProps, "sidebar" | "children"> & { inDrawer?: boolean }) {
  // The drawer repeats the identity block, so it uses h2 to keep one h1 per page
  const NameHeading = inDrawer ? "h2" : "h1";
  return (
    <div className="flex flex-col gap-[27px]">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
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
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent shadow-sm transition-transform hover:scale-105 hover:bg-[#dba81f]"
            >
              <LinkedinIcon className="h-5 w-5 text-primary" />
            </a>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <NameHeading className="heading-h1 text-background">
            {name}
          </NameHeading>
          {title && (
            <div className="flex items-center gap-[10px]">
              <Image
                quality={90}
                src="/legal-reviewer/legal-reviewer-bag-icon.svg"
                alt="Professional credentials"
                width={24}
          sizes="24px"
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
 * a 382px teal sidebar on desktop, and a slide-out drawer below 1024px.
 */
export function ProfileShell(props: ProfileShellProps) {
  const { name, children } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

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
    <section className="relative w-full max-w-full overflow-x-clip bg-background pb-6 lg:pb-8">
      <div className="relative z-10 flex w-full min-w-0 max-w-full flex-col items-start lg:flex-row">
        <aside className="no-scrollbar color-gradient sticky top-[135px] z-20 hidden max-h-[calc(100vh-135px)] w-[382px] shrink-0 self-start overflow-x-hidden overflow-y-auto px-[31px] pb-12 pt-6 lg:block">
          <SidebarBody {...props} />
        </aside>

        {mounted &&
          createPortal(
            <>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label={`Open ${name} profile`}
                className="color-gradient group fixed left-0 top-[55%] z-[80] flex h-[64px] w-[34px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-r-full pl-0.5 shadow-[2px_4px_16px_rgba(26,61,79,0.45)] transition-all hover:w-[44px] active:scale-95 sm:top-[50%] sm:h-[76px] sm:w-[40px] lg:hidden"
              >
                <ChevronRight className="h-5 w-5 stroke-[2.5] text-background transition-all group-hover:translate-x-0.5 group-hover:text-accent sm:h-6 sm:w-6" />
              </button>

              <div
                className={`fixed inset-0 z-[99999] flex overflow-hidden transition-all duration-300 ${isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"}`}
                role="dialog"
                aria-modal="true"
                aria-label={`${name} profile`}
              >
                <div
                  onClick={() => setIsOpen(false)}
                  className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                />

                <div
                  className={`color-gradient no-scrollbar relative z-[100000] h-full max-h-screen w-[320px] overflow-x-hidden overflow-y-auto px-[31px] pb-10 pt-6 shadow-2xl transition-transform duration-300 ease-out sm:w-[382px] ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                  <div className="mb-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/40 transition-all hover:border-white hover:bg-white/10"
                      aria-label="Close profile"
                    >
                      <X className="h-5 w-5 stroke-[2.2] text-background" />
                    </button>
                  </div>
                  <SidebarBody {...props} inDrawer />
                </div>
              </div>
            </>,
            document.body,
          )}

        <div className="flex w-full min-w-0 max-w-full flex-col px-4 pb-2 pt-6 sm:px-8 lg:max-w-[1055px] lg:flex-1 lg:px-[74px] lg:pt-8">
          <SiteBreadcrumbs className="mb-6 lg:mb-8" />
          <div className="flex min-w-0 max-w-full flex-col gap-10 break-words lg:gap-[53px]">{children}</div>
        </div>
      </div>
    </section>
  );
}
