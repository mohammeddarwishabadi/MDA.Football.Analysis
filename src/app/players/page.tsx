import { prisma } from "@/lib/prisma";
import Card from "@/components/ui/Card";

export default async function PlayersPage() {
  const players = await prisma.player.findMany({ include: { team: true }, orderBy: { goals: "desc" } });

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">اللاعبون</h1>
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
    </div>
  );
}
