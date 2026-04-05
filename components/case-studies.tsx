import Image from "next/image";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    brand: "Get Baked",
    label: "GET BAKED | CASE STUDY",
    title: "Scaling a Cult UK Bakery Brand",
    description:
      "Led brand and marketing for a cult UK bakery, scaling a disruptive, content-first challenger brand. Controlled cross-business workflows, socials, content, emails, print, packaging and e-commerce.",
    stats: { likes: "20K", comments: "1.2K", shares: "8K", saves: "15K" },
    logo: "/logos/get-baked.png",
    cta: "Start Now",
  },
  {
    id: 2,
    brand: "Crossfader",
    label: "CROSSFADER | CASE STUDY",
    title: "Growing a Global Music Community",
    description:
      "Spearheaded international educational outlier in the music, DJ and event industry. Managed planning, creating, strategy and scheduling of all content across YouTube, TikTok, Instagram, Discord and Threads.",
    stats: { likes: "253K", comments: "350K", shares: "656K", saves: "40K" },
    logo: "/logos/crossfader.png",
    cta: "Book a Call",
  },
  // {
  //   id: 3,
  //   brand: "YouTube (1021 Creative)",
  //   label: "YOUTUBE | CASE STUDY",
  //   title: "Tracking Culture & Trends for YouTube",
  //   description:
  //     "Worked directly with YouTube's Culture and Trends Team to manage the UK's Trending Page and build the Shorts algorithm by identifying and tracking social media and cultural trends.",
  //   stats: { likes: "50K", comments: "300", shares: "30K", saves: "40K" },
  //   logo: "/logos/youtube.png",
  //   cta: "Start Now",
  // },
];

function StatsBar({
  stats,
}: {
  stats: { likes: string; comments: string; shares: string; saves: string };
}) {
  return (
    <div className="flex items-center gap-4 mt-3 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full w-fit text-xs font-body font-medium text-foreground">
      <span className="flex items-center gap-1">
        <Heart className="w-3.5 h-3.5" />
        {stats.likes}
      </span>
      <span className="flex items-center gap-1">
        <MessageCircle className="w-3.5 h-3.5" />
        {stats.comments}
      </span>
      <span className="flex items-center gap-1">
        <Share2 className="w-3.5 h-3.5" />
        {stats.shares}
      </span>
      <span className="flex items-center gap-1">
        <Bookmark className="w-3.5 h-3.5" />
        {stats.saves}
      </span>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAFAF5]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="font-body font-medium tracking-[0.2em] uppercase text-foreground text-sm">
            Featured Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase text-foreground mt-4 leading-[0.95]">
            My Latest
            <br />
            Work
          </h2>
        </div>

        <hr className="border-foreground/20 mb-16" />

        {/* Case Studies */}
        <div className="space-y-20">
          {caseStudies.map((study, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={study.id}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-start`}
              >
                {/* Image / Logo block */}
                <div className="w-full md:w-5/12 shrink-0">
                  <div className="relative bg-muted rounded-lg aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <Image
                      src={study.logo}
                      alt={study.brand}
                      width={160}
                      height={160}
                      className="object-contain"
                    />
                  </div>
                  <StatsBar stats={study.stats} />
                </div>

                {/* Text content */}
                <div className="w-full md:w-7/12 flex flex-col justify-center">
                  <span className="font-body font-medium tracking-[0.15em] uppercase text-muted-foreground text-xs mb-4">
                    {study.label}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl uppercase leading-[0.95] text-foreground mb-4">
                    {study.title}
                  </h3>
                  <p className="font-body font-light text-sm md:text-base text-muted-foreground leading-relaxed mb-6 max-w-lg">
                    {study.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-block font-body font-medium text-sm tracking-[0.1em] uppercase border border-foreground rounded-full px-6 py-2.5 text-foreground hover:bg-foreground hover:text-background transition-colors w-fit"
                  >
                    {study.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
