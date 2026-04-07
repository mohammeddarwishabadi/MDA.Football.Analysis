import type { SVGProps } from "react";

const base = "h-5 w-5";

export function IconChart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={base} {...props}>
      <path d="M4 20V10m8 10V4m8 16v-7" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={base} {...props}>
      <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
      <path d="m10 8 6 4-6 4z" fill="currentColor" />
    </svg>
  );
}

export function IconUsers(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={base} {...props}>
      <circle cx="9" cy="8" r="3" strokeWidth="1.8" />
      <circle cx="17" cy="10" r="2" strokeWidth="1.8" />
      <path d="M4 20c0-3 2.5-5 5-5s5 2 5 5m-1 0c0-2 1.5-3.5 3.5-3.5S20 18 20 20" strokeWidth="1.8" />
    </svg>
  );
}

export function IconTarget(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={base} {...props}>
      <circle cx="12" cy="12" r="8" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}
