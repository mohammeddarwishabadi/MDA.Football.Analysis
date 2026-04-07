import Card from "@/components/ui/Card";
import { IconPlay } from "@/components/icons";

const items = ["TikTok", "YouTube", "Instagram", "X"];

export default function SocialSlider() {
  return (
    <div className="rounded-2xl bg-black/20 p-4">
      <div className="mb-4 flex items-center justify-between">
        <button className="rounded-full border border-mda-beige/50 px-3 py-1 text-mda-beige">←</button>
        <button className="rounded-full border border-mda-beige/50 px-3 py-1 text-mda-beige">→</button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((platform) => (
          <Card key={platform} className="p-3">
            <div className="mb-2 flex items-center gap-2 text-mda-greenLight">
              <IconPlay />
              <span>{platform}</span>
            </div>
            <div className="mb-3 h-24 rounded bg-mda-bg/70" />
            <p className="mb-3 text-sm">لقطة تحليلية سريعة من آخر مباراة</p>
            <button className="rounded border border-mda-beige px-3 py-1 text-xs text-mda-beige">شاهد</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
