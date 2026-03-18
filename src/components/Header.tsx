"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "OUR TEAM", href: "/team" },
  { label: "SERVICES", href: "/services" },
  { label: "FEE STRUCTURE", href: "/fee-structure" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg
              viewBox="0 0 40 40"
              className="w-8 h-8 text-white"
              fill="currentColor"
            >
              <circle cx="20" cy="12" r="6" />
              <circle cx="12" cy="26" r="5" />
              <circle cx="28" cy="26" r="5" />
              <path d="M20 18 C14 20 10 24 12 26 C14 28 18 22 20 20 C22 22 26 28 28 26 C30 24 26 20 20 18Z" />
            </svg>
          </div>
          <div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-primary">PRO</span>
              <span className="text-white">&</span>
              <span className="text-primary">TEAM</span>
            </span>
            <span className="block text-xs text-gray-400 tracking-widest -mt-1">
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
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
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
        <div className="md:hidden bg-dark-light border-t border-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-3 text-gray-300 hover:text-primary hover:bg-dark transition-colors"
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
