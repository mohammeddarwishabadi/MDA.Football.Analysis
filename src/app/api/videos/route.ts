import { prisma } from "@/lib/prisma";
import { fail, ok } from "@/lib/api-response";

export async function GET() {
  try {
    const videos = await prisma.video.findMany({ orderBy: { createdAt: "desc" } });
    return ok(videos);
  } catch (error) {
    console.error("[GET /api/videos]", error);
    return fail("Failed to fetch videos");
  }
}
