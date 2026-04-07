import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const [topPlayer, topMatch, latestSocial, latestHighlight] = await Promise.all([
    prisma.player.findFirst({ orderBy: { goals: "desc" }, include: { team: true } }),
    prisma.match.findFirst({ include: { homeTeam: true, awayTeam: true }, orderBy: { playedAt: "desc" } }),
    prisma.socialStat.findFirst({ orderBy: { weekStart: "desc" } }),
    prisma.highlightNumber.findFirst({ orderBy: { createdAt: "desc" } })
  ]);

  return NextResponse.json({
    playerOfWeek: topPlayer
      ? `${topPlayer.name}${topPlayer.team ? ` - ${topPlayer.team.name}` : ""}`
      : "لا يوجد بيانات",
    matchOfWeek: topMatch
      ? `${topMatch.homeTeam.name} ${topMatch.homeGoals}-${topMatch.awayGoals} ${topMatch.awayTeam.name}`
      : "لا يوجد بيانات",
    social: latestSocial
      ? { platform: latestSocial.platform, views: latestSocial.views, engagement: latestSocial.engagement }
      : { platform: "N/A", views: 0, engagement: 0 },
    highlight: latestHighlight ?? { label: "رقم مميز", value: "0" }
  });
}
