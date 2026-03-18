import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <span className="text-2xl font-bold tracking-tight">
                PRO&TEAM
              </span>
              <span className="block text-xs text-navy-200 tracking-[0.2em] mt-0.5">
                INTELLECTUAL PROPERTY
              </span>
            </div>
            <p className="text-navy-200 text-sm leading-relaxed max-w-sm">
              Bridging ideas and value through strategic patent brokerage,
              licensing, and IP advisory services across the U.S., Europe, and Asia.
            </p>
            <p className="text-navy-300 text-xs mt-3">
              전문적인 특허 중개, 라이센싱, 자문 서비스를 통해 지적 재산에 전략적 가치를 부여합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-5 text-xs tracking-[0.15em]">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Our Team", href: "/team" },
                { label: "Services", href: "/services" },
                { label: "Fee Structure", href: "/fee-structure" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-5 text-xs tracking-[0.15em]">
              CONTACT
            </h3>
            <ul className="space-y-3 text-navy-200 text-sm">
              <li>info@proteambroker.com</li>
              <li>www.proteambroker.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-300 text-xs">
            &copy; {new Date().getFullYear()} Pro &amp; Team IP. All rights reserved.
          </p>
          <p className="text-navy-400 text-xs">
            Patent Brokerage &middot; Licensing &middot; Valuation &middot; Advisory
          </p>
        </div>
      </div>
    </footer>
  );
}
