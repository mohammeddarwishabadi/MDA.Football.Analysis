import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { analysisCreateSchema } from "@/lib/validation/schemas";
import { fail, ok } from "@/lib/api-response";

export async function GET() {
  try {
    const analyses = await prisma.analysis.findMany({ orderBy: { createdAt: "desc" } });
    return ok(analyses);
  } catch (error) {
    console.error("[GET /api/analyses]", error);
    return fail("Failed to fetch analyses");
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== "admin") {
      return fail("Forbidden", 403);
    }

    const body = await req.json();
    const parsed = analysisCreateSchema.safeParse(body);

    if (!parsed.success) {
      return fail(`ValidationError: ${parsed.error.issues.map((i) => i.message).join(", ")}`, 400);
    }

    const analysis = await prisma.analysis.create({ data: parsed.data });
    return ok(analysis);
  } catch (error) {
    console.error("[POST /api/analyses]", error);
    return fail("Failed to create analysis");
  }
}
