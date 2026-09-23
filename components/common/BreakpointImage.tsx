import React from "react";
import { getImageProps, type ImageProps } from "next/image";

// 1x1 transparent GIF, served inline so it never hits the network.
const BLANK_PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

type BreakpointImageProps = Omit<ImageProps, "priority" | "preload" | "loading" | "fetchPriority"> & {
  /** Media query for the viewports where this image is actually shown, e.g. "(max-width: 639px)". */
  media: string;
  alt: string;
};

/**
 * Above-the-fold image that is only downloaded on the viewports it is shown on.
 *
 * Hero sections render separate mobile/tablet/desktop artwork and hide the
 * inactive ones with CSS. With `priority`, every variant was preloaded on every
 * device, so phones also fetched the tablet and desktop art while the visible
 * image competed for bandwidth. Here, outside `media` the <picture> resolves to
 * an inline blank pixel, and inside it the real image loads eagerly at high
 * priority.
 */
export function BreakpointImage({ media, alt, ...rest }: BreakpointImageProps) {
  const { props } = getImageProps({ ...rest, alt, loading: "eager", fetchPriority: "high" });

  return (
    <picture style={{ display: "contents" }}>
      <source media={`not all and ${media}`} srcSet={BLANK_PIXEL} />
      <img {...props} alt={alt} />
    </picture>
  );
}
