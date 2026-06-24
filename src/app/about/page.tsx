import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Gathered Pages Collective — our mission, our story, and the board of directors driving this nonprofit forward.",
  openGraph: {
    title: "About Gathered Pages Collective",
    description:
      "We believe stories heal, connect, and empower. Learn who we are and why we started.",
  },
};

const boardMembers = [
  { name: "Jamie Dickinson", role: "Founder", photo: "/board/Jamie%20Dickinson.jpg", position: "object-center" },
  { name: "Tiffany Anderson", role: "Board Member", photo: "/board/Tiffany%20Anderson.jpg", position: "object-top" },
  { name: "Amber Story", role: "Board Member", photo: "/board/Amber%20Story.jpg", position: "object-center" },
  { name: "Crystal Gippe", role: "Board Member", photo: "/board/Crystal%20Gippe.jpg", position: "object-center" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h1 className="font-display text-navy text-5xl sm:text-6xl font-bold mt-4 mb-6">
            About Gathered Pages
          </h1>
          <p className="font-body text-navy/70 text-xl leading-relaxed">
            We believe that stories heal, connect, and empower.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
                Mission Statement
              </span>
              <h2 className="font-display text-navy text-4xl font-bold mt-3 mb-6">
                Our Mission
              </h2>
              <p className="font-body text-navy/70 text-lg leading-relaxed mb-4">
                Our mission is to connect women through shared stories by providing free, thoughtfully
                curated book club experiences to women in need — fostering community and conversation
                one box at a time through the power of reading together.
              </p>
              <p className="font-body text-navy/70 text-lg leading-relaxed">
                We purchase every item in our boxes from women-owned businesses and market those
                businesses through free advertising in our boxes and on our website. When you donate
                to us, you are supporting women twice.
              </p>
            </div>
            <div className="bg-cream rounded-3xl p-12 text-center">
              <Image
                src="/logo.png"
                alt="Gathered Pages Collective logo"
                width={240}
                height={240}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-center mb-12">Why We Exist</h2>
          <div className="space-y-6">
            <p className="font-body text-white/80 text-lg leading-relaxed">
              Women facing hardship often experience profound isolation. Whether navigating financial
              instability, domestic violence, illness, recovery, grief, single parenthood, incarceration,
              or major life transitions, many women lack access to supportive communities where they feel
              seen, heard, and valued.
            </p>
            <p className="font-body text-white/80 text-lg leading-relaxed">
              Research consistently shows that social connection and community support are critical to
              resilience and mental wellness. However, many women in shelters, transitional housing programs,
              recovery communities, and underserved populations lack access to affordable, structured
              opportunities for meaningful engagement and discussion.
            </p>
            <p className="font-body text-white/80 text-lg leading-relaxed">
              Books have the power to create connection, spark healing conversations, and remind women
              they are not alone. Yet traditional book clubs and literary communities are often financially
              or socially inaccessible to women in crisis or transition.
            </p>
            <blockquote className="border-l-4 border-orange pl-6 mt-8">
              <p className="font-display text-white text-2xl font-semibold italic">
                &ldquo;Books create conversation. Conversation creates connection. Connection creates hope.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-navy text-4xl font-bold text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "📚",
                title: "100% Free",
                description:
                  "Every box we send is completely free to the organizations and women who receive them. No cost, no catch.",
              },
              {
                emoji: "👩‍💼",
                title: "Women-Owned Everything",
                description:
                  "Every item in our boxes is sourced from a women-owned business. Your donation supports women twice over.",
              },
              {
                emoji: "🤲",
                title: "Community First",
                description:
                  "We partner directly with shelters, prisons, recovery centers, and transitional housing to reach women who need connection most.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <span className="text-4xl block mb-4" role="img" aria-label={item.title}>
                  {item.emoji}
                </span>
                <h3 className="font-display text-navy text-xl font-bold mb-3">{item.title}</h3>
                <p className="font-body text-navy/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-navy text-4xl font-bold mb-6">Financial Transparency</h2>
          <p className="font-body text-navy/70 text-lg leading-relaxed mb-4">
            As a 501(c)(3) nonprofit organization, we are committed to full financial transparency.
            100 cents of every dollar donated goes directly to women in need.
          </p>
          <p className="font-body text-navy/70 text-lg leading-relaxed mb-8">
            We are a newly registered organization. Our annual reports and IRS Form 990 filings will
            be made publicly available on this page once filed.
          </p>
          <div className="bg-cream rounded-2xl p-6 inline-block">
            <p className="font-body text-navy/60 text-sm">
              Gathered Pages Collective is a registered 501(c)(3) nonprofit organization.
              <br />
              EIN: 42-3092238 &nbsp;·&nbsp; Donations are fully tax-deductible.
              <br />
              <span className="text-navy/40 text-xs">Annual report: Coming soon</span>
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-navy text-4xl font-bold text-center mb-12">
            Board of Directors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {boardMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-navy/10 shrink-0">
                  <Image
                    src={member.photo}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="56px"
                    className={`object-cover ${member.position}`}
                  />
                </div>
                <div>
                  <p className="font-display text-navy font-bold text-lg">{member.name}</p>
                  <p className="font-body text-navy/60 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-white text-4xl font-bold mb-4">
            Be part of our story.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link
              href="/donate"
              className="bg-white hover:bg-cream text-orange font-body font-semibold px-8 py-3 rounded-full transition-colors focus-ring"
            >
              Donate
            </Link>
            <Link
              href="/partner"
              className="bg-orange-light hover:bg-white/20 border border-white/50 text-white font-body font-semibold px-8 py-3 rounded-full transition-colors focus-ring"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
