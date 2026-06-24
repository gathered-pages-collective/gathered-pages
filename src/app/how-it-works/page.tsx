import type { Metadata } from "next";
import Link from "next/link";
import { BoxExplorer } from "@/components/BoxExplorer";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how Gathered Pages Collective curates and delivers free book club boxes to women in need — what's inside, who receives them, and how to apply.",
  openGraph: {
    title: "How It Works — Gathered Pages Collective",
    description:
      "From curation to delivery: how we get free book clubs into the hands of women who need them most.",
  },
};

const steps = [
  {
    step: "01",
    title: "Organizations Apply",
    description:
      "Shelters, recovery programs, transitional housing facilities, and other organizations serving women apply to receive boxes through our simple online form.",
  },
  {
    step: "02",
    title: "We Review & Connect",
    description:
      "Our team reviews each application and reaches out to discuss the community's needs, number of women, and best timing for delivery.",
  },
  {
    step: "03",
    title: "Boxes Are Curated",
    description:
      "We thoughtfully select a book and companion items, sourcing everything from women-owned businesses. Every item is chosen with intention.",
  },
  {
    step: "04",
    title: "Delivered at No Cost",
    description:
      "We ship complete book club boxes directly to the organization — free of charge. No application fees, no hidden costs, ever.",
  },
  {
    step: "05",
    title: "Women Read Together",
    description:
      "The organization facilitates the book club experience. Women gather, share the book, and use the discussion guides to spark conversation.",
  },
  {
    step: "06",
    title: "Connection Happens",
    description:
      "Stories open doors. Women who may have felt isolated find community, hear each other, and leave feeling less alone.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
            The Process
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mt-4 mb-6">
            How It Works
          </h1>
          <p className="font-body text-white/80 text-xl leading-relaxed max-w-2xl mx-auto">
            From a donor&apos;s gift to a woman&apos;s hands — here is exactly how the Gathered Pages
            Collective delivers connection through books.
          </p>
        </div>
      </section>

      {/* What's in the Box */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
              Inside Every Box
            </span>
            <h2 className="font-display text-navy text-4xl font-bold mt-3">
              What&apos;s in a Book Club Box?
            </h2>
          </div>
          <BoxExplorer />
          <div className="mt-8 bg-orange/10 border border-orange/20 rounded-2xl p-6 text-center">
            <p className="font-body text-navy font-semibold">
              Every single item in our boxes is purchased from a women-owned business.
            </p>
            <Link
              href="/our-partners"
              className="inline-flex items-center gap-1 font-body text-orange text-sm mt-2 hover:underline focus-ring rounded"
            >
              Meet our women-owned partners →
            </Link>
          </div>
        </div>
      </section>

      {/* Who Receives Them */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
              Who We Serve
            </span>
            <h2 className="font-display text-navy text-4xl font-bold mt-3">
              Who Receives Our Boxes?
            </h2>
            <p className="font-body text-navy/70 text-lg mt-4 max-w-2xl mx-auto">
              We partner with organizations that serve women facing hardship — at no cost to them or
              the women they support.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "Women's Shelters",
              "Recovery & Rehab Centers",
              "Mental Health Facilities",
              "Women's Prisons",
              "Transitional Housing",
              "First Responder Programs",
              "Cancer Support Groups",
              "New Mothers Programs",
              "Schools & Teachers",
            ].map((community) => (
              <div
                key={community}
                className="bg-cream rounded-xl px-4 py-3 text-center"
              >
                <p className="font-body text-navy text-sm font-medium">{community}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process Steps */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
              Step by Step
            </span>
            <h2 className="font-display text-navy text-4xl font-bold mt-3">The Process</h2>
          </div>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div
                  className="shrink-0 w-14 h-14 bg-navy rounded-full flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="font-display text-orange font-bold text-sm">{step.step}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-display text-navy text-xl font-bold mb-2">{step.title}</h3>
                  <p className="font-body text-navy/70 leading-relaxed">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="mt-6 border-b border-cream-dark" aria-hidden="true" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Women-Owned Business Advertising */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Supporting Women in Business</h2>
          <p className="font-body text-white/80 text-lg leading-relaxed mb-4">
            When we purchase items for our boxes, we source exclusively from women-owned businesses.
            Those businesses receive free advertising cards inside every box and recognition on our website.
          </p>
          <p className="font-body text-white/80 text-lg leading-relaxed">
            This means your donation does double work: it funds a book club experience for a woman in
            need, and it supports a woman-owned business at the same time.
          </p>
          <Link
            href="/our-partners"
            className="inline-block mt-8 bg-orange hover:bg-orange-light text-white font-body font-semibold px-8 py-3 rounded-full transition-colors focus-ring"
          >
            Meet Our Partners
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-navy text-4xl font-bold mb-4">
            Ready to get involved?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link
              href="/donate"
              className="bg-orange hover:bg-orange-light text-white font-body font-semibold px-8 py-3 rounded-full transition-colors focus-ring"
            >
              Donate to Fund a Box
            </Link>
            <Link
              href="/partner"
              className="bg-navy hover:bg-navy-light text-white font-body font-semibold px-8 py-3 rounded-full transition-colors focus-ring"
            >
              Apply to Receive Boxes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
