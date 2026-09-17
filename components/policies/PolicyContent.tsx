import React from "react";
import Link from "next/link";
import { PolicyDocument, PolicyContentBlock } from "@/data/policiesData";

interface PolicyContentProps {
  policy: PolicyDocument;
}

export function PolicyContent({ policy }: PolicyContentProps) {
  // Helper to render inline HTML safely since the source HTML has inline links and tags
  const renderInlineHtml = (htmlContent: string) => {
    // Rewrite any links to # or relative links
    const cleanHtml = htmlContent
      .replace(/href="#"/g, 'href="/pricing/"')
      .replace(/href="terms-of-use\.html"/g, 'href="/policies/terms-of-use/"')
      .replace(/href="privacy-policy\.html"/g, 'href="/policies/privacy-policy/"')
      .replace(/href="refund-policy\.html"/g, 'href="/policies/refund-policy/"')
      .replace(/href="consent-for-telehealth\.html"/g, 'href="/policies/consent-for-telehealth/"')
      .replace(/href="hipaa-compliance\.html"/g, 'href="/policies/hipaa-compliance/"')
      .replace(/href="editorial-policy\.html"/g, 'href="/policies/editorial-policy/"')
      .replace(/href="disclaimer-and-policies\.html"/g, 'href="/policies/disclaimer-and-policies/"')
      .replace(/href="accessibility-statement\.html"/g, 'href="/policies/accessibility-statement/"');

    return <span dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
  };

  const renderBlock = (block: PolicyContentBlock, bIdx: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p
            key={bIdx}
            className="text-sm sm:text-base leading-[26px] sm:leading-[28px] text-[#5F6B6F] font-sans font-normal"
          >
            {block.html ? renderInlineHtml(block.html) : block.text}
          </p>
        );

      case "note":
        return (
          <div
            key={bIdx}
            className="w-full bg-[#FEF8EC] border-l-[4px] border-[#EFBF2F] rounded-r-xl p-4 sm:p-5 my-4"
          >
            <p className="text-xs sm:text-sm leading-relaxed text-[#2E5A66] font-sans font-medium">
              {block.html ? renderInlineHtml(block.html) : block.text}
            </p>
          </div>
        );

      case "checklist":
        return (
          <ul key={bIdx} className="space-y-2.5 my-3 pl-1">
            {block.items?.map((item, iIdx) => (
              <li key={iIdx} className="flex items-start gap-3 text-xs sm:text-[15px] leading-relaxed text-[#2E5A66] font-medium">
                <svg
                  className="w-4 h-4 text-[#2E5A66] shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" className="stroke-[#DECDBB]" strokeWidth="1.5" />
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
          <div key={bIdx} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 my-4">
            {block.columns?.map((col, cIdx) => (
              <ul key={cIdx} className="space-y-2.5">
                {col.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-[14px] leading-relaxed text-[#2E5A66] font-medium">
                    <svg
                      className="w-4 h-4 text-[#2E5A66] shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" className="stroke-[#DECDBB]" strokeWidth="1.5" />
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
          <div key={bIdx} className="mt-5 pt-4 border-t border-dashed border-[#EAE5DC] space-y-2.5">
            {block.tag && (
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-[#FEF8EC] text-[#B9852E] border border-[#EFBF2F]/30 px-2.5 py-0.5 rounded-md">
                {block.tag}
              </span>
            )}
            {block.title && (
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#2E5A66]">
                {block.title}
              </h3>
            )}
            {block.paragraphs?.map((p, pIdx) => (
              <p key={pIdx} className="text-xs sm:text-sm leading-relaxed text-[#5F6B6F] font-sans font-normal">
                {p.html ? renderInlineHtml(p.html) : p.text}
              </p>
            ))}
            {block.items && block.items.length > 0 && (
              <ul className="space-y-2 pl-1 my-2">
                {block.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2E5A66] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EFBF2F] mt-2 shrink-0" />
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
          <div key={bIdx} className="my-4 bg-[#FDFBF7] border border-[#EAE5DC] rounded-xl p-4 sm:p-5">
            <dl className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2.5 text-xs sm:text-sm">
              {block.fields?.map((f, fIdx) => (
                <React.Fragment key={fIdx}>
                  <dt className="font-bold text-[#2E5A66]">{f.label}:</dt>
                  <dd className="text-[#5F6B6F] font-normal mb-1 sm:mb-0">{f.value}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
        );

      case "policy-grid":
        return (
          <div key={bIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            {block.cards?.map((card, cIdx) => {
              const slugMap: Record<string, string> = {
                "terms of use": "/policies/terms-of-use/",
                "privacy policy": "/policies/privacy-policy/",
                "consent for telehealth": "/policies/consent-for-telehealth/",
                "refund policy": "/policies/refund-policy/",
                "hipaa compliance": "/policies/hipaa-compliance/",
                "editorial policy": "/policies/editorial-policy/",
                "accessibility statement": "/policies/accessibility-statement/",
                "disclaimer & policies": "/policies/disclaimer-and-policies/",
              };
              const mappedHref = slugMap[card.title.toLowerCase()] || card.href || "/policies/privacy-policy/";

              return (
                <Link
                  key={cIdx}
                  href={mappedHref}
                  className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-[#EAE5DC] bg-white hover:border-[#2E5A66] hover:shadow-xs transition-all text-xs sm:text-sm font-bold text-[#2E5A66]"
                >
                  <span>{card.title}</span>
                  <svg
                    className="w-4 h-4 text-[#EFBF2F] group-hover:translate-x-1 transition-transform shrink-0"
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

      case "button":
        return (
          <div key={bIdx} className="my-5">
            <a
              href={block.href || "mailto:info@myesatherapist.com"}
              className="inline-flex items-center gap-2 rounded-full bg-[#2E5A66] hover:bg-[#163038] text-white px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all shadow-xs"
            >
              <svg className="w-4 h-4 text-[#EFBF2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16v12H4z" />
                <path d="M4 7l8 6 8-6" />
              </svg>
              <span>{block.text}</span>
            </a>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <article className="w-full space-y-10 lg:space-y-12">
      {/* 1. Summary / Highlight Block (Matching Ongo aboutBlock) */}
      {policy.sections.length > 0 && policy.sections[0].blocks.length > 0 && (
        <div className="relative overflow-hidden rounded-[20px] border border-[#DECDBB]/80 bg-gradient-to-br from-[#FEF8EC] via-[#FFFDF8] to-[#F7F4EE] p-5 sm:p-7 shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2E5A66] text-[#EFBF2F] shadow-xs">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-[#2E5A66]">
              {policy.sections[0].title}
            </h2>
          </div>
          <div className="space-y-3">
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
            className="scroll-mt-28 bg-white border border-[#EAE5DC] rounded-[24px] p-6 sm:p-8 lg:p-9 shadow-xs space-y-5 transition-shadow hover:shadow-md"
          >
            {/* Section Header with Numeral Badge */}
            <div className="flex items-center gap-3.5 pb-2 border-b border-[#EAE5DC]/60">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E4EFEC] font-heading font-bold text-sm sm:text-base text-[#2E5A66]">
                {sec.number}
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#2E5A66] leading-tight">
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

      {/* 3. Key Takeaways Strip */}
      {policy.takeaways && policy.takeaways.length > 0 && (
        <section id="key-takeaways" className="scroll-mt-28 space-y-4 pt-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FEF8EC] text-[#B9852E] font-heading font-bold text-sm">
              ✓
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#2E5A66]">
              Key Takeaways
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {policy.takeaways.map((point, tIdx) => (
              <div
                key={tIdx}
                className="flex items-start gap-3 p-4 sm:p-5 rounded-[18px] bg-white border border-[#EAE5DC] shadow-xs"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EFBF2F]/20 text-[#B9852E] mt-0.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#2E5A66] leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Reviewer Line */}
      {policy.reviewerLine && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F7F4EE] border border-[#EAE5DC] text-xs sm:text-sm text-[#5F6B6F]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2E5A66] text-white font-bold text-xs">
            ✓
          </div>
          <p className="font-medium">
            <span className="font-bold text-[#2E5A66]">{policy.reviewerLine}</span>
          </p>
        </div>
      )}
    </article>
  );
}
