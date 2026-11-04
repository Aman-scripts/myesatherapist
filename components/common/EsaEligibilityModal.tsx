"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { CtaButton } from "@/components/common/CtaButton";
import {
  OPEN_ESA_CHECKER_EVENT,
  openStateSelectModal,
} from "@/components/common/evaluationCta";

const YES_THRESHOLD = 4;

const QUESTIONS = [
  "Do you experience ongoing emotional or mental health challenges?",
  "Do these challenges impact your daily life, routine, or emotional well-being?",
  "Does your animal provide comfort or support during difficult emotional situations?",
  "Do you feel your animal helps you manage symptoms such as anxiety, stress, fear, or emotional distress?",
  "Are you seeking housing accommodation for an emotional support animal?",
] as const;

const HIGH_YES = {
  title: "It may be the right time for an ESA evaluation.",
  body: "A provider can review your individual situation and determine whether an ESA letter is appropriate.",
};

const LOW_YES = {
  title: "An ESA evaluation may still be helpful",
  body: "if you are experiencing emotional or mental health challenges. A licensed professional can help you understand your options.",
};

type Answer = "yes" | "no";

export function EsaEligibilityModal() {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<Partial<Record<number, Answer>>>({});
  const [error, setError] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const pendingEvaluation = useRef(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_ESA_CHECKER_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_ESA_CHECKER_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      if (!pendingEvaluation.current) lastFocus.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (open || !pendingEvaluation.current) return;
    pendingEvaluation.current = false;
    openStateSelectModal();
  }, [open]);

  useEffect(() => {
    if (!showResult) return;
    resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [showResult]);

  if (!open) return null;

  const allAnswered = QUESTIONS.every((_, index) => answers[index]);
  const yesCount = QUESTIONS.reduce(
    (count, _, index) => count + (answers[index] === "yes" ? 1 : 0),
    0,
  );
  const result = yesCount >= YES_THRESHOLD ? HIGH_YES : LOW_YES;

  const choose = (index: number, value: Answer) => {
    const next = { ...answers, [index]: value };
    setAnswers(next);
    if (QUESTIONS.every((_, i) => next[i])) setError(false);
  };

  const reset = () => {
    setAnswers({});
    setError(false);
    setShowResult(false);
    bodyRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!allAnswered) {
      setShowResult(false);
      setError(true);
      return;
    }
    setError(false);
    setShowResult(true);
  };

  const startEvaluation = () => {
    pendingEvaluation.current = true;
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-5">
      <button
        type="button"
        aria-label="Close eligibility checker"
        className="absolute inset-0 bg-primary/60"
        onClick={() => setOpen(false)}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative flex max-h-[min(92vh,900px)] w-full max-w-[720px] flex-col overflow-hidden rounded-[24px] border border-primary/10 bg-[linear-gradient(180deg,#FBF1D4_0%,#FAF7F2_42%)] shadow-[0_25px_60px_rgba(26,61,79,0.28)] outline-none"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 px-5 pt-5 sm:px-7 sm:pt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-white px-3.5 py-1.5 shadow-[0px_1px_0px_rgba(64,64,64,0.08)]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="eyebrow text-gold-600">Free Self-Check</span>
          </span>
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-white text-primary transition-colors hover:bg-cream-100"
          >
            <X className="h-[18px] w-[18px]" />
          </button>
        </div>

        <div ref={bodyRef} className="overflow-y-auto px-5 pb-7 pt-3 sm:px-7 sm:pb-8">
          <h2 id={titleId} className="heading-h2 mx-auto max-w-[560px] text-balance text-center text-primary">
            Quick Self-Check: Is an ESA Evaluation Worth Exploring?
          </h2>
          <p className="body-text text-body-text mx-auto mt-4 max-w-[560px] text-center">
            Answer a few yes-or-no questions to see whether exploring an emotional support animal
            evaluation with a licensed mental health professional may be worth your time. This tool
            is educational only — it does not diagnose a condition or guarantee eligibility for an
            ESA letter.
          </p>

          <form className="mx-auto mt-6 flex max-w-[640px] flex-col gap-3" onSubmit={submit} noValidate>
            {QUESTIONS.map((question, index) => {
              const legendId = `${titleId}-q${index}`;
              return (
                <div
                  key={question}
                  className="rounded-[18px] border border-[#EAE5DC] bg-white px-4 py-4 shadow-[0_6px_18px_rgba(46,90,102,0.06)] sm:px-5 sm:py-[18px]"
                >
                  <p id={legendId} className="body-strong mb-3 text-primary">
                    {question}
                  </p>
                  <div role="radiogroup" aria-labelledby={legendId} className="flex gap-2.5">
                    {(["yes", "no"] as const).map((value) => {
                      const selected = answers[index] === value;
                      return (
                        <label key={value} className="relative min-w-0 flex-1">
                          <input
                            type="radio"
                            className="peer sr-only"
                            name={`esa-q-${index}`}
                            value={value}
                            checked={selected}
                            onChange={() => choose(index, value)}
                          />
                          <span
                            className={`button-text flex min-h-[46px] cursor-pointer items-center justify-center rounded-full border-2 px-3 transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-[3px] peer-focus-visible:outline-accent ${
                              selected
                                ? "color-gradient border-transparent text-white shadow-[0_6px_16px_rgba(26,61,79,0.28)]"
                                : "border-primary/20 bg-white text-primary hover:border-primary/40"
                            }`}
                          >
                            {value === "yes" ? "Yes" : "No"}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <p
              role="alert"
              className={`body-small text-center font-semibold text-red-600 ${error ? "" : "hidden"}`}
            >
              Please answer all questions before viewing your result.
            </p>

            <div className="mt-2 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <CtaButton type="submit" variant="primary" showIcon={false} className="w-full sm:w-auto px-8">
                See My Result
              </CtaButton>
              <button
                type="button"
                onClick={reset}
                className="button-text inline-flex h-[54px] w-full items-center justify-center rounded-[30px] border-2 border-primary/20 bg-white px-6 text-primary transition-colors hover:bg-background sm:w-auto"
              >
                Reset Answers
              </button>
            </div>

            {showResult && (
              <div
                ref={resultRef}
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="mt-3 rounded-[22px] border border-[#EAE5DC] bg-white px-5 py-6 text-center shadow-[0_20px_50px_rgba(46,90,102,0.12)] sm:px-6"
              >
                <h3 className="heading-h3 text-primary">{result.title}</h3>
                <p className="body-text text-body-text mx-auto mt-2.5 max-w-[520px]">{result.body}</p>
                <div className="mt-5 flex justify-center">
                  <CtaButton stateModal={false} onClick={startEvaluation} wrap className="max-w-full">
                    Start Your Evaluation Now
                  </CtaButton>
                </div>
                <p className="body-small mx-auto mt-4 max-w-[520px] text-primary/70 italic">
                  This self-check is for educational purposes only and does not identify any
                  condition or guarantee eligibility for an ESA letter. Eligibility is determined
                  through an evaluation with a licensed mental health professional.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
