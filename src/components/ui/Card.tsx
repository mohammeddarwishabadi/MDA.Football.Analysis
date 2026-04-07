import type { ReactNode } from "react";

export default function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-xl border border-mda-beige/20 bg-mda-card ${className}`}>{children}</div>;
}
