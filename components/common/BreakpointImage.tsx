import React from "react";
import { getImageProps, type ImageProps } from "next/image";

// 1x1 transparent GIF, served inline so it never hits the network.
const BLANK_PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

type BreakpointImageProps = Omit<ImageProps, "priority" | "loading" | "fetchPriority"> & {
  /** Media query for the viewports where this image is actually shown, e.g. "(max-width: 639px)". */
  media: string;
  alt: string;
  preload?: boolean;
};

/**
 * Above-the-fold image that is only downloaded on the viewports it is shown on.
 *
 * Hero sections render separate mobile/tablet/desktop artwork and hide the
 * inactive ones with CSS. React 19 hoists the `<link rel="preload">` to `<head>`
 * with the matching media query, giving instant LCP discovery without downloading
 * inactive variants.
 */
export function BreakpointImage({ media, alt, preload = true, ...rest }: BreakpointImageProps) {
  const { props } = getImageProps({ ...rest, alt, loading: "eager", fetchPriority: "high" });

  return (
    <>
      {preload && (
        <link
          rel="preload"
          as="image"
          href={props.srcSet ? undefined : props.src}
          imageSrcSet={props.srcSet}
          imageSizes={props.sizes}
          media={media}
          fetchPriority="high"
        />
      )}
      <picture style={{ display: "contents" }}>
        <source media={`not all and ${media}`} srcSet={BLANK_PIXEL} />
        <img {...props} alt={alt} />
      </picture>
    </>
  );
}
