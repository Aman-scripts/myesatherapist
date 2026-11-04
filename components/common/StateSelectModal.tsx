"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { CtaButton } from "@/components/common/CtaButton";
import { HeroStateDropdown } from "@/components/common/HeroStateDropdown";
import { OPEN_STATE_MODAL_EVENT, type StateModalLetter } from "@/components/common/evaluationCta";
import { promptSelectState } from "@/components/common/promptSelectState";
import {
  letterFromPath,
  stateModalDestination,
  type ModalLetter,
} from "@/components/common/stateModalDestination";

export function StateSelectModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [slug, setSlug] = useState("");
  const [letter, setLetter] = useState<ModalLetter>("esa");

  useEffect(() => {
    const onOpen = (event: Event) => {
      const requested = (event as CustomEvent<{ letter?: StateModalLetter }>).detail?.letter;
      setSlug("");
      setLetter(requested ?? letterFromPath(window.location.pathname));
      setOpen(true);
    };
    window.addEventListener(OPEN_STATE_MODAL_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_STATE_MODAL_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  const start = () => {
    if (!slug) {
      promptSelectState();
      return;
    }
    const destination = stateModalDestination(letter, slug);
    setOpen(false);
    if (destination.startsWith("/")) {
      router.push(destination);
      return;
    }
    window.location.assign(destination);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-primary/60"
        onClick={() => setOpen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="state-select-title"
        className="relative w-full max-w-[460px] rounded-[24px] bg-background px-6 pb-7 pt-8 shadow-[0px_8px_30px_rgba(46,90,102,0.18)] sm:px-8"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-primary"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 id="state-select-title" className="heading-h3 text-center text-primary">
          Select Your State
        </h2>
        <p className="body-text text-body-text mx-auto mt-3 max-w-[360px] text-center">
          Get connected with a licensed therapist in your state who understands your emotional needs.
        </p>

        <HeroStateDropdown
          className="relative z-20 mt-6 flex w-full flex-col items-center"
          placeholder="Select your State"
          onChange={setSlug}
          buttonClassName="body-text flex h-[54px] w-auto items-center gap-2.5 rounded-[30px] border border-primary bg-white px-6 text-primary shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
          menuClassName="relative mt-2 max-h-[220px] w-full overflow-y-auto rounded-2xl bg-white p-2 text-left shadow-[0px_10px_30px_rgba(0,0,0,0.12)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        />

        <div className="mt-4 flex justify-center">
          <CtaButton stateModal={false} onClick={start} variant="accent">
            {letter === "psd" ? "Get Started" : "Start Your ESA Evaluation"}
          </CtaButton>
        </div>

        <p className="body-small text-body-text mt-4 flex items-center justify-center gap-2 text-center">
          <Image quality={90}
            src="/esa-icons/icon-46.svg"
            alt=""
            width={16}
          sizes="16px"
            height={16}
            unoptimized
            className="h-4 w-4 shrink-0 object-contain"
          />
          Secure • HIPAA-Compliant • Licensed Providers
        </p>
      </div>
    </div>
  );
}
