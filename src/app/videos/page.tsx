import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Card from "@/components/ui/Card";

const videos = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `فيديو تحليلي رقم ${i + 1}`
}));

export default async function VideosPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/auth/signin");

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">الفيديوهات</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <Card key={video.id} className="p-4">
            <div className="mb-3 h-40 rounded bg-mda-bg/60" />
            <h2 className="font-semibold">{video.title}</h2>
          </Card>
        ))}
      </div>
    </div>
  );
}
