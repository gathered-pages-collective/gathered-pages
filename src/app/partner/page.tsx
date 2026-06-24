import type { Metadata } from "next";
import { PartnerForm } from "@/components/PartnerForm";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Does your organization serve women in need? Apply to receive free Gathered Pages book club boxes for your community.",
  openGraph: {
    title: "Partner With Us — Gathered Pages Collective",
    description:
      "Apply to receive free book club boxes for the women your organization serves.",
  },
};

export default function PartnerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
            Organizations
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mt-4 mb-6">
            Partner With Us
          </h1>
          <p className="font-body text-white/80 text-xl leading-relaxed max-w-2xl mx-auto">
            Do you serve women in need? We want to bring the gift of shared stories to your community —
            completely free of charge.
          </p>
        </div>
      </section>

      {/* Who qualifies */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-navy text-4xl font-bold mb-6">
                Who Can Apply?
              </h2>
              <p className="font-body text-navy/70 text-lg leading-relaxed mb-6">
                We partner with any organization that serves women facing hardship. There is no cost,
                no catch, and no minimum size requirement. If you work with women who would benefit
                from community and connection, we want to hear from you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Women's Shelters",
                  "Recovery & Rehab Centers",
                  "Mental Health Facilities",
                  "Women's Prisons",
                  "Transitional Housing",
                  "Cancer Support Groups",
                  "First Responder Programs",
                  "New Mothers Groups",
                  "Yoga Studios & Wellness",
                  "Schools & Teacher Programs",
                ].map((org) => (
                  <div key={org} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2">
                    <svg className="w-4 h-4 text-orange shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-body text-navy text-sm">{org}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-navy text-4xl font-bold mb-6">
                What You Receive
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Complete book club boxes", desc: "Book, journal, pens, curated items, and discussion guide — at no cost" },
                  { title: "Women-owned business spotlights", desc: "Information about the businesses behind each box item" },
                  { title: "Discussion facilitation support", desc: "Guidance for running a book club session" },
                  { title: "Ongoing relationship", desc: "We aim to be long-term partners, not one-time donors" },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm">
                    <h3 className="font-display text-navy font-bold mb-1">{item.title}</h3>
                    <p className="font-body text-navy/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-navy text-4xl font-bold">Apply to Receive Boxes</h2>
            <p className="font-body text-navy/70 mt-3">
              Fill out the form below and we will be in touch within 2–3 weeks.
            </p>
          </div>
          <PartnerForm />
        </div>
      </section>
    </>
  );
}
