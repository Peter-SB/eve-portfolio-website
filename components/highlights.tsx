import Image from "next/image";
import { assetPath } from "@/lib/utils";

const highlights = [
  {
    number: "01",
    logo: assetPath("/logos/last-sun-dance-alt.png"),
    brand: "Last Sun Dance",
    title: "Membership Growth",
    description:
      "Stepped into the first marketing and branding strategist role. Managed activation across multiple strands including collaboration management with RAB and Tenzing.",
    metric: "+33% Memberships",
  },
  {
    number: "02",
    logo: assetPath("/logos/george.png"),
    brand: "ASDA George",
    title: "Omni-Channel Campaigns",
    description:
      "Strategized, planned and activated omni-channel campaigns across social media and email marketing (100k+ mailing list), managing in-house and external teams.",
    metric: "100K+ Email List",
  },
  {
    number: "03",
    logo: assetPath("/logos/dazn.png"),
    brand: "DAZN",
    title: "Sports Event Planning",
    description:
      "Project coordinated activity and critical paths across teams for digital event streams in international sports. Planned calendars across F1, Coppa Italia and Matchroom Boxing.",
    metric: "14 Month Plans",
  },
];

export function Highlights() {
  return (
    <section className="paper-texture py-24 px-6 md:px-12 lg:px-20 bg-[#CBD5E1]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-body font-medium tracking-[0.2em] uppercase text-foreground text-sm md:text-base mb-16">
          Further Experience
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.number}
              className="bg-[#FAFAF5] rounded-xl border border-border/40 overflow-hidden"
            >
              {/* Image / Logo area */}
              <div className="relative mx-4 mt-4">
                <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <Image
                    src={highlight.logo}
                    alt={highlight.brand}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                {/* Numbered badge */}
                <div className="absolute -bottom-5 left-6 w-10 h-10 rounded-full bg-[#D1D5DB] border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-body font-medium text-foreground">
                    {highlight.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pt-8 pb-6">
                <h3 className="font-display text-xl md:text-2xl uppercase leading-tight text-foreground mb-3">
                  {highlight.title}
                </h3>
                <p className="font-body font-light text-sm text-muted-foreground leading-relaxed mb-4">
                  {highlight.description}
                </p>
                <span className="font-display text-lg text-primary">
                  {highlight.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
