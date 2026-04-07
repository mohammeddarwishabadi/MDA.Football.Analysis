import Image from "next/image";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const cards = [
  "كيف غيّر الضغط العالي شكل المباراة؟",
  "تحليل تحركات المهاجم الوهمي",
  "قراءة تكتيكية لبناء اللعب",
  "لماذا نجح التحول السريع؟"
];

export default function AnalysesMagazine() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Card className="relative min-h-[300px] overflow-hidden lg:col-span-2">
        <Image
          src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1600&q=80"
          alt="analysis"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-end p-6">
          <span className="mb-2 w-fit rounded bg-mda-green px-2 py-1 text-xs">تحليل مباراة</span>
          <h3 className="text-2xl font-bold">{cards[0]}</h3>
          <div className="mt-4">
            <Button variant="secondary" href="/analyses">
              اقرأ الآن
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid gap-4">
        {cards.slice(1).map((title) => (
          <Card key={title} className="overflow-hidden">
            <div className="relative h-24 w-full">
              <Image
                src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=900&q=80"
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold">{title}</h4>
              <div className="mt-3 h-1 w-12 bg-mda-green" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
