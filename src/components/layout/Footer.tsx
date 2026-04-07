import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#0A1A14]">
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h4 className="mb-2 font-bold">عن MDA</h4>
          <p className="text-sm text-mda-beige">منصة تحليل كرة قدم تجمع بين التكتيك والأرقام والسرد البصري.</p>
        </div>
        <div>
          <h4 className="mb-2 font-bold">روابط</h4>
          <ul className="space-y-2 text-sm text-mda-beige">
            <li><Link href="/analyses">التحليلات</Link></li>
            <li><Link href="/matches">المباريات</Link></li>
            <li><Link href="/videos">الفيديوهات</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-bold">تابعنا</h4>
          <div className="flex gap-3 text-mda-beige">
            <span>𝕏</span>
            <span>▶</span>
            <span>◎</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
