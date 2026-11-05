export function playCtaClick(event: { currentTarget: EventTarget & Element; detail: number; clientX: number; clientY: number }) {
  const target = event.currentTarget;
  if (target instanceof HTMLButtonElement && target.disabled) return;

  const rect = target.getBoundingClientRect();
  const fromPointer = event.detail !== 0;
  const x = fromPointer ? event.clientX - rect.left : rect.width / 2;
  const y = fromPointer ? event.clientY - rect.top : rect.height / 2;

  const ripple = document.createElement("span");
  ripple.className = "cta-ripple";
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  target.appendChild(ripple);
  window.setTimeout(() => ripple.remove(), 650);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  target.animate(
    [
      { scale: 1, offset: 0 },
      { scale: 0.92, offset: 0.22 },
      { scale: 1.04, offset: 0.58 },
      { scale: 1, offset: 1 },
    ],
    { duration: 460, easing: "linear" },
  );
  target.querySelector(".cta-icon")?.animate(
    [
      { transform: "scale(1)", offset: 0 },
      { transform: "scale(0.88)", offset: 0.22 },
      { transform: "scale(1)", offset: 1 },
    ],
    { duration: 460, easing: "linear" },
  );
}
