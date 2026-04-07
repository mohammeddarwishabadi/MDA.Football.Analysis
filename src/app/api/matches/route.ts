import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const matches = await prisma.match.findMany({
    include: { homeTeam: true, awayTeam: true, bestPlayer: true },
    orderBy: { playedAt: "desc" }
  });
  return NextResponse.json(matches);
}
