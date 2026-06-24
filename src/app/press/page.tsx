import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "Press kit and media resources for Gathered Pages Collective. Download our logo and learn about our mission.",
  openGraph: {
    title: "Press & Media — Gathered Pages Collective",
    description:
      "Press resources for Gathered Pages Collective — a 501(c)(3) nonprofit connecting women through free book club experiences.",
  },
};

export default function PressPage() {
  return (
    <>
      <section className="bg-cream py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
            Media Resources
          </span>
          <h1 className="font-display text-navy text-5xl sm:text-6xl font-bold mt-4 mb-6">
            Press & Media
          </h1>
          <p className="font-body text-navy/70 text-xl">
            For press inquiries, please contact{" "}
            <a
              href="mailto:jamie@gatheredpages.org"
              className="text-orange hover:underline focus-ring rounded font-semibold"
            >
              jamie@gatheredpages.org
            </a>
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Organization Summary */}
          <div>
            <h2 className="font-display text-navy text-3xl font-bold mb-6">About Gathered Pages Collective</h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-body text-navy/70 leading-relaxed mb-4">
                Gathered Pages Collective is a 501(c)(3) nonprofit organization based in Colorado.
                We connect women facing hardship through the power of shared stories by providing
                free, thoughtfully curated book club experiences — delivered directly to shelters,
                recovery programs, transitional housing facilities, and other organizations serving
                women in need.
              </p>
              <p className="font-body text-navy/70 leading-relaxed mb-4">
                Every box contains a curated book, journal, pens, a discussion guide, and additional
                items sourced exclusively from women-owned businesses. Those businesses receive free
                advertising in every box and on our website.
              </p>
              <p className="font-body text-navy/70 leading-relaxed">
                Founded in 2026 by Jamie Dickinson, Gathered Pages Collective believes that books
                create conversation, conversation creates connection, and connection creates hope.
              </p>
            </div>
          </div>

          {/* Key Facts */}
          <div>
            <h2 className="font-display text-navy text-3xl font-bold mb-6">Key Facts</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Founded", value: "2026" },
                { label: "Type", value: "501(c)(3) Nonprofit" },
                { label: "EIN", value: "42-3092238" },
                { label: "Headquarters", value: "Colorado" },
                { label: "Mission", value: "Connect women through shared stories" },
                { label: "Model", value: "Free book clubs in a box" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-cream rounded-xl p-4">
                  <dt className="font-body text-navy/50 text-xs uppercase tracking-wider mb-1">{label}</dt>
                  <dd className="font-display text-navy font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Logo Download */}
          <div>
            <h2 className="font-display text-navy text-3xl font-bold mb-6">Logo & Brand Assets</h2>
            <div className="bg-cream rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Gathered Pages Collective logo"
                  width={160}
                  height={160}
                  className="w-40 h-auto"
                />
              </div>
              <div>
                <h3 className="font-display text-navy font-bold text-xl mb-2">Primary Logo</h3>
                <p className="font-body text-navy/60 text-sm leading-relaxed mb-4">
                  Navy blue and orange on white. Please do not alter the colors, proportions, or
                  mark of the logo.
                </p>
                <a
                  href="/logo.png"
                  download="gathered-pages-collective-logo.png"
                  className="inline-block bg-navy hover:bg-navy-light text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors focus-ring"
                >
                  Download Logo (PNG)
                </a>
              </div>
            </div>
          </div>

          {/* Brand Colors */}
          <div>
            <h2 className="font-display text-navy text-3xl font-bold mb-6">Brand Colors</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Navy", hex: "#1B3A6B", bg: "bg-navy" },
                { name: "Orange", hex: "#E05A2B", bg: "bg-orange" },
                { name: "Cream", hex: "#FAF7F2", bg: "bg-cream" },
                { name: "Sage", hex: "#8B9E77", bg: "bg-sage" },
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div className={`${color.bg} rounded-xl h-16 mb-2 border border-cream-dark`} />
                  <p className="font-body text-navy font-semibold text-sm">{color.name}</p>
                  <p className="font-body text-navy/40 text-xs">{color.hex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Board */}
          <div>
            <h2 className="font-display text-navy text-3xl font-bold mb-6">Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Jamie Dickinson", role: "Founder" },
                { name: "Tiffany Anderson", role: "Board Member" },
                { name: "Amber Story", role: "Board Member" },
                { name: "Crystal Gippe", role: "Board Member" },
              ].map((person) => (
                <div key={person.name} className="bg-cream rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center shrink-0" aria-hidden="true">
                    <span className="font-display text-navy font-bold">{person.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-display text-navy font-bold">{person.name}</p>
                    <p className="font-body text-navy/60 text-sm">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Press Contact */}
          <div className="bg-navy rounded-2xl p-8 text-white text-center">
            <h2 className="font-display text-3xl font-bold mb-3">Press Contact</h2>
            <p className="font-body text-white/80 mb-4">
              For interviews, media inquiries, or additional assets:
            </p>
            <a
              href="mailto:jamie@gatheredpages.org"
              className="font-body text-orange text-lg font-semibold hover:underline focus-ring rounded"
            >
              jamie@gatheredpages.org
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
