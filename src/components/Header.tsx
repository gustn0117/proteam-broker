"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "OUR TEAM", href: "/team" },
  { label: "SERVICES", href: "/services" },
  { label: "FEE STRUCTURE", href: "/fee-structure" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(27,42,74,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <div
            className={`w-8 h-8 rounded-md flex items-center justify-center text-[10px] font-bold tracking-tight transition-all duration-300 ${
              scrolled ? "bg-navy text-white" : "bg-white/15 text-white border border-white/20"
            }`}
          >
            P&T
          </div>
          <span
            className={`text-sm font-bold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            PRO&TEAM IP
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] font-semibold tracking-[0.08em] px-4 py-2 rounded-md transition-all duration-300 ${
                  scrolled
                    ? isActive
                      ? "text-navy bg-navy/5"
                      : "text-navy/50 hover:text-navy hover:bg-navy/5"
                    : isActive
                      ? "text-white bg-white/15"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          className={`md:hidden transition-colors ${scrolled ? "text-navy" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-6 py-3 text-navy/60 hover:text-navy text-sm font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
