import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Gathered Pages Collective. We would love to hear from you.",
  openGraph: {
    title: "Contact — Gathered Pages Collective",
    description: "Reach out to Gathered Pages Collective with questions, partnership inquiries, or just to say hello.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-navy text-5xl sm:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="font-body text-navy/70 text-xl leading-relaxed">
            Questions, partnership ideas, or just want to say hi? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-navy text-3xl font-bold mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-display text-navy text-3xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-body text-navy font-semibold text-sm">Email</p>
                      <a
                        href="mailto:jamie@gatheredpages.org"
                        className="font-body text-orange hover:underline focus-ring rounded"
                      >
                        jamie@gatheredpages.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <div>
                      <p className="font-body text-navy font-semibold text-sm">Instagram</p>
                      <a
                        href="https://instagram.com/gatheredpagescollective"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-orange hover:underline focus-ring rounded"
                      >
                        @gatheredpagescollective
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-navy text-xl font-bold mb-4">Looking for something specific?</h3>
                <div className="space-y-3">
                  {[
                    { label: "Apply to receive boxes", href: "/partner" },
                    { label: "Buy a box for your book club", href: "/shop" },
                    { label: "Press & media inquiries", href: "/press" },
                    { label: "Common questions", href: "/faq" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between bg-cream hover:bg-cream-dark rounded-xl px-4 py-3 transition-colors focus-ring group"
                    >
                      <span className="font-body text-navy text-sm group-hover:text-orange transition-colors">{item.label}</span>
                      <svg className="w-4 h-4 text-navy/40 group-hover:text-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
