import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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

const artists = [
  {
    name: "Rebekah Hayden",
    business: "Sunshine and Laurel Art",
    headshot: "/partners/Rebekah%20Hayden.jpg",
    art: "/partners/Rebekah%20Hayden%20art.webp",
    bio: "Rebekah Hayden is a Colorado-based landscape artist and founder of Sunshine and Laurel Art. Inspired by the beauty of God's creation, she creates expressive acrylic paintings that blend realism with texture and emotion, striving to capture fleeting moments of beauty. Through her work, Rebekah seeks to emulate the wonder and deeper stories found in nature, inviting viewers to slow down and reconnect with the world around them. When she's not painting, she enjoys hiking, paddleboarding, homeschooling her children, and exploring Colorado's outdoors with her family.",
    href: "https://sunshineandlaurelart.com/",
    linkLabel: "Visit Sunshine and Laurel Art →",
  },
  {
    name: "Laura",
    business: "Ginkgo by Laura",
    headshot: "/partners/Laura.jpg",
    art: "/partners/Laura%27s%20art.webp",
    bio: "Laura is a biologist by trade and an avid gardener who translates the beauty of the plant world into colorful drawings. Inspired by an ancestor who was a Pennsylvania fraktur folk artist, her work keeps the inked outlines and watercolors of that tradition while becoming entirely her own. She scans her original art to create cards, calendars, and journals — including the journals tucked into every Gathered Pages box. Her shop is named for the Ginkgo biloba, an ancient tree whose elegant leaves date back 270 million years.",
    href: "https://www.etsy.com/shop/GinkgoByLaura",
    linkLabel: "Shop Ginkgo by Laura →",
  },
];

const bookstores = [
  {
    name: "Next Chapter",
    description:
      "A women-owned books and gifts shop specializing in literary-inspired products, journals, and carefully selected reading companions.",
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

      {/* Our Artists & Journals */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
              Featured Artists
            </span>
            <h2 className="font-display text-navy text-4xl font-bold mt-3 mb-4">
              Our Artists &amp; Journals
            </h2>
            <p className="font-body text-navy/70 max-w-2xl mx-auto">
              The artwork and journals in every box come from these women-owned studios.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {artists.map((artist) => (
              <div key={artist.name} className="bg-cream rounded-3xl overflow-hidden flex flex-col shadow-sm">
                <div className="relative aspect-[4/3] w-full bg-cream-dark">
                  <Image
                    src={artist.art}
                    alt={`Artwork by ${artist.name}`}
                    fill
                    sizes="(min-width: 1024px) 36rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-cream-dark shrink-0">
                      <Image
                        src={artist.headshot}
                        alt={artist.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-navy text-2xl font-bold leading-tight">{artist.name}</h3>
                      <p className="font-body text-orange font-semibold">{artist.business}</p>
                    </div>
                  </div>
                  <p className="font-body text-navy/70 leading-relaxed flex-1">{artist.bio}</p>
                  <a
                    href={artist.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-5 font-body text-sm text-orange hover:text-orange-light transition-colors focus-ring rounded font-semibold"
                  >
                    {artist.linkLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bookstores */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
              Bookstores
            </span>
            <h2 className="font-display text-navy text-4xl font-bold mt-3">
              Where Our Books Come From
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {bookstores.map((partner) => (
              <div key={partner.name} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 bg-orange/10 rounded-full flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="font-display text-navy text-2xl font-bold">{partner.name}</h3>
                    <span className="inline-block bg-navy/10 text-navy font-body text-xs font-semibold px-2 py-0.5 rounded-full mt-1">
                      {partner.category}
                    </span>
                  </div>
                </div>
                <p className="font-body text-navy/70 leading-relaxed">{partner.description}</p>
              </div>
            ))}
            <div className="rounded-2xl border-2 border-dashed border-navy/15 bg-white/50 flex flex-col items-center justify-center text-center p-8">
              <span className="text-3xl mb-3" aria-hidden="true">✨</span>
              <h3 className="font-display text-navy/60 text-xl font-bold">More Partners Coming Soon</h3>
              <p className="font-body text-navy/50 text-sm mt-2">
                We&apos;re finalizing partnerships with more women-owned businesses to feature here.
              </p>
            </div>
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
