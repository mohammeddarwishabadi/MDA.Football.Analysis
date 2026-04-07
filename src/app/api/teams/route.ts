import { prisma } from "@/lib/prisma";
import { fail, ok } from "@/lib/api-response";
import { teamCreateSchema } from "@/lib/validation/schemas";

export async function GET() {
  try {
    const teams = await prisma.team.findMany({ orderBy: { name: "asc" } });
    return ok(teams);
  } catch (error) {
    console.error("[GET /api/teams]", error);
    return fail("Failed to fetch teams");
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = teamCreateSchema.safeParse(body);

    if (!parsed.success) {
      return fail(`ValidationError: ${parsed.error.issues.map((i) => i.message).join(", ")}`, 400);
    }

    const team = await prisma.team.create({ data: parsed.data });
    return ok(team);
  } catch (error) {
    console.error("[POST /api/teams]", error);
    return fail("Failed to create team");
  }
}
