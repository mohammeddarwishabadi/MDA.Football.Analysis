import type { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-8">{children}</main>;
}
