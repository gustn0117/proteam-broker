import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-lg font-bold tracking-tight">PRO&TEAM IP</span>
          </div>
          <nav className="flex gap-8">
            <Link href="/team" className="text-navy-200 hover:text-white text-sm transition-colors">
              Our Team
            </Link>
            <Link href="/services" className="text-navy-200 hover:text-white text-sm transition-colors">
              Services
            </Link>
            <Link href="/fee-structure" className="text-navy-200 hover:text-white text-sm transition-colors">
              Fee Structure
            </Link>
          </nav>
        </div>
        <div className="border-t border-navy-600 mt-8 pt-6 text-center">
          <p className="text-navy-300 text-xs">
            &copy; {new Date().getFullYear()} Pro &amp; Team IP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
