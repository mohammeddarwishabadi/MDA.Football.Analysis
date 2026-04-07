import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import { fetchApi } from "@/lib/server-fetch";

type Team = { id: string; name: string; logoUrl: string | null };

export const metadata: Metadata = {
  title: "الفرق | MDA",
  description: "قائمة الفرق في منصة MDA مع عرض أساسي للهوية والبيانات.",
  openGraph: {
    title: "الفرق | MDA",
    description: "استكشف الفرق المتاحة في منصة MDA.",
    locale: "ar_AR"
  }
};

export default async function TeamsPage() {
  const teams = await fetchApi<Team[]>("/api/teams");

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">الفرق</h1>
      {teams.length === 0 ? (
        <p className="rounded-xl border border-mda-beige/20 bg-mda-card p-4 text-mda-beige">لا توجد بيانات متاحة حاليًا</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <Card key={team.id} className="p-4">
              <div className="mb-3 h-20 w-20 rounded-full bg-mda-bg/60" />
              <h2 className="text-xl font-semibold">{team.name}</h2>
              <p className="text-sm text-mda-beige">{team.logoUrl ?? "لا يوجد شعار مرفوع"}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
