import type { Metadata } from "next";
import { VirtualClubForm } from "@/components/VirtualClubForm";

export const metadata: Metadata = {
  title: "Join a Virtual Book Club",
  description:
    "Receive your own Gathered Pages box and join a free, facilitator-led virtual book club with women who share your story — from anywhere in the country.",
  openGraph: {
    title: "Join a Virtual Book Club — Gathered Pages Collective",
    description:
      "Your own box, a virtual book club, and a community of women who understand. Free and nationwide.",
  },
};

const steps = [
  {
    step: "01",
    title: "Sign Up",
    description:
      "Tell us a little about yourself, including the community you most identify with — first responders, nurses, teachers, new moms, cancer survivors, and more.",
  },
  {
    step: "02",
    title: "We Group You",
    description:
      "We thoughtfully sort participants into small virtual groups of women who share something in common, so every conversation feels safe and familiar.",
  },
  {
    step: "03",
    title: "Get Your Box",
    description:
      "Each participant receives her own personal Gathered Pages box — the book, a journal, and curated items from women-owned businesses.",
  },
  {
    step: "04",
    title: "Meet & Connect",
    description:
      "A facilitator leads your virtual book club sessions. You read together, share, and build a community of women who truly understand one another.",
  },
];

export default function VirtualBookClubsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
            A New Way to Connect
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mt-4 mb-6">
            Join a Virtual Book Club
          </h1>
          <p className="font-body text-white/80 text-xl leading-relaxed max-w-2xl mx-auto">
            Get your own Gathered Pages box and join a free, facilitator-led virtual book club with
            women who share your story — from anywhere in the country.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="font-display text-navy text-4xl font-bold mt-3">
              From Signup to Sisterhood
            </h2>
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

      {/* Signup form */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-navy text-4xl font-bold mb-4">Sign Up to Join</h2>
            <p className="font-body text-navy/70 text-lg">
              Tell us about yourself and we&apos;ll be in touch as we form groups. It&apos;s
              completely free.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-md p-8 sm:p-10">
            <VirtualClubForm />
          </div>
        </div>
      </section>

      {/* Coming soon note */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-orange/10 border border-orange/20 rounded-2xl p-6">
            <p className="font-body text-navy font-semibold mb-1">More to come</p>
            <p className="font-body text-navy/70 leading-relaxed">
              We&apos;re working toward providing e-readers and author-donated e-books for virtual
              participants. Sign up now and you&apos;ll be the first to know as the program grows.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
