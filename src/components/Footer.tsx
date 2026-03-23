import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <span className="text-white text-[15px] font-bold tracking-[0.02em]">PRO&TEAM IP</span>
            <p className="text-white/40 text-[11px] tracking-[0.15em] mt-1.5">INTELLECTUAL PROPERTY</p>
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
                className="text-white/50 hover:text-white/80 text-xs tracking-wide transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/[0.06] mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a
              href="tel:+82-2-6677-3868"
              className="text-white/60 hover:text-white text-xs tracking-wide transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +82-2-6677-3868
            </a>
            <a
              href="mailto:info@proteamip.com"
              className="text-white/60 hover:text-white text-xs tracking-wide transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              info@proteamip.com
            </a>
          </div>
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Pro &amp; Team IP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
