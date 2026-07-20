"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/about", label: "About" },
  { href: "/meet-our-founder", label: "Meet our Founder" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/virtual-book-clubs", label: "Virtual Clubs" },
  { href: "/partner", label: "Partner" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-cream-dark sticky top-0 z-50">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3 focus-ring rounded"
          aria-label="Gathered Pages Collective home"
        >
          <Image
            src="/logo-mark.png"
            alt="Gathered Pages Collective"
            width={208}
            height={160}
            className="h-16 w-auto"
            priority
          />
          <span className="font-display text-navy font-semibold text-lg sm:text-xl tracking-tight">
            Gathered Pages
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-navy/60 hover:text-navy transition-colors text-sm font-medium focus-ring rounded"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-body font-semibold px-5 py-2.5 rounded-full text-sm transition-colors focus-ring shadow-lg shadow-navy/10"
          >
            Donate Now
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-navy focus-ring rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-cream border-t border-cream-dark"
        >
          <ul className="px-4 py-4 flex flex-col gap-4" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block font-body text-navy hover:text-orange transition-colors text-base focus-ring rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/shop"
                className="block font-body text-navy hover:text-orange transition-colors text-base focus-ring rounded"
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block font-body text-navy hover:text-orange transition-colors text-base focus-ring rounded"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
