import Image from "next/image";

const partners = [
  { name: "A Woman's Place", logo: "/partners/A%20women's%20place.png", scale: "scale-150" },
  { name: "Colorado Nurses", logo: "/partners/Colorado%20Nurses.png" },
  { name: "Denver Classroom Teachers Association", logo: "/partners/Denver%20Classroom%20Teachers%20Association.png" },
  { name: "Denver Corrections", logo: "/partners/Denver%20Corrections%20Logo.png" },
  { name: "Family Tree", logo: "/partners/family-tree.jpg" },
  { name: "Hope House Colorado", logo: "/partners/hope-house-colorado.jpg" },
  { name: "Sacred Heart House of Denver", logo: "/partners/sacred-heart-house.jpg" },
  { name: "The Rose House", logo: "/partners/The%20Rose%20House.png" },
  { name: "Woman's Recovery Center", logo: "/partners/Woman%27s%20Recovery%20Center.png", scale: "scale-150" },
];

function PartnerTrack() {
  return (
    <ul className="flex shrink-0 items-center gap-12 pr-12" aria-hidden="true">
      {partners.map((partner) => (
        <li
          key={partner.name}
          className="relative h-20 w-48 shrink-0 md:h-24 md:w-56"
        >
          <Image
            src={partner.logo}
            alt=""
            fill
            sizes="224px"
            className={`object-contain ${partner.scale ?? ""}`}
          />
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <section
      className="overflow-hidden border-y border-navy/10 bg-white py-10"
      aria-label="Organizations we hope to serve"
    >
      <p className="text-center font-body text-navy/50 text-xs font-semibold uppercase tracking-wider mb-8 px-4">
        Organizations like these are who we&apos;re building to reach
      </p>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <PartnerTrack />
        <PartnerTrack />
      </div>
      <p className="sr-only">
        Organizations we hope to serve: {partners.map((partner) => partner.name).join(", ")}
      </p>
    </section>
  );
}
