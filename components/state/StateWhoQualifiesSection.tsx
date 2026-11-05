
import React from "react";
import Image from "next/image";
import { StateData } from "@/data/statesData";

const CONDITION_RULES: { test: RegExp; icons: string[] }[] = [
  { test: /panic|agoraphob/i, icons: ["/esa-icons/icon-1.svg", "/esa-icons/icon-10.svg"] },
  { test: /ptsd|trauma/i, icons: ["/esa-icons/icon-2.svg"] },
  { test: /depress|dysthym|grief|sadness/i, icons: ["/esa-icons/icon-3.svg"] },
  { test: /seasonal|affective|insomnia|sleep/i, icons: ["/esa-icons/glyph-1.svg"] },
  { test: /neurodiverg|neurodev|cognitive|adhd|attention/i, icons: ["/esa-icons/icon-5.svg"] },
  { test: /bipolar|cyclothym|\bmood\b/i, icons: ["/esa-icons/icon-4.svg", "/esa-icons/icon-7.svg"] },
  { test: /obsess|ocd|compuls|excoriat|dermatill|hoard|skin pick|somatic/i, icons: ["/esa-icons/icon-6.svg", "/esa-icons/icon-14.svg"] },
  { test: /communication/i, icons: ["/esa-icons/icon-34.svg"] },
  { test: /social|phobia|mutism|avoidant|withdrawal/i, icons: ["/esa-icons/icon-8.svg", "/esa-icons/icon-10.svg"] },
  { test: /schizo|psychos/i, icons: ["/esa-icons/icon-32.svg"] },
  { test: /borderline|\bbpd\b|personality/i, icons: ["/esa-icons/icon-7.svg"] },
  { test: /eating|binge/i, icons: ["/esa-icons/icon-12.svg"] },
  { test: /burnout/i, icons: ["/esa-icons/icon-12.svg", "/esa-icons/icon-1.svg"] },
  { test: /depersonal|dissociat|sensory/i, icons: ["/esa-icons/icon.svg"] },
  { test: /anxiet|worry|stress|adjustment/i, icons: ["/esa-icons/icon.svg", "/esa-icons/icon-12.svg"] },
  { test: /other/i, icons: ["/esa-icons/icon-18.svg"] },
];

const CONDITION_FALLBACKS = [
  "/esa-icons/icon-18.svg",
  "/esa-icons/icon-34.svg",
  "/esa-icons/icon-17.svg",
  "/esa-icons/icon-19.svg",
  "/esa-icons/icon-9.svg",
  "/esa-icons/icon-26.svg",
];

function iconFromRules(text: string, used: Set<string>) {
  for (const rule of CONDITION_RULES) {
    if (!rule.test.test(text)) continue;
    const icon = rule.icons.find((candidate) => !used.has(candidate));
    if (icon) return icon;
  }
  return null;
}

function conditionIcons(items: { title: string; description: string }[]) {
  const used = new Set<string>();
  return items.map((item) => {
    const icon =
      iconFromRules(item.title, used) ??
      iconFromRules(`${item.title} ${item.description}`, used) ??
      CONDITION_FALLBACKS.find((candidate) => !used.has(candidate)) ??
      CONDITION_FALLBACKS[0];
    used.add(icon);
    return icon;
  });
}

const defaultConditions = [
  {
    title: "Panic Disorder with Agoraphobia",
    description: "Frequent panic attacks restricting leaving homes and public spaces.",
    icon: "/esa-icons/icon.svg",
  },
  {
    title: "Chronic PTSD",
    description: "Trauma-related flashbacks affecting daily life or emotional regulation.",
    icon: "/esa-icons/icon-1.svg",
  },
  {
    title: "Persistent Depressive Disorder",
    description: "Long-term depressive symptoms affecting motivation and energy.",
    icon: "/esa-icons/icon-2.svg",
  },
  {
    title: "Obsessive-Compulsive Disorder",
    description: "Intrusive thoughts or compulsions disrupting routine activities.",
    icon: "/esa-icons/icon-4.svg",
  },
];

function renderTextWithLinks(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const [, label, url] = match;
    parts.push(
      <a
        key={match.index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline hover:text-[#1D6E72] font-bold transition-colors"
      >
        {label}
      </a>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export function StateWhoQualifiesSection({ data }: { data: StateData }) {
  const stateName = data.name;
  const conditions = data.whoQualifiesConditions && data.whoQualifiesConditions.length > 0
    ? data.whoQualifiesConditions
    : defaultConditions;

  const title = data.whoQualifiesTitle || `Who May Eligible For ESA Letter in ${stateName}?`;
  const subtitle = data.whoQualifiesSubtitle || `${stateName} residents finding troubles in completing everyday tasks and activities can get themselves evaluated by licensed mental health professionals (LMHP) in ${stateName} to check the need for emotional support animals. During this process, clinicians may consider a range of medical conditions, which include but are not limited to:`;
  const sectionHeading = data.whoQualifiesSectionHeading ?? "Qualifying Conditions";
  const icons = conditionIcons(conditions);

  return (
    <section className="w-full bg-white pt-0 pb-12 sm:pb-16 lg:py-0 overflow-hidden relative z-10">
      <div className="w-full max-w-[1440px] ml-auto mr-0 px-0 lg:pl-8 xl:pl-16 lg:pr-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-4 xl:gap-8 items-stretch">
          <div className="order-1 lg:order-2 lg:col-span-6 relative flex justify-end w-full lg:h-full lg:min-h-full">
            <div className="sm:hidden relative w-full aspect-[390/440]">
              <Image
            quality={90}
                src={data.whoQualifiesImageMobile ?? "/states/california-who-qualifies-mobile.webp"}
                alt={`Who May Eligible For ESA Letter in ${stateName} Mobile View`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 639px) 100vw, 1px"
              />
              <div className="absolute bottom-0 left-[73.8%] -translate-x-1/2 translate-y-1/2 z-10 w-10 h-10">
                <Image
            quality={90}
                  src="/states/whomayqualifies-california-icon.webp"
                  alt="Heart Icon"
                  width={40}
          sizes="40px"
                  height={40}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>

            <div className="hidden sm:block lg:hidden relative w-full aspect-[834/943]">
              <Image
            quality={90}
                src={data.whoQualifiesImageTablet ?? "/states/california-who-qualifies-tablet.webp"}
                alt={`Who May Eligible For ESA Letter in ${stateName} Tablet View`}
                fill
                className="object-cover object-top"
                sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
              />
              <div className="absolute bottom-0 left-[75.3%] -translate-x-1/2 translate-y-1/2 z-10 w-12 h-12">
                <Image
            quality={90}
                  src="/states/whomayqualifies-california-icon.webp"
                  alt="Heart Icon"
                  width={48}
          sizes="48px"
                  height={48}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>

            <div className="hidden lg:block relative w-full h-full ml-auto">
              <Image
            quality={90}
                src={data.whoQualifiesImage ?? "/states/whomayqualifies.webp"}
                alt={`Who qualifies for ${stateName} ESA Letter`}
                fill
                className="object-fill pointer-events-none"
                sizes="45vw"
              />
              <div className="absolute left-[9.2%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 xl:w-16 xl:h-16">
                <Image
            quality={90}
                  src="/states/whomayqualifies-california-icon.webp"
                  alt="Heart Icon"
                  width={64}
          sizes="64px"
                  height={64}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-1 lg:col-span-6 pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-0 lg:pr-2 xl:pr-4 pt-4 pb-4 sm:pb-6 lg:py-6 flex flex-col justify-center">
            <div className="mb-5 sm:mb-6 lg:mb-6 xl:mb-8">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[32px] xl:text-[44px] font-bold text-primary leading-[1.16] tracking-tight mb-3 sm:mb-4 lg:mb-3.5 xl:mb-5">
                {title}
              </h2>
              <p className="body-large text-body-text max-w-[540px]">
                {renderTextWithLinks(subtitle)}
              </p>
            </div>

            <div>
              {sectionHeading ? (
                <h3 className="font-heading text-base sm:text-lg lg:text-[18px] xl:text-[28px] font-bold text-primary mb-3 sm:mb-3.5 lg:mb-3.5 xl:mb-4">
                  {sectionHeading}
                </h3>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-3 xl:gap-4 max-w-[620px]">
                {conditions.map((item, idx) => (
                  <div
                    key={item.title}
                    className="hover-card hover-surface bg-white rounded-[18px] border border-[#EAE5DC] shadow-[0px_1px_4px_rgba(0,0,0,0.08)] p-4 sm:p-5 flex flex-col items-start gap-3 h-full text-left"
                  >
                    <div className="hover-badge relative flex h-12 w-12 items-center justify-center rounded-full bg-[#F6F1E8] shrink-0">
                      <Image
                        quality={90}
                        src={icons[idx]}
                        alt=""
                        width={26}
          sizes="26px"
                        height={26}
                        unoptimized
                        className="h-[26px] w-[26px] object-contain"
                      />
                    </div>
                    <h4 className="font-heading text-[18px] sm:text-[20px] font-bold text-primary leading-snug">
                      {item.title}
                    </h4>
                    <p className="body text-[#5F6B6F]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {data.whoQualifiesNote && (
                <div className="mt-4 max-w-[620px] relative overflow-hidden bg-background rounded-[10px] py-3 px-4 shadow-xs flex items-center pl-6 text-left border border-[#EAE5DC]/60">
                  <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-accent rounded-l-[10px]" />
                  <p className="font-sans text-[11.5px] sm:text-xs lg:text-[13px] font-semibold text-body-text leading-relaxed">
                    <span className="font-bold text-primary uppercase tracking-wider">
                      {/^important\s*note/i.test(data.whoQualifiesNote)
                        ? "IMPORTANT NOTE - "
                        : /^note/i.test(data.whoQualifiesNote)
                        ? "NOTE - "
                        : "IMPORTANT - "}
                    </span>
                    {data.whoQualifiesNote.replace(/^(important\s*note[:\s-]*|important[:\s-]*|note[:\s-]*)/i, "")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
