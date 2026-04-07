"use client";

import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";

type DashboardData = {
  playerOfWeek: string;
  matchOfWeek: string;
  social: { platform: string; views: number; engagement: number };
  highlight: { label: string; value: string };
};

export default function MiniDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/mini-dashboard");
        const json = (await res.json()) as { success: boolean; data: DashboardData | null };
        setData(json.success ? json.data : null);
      } catch {
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5" aria-busy>
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i} className="p-4">
            <div className="h-3 w-20 animate-pulse rounded bg-mda-beige/20" />
            <div className="mt-3 h-6 w-28 animate-pulse rounded bg-mda-white/20" />
            <div className="mt-2 h-3 w-24 animate-pulse rounded bg-mda-beige/20" />
          </Card>
        ))}
      </div>
    );
  }

  if (!data) {
    return <p className="rounded-xl border border-mda-beige/20 bg-mda-card p-4 text-mda-beige">لا توجد بيانات متاحة حاليًا</p>;
  }

  const items = [
    { label: "لاعب الأسبوع", value: data.playerOfWeek, meta: "أفضل أداء هذا الأسبوع" },
    { label: "مباراة الأسبوع", value: data.matchOfWeek, meta: "الأكثر تأثيرًا تكتيكيًا" },
    { label: "تفاعل السوشيال", value: `${data.social.engagement}%`, meta: `${data.social.platform} | ${data.social.views} مشاهدة` },
    { label: data.highlight.label, value: data.highlight.value, meta: "مؤشر مميز" },
    { label: "عدد البطاقات", value: "5", meta: "ملخص سريع" }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => (
        <Card key={item.label} className="p-4">
          <p className="text-xs text-mda-beige/90">{item.label}</p>
          <p className="mt-2 text-xl font-bold text-mda-white">{item.value}</p>
          <p className="mt-1 text-xs text-mda-beige/80">{item.meta}</p>
        </Card>
      ))}
    </div>
  );
}
