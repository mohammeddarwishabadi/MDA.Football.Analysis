import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function AnalysisDetails({ params }: { params: { id: string } }) {
  const analysis = await prisma.analysis.findUnique({ where: { id: params.id } });
  if (!analysis) notFound();

  return (
    <article className="mx-auto max-w-3xl">
      <p className="mb-2 text-sm text-mda-beige">{analysis.type}</p>
      <h1 className="mb-5 text-3xl font-bold">{analysis.title}</h1>
      <p className="whitespace-pre-line leading-8 text-mda-beige">{analysis.content}</p>
    </article>
  );
}
