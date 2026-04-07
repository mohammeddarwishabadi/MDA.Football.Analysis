import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const players = await prisma.player.findMany({ include: { team: true }, orderBy: { goals: "desc" } });
  return NextResponse.json(players);
}
