import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <span className="text-base font-bold tracking-wide">PRO&TEAM IP</span>
            <p className="text-white/30 text-xs mt-1.5">Intellectual Property</p>
          </div>
          <nav className="flex gap-8">
            {[
              { label: "Our Team", href: "/team" },
              { label: "Services", href: "/services" },
              { label: "Fee Structure", href: "/fee-structure" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/40 hover:text-white text-xs font-medium tracking-wide transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Pro &amp; Team IP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
