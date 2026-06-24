import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Thank You for Your Donation",
  description: "Your donation to Gathered Pages Collective has been received. Thank you for helping us connect women through shared stories.",
};

export default function DonateSuccessPage() {
  return (
    <section className="min-h-[70vh] bg-cream flex items-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Gathered Pages Collective"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>

        <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
          <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>

        <h1 className="font-display text-navy text-4xl sm:text-5xl font-bold mb-4">
          Thank You!
        </h1>
        <p className="font-body text-navy/70 text-xl leading-relaxed mb-6">
          Your generosity is helping us connect women through the power of shared stories.
          You just helped fund a book club experience for a woman who needs it.
        </p>
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <p className="font-body text-navy/70 leading-relaxed">
            <strong>A tax receipt is on its way to your inbox.</strong> This email will serve as
            your official tax deduction record. Gathered Pages Collective is a 501(c)(3) nonprofit
            (EIN: 42-3092238).
          </p>
        </div>

        <p className="font-body text-navy/60 mb-8">
          Help us spread the word and bring more women into the circle of connection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://instagram.com/gatheredpagescollective"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy hover:bg-navy-light text-white font-body font-semibold px-6 py-3 rounded-full transition-colors focus-ring"
          >
            Share on Instagram
          </a>
          <a
            href="https://facebook.com/gatheredpagescollective"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy hover:bg-navy-light text-white font-body font-semibold px-6 py-3 rounded-full transition-colors focus-ring"
          >
            Share on Facebook
          </a>
        </div>

        <Link
          href="/"
          className="font-body text-orange hover:text-orange-light transition-colors focus-ring rounded font-semibold"
        >
          ← Return to Home
        </Link>
      </div>
    </section>
  );
}
