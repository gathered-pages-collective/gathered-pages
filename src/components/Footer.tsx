import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-navy text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 focus-ring rounded">
              <Image
                src="/logo.png"
                alt="Gathered Pages Collective logo"
                width={48}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="font-body text-sm text-white/80 leading-relaxed">
              Connecting women through shared stories, one box at a time.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com/gatheredpagescollective"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-white/70 hover:text-orange transition-colors focus-ring rounded"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/gatheredpagescollective"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-white/70 hover:text-orange transition-colors focus-ring rounded"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-display text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigate
            </h3>
            <ul className="space-y-2" role="list">
              {[
                { href: "/about", label: "About Us" },
                { href: "/meet-the-board", label: "Our Board" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/our-partners", label: "Women-Owned Partners" },
                { href: "/faq", label: "FAQ" },
                { href: "/press", label: "Press & Media" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-orange transition-colors focus-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-display text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Get Involved
            </h3>
            <ul className="space-y-2" role="list">
              {[
                { href: "/donate", label: "Donate" },
                { href: "/partner", label: "Partner With Us" },
                { href: "/shop", label: "Buy a Box" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-orange transition-colors focus-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-display text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <address className="not-italic">
              <a
                href="mailto:jamie@gatheredpages.org"
                className="font-body text-sm text-white/70 hover:text-orange transition-colors focus-ring rounded block mb-1"
              >
                jamie@gatheredpages.org
              </a>
              <p className="font-body text-sm text-white/50 mt-2">
                Mailing Address:<br />
                [Address Coming Soon]
              </p>
            </address>

            <div className="mt-6">
              <p className="font-body text-xs text-white/50 leading-relaxed">
                Gathered Pages Collective is a 501(c)(3) nonprofit organization.
                <br />
                EIN: 42-3092238
                <br />
                Donations are tax-deductible.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Gathered Pages Collective. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-body text-xs text-white/40 hover:text-orange transition-colors focus-ring rounded"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-body text-xs text-white/40 hover:text-orange transition-colors focus-ring rounded"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
