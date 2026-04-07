import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "MDA — FOOTBALL ANALYSIS",
  description: "منصة MDA لتحليل كرة القدم عبر البيانات والتكتيك والمحتوى المرئي.",
  openGraph: {
    title: "MDA — FOOTBALL ANALYSIS",
    description: "تحليلات كرة قدم احترافية باللغة العربية مبنية على الأرقام والتكتيك.",
    locale: "ar_AR",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-mda-bg text-mda-white">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
