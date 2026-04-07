import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import { fetchApi } from "@/lib/server-fetch";

type Match = {
  id: string;
  homeGoals: number;
  awayGoals: number;
  xGHome: number;
  xGAway: number;
  playedAt: string;
  homeTeam: { name: string };
  awayTeam: { name: string };
};

export const metadata: Metadata = {
  title: "المباريات | MDA",
  description: "نتائج المباريات مع المؤشرات الرقمية الأساسية في MDA.",
  openGraph: {
    title: "المباريات | MDA",
    description: "استعرض نتائج المباريات وقيم xG بسرعة.",
    locale: "ar_AR"
  }
};

export default async function MatchesPage() {
  const matches = await fetchApi<Match[]>("/api/matches");

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">المباريات</h1>
      {matches.length === 0 ? (
        <p className="rounded-xl border border-mda-beige/20 bg-mda-card p-4 text-mda-beige">لا توجد بيانات متاحة حاليًا</p>
      ) : (
        <div className="grid gap-4">
          {matches.map((match) => (
            <Card key={match.id} className="p-4">
              <h2 className="text-xl font-bold">
                {match.homeTeam.name} {match.homeGoals} - {match.awayGoals} {match.awayTeam.name}
              </h2>
              <p className="mt-2 text-sm text-mda-beige">
                xG: {match.xGHome.toFixed(2)} - {match.xGAway.toFixed(2)} | {new Date(match.playedAt).toLocaleDateString("ar")}
              </p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
