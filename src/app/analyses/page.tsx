import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { fetchApi } from "@/lib/server-fetch";

type Analysis = { id: string; title: string; type: string; createdAt: string };

export const metadata: Metadata = {
  title: "التحليلات | MDA",
  description: "مقالات وتحليلات تكتيكية رقمية حول المباريات واللاعبين والفرق.",
  openGraph: {
    title: "التحليلات | MDA",
    description: "اقرأ أحدث تحليلات MDA المبنية على البيانات.",
    locale: "ar_AR"
  }
};

export default async function AnalysesPage() {
  const analyses = await fetchApi<Analysis[]>("/api/analyses");

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">التحليلات</h1>
      {analyses.length === 0 ? (
        <p className="rounded-xl border border-mda-beige/20 bg-mda-card p-4 text-mda-beige">لا توجد بيانات متاحة حاليًا</p>
      ) : (
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
      )}
    </div>
  );
}
