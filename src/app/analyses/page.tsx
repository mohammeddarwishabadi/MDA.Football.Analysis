import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Card from "@/components/ui/Card";

export default async function AnalysesPage() {
  const analyses = await prisma.analysis.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">التحليلات</h1>
      <div className="grid gap-4">
        {analyses.map((analysis) => (
          <Link key={analysis.id} href={`/analyses/${analysis.id}`}>
            <Card className="p-4 transition hover:border-mda-green">
              <h2 className="text-xl font-semibold">{analysis.title}</h2>
              <p className="mt-2 text-sm text-mda-beige">النوع: {analysis.type}</p>
              <p className="mt-1 text-xs text-mda-beige/90">{new Date(analysis.createdAt).toLocaleDateString("ar")}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
