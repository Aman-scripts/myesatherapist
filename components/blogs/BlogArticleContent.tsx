"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogArticle, BlogCalloutBox } from "@/data/blogsData";

interface BlogArticleContentProps {
  article: BlogArticle;
}

export function BlogArticleContent({ article }: BlogArticleContentProps) {

  const renderFormattedText = (content: string): React.ReactNode => {
    if (!content) return content;

    const regex = /\[([^\]]+)\]\(([^)]+)\)|<a\s+(?:[^>]*?\s+)?href=["']([^"']+)["'][^>]*>(.*?)<\/a>|\*\*([^*]+)\*\*|<(?:strong|b)[^>]*>([\s\S]*?)<\/(?:strong|b)>/gi;

    if (!regex.test(content)) {
      return content;
    }

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    regex.lastIndex = 0;

    while ((match = regex.exec(content)) !== null) {
      const fullMatch = match[0];
      const matchIndex = match.index;

      const linkText = match[1] || match[4];
      const linkUrl = match[2] || match[3];
      const boldText = match[5] || match[6];

      if (matchIndex > lastIndex) {
        parts.push(content.substring(lastIndex, matchIndex));
      }

      if (linkText && linkUrl) {
        parts.push(
          <Link
            key={`${matchIndex}-${linkUrl}`}
            href={linkUrl}
            className="text-[#8A6A0B] font-semibold hover:underline transition-colors"
          >
            {linkText}
          </Link>
        );
      } else if (boldText) {
        parts.push(
          <strong
            key={`${matchIndex}-bold`}
            className="font-bold text-[#2E5A66]"
          >
            {boldText}
          </strong>
        );
      }

      lastIndex = matchIndex + fullMatch.length;
    }

    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    return parts;
  };

  const renderCalloutBox = (callout: BlogCalloutBox) => (
    <div className="w-full bg-[#FEF8EC] border-l-[5px] border-[#EFBF2F] rounded-[8px] p-4 sm:p-5 my-5">
      <p className="font-sans text-sm sm:text-base leading-[24px] sm:leading-[26px] text-[#2E5A66] font-medium">
        {callout.prefix && <>{renderFormattedText(callout.prefix)} </>}
        {callout.linkText && callout.linkHref ? (
          <Link
            href={callout.linkHref}
            className="text-[#8A6A0B] font-semibold hover:underline transition-colors"
          >
            {callout.linkText}
          </Link>
        ) : null}
        {callout.suffix && <> {renderFormattedText(callout.suffix)}</>}
        {callout.text && renderFormattedText(callout.text)}
      </p>
    </div>
  );

  return (
    <div className="w-full flex-1 max-w-[870px] space-y-10 lg:space-y-12 text-[#5F6B6F] font-sans">
      
      {/* 1. Question Callout Card (From top of doc) */}
      {article.questionCallout && (
        <div
          id={article.questionCallout.id}
          className="w-full bg-[#EDEFEA] border border-[#1D6E72]/25 border-l-[6px] border-l-[#1D6E72] rounded-[20px] p-5 sm:p-7 shadow-xs space-y-3"
        >
          <h2 className="font-heading text-lg sm:text-xl font-bold text-[#2E5A66]">
            {article.questionCallout.question}
          </h2>
          <p className="text-sm sm:text-base leading-[26px] sm:leading-[28px] font-medium text-[#5F6B6F]">
            {article.questionCallout.answer}
          </p>
        </div>
      )}

      {/* 2. Intro Paragraphs */}
      <div className="space-y-4">
        {article.introParagraphs.map((para, idx) => (
          <p
            key={idx}
            className="text-sm sm:text-base leading-[26px] sm:leading-[28px] font-medium text-[#5F6B6F]"
          >
            {renderFormattedText(para)}
          </p>
        ))}
      </div>

      {/* Intro Image (if present) */}
      {article.introImage && (
        <div className={`w-full relative rounded-[20px] overflow-hidden shadow-md my-8 bg-white border border-[#DECDBB]/50 ${(article.introImage.height ?? 550) > (article.introImage.width ?? 870) ? "max-w-[560px] mx-auto" : ""}`}>
          <Image
            quality={90}
            src={article.introImage.src}
            alt={article.introImage.alt}
            width={article.introImage.width ?? 870}
            height={article.introImage.height ?? 550}
            className="w-full h-auto object-contain rounded-[18px]"
          />
          {article.introImage.caption && (
            <div className="p-3 bg-white text-center border-t border-[#DECDBB]/30">
              <p className="text-sm italic text-[#5F6B6F] font-medium">
                {article.introImage.caption}
              </p>
            </div>
          )}
        </div>
      )}

      {/* 3. Main Sections */}
      {article.sections.map((sec) => (
        <section key={sec.id} id={sec.id} className="space-y-5 scroll-mt-28">
          {sec.id.includes("doesnt") && (
            <div id={sec.id.replace("doesnt", "doesn't")} className="scroll-mt-28" />
          )}
          <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#2E5A66] leading-[36px] tracking-tight">
            {sec.title}
          </h2>

          {/* Highlight cards */}
          {sec.statCards && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              {sec.statCards.map((card) => {
                const v = card.variant;
                return (
                  <div
                    key={card.value}
                    className={`flex flex-col justify-center items-center sm:items-start gap-2.5 rounded-[20px] px-4 py-4 min-h-[168px] text-center sm:text-left ${
                      v === "white" ? "bg-white" : v === "gold" ? "bg-[#E8B92C]/20" : ""
                    }`}
                    style={v === "teal" ? { backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" } : undefined}
                  >
                    <div
                      className={`font-heading font-bold text-[32px] sm:text-[36px] leading-[44px] tracking-[-0.00015em] ${
                        v === "teal" ? "text-[#FAF7F2]" : "text-[#5F6B6F]"
                      }`}
                    >
                      {card.value}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className={`font-sans font-semibold text-base leading-[26px] ${v === "teal" ? "text-[#FAF7F2]" : "text-[#2E5A66]"}`}>
                        {card.label}
                      </p>
                      <p className={`font-sans font-normal text-sm leading-[26px] ${v === "teal" ? "text-[#FAF7F2]" : "text-[#5F6B6F]"}`}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Section Paragraphs */}
          {sec.paragraphs && (
            <div className="space-y-3">
              {sec.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm sm:text-base leading-[26px] sm:leading-[28px] font-medium text-[#5F6B6F]"
                >
                  {renderFormattedText(p)}
                </p>
              ))}
            </div>
          )}

          {/* Quote Callout Box (Top position by default) */}
          {sec.quoteBox && (!sec.quoteBoxPosition || sec.quoteBoxPosition === "top") && (
            <div className="w-full bg-[#E8B92C]/20 rounded-[15px] flex flex-row items-center overflow-hidden gap-3.5 sm:gap-[16px] pr-4 sm:pr-8 lg:pr-[67px] min-h-[69px] my-5">
              <div className="w-[14px] sm:w-[17px] self-stretch bg-[#E8B92C] rounded-l-[10px] shrink-0 min-h-[69px]" />
              <p className="font-sans font-semibold text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] text-[#5F6B6F] py-3 sm:py-3.5">
                {sec.quoteBox.quote} {sec.quoteBox.author && <>– {renderFormattedText(sec.quoteBox.author)}</>}
              </p>
            </div>
          )}

          {/* Section List Items */}
          {sec.listItems && (
            <ul className="space-y-2.5 my-3 pl-1">
              {sec.listItems.map((item, liIdx) => {
                const isSubItem =
                  item.trim().startsWith("* ") ||
                  item.trim().startsWith("- ") ||
                  item.startsWith("  ") ||
                  item.startsWith("\t");
                const cleanText = isSubItem
                  ? item.replace(/^[\s*-]+/, "").trim()
                  : item;
                const numberedMatch = !isSubItem
                  ? item.match(/^(\d+)\.\s*(.*)$/)
                  : null;

                if (isSubItem) {
                  return (
                    <li
                      key={liIdx}
                      className="flex items-start gap-2.5 ml-6 sm:ml-8 text-sm sm:text-base leading-[24px] sm:leading-[26px] font-medium text-[#5F6B6F]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D6E72] mt-2 shrink-0" />
                      <span>{renderFormattedText(cleanText)}</span>
                    </li>
                  );
                }

                if (numberedMatch) {
                  return (
                    <li
                      key={liIdx}
                      className="flex items-start gap-2.5 text-sm sm:text-base leading-[24px] sm:leading-[26px] font-medium text-[#5F6B6F]"
                    >
                      <span className="font-bold text-[#1D6E72] shrink-0 min-w-[18px]">
                        {numberedMatch[1]}.
                      </span>
                      <span>{renderFormattedText(numberedMatch[2])}</span>
                    </li>
                  );
                }
                return (
                  <li
                    key={liIdx}
                    className="flex items-start gap-2.5 text-sm sm:text-base leading-[24px] sm:leading-[26px] font-medium text-[#5F6B6F]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D6E72] mt-2 shrink-0" />
                    <span>{renderFormattedText(item)}</span>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Section After-List Paragraphs */}
          {sec.afterListParagraphs && (
            <div className="space-y-3">
              {sec.afterListParagraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm sm:text-base leading-[26px] sm:leading-[28px] font-medium text-[#5F6B6F]"
                >
                  {renderFormattedText(p)}
                </p>
              ))}
            </div>
          )}

          {/* Section Banner / Content Image (Top position) */}
          {sec.bannerImage && (!sec.bannerPosition || sec.bannerPosition === "top") && (
            <div className={`w-full relative rounded-[20px] overflow-hidden shadow-md my-8 bg-white border border-[#DECDBB]/50 ${(sec.bannerImage.height ?? 550) > (sec.bannerImage.width ?? 870) ? "max-w-[560px] mx-auto" : ""}`}>
              <Image
            quality={90}
                src={sec.bannerImage.src}
                alt={sec.bannerImage.alt}
                width={sec.bannerImage.width ?? 870}
                height={sec.bannerImage.height ?? 550}
                className="w-full h-auto object-contain rounded-[18px]"
              />
              {sec.bannerImage.caption && (
                <div className="p-3 bg-white text-center border-t border-[#DECDBB]/30">
                  <p className="text-sm italic text-[#5F6B6F] font-medium">
                    {sec.bannerImage.caption}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Specific Infographics for Article 1 (Tenant & Landlord Checklists) fallback */}
          {sec.id === "tenant-checklist" && !sec.bannerImage && (
            <div className="w-full relative rounded-[20px] overflow-hidden shadow-md my-8 bg-white border border-[#DECDBB]/50">
              <Image
            quality={90}
                src="/blogs/blogs-tentant-checklist.webp"
                alt="Tenant Checklist: How to Ensure Your ESA Letter Is Legitimate"
                width={870}
                height={1300}
                className="w-full h-auto object-contain"
              />
            </div>
          )}

          {sec.id === "landlord-checklist" && !sec.bannerImage && (
            <div className="w-full relative rounded-[20px] overflow-hidden shadow-md my-8 bg-white border border-[#DECDBB]/50">
              <Image
            quality={90}
                src="/blogs/blogs-landlord-checklist.webp"
                alt="Landlord Checklist: How to Verify an ESA Letter?"
                width={870}
                height={1300}
                className="w-full h-auto object-contain"
              />
            </div>
          )}

          {/* Sample Letter Display Box (Article 4) */}
          {sec.sampleLetter && (
            <div className="w-full my-8 rounded-[20px] bg-white border border-[#DECDBB] shadow-[0px_4px_16px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="bg-[#FAF7F2] border-b border-[#DECDBB] px-6 py-3.5 text-xs sm:text-sm font-sans font-semibold text-[#5F6B6F] italic">
                {sec.sampleLetter.disclaimer}
              </div>
              <div className="p-6 sm:p-10 font-sans text-sm sm:text-base leading-relaxed text-[#2E5A66] space-y-5">
                <div className="border-b border-[#EAE5DC] pb-4 font-bold text-base sm:text-lg text-[#1D6E72] tracking-wide">
                  {sec.sampleLetter.letterhead}
                </div>
                <div className="text-xs sm:text-sm text-[#69777C] font-medium">
                  {sec.sampleLetter.date}
                </div>
                <div className="font-semibold text-slate-800">
                  {sec.sampleLetter.recipient}
                </div>
                <div className="space-y-4">
                  {sec.sampleLetter.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="leading-[26px] sm:leading-[28px] text-[#475467]">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="pt-4 border-t border-[#EAE5DC] space-y-1">
                  <p className="font-semibold text-slate-800">{sec.sampleLetter.closing}</p>
                  {sec.sampleLetter.signoff.map((s, sIdx) => (
                    <p key={sIdx} className="text-xs sm:text-sm text-[#5F6B6F] font-medium">
                      {s}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Checklist Box (Article 5 HUD Guidance) */}
          {sec.checklist && (
            <div className="w-full my-8 rounded-[20px] bg-white border border-[#DECDBB] shadow-[0px_4px_16px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] px-6 sm:px-8 py-5 text-white">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                  {sec.checklist.title}
                </h3>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                {sec.checklist.items.map((item, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-[#1D6E72]/10 text-[#1D6E72] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="font-sans font-bold text-sm sm:text-base text-[#2E5A66]">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5F6B6F] font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
                {sec.checklist.footerNote && (
                  <div className="mt-6 pt-4 border-t border-[#EAE5DC] text-xs sm:text-sm font-medium text-[#69777C] italic">
                    {sec.checklist.footerNote}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Comparison Table (Article 6 Landlord Deny) */}
          {sec.comparisonTable && (
            <div className="w-full my-8 space-y-4">
              <div className="w-full max-w-[900px] overflow-x-auto rounded-[8px] border border-[#d7dfe2] shadow-[0px_4px_16px_rgba(0,0,0,0.04)] bg-white">
                <table className="w-full border-collapse font-sans text-left">
                  <thead>
                    <tr>
                      <th className="bg-[#134c5f] text-center px-4 sm:px-6 py-4 sm:py-5 border-r border-b border-white/15 w-1/2">
                        <h3 className="font-heading font-normal text-lg sm:text-[22px] lg:text-[25px] leading-tight text-white m-0">
                          {sec.comparisonTable.col1Header}
                        </h3>
                        <span className="block w-9 h-[3px] bg-[#efbf2f] mx-auto mt-2 rounded-[2px]" />
                      </th>
                      <th className="bg-[#134c5f] text-center px-4 sm:px-6 py-4 sm:py-5 border-b border-white/15 w-1/2">
                        <h3 className="font-heading font-normal text-lg sm:text-[22px] lg:text-[25px] leading-tight text-white m-0">
                          {sec.comparisonTable.col2Header}
                        </h3>
                        <span className="block w-9 h-[3px] bg-[#efbf2f] mx-auto mt-2 rounded-[2px]" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sec.comparisonTable.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={rIdx % 2 === 1 ? "bg-[#f5f9fa]" : "bg-white"}
                      >
                        <td className="relative px-4 sm:px-6 py-4 sm:py-[18px] text-[14px] sm:text-[15px] leading-[1.5] text-[#26333a] border border-[#e3e9eb] align-top">
                          <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#efbf2f]" />
                          {row.mayDeny}
                        </td>
                        <td className="px-4 sm:px-6 py-4 sm:py-[18px] text-[14px] sm:text-[15px] leading-[1.5] text-[#26333a] border border-[#e3e9eb] align-top">
                          {row.cannotDeny}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {sec.comparisonTable.keyTakeaway && (
                <div className="p-4 sm:p-5 rounded-[16px] bg-[#FAF7F2] border border-[#DECDBB] text-sm sm:text-base font-medium text-[#5F6B6F] leading-relaxed">
                  <strong className="text-[#2E5A66]">Key takeaway: </strong>
                  {sec.comparisonTable.keyTakeaway}
                </div>
              )}
            </div>
          )}

          {/* Subsections */}
          {sec.subsections && (
            <div className="space-y-4 pt-2">
              {sec.subsections.map((sub, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  {sub.image && sub.imagePosition === "top" && sub.title && sub.title.trim() ? (
                    <h3 className="flex items-center gap-2 font-heading text-lg sm:text-[20px] font-bold text-[#2E5A66] leading-[28px]">
                      <Image
            quality={90}
                        src={sub.image.src}
                        alt={sub.image.alt}
                        width={sub.image.width || 24}
                        height={sub.image.height || 24}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0"
                      />
                      {sub.title}
                    </h3>
                  ) : sub.title && sub.title.trim() ? (
                    <h3 className="font-heading text-lg sm:text-[20px] font-bold text-[#2E5A66] leading-[28px]">
                      {sub.title}
                    </h3>
                  ) : null}
                  {sub.paragraphs && (
                    <div className="space-y-2">
                      {sub.paragraphs.map((subP, spIdx) => (
                        <p
                          key={spIdx}
                          className="text-sm sm:text-base leading-[26px] font-medium text-[#5F6B6F]"
                        >
                          {renderFormattedText(subP)}
                        </p>
                      ))}
                    </div>
                  )}
                  {sub.listItems && (
                    <ul className="space-y-2 my-2.5 pl-1">
                      {sub.listItems.map((item, mIdx) => {
                        const isSubItem =
                          item.trim().startsWith("* ") ||
                          item.trim().startsWith("- ") ||
                          item.startsWith("  ") ||
                          item.startsWith("\t");
                        const cleanText = isSubItem
                          ? item.replace(/^[\s*-]+/, "").trim()
                          : item;
                        const numberedMatch = !isSubItem
                          ? item.match(/^(\d+)\.\s*(.*)$/)
                          : null;

                        if (isSubItem) {
                          return (
                            <li
                              key={mIdx}
                              className="flex items-start gap-2.5 ml-6 sm:ml-8 text-sm sm:text-base leading-[24px] font-medium text-[#5F6B6F]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1D6E72] mt-2 shrink-0" />
                              <span>{renderFormattedText(cleanText)}</span>
                            </li>
                          );
                        }

                        if (numberedMatch) {
                          return (
                            <li
                              key={mIdx}
                              className="flex items-start gap-2.5 text-sm sm:text-base leading-[24px] font-medium text-[#5F6B6F]"
                            >
                              <span className="font-bold text-[#1D6E72] shrink-0 min-w-[18px]">
                                {numberedMatch[1]}.
                              </span>
                              <span>{renderFormattedText(numberedMatch[2])}</span>
                            </li>
                          );
                        }
                        return (
                          <li
                            key={mIdx}
                            className="flex items-start gap-2.5 text-sm sm:text-base leading-[24px] font-medium text-[#5F6B6F]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1D6E72] mt-2 shrink-0" />
                            <span>{renderFormattedText(item)}</span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {sub.afterListParagraphs && (
                    <div className="space-y-2">
                      {sub.afterListParagraphs.map((subP, spIdx) => (
                        <p
                          key={spIdx}
                          className="text-sm sm:text-base leading-[26px] font-medium text-[#5F6B6F]"
                        >
                          {renderFormattedText(subP)}
                        </p>
                      ))}
                    </div>
                  )}
                  {sub.calloutBox && renderCalloutBox(sub.calloutBox)}
                  {sub.image && sub.imagePosition !== "top" && (
                    <div className="w-full relative rounded-[16px] overflow-hidden shadow-xs my-4 bg-white border border-[#DECDBB]/40">
                      <Image
            quality={90}
                        src={sub.image.src}
                        alt={sub.image.alt}
                        width={870}
                        height={500}
                        className="w-full h-auto object-contain rounded-[14px]"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Section Paragraphs after the subsections */}
          {sec.afterSubsectionsParagraphs && (
            <div className="space-y-3">
              {sec.afterSubsectionsParagraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm sm:text-base leading-[26px] sm:leading-[28px] font-medium text-[#5F6B6F]"
                >
                  {renderFormattedText(p)}
                </p>
              ))}
            </div>
          )}

          {/* Section Callout Box */}
          {sec.calloutBox && renderCalloutBox(sec.calloutBox)}

          {/* Section CTA Box */}
          {sec.ctaBox && (
            <div
              className="w-full relative overflow-hidden rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 shadow-[0px_8px_24px_rgba(26,61,79,0.12)] my-8 text-left"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <div className="relative z-10 flex flex-col items-start space-y-3 sm:space-y-4 max-w-[560px]">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#FAF7F2] leading-tight">
                  {sec.ctaBox.heading}
                </h3>
                <p className="font-sans font-medium text-sm sm:text-base text-[#FAF7F2]/90 leading-relaxed max-w-[520px]">
                  {sec.ctaBox.description}
                </p>
                <div className="pt-2">
                  <Link
                    href={sec.ctaBox.buttonHref}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-[12px] bg-[#E8B92C] hover:bg-[#F0C33A] shadow-[0px_4px_14px_rgba(232,185,44,0.35)] transition-all group duration-200"
                  >
                    <span className="font-sans font-bold text-sm sm:text-base text-[#1A3D4F] group-hover:scale-[1.02] transition-transform">
                      {sec.ctaBox.buttonText}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Section Banner / Content Image (Bottom position) */}
          {sec.bannerImage && sec.bannerPosition === "bottom" && (
            <div className={`w-full relative rounded-[20px] overflow-hidden shadow-md my-8 bg-white border border-[#DECDBB]/50 ${(sec.bannerImage.height ?? 550) > (sec.bannerImage.width ?? 870) ? "max-w-[560px] mx-auto" : ""}`}>
              <Image
            quality={90}
                src={sec.bannerImage.src}
                alt={sec.bannerImage.alt}
                width={sec.bannerImage.width ?? 870}
                height={sec.bannerImage.height ?? 550}
                className="w-full h-auto object-contain rounded-[18px]"
              />
              {sec.bannerImage.caption && (
                <div className="p-3 bg-white text-center border-t border-[#DECDBB]/30">
                  <p className="text-sm italic text-[#5F6B6F] font-medium">
                    {sec.bannerImage.caption}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Quote Callout Box (Bottom position) */}
          {sec.quoteBox && sec.quoteBoxPosition === "bottom" && (
            <div className="w-full bg-[#E8B92C]/20 rounded-[15px] flex flex-row items-center overflow-hidden gap-3.5 sm:gap-[16px] pr-4 sm:pr-8 lg:pr-[67px] min-h-[69px] my-5">
              <div className="w-[14px] sm:w-[17px] self-stretch bg-[#E8B92C] rounded-l-[10px] shrink-0 min-h-[69px]" />
              <p className="font-sans font-semibold text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] text-[#5F6B6F] py-3 sm:py-3.5">
                {sec.quoteBox.quote} {sec.quoteBox.author && <>– {renderFormattedText(sec.quoteBox.author)}</>}
              </p>
            </div>
          )}
        </section>
      ))}

      {/* 4. Article CTA Box */}
      {article.cta && (
        <div
          id={article.cta.id || "request-housing-accommodation"}
          className="w-full relative overflow-hidden rounded-[24px] sm:rounded-[28px] p-7 sm:p-10 lg:p-12 shadow-[0px_10px_30px_rgba(26,61,79,0.18)] my-10 sm:my-14 text-left scroll-mt-28"
          style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
        >
          {/* Subtle Paw Prints in Bottom Right - Hidden on Mobile, visible on Tablet & Desktop */}
          <div className="hidden sm:block absolute right-0 bottom-0 w-[300px] lg:w-[350px] h-[200px] lg:h-[235px] pointer-events-none select-none z-0">
            <Image
            quality={90}
              src="/common/cta-section-paw.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 350px, 300px"
              className="object-contain object-right-bottom"
            />
          </div>

          {/* Left Text & Action */}
          <div className="relative z-10 flex flex-col items-start space-y-4 sm:space-y-5 max-w-[560px]">
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#FAF7F2] leading-[1.25] sm:leading-[1.28] tracking-tight">
              {article.cta.heading}
            </h3>
            <p className="font-sans font-medium text-sm sm:text-base text-[#FAF7F2]/90 leading-relaxed max-w-[520px]">
              {article.cta.description}
            </p>
            <div className="pt-2 sm:pt-3">
              <Link
                href={article.cta.buttonHref}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-[12px] bg-[#E8B92C] hover:bg-[#F0C33A] shadow-[0px_4px_14px_rgba(232,185,44,0.35)] transition-all group duration-200"
              >
                <span className="font-sans font-bold text-sm sm:text-base text-[#1A3D4F] group-hover:scale-[1.02] transition-transform">
                  {article.cta.buttonText}
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 5. Final Thoughts */}
      {article.finalThoughts && (
        <section
          id={article.finalThoughts.id || "final-thoughts"}
          className="space-y-4 scroll-mt-28"
        >
          <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#2E5A66] leading-[36px] tracking-tight">
            {article.finalThoughts.title}
          </h2>
          <div className="space-y-3">
            {article.finalThoughts.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-base leading-[26px] sm:leading-[28px] font-medium text-[#5F6B6F]"
              >
                {renderFormattedText(p)}
              </p>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
