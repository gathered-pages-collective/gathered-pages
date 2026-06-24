import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the Gathered Pages Collective website.",
};

export default function TermsPage() {
  const lastUpdated = "June 2026";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-navy text-4xl sm:text-5xl font-bold mb-3">
          Terms of Use
        </h1>
        <p className="font-body text-navy/50 text-sm mb-10">Last updated: {lastUpdated}</p>

        <div className="space-y-10 font-body text-navy/70 leading-relaxed">

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Gathered Pages Collective website at gatheredpages.org
              (&ldquo;the Site&rdquo;), you agree to be bound by these Terms of Use. If you do not
              agree to these terms, please do not use the Site. Gathered Pages Collective reserves
              the right to update these terms at any time.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">2. Use of the Site</h2>
            <p className="mb-3">You may use this Site for lawful purposes only. You agree not to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Use the Site in any way that violates applicable local, state, or federal laws</li>
              <li>Transmit any unsolicited or unauthorized advertising material</li>
              <li>Attempt to gain unauthorized access to any portion of the Site</li>
              <li>Use the Site to impersonate any person or entity</li>
              <li>Engage in any conduct that restricts or inhibits anyone&apos;s use of the Site</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">3. Donations</h2>
            <p className="mb-3">
              Gathered Pages Collective is a 501(c)(3) nonprofit organization (EIN: 42-3092238).
              Donations are processed securely through Stripe and are tax-deductible to the extent
              allowed by law.
            </p>
            <p className="mb-3">
              <strong>No Refund Policy:</strong> All donations to Gathered Pages Collective are
              final and non-refundable, as they are charitable contributions. If you believe a
              donation was made in error, please contact us at jamie@gatheredpages.org within 5
              business days and we will review the situation on a case-by-case basis.
            </p>
            <p>
              Monthly recurring donations may be cancelled at any time by contacting us at
              jamie@gatheredpages.org. Cancellations will take effect for the next billing cycle.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">4. Shop Purchases</h2>
            <p>
              Purchases of book club boxes through our Shop are processed through Stripe. Pricing is
              subject to change. If you have a question about a purchase, contact us at
              jamie@gatheredpages.org. Shop purchases are generally non-refundable once a box has
              been curated and shipped, but we will work with you to resolve any issues.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">5. Intellectual Property</h2>
            <p>
              All content on this Site — including text, images, logos, and graphics — is the
              property of Gathered Pages Collective or its content suppliers and is protected by
              applicable copyright and intellectual property laws. You may not reproduce, distribute,
              or create derivative works from any content on this Site without express written
              permission from Gathered Pages Collective.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">6. Third-Party Links</h2>
            <p>
              This Site may contain links to third-party websites. These links are provided for your
              convenience only. Gathered Pages Collective has no control over the content of those
              sites and accepts no responsibility for them or for any loss or damage that may arise
              from your use of them.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">7. Disclaimer of Warranties</h2>
            <p>
              This Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis
              without any warranties of any kind, either express or implied. Gathered Pages Collective
              does not warrant that the Site will be uninterrupted, error-free, or free of viruses
              or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Gathered Pages Collective shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages arising out
              of your use of or inability to use this Site, even if we have been advised of the
              possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">9. Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of
              the State of Colorado, without regard to its conflict of law provisions. Any disputes
              arising under these terms shall be resolved in the courts of Colorado.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">10. Contact Us</h2>
            <p>
              If you have questions about these Terms of Use, please contact us:
            </p>
            <address className="not-italic mt-3 bg-cream rounded-xl p-4">
              <strong>Gathered Pages Collective</strong><br />
              <a href="mailto:jamie@gatheredpages.org" className="text-orange hover:underline">
                jamie@gatheredpages.org
              </a><br />
              Colorado, USA
            </address>
          </section>

        </div>
      </div>
    </section>
  );
}
