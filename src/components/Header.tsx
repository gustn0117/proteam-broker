"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "OUR TEAM", href: "/team" },
  { label: "SERVICES", href: "/services" },
  { label: "FEE STRUCTURE", href: "/fee-structure" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg shadow-navy/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all ${
              scrolled ? "bg-navy" : "bg-white/10 backdrop-blur-sm border border-white/20"
            }`}
          >
            <span className={`text-lg font-bold ${scrolled ? "text-white" : "text-white"}`}>
              P&T
            </span>
          </div>
          <div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-navy" : "text-white"}`}>
              PRO&TEAM
            </span>
            <span
              className={`block text-[10px] tracking-[0.2em] -mt-0.5 transition-colors ${
                scrolled ? "text-navy-300" : "text-white/60"
              }`}
            >
              INTELLECTUAL PROPERTY
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-semibold tracking-wider transition-colors ${
                scrolled
                  ? "text-navy-400 hover:text-navy"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`text-xs font-semibold tracking-wider px-5 py-2.5 rounded-lg transition-all ${
              scrolled
                ? "bg-navy text-white hover:bg-navy-dark"
                : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
            }`}
          >
            GET IN TOUCH
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-navy" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-3.5 text-navy-400 hover:text-navy hover:bg-navy-50 transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
