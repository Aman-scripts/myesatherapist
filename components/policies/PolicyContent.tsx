import React from "react";
import Link from "next/link";
import { PolicyDocument, PolicyContentBlock } from "@/data/policiesData";

interface PolicyContentProps {
  policy: PolicyDocument;
}

export function PolicyContent({ policy }: PolicyContentProps) {
  // Helper to render inline HTML safely since the source HTML has inline links and tags
  const renderInlineHtml = (htmlContent: string) => {
    // Rewrite any links to # or relative links, and style bold text
    const cleanHtml = htmlContent
      .replace(/<strong>/gi, '<strong class="font-bold text-[#2E5A66]">')
      .replace(/<b>/gi, '<b class="font-bold text-[#2E5A66]">')
      .replace(/href="#"/g, 'href="/pricing/"')
      .replace(/href="terms-of-use\.html"/g, 'href="/terms-of-use/"')
      .replace(/href="privacy-policy\.html"/g, 'href="/privacy-policy/"')
      .replace(/href="refund-policy\.html"/g, 'href="/policies/refund-policy/"')
      .replace(/href="consent-for-telehealth\.html"/g, 'href="/policies/consent-for-telehealth/"')
      .replace(/href="hipaa-compliance\.html"/g, 'href="/hipaa-compliance/"')
      .replace(/href="editorial-policy\.html"/g, 'href="/policies/editorial-policy/"')
      .replace(/href="disclaimer-and-policies\.html"/g, 'href="/disclaimer/"')
      .replace(/href="accessibility-statement\.html"/g, 'href="/policies/accessibility-statement/"');

    return <span dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
  };

  const renderBlock = (block: PolicyContentBlock, bIdx: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p
            key={bIdx}
            className="text-base sm:text-[17px] leading-[28px] sm:leading-[30px] text-[#5F6B6F] font-sans font-medium"
          >
            {block.html ? renderInlineHtml(block.html) : block.text}
          </p>
        );

      case "note":
        return (
          <div
            key={bIdx}
            className="w-full bg-[#FEF8EC] border-l-[5px] border-[#E8B92C] rounded-[12px] p-4 sm:p-5 my-5 shadow-2xs"
          >
            <p className="text-sm sm:text-base leading-[24px] sm:leading-[26px] text-[#2E5A66] font-sans font-medium">
              {block.html ? renderInlineHtml(block.html) : block.text}
            </p>
          </div>
        );

      case "checklist":
        return (
          <ul key={bIdx} className="space-y-3 my-4 pl-1">
            {block.items?.map((item, iIdx) => (
              <li key={iIdx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[#5F6B6F] font-sans font-medium">
                <svg
                  className="w-5 h-5 text-[#2E5A66] shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" className="stroke-[#EAE5DC]" strokeWidth="1.5" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <div className="flex-1">
                  {item.html ? renderInlineHtml(item.html) : item.text}
                </div>
              </li>
            ))}
          </ul>
        );

      case "two-col-checklist":
        return (
          <div key={bIdx} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-5">
            {block.columns?.map((col, cIdx) => (
              <ul key={cIdx} className="space-y-3">
                {col.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3 text-sm sm:text-[15px] leading-relaxed text-[#5F6B6F] font-sans font-medium">
                    <svg
                      className="w-5 h-5 text-[#2E5A66] shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" className="stroke-[#EAE5DC]" strokeWidth="1.5" />
                      <polyline points="8 12 11 15 16 9" />
                    </svg>
                    <div className="flex-1">
                      {item.html ? renderInlineHtml(item.html) : item.text}
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        );

      case "subblock":
        return (
          <div key={bIdx} className="mt-6 pt-5 border-t border-[#EAE5DC] space-y-3">
            {block.tag && (
              <span className="inline-flex items-center justify-center text-sm sm:text-base font-sans font-bold bg-[#FAF7F2] text-[#2E5A66] border border-[#EAE5DC] px-4 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-2xs">
                {block.tag}
              </span>
            )}
            {block.title && (
              <h3 className="font-heading text-lg sm:text-xl lg:text-[22px] font-bold text-[#2E5A66] leading-snug tracking-tight">
                {block.title}
              </h3>
            )}
            {block.paragraphs?.map((p, pIdx) => (
              <p key={pIdx} className="text-sm sm:text-base leading-[26px] sm:leading-[28px] text-[#5F6B6F] font-sans font-medium">
                {p.html ? renderInlineHtml(p.html) : p.text}
              </p>
            ))}
            {block.items && block.items.length > 0 && (
              <ul className="space-y-2.5 pl-1 my-3">
                {block.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[#5F6B6F] font-sans font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#E8B92C] mt-2.5 shrink-0" />
                    <div className="flex-1">
                      {item.html ? renderInlineHtml(item.html) : item.text}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );

      case "field-table":
        return (
          <div key={bIdx} className="my-5">
            <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 sm:gap-x-8 gap-y-3 text-sm sm:text-base font-sans items-baseline">
              {block.fields?.map((f, fIdx) => (
                <React.Fragment key={fIdx}>
                  <dt className="font-bold text-[#2E5A66] whitespace-nowrap">{f.label}</dt>
                  <dd className="font-medium text-[#5F6B6F] leading-relaxed mb-1 sm:mb-0">{f.value}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
        );

      case "policy-grid":
        return (
          <div key={bIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-5">
            {block.cards?.map((card, cIdx) => {
              const slugMap: Record<string, string> = {
                "terms of use": "/terms-of-use/",
                "privacy policy": "/privacy-policy/",
                "consent for telehealth": "/policies/consent-for-telehealth/",
                "refund policy": "/policies/refund-policy/",
                "hipaa compliance": "/hipaa-compliance/",
                "editorial policy": "/policies/editorial-policy/",
                "accessibility statement": "/policies/accessibility-statement/",
                "disclaimer & policies": "/disclaimer/",
                "disclaimer": "/disclaimer/",
                "medical disclaimer": "/disclaimer/",
              };
              const mappedHref = slugMap[card.title.toLowerCase()] || card.href || "/privacy-policy/";

              return (
                <Link
                  key={cIdx}
                  href={mappedHref}
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-[16px] border border-[#EAE5DC] bg-white hover:border-[#2E5A66] hover:shadow-md transition-all font-sans font-bold text-sm sm:text-base text-[#2E5A66]"
                >
                  <span>{card.title}</span>
                  <svg
                    className="w-4 h-4 text-[#E8B92C] group-hover:translate-x-1 transition-transform shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              );
            })}
          </div>
        );

      case "button": {
        const targetHref =
          block.href && !block.href.startsWith("mailto:")
            ? block.href
            : "/contact-us/";

        return (
          <div key={bIdx} className="my-6">
            <Link
              href={targetHref}
              className="inline-flex items-center gap-2.5 rounded-[30px] text-white px-6 py-3 text-sm sm:text-base font-sans font-bold transition-opacity hover:opacity-90 shadow-sm"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <svg className="w-4 h-4 text-[#E8B92C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16v12H4z" />
                <path d="M4 7l8 6 8-6" />
              </svg>
              <span>{block.text}</span>
            </Link>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <article className="w-full space-y-10 lg:space-y-12">
      {/* 1. Summary / Highlight Block (Matching Ongo aboutBlock with Project Colors) */}
      {policy.sections.length > 0 && policy.sections[0].blocks.length > 0 && (
        <div
          id={policy.sections[0].id}
          className="scroll-mt-[148px] relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#EAE5DC] bg-white p-6 sm:p-8 lg:p-10 shadow-[0px_4px_20px_rgba(26,61,79,0.06)] space-y-4"
        >
          <div className="flex items-center gap-3.5 mb-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2E5A66] text-[#E8B92C] shadow-xs shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#2E5A66] leading-tight">
              {policy.sections[0].title}
            </h2>
          </div>
          <div className="space-y-3.5">
            {policy.sections[0].blocks.map((block, idx) => renderBlock(block, idx))}
          </div>
        </div>
      )}

      {/* 2. Main Numbered Sections Stack (Sections 1 onwards) */}
      <div className="space-y-10">
        {policy.sections.slice(1).map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="scroll-mt-[148px] bg-white border border-[#EAE5DC] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] space-y-6 transition-all hover:shadow-[0px_8px_24px_rgba(46,90,102,0.08)]"
          >
            {/* Section Header with Project-Style Numeral Badge */}
            <div className="flex items-center gap-4 pb-3 border-b border-[#EAE5DC]">
              <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#AEBBBE]/20 flex items-center justify-center shrink-0">
                <span className="font-heading font-bold text-xl sm:text-2xl text-[#2E5A66]">
                  {sec.number}
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#2E5A66] leading-snug tracking-tight">
                {sec.title}
              </h2>
            </div>

            {/* Section Body Blocks */}
            <div className="space-y-4 pt-1">
              {sec.blocks.map((block, bIdx) => renderBlock(block, bIdx))}
            </div>
          </section>
        ))}
      </div>

      {/* 3. Key Takeaways Section */}
      {policy.takeaways && policy.takeaways.length > 0 && (
        <section id="key-takeaways" className="scroll-mt-28 space-y-5 pt-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2E5A66] text-[#E8B92C] font-heading font-bold text-base shadow-xs">
              ✓
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2E5A66] tracking-tight">
              Key Takeaways
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {policy.takeaways.map((point, tIdx) => (
              <div
                key={tIdx}
                className="flex items-start gap-3.5 p-5 rounded-[18px] bg-white border border-[#EAE5DC] shadow-xs hover:border-[#2E5A66]/30 transition-colors"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8B92C]/20 text-[#2E5A66] mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <p className="font-sans text-sm sm:text-[15px] font-semibold text-[#2E5A66] leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Reviewer Line Card */}
      {policy.reviewerLine && (
        <div className="flex items-center gap-4 p-5 sm:p-6 rounded-[20px] bg-white border border-[#EAE5DC] shadow-xs">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2E5A66] text-[#E8B92C] font-bold text-sm">
            ✓
          </div>
          <p className="font-sans text-sm sm:text-base text-[#5F6B6F] font-medium leading-relaxed">
            <span className="font-bold text-[#2E5A66]">{policy.reviewerLine}</span>
          </p>
        </div>
      )}
    </article>
  );
}
