import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import MiniDashboard from "@/components/ui/MiniDashboard";
import AnalysesMagazine from "@/components/ui/AnalysesMagazine";
import SocialSlider from "@/components/ui/SocialSlider";
import WhyDifferent from "@/components/ui/WhyDifferent";

export const metadata: Metadata = {
  title: "الرئيسية | MDA",
  description: "الصفحة الرئيسية لمنصة MDA لتحليل كرة القدم: تكتيك، بيانات، وفيديو.",
  openGraph: {
    title: "الرئيسية | MDA",
    description: "اكتشف أحدث التحليلات التكتيكية والرقمية في كرة القدم.",
    locale: "ar_AR"
  }
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-l from-mda-card to-mda-bg p-8 shadow-glow md:p-12">
        <div className="pointer-events-none absolute left-0 top-0 h-52 w-52 rounded-full bg-mda-green/20 blur-3xl" />
        <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">تحليل كرة القدم كما يجب أن يكون</h1>
        <p className="mt-4 max-w-2xl text-lg text-mda-beige">
          ندمج التحليل التكتيكي مع البيانات والمحتوى المرئي لنقدّم رؤية أعمق لكل مباراة ولاعب.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/analyses">ابدأ قراءة التحليلات</Button>
          <Button href="/videos" variant="secondary">
            شاهد الفيديو التعريفي
          </Button>
        </div>
      </section>

      <section>
        <SectionTitle title="تعرف على MDA في 40 ثانية" />
        <div className="overflow-hidden rounded-2xl border border-mda-beige/20">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="MDA Intro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section>
        <SectionTitle title="لوحة مصغّرة" subtitle="ملخص أهم مؤشرات الأسبوع" />
        <MiniDashboard />
      </section>

      <section>
        <SectionTitle title="أحدث التحليلات" subtitle="شكل مجلّة بصري لآخر التقارير" />
        <AnalysesMagazine />
      </section>

      <section>
        <SectionTitle title="أحدث السوشيال ميديا" subtitle="مقاطع قصيرة وتحليلات مرئية" />
        <SocialSlider />
      </section>

      <section>
        <SectionTitle title="لماذا نحن مختلفون؟" />
        <WhyDifferent />
      </section>

      <section className="rounded-2xl bg-gradient-to-r from-mda-card to-mda-bg p-8 text-center">
        <h3 className="text-3xl font-bold">انضم إلى مجتمع التحليل</h3>
        <p className="mx-auto mt-3 max-w-xl text-mda-beige">تابع أحدث التحليلات الرقمية والتكتيكية وشارك النقاش مع مجتمع MDA.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button href="/auth/signin">إنشاء حساب</Button>
          <Button href="/auth/signin" variant="secondary">
            تسجيل الدخول
          </Button>
        </div>
      </section>
    </div>
  );
}
