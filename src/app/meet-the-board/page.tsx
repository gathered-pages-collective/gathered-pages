import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet the Board",
  description:
    "Meet the women leading Gathered Pages Collective — our founder and board of directors.",
  openGraph: {
    title: "Meet the Board — Gathered Pages Collective",
    description:
      "Get to know the founder and board of directors behind Gathered Pages Collective.",
  },
};

const boardMembers = [
  {
    name: "Jamie Dickinson",
    role: "Founder",
    title: "Litigator",
    photo: "/board/Jamie%20Dickinson.jpg",
    position: "object-center",
    bio: "Jamie Dickinson is the founder of Gathered Pages Collective. By profession she is a full-service litigator who represents public, private, and corporate clients across the full range of their litigation needs. Jamie especially enjoys litigation that “touches the land” — representing property owners in real estate matters including quiet title actions, condemnation issues, land use litigation, and easement disputes, and representing condemning authorities throughout Colorado in their eminent domain matters. She works to deeply understand her clients’ businesses and lives so she can guide them through the condemnation process. Jamie earned her J.D. from the University of Denver Sturm College of Law (2008) and her B.A. from Colorado College (2004).",
  },
  {
    name: "Amber Story",
    role: "Board Member",
    title: "Director of Development, CU College of Arts & Sciences",
    photo: "/board/Amber%20Story.jpg",
    position: "object-center",
    bio: "Amber Story is a Director of Development for the College of Arts & Sciences, with a focus on the Arts & Humanities. She previously served as Marketing and Membership Manager at the CU Art Museum and, before that, as an Assistant Director of Development at the CU Foundation for the College of Arts & Sciences and the Graduate School. Earlier in her career she worked at the Museum of Contemporary Art in Denver and the Greenberg Van Doren Gallery in New York City. Amber holds a BA in Art History from CU Boulder and an MA in Arts Administration from New York University.",
  },
  {
    name: "Tiffany Anderson",
    role: "Board Member",
    title: "Boettcher Foundation",
    photo: "/board/Tiffany%20Anderson.jpg",
    position: "object-top",
    bio: "Tiffany Anderson oversees the Boettcher Foundation’s portfolio of programs and grants — including the Boettcher Scholarship and the Webb-Waring Biomedical Research Awards — and serves as the Foundation’s primary contact for scholarship relations. Before joining the Foundation, Tiffany developed and directed the Leeds Scholars Program at the University of Colorado’s Leeds School of Business. Prior to that, she spent ten years as program director and senior program manager of the Presidents Leadership Class at CU Boulder.",
  },
  {
    name: "Crystal Gippe",
    role: "Board Member",
    title: "Former Google · CU Volleyball",
    photo: "/board/Crystal%20Gippe.jpg",
    position: "object-center",
    bio: "Crystal Gippe brings leadership experience across technology, education, and athletics. She spent three years at Google and served as a director with the CU volleyball program. A 2008 graduate of Santa Clara University, Crystal earned her bachelor’s degree in liberal studies while lettering four years on the volleyball team, and later earned her California Teaching Credential in special education from San Jose State University in 2012. A four-year starting setter for the Broncos, she was a 2005 AVCA Third Team All-American and a 2007 AVCA All-America honorable mention, helping lead Santa Clara to back-to-back West Coast Conference Championships and earning AVCA All-Pacific Region first-team honors.",
  },
];

export default function MeetTheBoardPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-body text-orange font-semibold text-sm uppercase tracking-wider">
            Our Leadership
          </span>
          <h1 className="font-display text-navy text-5xl font-bold mt-3 mb-4">
            Meet the Board
          </h1>
          <p className="font-body text-navy/70 text-xl leading-relaxed">
            The women leading Gathered Pages Collective.
          </p>
        </div>
      </section>

      {/* Member rows */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {boardMembers.map((member, index) => (
            <div
              key={member.name}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <div
                className={`flex justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative aspect-[4/5] w-full max-w-sm rounded-2xl overflow-hidden bg-cream-dark shadow-md">
                  <Image
                    src={member.photo}
                    alt={`${member.name}, ${member.role} of Gathered Pages Collective`}
                    fill
                    sizes="(min-width: 1024px) 28rem, 100vw"
                    className={`object-cover ${member.position}`}
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-display text-navy text-3xl font-bold">
                  {member.name}
                </h2>
                <p className="font-body text-orange font-semibold mt-1">
                  {member.role}
                </p>
                <p className="font-body text-navy/50 text-sm mt-1">{member.title}</p>
                <p className="font-body text-navy/70 text-lg leading-relaxed mt-5">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
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
          <Link
            href="/donate"
            className="inline-block bg-white hover:bg-cream text-orange font-body font-semibold px-8 py-3 rounded-full transition-colors focus-ring"
          >
            Donate
          </Link>
        </div>
      </section>
    </>
  );
}
