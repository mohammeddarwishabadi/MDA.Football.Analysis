import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Card from "@/components/ui/Card";
import { fetchApi } from "@/lib/server-fetch";

export const dynamic = "force-dynamic";

type Video = {
  id: string;
  title: string;
  platform: string;
  thumbnail: string | null;
};

export default async function VideosPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/auth/signin");

  const videos = await fetchApi<Video[]>("/api/videos");

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">الفيديوهات</h1>
      {videos.length === 0 ? (
        <p className="rounded-xl border border-mda-beige/20 bg-mda-card p-4 text-mda-beige">لا توجد بيانات متاحة حاليًا</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <Card key={video.id} className="p-4">
              <div className="mb-3 h-40 rounded bg-mda-bg/60" />
              <h2 className="font-semibold">{video.title}</h2>
              <p className="mt-1 text-xs text-mda-beige">{video.platform}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
