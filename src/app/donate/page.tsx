import type { Metadata } from "next";
import Link from "next/link";
import { DonateAmountPicker } from "@/components/DonateAmountPicker";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Donate to Gathered Pages Collective. A complete Book Club in a Box costs about $175. Your tax-deductible gift helps fund free boxes for women in need.",
  openGraph: {
    title: "Donate — Gathered Pages Collective",
    description:
      "A complete Book Club in a Box costs about $175. Help us connect women through shared stories.",
  },
};

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
            Make a Difference
          </span>
          <h1 className="font-display text-navy text-5xl sm:text-6xl font-bold mt-4 mb-6">
            Donate
          </h1>
          <p className="font-body text-navy/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Every dollar you give goes directly to women who need connection, community, and hope.
            Your donation is tax-deductible.
          </p>
        </div>
      </section>

      {/* Donation form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-navy text-3xl font-bold mb-6">Choose Your Gift</h2>
              <DonateAmountPicker />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-display text-navy text-3xl font-bold mb-3">Your Impact</h2>
                <p className="font-body text-navy/70 leading-relaxed mb-6">
                  A complete Book Club in a Box costs about $175. Here&apos;s what your gift makes possible:
                </p>
                <div className="space-y-4">
                  {[
                    { amount: "$25", impact: "Stocks a box with journals, pens, and women's art" },
                    { amount: "$50", impact: "A meaningful start toward a complete box" },
                    { amount: "$100", impact: "Covers more than half a complete box" },
                    { amount: "$175", impact: "Funds one complete Book Club in a Box" },
                  ].map(({ amount, impact }) => (
                    <div key={amount} className="flex items-start gap-4 bg-cream rounded-xl p-4">
                      <span className="font-display text-orange text-xl font-bold shrink-0 w-16">
                        {amount}
                      </span>
                      <p className="font-body text-navy/70 leading-relaxed">{impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy rounded-2xl p-6">
                <h3 className="font-display text-white font-bold text-lg mb-3">
                  Your donation is secure & tax-deductible
                </h3>
                <ul className="space-y-2">
                  {[
                    "Processed securely by Stripe",
                    "Gathered Pages Collective is a 501(c)(3) nonprofit",
                    "EIN: 42-3092238",
                    "You will receive a tax receipt by email",
                    "100¢ of every dollar goes to women in need",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-orange shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-body text-white/80 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-navy text-3xl font-bold mb-8 text-center">
            Other Ways to Give
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-navy text-xl font-bold mb-3">Give by Check</h3>
              <p className="font-body text-navy/70 leading-relaxed mb-3">
                Make checks payable to <strong>Gathered Pages Collective</strong> and mail to:
              </p>
              <address className="font-body text-navy/60 text-sm not-italic bg-cream rounded-lg p-3">
                Gathered Pages Collective<br />
                [Mailing Address Coming Soon]
              </address>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-navy text-xl font-bold mb-3">Employer Matching</h3>
              <p className="font-body text-navy/70 leading-relaxed mb-3">
                Many employers match charitable donations — sometimes doubling or tripling your gift.
                Check with your HR department to see if your company has a matching gift program.
              </p>
              <p className="font-body text-navy/60 text-sm">
                Our EIN for matching purposes: <strong>42-3092238</strong>
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-display text-navy text-xl font-bold mb-3">Annual Reports & Form 990</h3>
            <p className="font-body text-navy/70 leading-relaxed">
              As a newly launched nonprofit, our first annual report and IRS Form 990 will be
              available here once filed. We are committed to full financial transparency.
            </p>
            <p className="font-body text-navy/50 text-sm mt-2">
              Questions about our finances?{" "}
              <Link href="/contact" className="text-orange hover:underline focus-ring rounded">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
