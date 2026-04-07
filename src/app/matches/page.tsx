import { prisma } from "@/lib/prisma";
import Card from "@/components/ui/Card";

export default async function MatchesPage() {
  const matches = await prisma.match.findMany({
    include: { homeTeam: true, awayTeam: true },
    orderBy: { playedAt: "desc" }
  });

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">المباريات</h1>
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
    </div>
  );
}
