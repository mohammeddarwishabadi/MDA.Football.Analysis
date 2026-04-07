import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { analysisCreateSchema } from "@/lib/validation/schemas";
import { fail, ok } from "@/lib/api-response";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
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

    const analysis = await prisma.analysis.update({
      where: { id: params.id },
      data: parsed.data
    });

    return ok(analysis);
  } catch (error) {
    console.error(`[PUT /api/analyses/${params.id}]`, error);
    return fail("Failed to update analysis");
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== "admin") {
      return fail("Forbidden", 403);
    }

    const deleted = await prisma.analysis.delete({ where: { id: params.id } });
    return ok(deleted);
  } catch (error) {
    console.error(`[DELETE /api/analyses/${params.id}]`, error);
    return fail("Failed to delete analysis");
  }
}
