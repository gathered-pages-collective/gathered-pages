import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet Our Founder",
  description:
    "Meet Jamie Dickinson, founder of Gathered Pages Collective, and the story of how a lifelong love of reading became a mission to connect women through shared stories.",
  openGraph: {
    title: "Meet Our Founder — Gathered Pages Collective",
    description:
      "How a lifelong love of reading became a mission to connect women through shared stories.",
  },
};

const paragraphs = [
  "I've always believed that books do more than tell stories—they help us understand ourselves, connect with others, and sometimes find the courage to change our lives.",
  "My love of reading began with my mom. Growing up, she read to my brother and me every night, instilling in us not only a love of books but a curiosity about the world and the people in it. Those evenings planted the seeds for a lifelong passion that continues to shape my life today. In many ways, books have become a language we still share. Although we now live more than 2,000 miles apart, not a week goes by without a conversation about what we're reading. Those discussions have strengthened our relationship across the years and the miles, reminding me that stories have a unique way of bringing people together.",
  "People often ask me how I find time to read. As a busy lawyer, yoga instructor, mom, and wife, I understand why they ask. Life is full, schedules are demanding, and there never seem to be enough hours in the day. The truth is that I can't imagine navigating my life without books. Reading is the one thing that helps me quiet my constantly whirling mind and truly relax. It creates space to reflect, learn, dream, and simply breathe.",
  "The idea for Gathered Pages Collective grew from my own experience with reading and the profound impact it has had on my life. Throughout the years, books have been my teachers, my companions, and often my source of clarity during difficult seasons. In one particularly challenging chapter of my life, reading helped me recognize truths I had been avoiding and ultimately gave me the courage to make hard decisions that changed the trajectory of my life. Through the stories and experiences of others, I found perspective, strength, and hope for a different future. That experience reinforced something I had always believed: stories have power. They remind us that we are not alone. They help us see possibilities we may not have considered and give us the confidence to take the next step in our own journey.",
  "But reading has given me more than personal growth—it has given me community. Some of the most meaningful conversations I've had, the deepest connections I've formed, and the greatest lessons I've learned have come from sharing books with others.",
  "Because I split my time between two states and am rarely in one place for long, building and maintaining community can be challenging. Yet books have provided a constant foundation. No matter where I am, discussing stories with other women creates connection, belonging, and understanding. Those conversations have become an anchor in my life, helping me build relationships that support and sustain me through every season.",
  "Over time, I realized that what I valued most wasn't simply reading books—it was sharing them. The discussions, the laughter, the vulnerability, and the friendships that grew from a shared story often became just as meaningful as the books themselves.",
  "That realization became the inspiration for Gathered Pages Collective.",
  "Our mission is simple: to connect women through shared stories by providing free book club experiences to women seeking connection, belonging, and community. Through thoughtfully curated Book Clubs in a Box, we create opportunities for meaningful conversation, personal growth, friendship, and hope.",
  "Reading is important to me because it has shaped who I am. It has challenged me, comforted me, inspired me, and helped me navigate some of life's most difficult decisions. Every book offers an opportunity to see the world—and ourselves—a little differently.",
  "My hope is that every woman who participates in a Gathered Pages Collective book club experiences what I have experienced through reading: the comfort of being understood, the courage that comes from hearing another woman's story, and the strength that comes from knowing you are not alone.",
];

export default function MeetOurFounderPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h1 className="font-display text-navy text-5xl sm:text-6xl font-bold mt-4 mb-6">
            Meet Our Founder
          </h1>
          <p className="font-body text-navy/70 text-xl leading-relaxed">
            Hi, I&apos;m Jamie Dickinson, founder of Gathered Pages Collective.
          </p>
        </div>
      </section>

      {/* Photo + intro */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[20rem_1fr] gap-10 lg:gap-16 items-start">
            <div className="flex justify-center lg:justify-start">
              <div className="relative aspect-[4/5] w-full max-w-xs rounded-2xl overflow-hidden bg-cream-dark shadow-md">
                <Image
                  src="/partners/Jamie%20and%20her%20mom.jpg"
                  alt="Jamie Dickinson and her mom"
                  fill
                  sizes="(min-width: 1024px) 20rem, 100vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
            <div className="space-y-5">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="font-body text-navy/70 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote>
            <p className="font-display text-3xl sm:text-4xl font-semibold italic leading-snug">
              &ldquo;Because sometimes a single book can change a life — and a shared story can build
              a community.&rdquo;
            </p>
          </blockquote>
          <p className="font-body text-orange font-semibold mt-6">— Jamie Dickinson, Founder</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-white text-4xl font-bold mb-4">
            Be part of our story.
          </h2>
          <p className="font-body text-white/80 text-lg mb-8">
            Your support helps us connect women through the power of shared stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-white hover:bg-cream text-orange font-body font-semibold px-8 py-3 rounded-full transition-colors focus-ring"
            >
              Donate
            </Link>
            <Link
              href="/meet-the-board"
              className="bg-orange-light hover:bg-white/20 border border-white/50 text-white font-body font-semibold px-8 py-3 rounded-full transition-colors focus-ring"
            >
              Meet the Board
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
