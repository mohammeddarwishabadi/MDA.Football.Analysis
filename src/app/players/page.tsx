import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import { fetchApi } from "@/lib/server-fetch";

type Player = {
  id: string;
  name: string;
  goals: number;
  assists: number;
  xG: number;
  team: { name: string } | null;
};

export const metadata: Metadata = {
  title: "اللاعبون | MDA",
  description: "إحصاءات اللاعبين الأساسية داخل منصة MDA.",
  openGraph: {
    title: "اللاعبون | MDA",
    description: "تابع أداء اللاعبين بالأهداف وصناعة الفرص و xG.",
    locale: "ar_AR"
  }
};

export default async function PlayersPage() {
  const players = await fetchApi<Player[]>("/api/players");

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">اللاعبون</h1>
      {players.length === 0 ? (
        <p className="rounded-xl border border-mda-beige/20 bg-mda-card p-4 text-mda-beige">لا توجد بيانات متاحة حاليًا</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {players.map((player) => (
            <Card key={player.id} className="p-4">
              <h2 className="text-xl font-semibold">{player.name}</h2>
              <p className="mt-1 text-sm text-mda-beige">{player.team?.name ?? "بدون فريق"}</p>
              <div className="mt-3 space-y-1 text-sm">
                <p>الأهداف: {player.goals}</p>
                <p>التمريرات الحاسمة: {player.assists}</p>
                <p>xG: {player.xG.toFixed(2)}</p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
