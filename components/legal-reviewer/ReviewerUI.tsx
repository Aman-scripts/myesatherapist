import React from "react";

/*
 * Shared building blocks for author / contributor / reviewer profile pages.
 * Built from the "Legal Reviewer Page" Figma frame. Typography uses the global
 * heading-* / body-* classes and colors use the globals.css tokens only.
 */

/* ------------------------------------------------------------------ */
/* Main column                                                         */
/* ------------------------------------------------------------------ */

// Pill label above each section (Figma Frame 1000011819: h 26, pl 12, pr 24, radius 42)
export function SectionBadge({ title }: { title: string }) {
  return (
    <div className="self-start inline-flex items-center gap-[10px] h-[26px] pl-3 pr-6 rounded-[42px] bg-white border-[0.4px] border-[#E4E4E4] shadow-[0px_1px_0px_rgba(64,64,64,0.15)] body-text whitespace-nowrap">
      <span aria-hidden="true" className="w-1 h-1 rounded-full bg-body-text shrink-0" />
      <span>{title}</span>
    </div>
  );
}

// Thin divider between sections (Figma Line 14: 0.2px, color-body-text)
export function SectionDivider() {
  return <hr className="w-full border-0 border-t-[0.5px] border-body-text/40" />;
}

// Gold-rimmed tag (Figma Frame 1000011816: accent lip 5px, white inner pill h 32, body-small)
export function GoldLipBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex flex-col pt-[5px] bg-accent rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-center min-h-[32px] px-4 bg-white rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] body-small text-center">
        {children}
      </div>
    </div>
  );
}

export function TagList({ tags, className = "" }: { tags: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-3 max-w-[824px] ${className}`}>
      {tags.map((tag) => (
        <GoldLipBadge key={tag}>{tag}</GoldLipBadge>
      ))}
    </div>
  );
}

// Gold-rimmed title + subtitle card (Figma Frame 1000011816 in the About block: inner h 53)
export function FocusCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col pt-[5px] bg-accent rounded-[20px] shadow-[0px_1px_4px_rgba(0,0,0,0.15)]">
      <div className="flex flex-col items-center justify-center min-h-[53px] px-[30px] py-1 bg-white rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] text-center">
        <span className="body-text text-primary">{title}</span>
        <span className="body-small">{subtitle}</span>
      </div>
    </div>
  );
}

export function FocusCardRow({ cards }: { cards: Array<{ title: string; subtitle: string }> }) {
  return (
    <div className="flex flex-wrap items-center gap-[18px]">
      {cards.map((card) => (
        <FocusCard key={card.title} title={card.title} subtitle={card.subtitle} />
      ))}
    </div>
  );
}

// About block: badge, H2 heading, body-large paragraphs, then cards/tags
export function AboutSection({
  heading,
  paragraphs,
  children,
  keepCase = false,
  showBadge = true,
}: {
  heading: React.ReactNode;
  paragraphs: string[];
  children?: React.ReactNode;
  /** Show the heading exactly as written instead of Figma title case */
  keepCase?: boolean;
  /** Show the "About" pill above the heading */
  showBadge?: boolean;
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        {showBadge && <SectionBadge title="About" />}
        <div className="flex flex-col gap-2 max-w-[809px]">
          <h2 className={`heading-h2 text-balance ${keepCase ? "" : "capitalize"}`}>{heading}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="body-large">
              {p}
            </p>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}

// One education entry: H3 degree, optional field of study, institution, date on the right, optional honor tags
export function EducationEntry({
  degree,
  field,
  institution,
  date,
  honors,
  keepCase = false,
}: {
  degree: string;
  field?: string;
  institution: string;
  date?: string;
  honors?: string[];
  /** Show the degree exactly as written instead of Figma title case */
  keepCase?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-start gap-x-2 gap-y-1 max-w-[813px]">
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <h3 className={`heading-h3 ${keepCase ? "" : "capitalize"}`}>{degree}</h3>
          <div className="flex flex-col">
            {field && <p className="body-large">{field}</p>}
            <p className="body-text">{institution}</p>
          </div>
        </div>
        {date && <span className="body-small whitespace-nowrap sm:pt-[5px] order-first sm:order-none">{date}</span>}
      </div>
      {honors && honors.length > 0 && <TagList tags={honors} />}
    </div>
  );
}

export function EducationSection({
  title = "Education",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-12">
      <SectionBadge title={title} />
      <div className="flex flex-col gap-12">{children}</div>
    </div>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-[10px] body-text">
      <span aria-hidden="true" className="w-1 h-1 rounded-full bg-body-text shrink-0 mt-[11px] ml-[10px]" />
      <span>{children}</span>
    </li>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <BulletItem key={item}>{item}</BulletItem>
      ))}
    </ul>
  );
}

// Two-column bullet list (Figma Frame 1000011870 "Area of Expertise")
export function BulletColumns({ title, items }: { title: string; items: string[] }) {
  const half = Math.ceil(items.length / 2);
  return (
    <div className="flex flex-col gap-[29px]">
      <SectionBadge title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 max-w-[793px]">
        <BulletList items={items.slice(0, half)} />
        <BulletList items={items.slice(half)} />
      </div>
    </div>
  );
}

// Numbered responsibility row (Figma Frame 1000011854: number 44/54 at 46% opacity, gap 24)
export function NumberedItem({
  number,
  title,
  description,
  keepCase = false,
}: {
  number: string;
  title: string;
  description: string;
  /** Show the title exactly as written instead of Figma title case */
  keepCase?: boolean;
}) {
  return (
    <div className="flex items-start gap-4 sm:gap-6 max-w-[824px]">
      <span
        aria-hidden="true"
        className="font-heading font-bold text-[32px] leading-[40px] sm:text-[44px] sm:leading-[54px] text-body-text opacity-[0.46] shrink-0 w-[46px] sm:mt-3"
      >
        {number}
      </span>
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <h3 className={`heading-h3 ${keepCase ? "" : "capitalize"}`}>{title}</h3>
        <p className="body-text">{description}</p>
      </div>
    </div>
  );
}

export function NumberedSection({
  title,
  items,
  children,
  keepCase = false,
}: {
  title: string;
  items: Array<{ title: string; description: string }>;
  children?: React.ReactNode;
  /** Show item titles exactly as written instead of Figma title case */
  keepCase?: boolean;
}) {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-[38px]">
        <SectionBadge title={title} />
        <div className="flex flex-col gap-10">
          {items.map((item, i) => (
            <NumberedItem
              key={item.title}
              number={String(i + 1).padStart(2, "0")}
              title={item.title}
              description={item.description}
              keepCase={keepCase}
            />
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}

// Tag cloud with its own badge (Figma "Area I Specifically Evaluate")
export function TagSection({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className="flex flex-col gap-[30px]">
      <SectionBadge title={title} />
      <TagList tags={tags} />
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg width="42" height="32" viewBox="0 0 42 32" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M0 18.2857C0 8.19048 6.72 0 17.28 0V7.61905C11.52 7.61905 8.64 11.4286 8.64 16.7619H17.28V32H0V18.2857ZM24.72 18.2857C24.72 8.19048 31.44 0 42 0V7.61905C36.24 7.61905 33.36 11.4286 33.36 16.7619H42V32H24.72V18.2857Z"
        fill="url(#profile_quote_gradient)"
      />
      <defs>
        <linearGradient id="profile_quote_gradient" x1="42" y1="32" x2="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3E8D69" />
          <stop offset="1" stopColor="#24553F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Quote block (Figma Frame 1000011877: badge, then quote icon + body-text, gap 19)
export function QuoteStatement({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col gap-12">
      <SectionBadge title={title} />
      <div className="flex items-start gap-[19px] max-w-[813px]">
        <QuoteIcon />
        <p className="body-text flex-1">{text}</p>
      </div>
    </div>
  );
}

function DisclosureCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-[5px]">
      <path d="M1.5 8.5L5.5 12.5L14.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Dark gradient card (Figma Frame 1000011876: padding 33 37, radius 30)
export function DisclosureCard({
  title,
  items,
  paragraphs,
  keepCase = false,
}: {
  title: string;
  items?: string[];
  paragraphs?: string[];
  /** Show the title exactly as written instead of Figma uppercase */
  keepCase?: boolean;
}) {
  return (
    <div className="w-full max-w-[864px] rounded-[30px] px-6 py-7 sm:px-[37px] sm:py-[33px] color-gradient text-background">
      <div className="flex flex-col gap-[22px]">
        <h3 className={`heading-h4 text-background ${keepCase ? "" : "uppercase"}`}>{title}</h3>
        {items && (
          <ul className="flex flex-col gap-5">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-[22px] body-text text-background">
                <DisclosureCheck />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        {paragraphs && (
          <div className="flex flex-col gap-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="body-text text-background">
                {p}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Generic text section (badge + optional intro, bullets, closing)
export function TextSection({
  title,
  intro,
  bullets,
  closing,
}: {
  title: string;
  intro?: string;
  bullets?: string[];
  closing?: string;
}) {
  return (
    <div className="flex flex-col gap-[29px]">
      <SectionBadge title={title} />
      <div className="flex flex-col gap-4">
        {intro && <p className="body-large">{intro}</p>}
        {bullets && <BulletList items={bullets} />}
        {closing && <p className="body-large">{closing}</p>}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sidebar                                                             */
/* ------------------------------------------------------------------ */

// Full-width 0.2px white line across the sidebar (Figma Line 11 / Line 13)
export function SidebarDivider() {
  return <hr className="-mx-[31px] border-0 border-t-[0.5px] border-white/60" />;
}

// Sidebar group: H3 title at 40% cream, then content (Figma Frame 1000011837, gap 16)
export function SidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="heading-h3 text-background/40">{title}</h3>
      {children}
    </div>
  );
}

// Bulleted list with optional year on the right (Figma "Licensure" rows)
export function SidebarList({ items }: { items: Array<{ label: string; year?: string }> }) {
  return (
    <ul className="flex flex-col gap-[7px]">
      {items.map((item) => (
        <li key={item.label} className="flex items-start justify-between gap-4">
          <span className="flex items-start gap-[10px] body-text text-background">
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-background shrink-0 mt-[11px] ml-[10px]" />
            <span>{item.label}</span>
          </span>
          {item.year && <span className="body-small text-background whitespace-nowrap">{item.year}</span>}
        </li>
      ))}
    </ul>
  );
}

// Inline dot-separated list (Figma "Authorize to Practice": New York · United Kingdom)
export function SidebarInline({ items }: { items: string[] }) {
  return (
    <p className="body-text text-background flex flex-wrap gap-x-2">
      {items.map((item, i) => (
        <span key={item}>
          {i > 0 && <span aria-hidden="true">· </span>}
          {item}
        </span>
      ))}
    </p>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

// Professional profile links (Figma Frame 1000011842: icon 16 + body-text, gap 4)
export function SidebarLinks({
  links,
  onLinkClick,
}: {
  links: Array<{ label: string; href: string; icon?: "linkedin" | "link" }>;
  onLinkClick?: () => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onLinkClick}
          className="inline-flex items-center gap-[10px] body-text text-background hover:text-accent transition-colors w-fit"
        >
          {link.icon === "linkedin" ? <LinkedinIcon /> : <LinkIcon />}
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}
