import { prisma } from "@/lib/prisma";
import { fail, ok } from "@/lib/api-response";
import { matchCreateSchema } from "@/lib/validation/schemas";

export async function GET() {
  try {
    const matches = await prisma.match.findMany({
      include: { homeTeam: true, awayTeam: true, bestPlayer: true },
      orderBy: { playedAt: "desc" }
    });
    return ok(matches);
  } catch (error) {
    console.error("[GET /api/matches]", error);
    return fail("Failed to fetch matches");
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = matchCreateSchema.safeParse(body);

    if (!parsed.success) {
      return fail(`ValidationError: ${parsed.error.issues.map((i) => i.message).join(", ")}`, 400);
    }

    const match = await prisma.match.create({
      data: {
        ...parsed.data,
        playedAt: new Date(parsed.data.playedAt)
      }
    });
    return ok(match);
  } catch (error) {
    console.error("[POST /api/matches]", error);
    return fail("Failed to create match");
  }
}
