import Image from "next/image";

export default function Loading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-background"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="fixed inset-x-0 top-0 z-[80] h-1 overflow-hidden bg-primary/15">
        <div className="nav-progress-bar h-full bg-accent" />
      </div>
      <Image
        src="/common/myesa-logo.svg"
        alt=""
        width={171}
        height={71}
        unoptimized
        priority
        className="h-16 w-auto"
      />
    </div>
  );
}
