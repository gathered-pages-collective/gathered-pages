import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Gathered Pages Collective — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  const lastUpdated = "June 2026";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-navy text-4xl sm:text-5xl font-bold mb-3">
          Privacy Policy
        </h1>
        <p className="font-body text-navy/50 text-sm mb-10">Last updated: {lastUpdated}</p>

        <div className="space-y-10 font-body text-navy/70 leading-relaxed">

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">1. Who We Are</h2>
            <p>
              Gathered Pages Collective (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              is a 501(c)(3) nonprofit organization (EIN: 42-3092238) dedicated to providing free
              book club experiences to women in need. Our website is{" "}
              <strong>gatheredpages.org</strong>. You can contact us at{" "}
              <a href="mailto:jamie@gatheredpages.org" className="text-orange hover:underline">
                jamie@gatheredpages.org
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">2. Information We Collect</h2>
            <h3 className="font-display text-navy text-lg font-semibold mb-2">Information you provide directly:</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li><strong>Email address</strong> — when you sign up for our newsletter</li>
              <li><strong>Name and email</strong> — when you contact us through our contact form</li>
              <li><strong>Organization information</strong> — when you submit a partner application</li>
            </ul>
            <h3 className="font-display text-navy text-lg font-semibold mb-2">Payment information:</h3>
            <p>
              We do not collect or store your payment card information. All donations are processed
              securely by <strong>Stripe</strong>. When you donate, you are redirected to Stripe&apos;s
              hosted checkout page. Stripe may collect your name, email address, and payment details
              in accordance with{" "}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange hover:underline"
              >
                Stripe&apos;s Privacy Policy
              </a>
              . We receive limited transaction information (amount, donor email) to issue tax receipts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To send you our newsletter if you have subscribed (you can unsubscribe at any time)</li>
              <li>To respond to contact form submissions</li>
              <li>To review and follow up on partner applications</li>
              <li>To send tax receipts for donations</li>
              <li>To improve our website and communications</li>
            </ul>
            <p className="mt-4">
              We will never sell, rent, or trade your personal information to third parties for their
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">4. Third-Party Services</h2>
            <p className="mb-4">We use the following third-party services that may process your data:</p>
            <div className="space-y-4">
              <div className="bg-cream rounded-xl p-4">
                <h3 className="font-display text-navy font-semibold mb-1">Stripe</h3>
                <p className="text-sm">
                  Payment processing for donations and shop purchases. Stripe may store your payment
                  information and email address. Stripe is PCI-DSS compliant. See Stripe&apos;s{" "}
                  <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">Privacy Policy</a>.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-4">
                <h3 className="font-display text-navy font-semibold mb-1">Resend</h3>
                <p className="text-sm">
                  Email delivery service used to send tax receipts, newsletter emails, and to deliver
                  form submissions to our team. Your email address is stored in Resend&apos;s systems
                  if you subscribe to our newsletter. See Resend&apos;s{" "}
                  <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">Privacy Policy</a>.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-4">
                <h3 className="font-display text-navy font-semibold mb-1">Plausible Analytics</h3>
                <p className="text-sm">
                  We use Plausible Analytics to understand how visitors use our website. Plausible
                  does not use cookies, does not collect personal information, and does not track
                  individual users across sites. It is GDPR, CCPA, and PECR compliant. See Plausible&apos;s{" "}
                  <a href="https://plausible.io/privacy" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">5. Cookies</h2>
            <p>
              Our website does not use tracking cookies. Plausible Analytics, our analytics provider,
              is cookieless by design. Stripe may set cookies on their hosted checkout page in
              accordance with their own policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">6. Data Retention</h2>
            <p>
              We retain personal information only as long as necessary for the purposes described
              in this policy or as required by law. Newsletter subscribers may unsubscribe at any
              time using the link in any email we send. To request deletion of other data, contact
              us at{" "}
              <a href="mailto:jamie@gatheredpages.org" className="text-orange hover:underline">
                jamie@gatheredpages.org
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">7. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Unsubscribe from our newsletter at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, email us at{" "}
              <a href="mailto:jamie@gatheredpages.org" className="text-orange hover:underline">
                jamie@gatheredpages.org
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">8. Children&apos;s Privacy</h2>
            <p>
              Our website is not directed at children under 13. We do not knowingly collect personal
              information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated date at the top of
              this page reflects the most recent revision. We encourage you to review this page
              periodically.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-2xl font-bold mb-3">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:
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
