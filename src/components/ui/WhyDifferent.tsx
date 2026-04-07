import Card from "@/components/ui/Card";
import { IconChart, IconTarget, IconUsers } from "@/components/icons";

const points = [
  { icon: IconChart, title: "تحليل عميق", desc: "قراءة رقمية وتكتيكية شاملة لكل حالة لعب." },
  { icon: IconUsers, title: "محتوى أصلي", desc: "فريق تحرير ينتج تقارير حصرية مبنية على بيانات موثوقة." },
  { icon: IconTarget, title: "تغطية تكتيكية", desc: "تفكيك المنظومات الخططية وتأثيرها على مجريات اللقاء." },
  { icon: IconChart, title: "أسلوب بصري احترافي", desc: "تصميم واضح يساعد على فهم الفكرة بسرعة." }
];

export default function WhyDifferent() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {points.map((point) => (
        <Card key={point.title} className="p-5">
          <point.icon className="mb-3 text-mda-green" />
          <h3 className="mb-2 font-bold">{point.title}</h3>
          <p className="text-sm text-mda-beige">{point.desc}</p>
        </Card>
      ))}
    </div>
  );
}
