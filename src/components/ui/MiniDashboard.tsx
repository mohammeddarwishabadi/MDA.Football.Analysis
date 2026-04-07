import Card from "@/components/ui/Card";

const items = [
  { label: "لاعب الأسبوع", value: "سالم الدوسري", meta: "8.9 تقييم | 2 أهداف" },
  { label: "مباراة الأسبوع", value: "الهلال × النصر", meta: "3-2 | xG 2.4 - 1.7" },
  { label: "تفاعل السوشيال", value: "+18.2%", meta: "مقارنة بالأسبوع الماضي" },
  { label: "رقم مميز", value: "74%", meta: "دقة التمرير في الثلث الأخير" },
  { label: "المباريات المحلّلة", value: "126", meta: "منذ بداية الموسم" }
];

export default function MiniDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => (
        <Card key={item.label} className="p-4">
          <p className="text-xs text-mda-beige/90">{item.label}</p>
          <p className="mt-2 text-xl font-bold text-mda-white">{item.value}</p>
          <p className="mt-1 text-xs text-mda-beige/80">{item.meta}</p>
        </Card>
      ))}
    </div>
  );
}
