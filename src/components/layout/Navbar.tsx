import Link from "next/link";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/teams", label: "الفرق" },
  { href: "/players", label: "اللاعبون" },
  { href: "/matches", label: "المباريات" },
  { href: "/analyses", label: "التحليلات" },
  { href: "/videos", label: "الفيديوهات" }
];

export default function Navbar() {
  return (
    <header className="border-b border-mda-beige/20 bg-mda-bg/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-4">
        <nav className="flex flex-wrap gap-4 text-sm text-mda-beige">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-mda-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="text-left">
          <p className="text-xl font-extrabold text-mda-white">MDA</p>
          <p className="text-xs tracking-[0.15em] text-mda-beige">FOOTBALL ANALYSIS</p>
        </div>
      </div>
    </header>
  );
}
