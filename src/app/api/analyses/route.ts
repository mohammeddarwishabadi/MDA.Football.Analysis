import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const analyses = await prisma.analysis.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(analyses);
}
