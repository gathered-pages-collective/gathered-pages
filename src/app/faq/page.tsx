import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Gathered Pages Collective — how to get a box, how to donate, and more.",
  openGraph: {
    title: "FAQ — Gathered Pages Collective",
    description:
      "Answers to common questions about our free book club boxes, donations, and partnerships.",
  },
};

const faqs = [
  {
    question: "How does an organization get a free book club box?",
    answer:
      "Organizations serving women in need can apply through our Partner With Us page. Fill out the application form and we will review it and reach out within 2–3 weeks to discuss next steps.",
    link: { href: "/partner", label: "Apply to partner →" },
  },
  {
    question: "Is this really free for the organizations and women who receive boxes?",
    answer:
      "Yes — completely free. There is no cost to apply, no cost to receive boxes, and no cost to the women who participate. Our boxes are funded entirely by donors.",
    link: null,
  },
  {
    question: "What is in a Gathered Pages box?",
    answer:
      "Each box contains a thoughtfully curated book, a journal, pens, a discussion guide, curated extras, and spotlight cards featuring the women-owned businesses that supplied each item. Every item is sourced from a women-owned business.",
    link: { href: "/how-it-works", label: "Learn how it works →" },
  },
  {
    question: "How do I donate?",
    answer:
      "You can donate directly on our Donate page. We accept one-time and monthly donations processed securely through Stripe. You can also give by check — see the Donate page for our mailing address.",
    link: { href: "/donate", label: "Donate now →" },
  },
  {
    question: "Are donations tax-deductible?",
    answer:
      "Yes. Gathered Pages Collective is a registered 501(c)(3) nonprofit organization (EIN: 42-3092238). All donations are fully tax-deductible to the extent allowed by law. You will receive an official tax receipt by email after each donation.",
    link: null,
  },
  {
    question: "Can my book club purchase a Gathered Pages box?",
    answer:
      "Yes! Book clubs can purchase a Gathered Pages box. Your purchase funds a free box for a woman in need. Contact us to discuss book selection, timing, and pricing.",
    link: { href: "/shop", label: "Learn about buying a box →" },
  },
  {
    question: "How do I know my money is being used well?",
    answer:
      "We are committed to full financial transparency. 100 cents of every dollar donated goes directly to women in need. As a 501(c)(3) nonprofit, we will publish our annual reports and Form 990 filings as soon as they are available.",
    link: { href: "/about", label: "Learn about our finances →" },
  },
  {
    question: "Does Gathered Pages Collective operate nationally?",
    answer:
      "Yes. We serve women nationwide. We are a registered 501(c)(3) nonprofit organized in Colorado, and we welcome organizations and participants from anywhere in the country. Wherever you are, we encourage you to apply or join a virtual book club.",
    link: null,
  },
  {
    question: "How can a women-owned business get featured?",
    answer:
      "We are always looking for women-owned businesses to source from. If you create books, journals, stationery, gifts, or wellness products that align with our mission, please reach out.",
    link: { href: "/contact", label: "Contact us →" },
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-cream py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-navy text-5xl sm:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-body text-navy/70 text-xl">
            Can&apos;t find your answer here?{" "}
            <Link href="/contact" className="text-orange hover:underline focus-ring rounded font-semibold">
              Contact us
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-cream-dark pb-8 last:border-0 last:pb-0">
                <dt className="font-display text-navy text-xl font-bold mb-3">{faq.question}</dt>
                <dd>
                  <p className="font-body text-navy/70 leading-relaxed">{faq.answer}</p>
                  {faq.link && (
                    <Link
                      href={faq.link.href}
                      className="inline-flex items-center gap-1 mt-3 font-body text-sm text-orange hover:text-orange-light transition-colors focus-ring rounded font-semibold"
                    >
                      {faq.link.label}
                    </Link>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-navy text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="font-body text-navy/70 mb-6">We would love to hear from you.</p>
          <Link
            href="/contact"
            className="inline-block bg-orange hover:bg-orange-light text-white font-body font-semibold px-8 py-3 rounded-full transition-colors focus-ring"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
