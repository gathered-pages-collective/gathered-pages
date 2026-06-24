import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/Marquee";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Gathered Pages Collective — Connecting Women Through Shared Stories",
  description:
    "We provide free book club experiences to women in need — fostering community and conversation one box at a time. Donate today and help us connect women through the power of reading.",
  openGraph: {
    title: "Gathered Pages Collective",
    description:
      "Free book club experiences for women in need. Books create conversation. Conversation creates connection. Connection creates hope.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 0%, rgba(234,88,12,0.08) 0%, transparent 45%), radial-gradient(circle at 90% 30%, rgba(59,130,246,0.07) 0%, transparent 40%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-orange" aria-hidden="true" />
                <span className="text-orange text-xs font-semibold uppercase tracking-wider">
                  Now serving Denver-area women
                </span>
              </span>

              <h1 className="text-navy text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6">
                Connecting Women Through{" "}
                <span className="font-accent italic font-normal text-orange">
                  Shared Stories
                </span>
              </h1>

              <p className="font-body text-navy/60 text-lg leading-relaxed max-w-xl mb-8">
                We provide free, thoughtfully curated book club experiences to women in need —
                fostering community and conversation, one box at a time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-light text-white font-semibold px-8 py-3.5 rounded-full text-base transition-colors focus-ring shadow-lg shadow-orange/20"
                >
                  Donate Today
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-dark border border-cream-dark text-navy font-semibold px-8 py-3.5 rounded-full text-base transition-colors focus-ring"
                >
                  <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  How It Works
                </Link>
              </div>
            </div>

            {/* Right — feature photo (positioned like the reference hero) */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl shadow-navy/20 bg-cream-dark">
                <Image
                  src="/hero.jpg"
                  alt="Women gathered in a circle reading and discussing books together"
                  fill
                  priority
                  sizes="(min-width: 1024px) 36rem, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-navy/10 border border-cream-dark px-6 py-4 flex items-center gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-orange/10 shrink-0" aria-hidden="true">
                  <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                <div>
                  <p className="text-navy text-2xl font-semibold leading-none">100%</p>
                  <p className="text-navy/50 text-xs font-semibold uppercase tracking-wider mt-1">
                    Free for women in need
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="bg-white border-y border-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "100%", label: "Free to recipients" },
              { stat: "100¢", label: "Goes to women in need" },
              { stat: "10+", label: "Denver-area partners" },
              { stat: "501(c)(3)", label: "Registered nonprofit" },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <p className="text-navy text-4xl font-semibold">{stat}</p>
                <p className="text-navy/50 text-xs font-semibold uppercase tracking-wider mt-2">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated marquee — Who We Serve */}
      <Marquee />

      {/* The Problem */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-navy text-4xl sm:text-5xl font-bold mb-6">
            Isolation is a Crisis
          </h2>
          <p className="font-body text-navy/70 text-xl leading-relaxed mb-4">
            Women facing hardship — financial instability, domestic violence, illness, recovery, grief,
            incarceration — often experience profound isolation. They lack access to supportive communities
            where they feel seen, heard, and valued.
          </p>
          <p className="font-body text-navy/70 text-xl leading-relaxed">
            Research consistently shows that social connection is critical to resilience and mental wellness.
            Yet for women in shelters, recovery programs, and transitional housing, meaningful community
            experiences are rarely available — and almost never free.
          </p>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
                Our Solution
              </span>
              <h2 className="font-display text-navy text-4xl sm:text-5xl font-bold mt-3 mb-6">
                Book Club in a Box
              </h2>
              <p className="font-body text-navy/70 text-lg leading-relaxed mb-4">
                We curate and deliver complete book club experiences — at no cost — to organizations
                serving women in need. Every box contains a thoughtfully chosen book, a journal, pens,
                and curated items sourced exclusively from women-owned businesses.
              </p>
              <p className="font-body text-navy/70 text-lg leading-relaxed mb-8">
                Each item in our boxes comes from a woman-owned business. Those businesses get free
                advertising in every box and on our website — because lifting women up means lifting
                all women up.
              </p>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 font-body font-semibold text-orange hover:text-orange-light transition-colors focus-ring rounded"
              >
                See how it works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-cream rounded-3xl p-6 flex items-center justify-center">
              <Image
                src="/box.png"
                alt="A Gathered Pages Collective book club box"
                width={600}
                height={600}
                className="w-full max-w-md mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Book Spotlight */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
              This Month&apos;s Selection
            </span>
            <h2 className="font-display text-navy text-4xl font-bold mt-3">Current Book</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-md p-8 sm:p-12 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 sm:gap-10 items-center">
              <Image
                src="/theo-of-golden.jpg"
                alt="Theo of Golden by Allen Levi — book cover"
                width={367}
                height={559}
                className="w-44 h-auto mx-auto rounded-lg shadow-lg"
              />
              <div className="text-center sm:text-left">
                <p className="font-body text-orange/80 italic text-sm mb-2">Our First Selection</p>
                <h3 className="font-display text-navy text-3xl font-bold mb-1">Theo of Golden</h3>
                <p className="font-body text-navy/60 mb-4">by Allen Levi</p>
                <p className="font-body text-navy/70 leading-relaxed">
                  A quietly moving #1 New York Times bestseller about an enigmatic visitor who arrives in
                  the riverside town of Golden and, through small acts of attention and kindness, changes
                  the lives of everyone he meets. It&apos;s a story about connection, belonging, and the
                  beauty of being truly seen — the very heart of what every Gathered Pages book club is about.
                </p>
                <div className="flex justify-center sm:justify-start gap-4 mt-6">
                  <a
                    href="https://instagram.com/gatheredpagescollective"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-orange hover:text-orange-light transition-colors focus-ring rounded font-semibold"
                  >
                    Follow along on Instagram →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
            Financial Transparency
          </span>
          <h2 className="font-display text-navy text-4xl font-bold mt-3 mb-6">
            Where Your Money Goes
          </h2>
          <p className="font-body text-navy/70 text-lg mb-12">
            We believe in full transparency. Every dollar you give goes directly to women in need.
          </p>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <p className="font-display text-orange text-6xl font-bold mb-2">100¢</p>
              <p className="font-body text-navy font-semibold text-lg">of every dollar</p>
              <p className="font-body text-navy/60 text-sm mt-1">goes directly to women in need</p>
            </div>
          </div>
          <p className="font-body text-navy/50 text-sm mt-8">
            Annual reports and Form 990 will be available here once filed.{" "}
            <Link href="/about" className="text-orange hover:underline focus-ring rounded">
              Learn more about our finances →
            </Link>
          </p>
        </div>
      </section>

      {/* Stories of Connection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
              Stories
            </span>
            <h2 className="font-display text-navy text-4xl font-bold mt-3">Stories of Connection</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The book club gave us something to look forward to each week. For the first time in years, I felt like I was part of something.",
                attribution: "Shelter resident, Colorado",
              },
              {
                quote:
                  "Sitting together to discuss a book reminded us that we all have stories worth sharing — and worth hearing.",
                attribution: "Recovery community participant",
              },
              {
                quote:
                  "It wasn't just about the book. It was about having a space where we could be ourselves and not be judged.",
                attribution: "Transitional housing resident",
              },
            ].map((testimonial, index) => (
              <figure
                key={index}
                className="bg-cream rounded-2xl p-8 border-l-4 border-orange"
              >
                <blockquote>
                  <p className="font-body text-navy/80 text-lg leading-relaxed italic mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="font-body text-navy/50 text-sm">
                  — {testimonial.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="text-center font-body text-navy/40 text-sm mt-8">
            * Illustrative of the impact we aim to create as we launch.
          </p>
        </div>
      </section>

      {/* Meet the Board */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
              Our Leadership
            </span>
            <h2 className="font-display text-navy text-4xl font-bold mt-3 mb-4">
              Meet the Board
            </h2>
            <p className="font-body text-navy/70 max-w-xl mx-auto">
              The women leading Gathered Pages Collective.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Jamie Dickinson", role: "Founder", photo: "/board/Jamie%20Dickinson.jpg", position: "object-center" },
              { name: "Tiffany Anderson", role: "Board Member", photo: "/board/Tiffany%20Anderson.jpg", position: "object-top" },
              { name: "Amber Story", role: "Board Member", photo: "/board/Amber%20Story.jpg", position: "object-center" },
              { name: "Crystal Gippe", role: "Board Member", photo: "/board/Crystal%20Gippe.jpg", position: "object-center" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-cream-dark">
                  <Image
                    src={member.photo}
                    alt={`${member.name}, ${member.role} of Gathered Pages Collective`}
                    fill
                    sizes="160px"
                    className={`object-cover ${member.position}`}
                  />
                </div>
                <h3 className="font-display text-navy font-bold text-xl">{member.name}</h3>
                <p className="font-body text-navy/60 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/meet-the-board"
              className="inline-flex items-center gap-2 font-body font-semibold text-orange hover:text-orange-light transition-colors focus-ring rounded"
            >
              Meet the full board
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Women-Owned Partners Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
              Supporting Women in Business
            </span>
            <h2 className="font-display text-navy text-4xl font-bold mt-3 mb-4">
              Women-Owned Partners
            </h2>
            <p className="font-body text-navy/70 max-w-xl mx-auto">
              Every item in our boxes is purchased from a women-owned business.
              We are proud to amplify their work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            {[
              {
                name: "The Read Queen",
                tagline: "Independent women-owned bookstore & café",
                photo: "/partners/The%20Read%20Queen.jpg",
              },
              {
                name: "The Next Chapter",
                tagline: "Books and literary gifts, women-owned",
                photo: "/partners/The%20Next%20Chapter.jpg",
              },
            ].map((partner) => (
              <div key={partner.name} className="bg-cream rounded-2xl overflow-hidden">
                <div className="relative aspect-[16/10] w-full bg-cream-dark">
                  <Image
                    src={partner.photo}
                    alt={`${partner.name} storefront`}
                    fill
                    sizes="(min-width: 640px) 24rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-navy font-bold text-lg">{partner.name}</h3>
                  <p className="font-body text-navy/60 text-sm mt-1">{partner.tagline}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/our-partners"
              className="inline-flex items-center gap-2 font-body font-semibold text-orange hover:text-orange-light transition-colors focus-ring rounded"
            >
              See all women-owned partners
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
            Stay Connected
          </span>
          <h2 className="font-display text-navy text-4xl font-bold mt-3 mb-4">
            Join Our Community
          </h2>
          <p className="font-body text-navy/70 text-lg mb-8">
            Get updates on our book selections, impact stories, and ways to get involved.
          </p>
          <NewsletterForm />
          <p className="font-body text-navy/40 text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

    </>
  );
}
