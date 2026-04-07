import { prisma } from "@/lib/prisma";
import { fail, ok } from "@/lib/api-response";
import { playerCreateSchema } from "@/lib/validation/schemas";

export async function GET() {
  try {
    const players = await prisma.player.findMany({ include: { team: true }, orderBy: { goals: "desc" } });
    return ok(players);
  } catch (error) {
    console.error("[GET /api/players]", error);
    return fail("Failed to fetch players");
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = playerCreateSchema.safeParse(body);

    if (!parsed.success) {
      return fail(`ValidationError: ${parsed.error.issues.map((i) => i.message).join(", ")}`, 400);
    }

    const player = await prisma.player.create({ data: parsed.data });
    return ok(player);
  } catch (error) {
    console.error("[POST /api/players]", error);
    return fail("Failed to create player");
  }
}
