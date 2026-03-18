import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-800">
      {/* Green accent bar */}
      <div className="h-1 bg-primary" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span className="text-primary">PRO</span>
                <span className="text-white">&</span>
                <span className="text-primary">TEAM</span>
              </span>
              <span className="block text-xs text-gray-500 tracking-widest">
                INTELLECTUAL PROPERTY
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bridging ideas and value through strategic patent brokerage,
              licensing, and IP advisory services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-semibold mb-4 text-sm tracking-wider">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Our Team", href: "/team" },
                { label: "Services", href: "/services" },
                { label: "Fee Structure", href: "/fee-structure" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary font-semibold mb-4 text-sm tracking-wider">
              CONTACT
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>www.proteambroker.com</li>
              <li>info@proteambroker.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Pro &amp; Team IP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
