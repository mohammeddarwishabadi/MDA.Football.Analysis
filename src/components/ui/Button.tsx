import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
};

export default function Button({ children, href, variant = "primary", type = "button" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-mda-green text-mda-white hover:bg-mda-greenLight"
      : "border border-mda-beige text-mda-beige hover:bg-mda-beige hover:text-mda-bg";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
