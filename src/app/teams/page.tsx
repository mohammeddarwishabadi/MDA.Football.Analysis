import { prisma } from "@/lib/prisma";
import Card from "@/components/ui/Card";

export default async function TeamsPage() {
  const teams = await prisma.team.findMany({ orderBy: { name: "asc" } });

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">الفرق</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <Card key={team.id} className="p-4">
            <div className="mb-3 h-20 w-20 rounded-full bg-mda-bg/60" />
            <h2 className="text-xl font-semibold">{team.name}</h2>
            <p className="text-sm text-mda-beige">{team.logoUrl ?? "لا يوجد شعار مرفوع"}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
