import React from "react";
import { getImageProps, type ImageProps } from "next/image";

const BLANK_PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

type BreakpointImageProps = Omit<ImageProps, "priority" | "loading" | "fetchPriority"> & {
  media: string;
  alt: string;
  preload?: boolean;
};

export function BreakpointImage({ media, alt, preload = true, quality = 90, ...rest }: BreakpointImageProps) {
  const { props } = getImageProps({ ...rest, alt, quality, loading: "eager", fetchPriority: "high" });

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
        <source media={media} srcSet={props.srcSet || props.src} sizes={props.sizes} />
        <img
          {...props}
          src={BLANK_PIXEL}
          srcSet={undefined}
          alt={alt}
        />
      </picture>
    </>
  );
}
