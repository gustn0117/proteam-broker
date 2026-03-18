import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <span className="text-white text-[15px] font-bold tracking-[0.02em]">PRO&TEAM IP</span>
            <p className="text-white/20 text-[11px] tracking-[0.15em] mt-1.5">INTELLECTUAL PROPERTY</p>
          </div>
          <nav className="flex gap-10">
            {[
              { label: "Our Team", href: "/team" },
              { label: "Services", href: "/services" },
              { label: "Fee Structure", href: "/fee-structure" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/30 hover:text-white/60 text-xs tracking-wide transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-white/[0.06] mt-12 pt-8">
          <p className="text-white/15 text-xs">
            &copy; {new Date().getFullYear()} Pro &amp; Team IP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
