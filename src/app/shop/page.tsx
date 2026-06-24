import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy a Box",
  description:
    "Purchase a Gathered Pages book club box for your own book club. Your purchase funds a free box for a woman in need.",
  openGraph: {
    title: "Buy a Box — Gathered Pages Collective",
    description:
      "Buy a book club box for your group and fund a free one for a woman in need.",
  },
};

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
            For Book Clubs
          </span>
          <h1 className="font-display text-navy text-5xl sm:text-6xl font-bold mt-4 mb-6">
            Buy a Box
          </h1>
          <p className="font-body text-navy/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Love books? Run a book club? Purchase a Gathered Pages box for your group —
            and your purchase funds a free box for a woman who needs it most.
          </p>
        </div>
      </section>

      {/* The Concept */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-navy text-4xl font-bold mb-6">
                Buy One, Give One
              </h2>
              <p className="font-body text-navy/70 text-lg leading-relaxed mb-4">
                When your book club purchases a Gathered Pages box, the proceeds directly fund a
                complete, free box for a woman in a shelter, recovery program, or transitional
                housing facility.
              </p>
              <p className="font-body text-navy/70 text-lg leading-relaxed mb-4">
                Your box will contain the same curated book, journal, pens, and items from
                women-owned businesses — packaged beautifully for your group&apos;s experience.
              </p>
              <p className="font-body text-navy/70 text-lg leading-relaxed mb-8">
                It&apos;s a book club experience with purpose.
              </p>

              <div className="bg-cream rounded-2xl p-6">
                <p className="font-display text-navy text-2xl font-bold mb-1">~$175</p>
                <p className="font-body text-navy/60 text-sm mb-3">per box (pricing may vary based on book selection)</p>
                <p className="font-body text-navy/70 text-sm leading-relaxed">
                  Boxes are curated quarterly. Contact us to discuss your book club&apos;s timing
                  and book preferences. Each purchase funds one free box for a woman in need.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-navy text-2xl font-bold mb-4">What&apos;s Included</h3>
              {[
                { emoji: "📖", title: "Curated Book", desc: "A thoughtfully chosen selection, the same book going to women in need" },
                { emoji: "📓", title: "Journal", desc: "For personal reflection alongside the reading" },
                { emoji: "✏️", title: "Quality Pens", desc: "Sourced from a women-owned business" },
                { emoji: "🎁", title: "Curated Extras", desc: "Additional items sourced from women-owned businesses" },
                { emoji: "💌", title: "Discussion Guide", desc: "Thoughtful questions to guide your book club conversation" },
                { emoji: "🏷️", title: "Business Spotlights", desc: "Cards featuring the women-owned businesses behind the box" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-cream rounded-xl p-4">
                  <span className="text-2xl shrink-0" role="img" aria-label={item.title}>{item.emoji}</span>
                  <div>
                    <p className="font-body text-navy font-semibold">{item.title}</p>
                    <p className="font-body text-navy/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold mb-4">
            Ready to order for your book club?
          </h2>
          <p className="font-body text-white/80 text-lg mb-8">
            Box pricing varies by selection. Reach out and we&apos;ll work with you on timing,
            book selection, and number of boxes needed.
          </p>
          <Link
            href="/contact"
            className="bg-orange hover:bg-orange-light text-white font-body font-semibold px-8 py-4 rounded-full text-lg transition-colors focus-ring"
          >
            Contact Us to Order
          </Link>
          <p className="font-body text-white/40 text-sm mt-6">
            Looking for free boxes for your organization?{" "}
            <Link href="/partner" className="text-orange hover:underline focus-ring rounded">
              Apply to partner with us →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
