import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Women-Owned Partners",
  description:
    "Meet the women-owned businesses behind every Gathered Pages box. We source every item from women entrepreneurs.",
  openGraph: {
    title: "Women-Owned Partners — Gathered Pages Collective",
    description:
      "Every item in our boxes comes from a women-owned business. Meet the entrepreneurs we proudly support.",
  },
};

const partners = [
  {
    name: "Read Queen",
    description:
      "An independent women-owned bookstore offering a curated selection of fiction, nonfiction, and literary gifts. Read Queen shares our belief that books change lives.",
    website: null,
    category: "Bookstore",
  },
  {
    name: "Next Chapter",
    description:
      "A women-owned books and gifts shop specializing in literary-inspired products, journals, and carefully selected reading companions.",
    website: null,
    category: "Books & Gifts",
  },
];

export default function OurPartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
            Our Suppliers
          </span>
          <h1 className="font-display text-navy text-5xl sm:text-6xl font-bold mt-4 mb-6">
            Women-Owned Partners
          </h1>
          <p className="font-body text-navy/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Every single item in our book club boxes is purchased from a women-owned business.
            When you donate to us, you support women twice.
          </p>
        </div>
      </section>

      {/* Why Women-Owned */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-white/80 text-xl leading-relaxed">
            Our commitment to sourcing from women-owned businesses is not an afterthought — it is
            central to our mission. Lifting up women who need community also means lifting up
            the women building businesses. Every box is an act of solidarity.
          </p>
        </div>
      </section>

      {/* Partners grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-cream rounded-2xl p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 bg-orange/10 rounded-full flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h2 className="font-display text-navy text-2xl font-bold">{partner.name}</h2>
                    <span className="inline-block bg-navy/10 text-navy font-body text-xs font-semibold px-2 py-0.5 rounded-full mt-1">
                      {partner.category}
                    </span>
                  </div>
                </div>
                <p className="font-body text-navy/70 leading-relaxed">{partner.description}</p>
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 font-body text-sm text-orange hover:underline focus-ring rounded font-semibold"
                  >
                    Visit website →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA to become a partner */}
          <div className="bg-navy rounded-3xl p-10 text-white text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Own a women-owned business?
            </h2>
            <p className="font-body text-white/80 text-lg leading-relaxed mb-6 max-w-xl mx-auto">
              We are always looking for women-owned businesses to feature in our boxes and on this
              page. If you make products that align with our mission — books, journals, stationery,
              gifts, or wellness items — we would love to connect.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange hover:bg-orange-light text-white font-body font-semibold px-8 py-3 rounded-full transition-colors focus-ring"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
