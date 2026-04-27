import Image from "next/image";
import {
  Cake,
  Headphones,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
} from "lucide-react";

const caseStudies = [
  {
    id: 1,
    brand: "Get Baked",
    label: "GET BAKED | CASE STUDY",
    title: "SCALING A CULT UK\nBAKERY BRAND",
    description:
      "Led brand and marketing for a cult UK bakery, scaling a disruptive, content-first challenger brand. Controlled cross-business workflows, socials, content, emails, print, packaging and e-commerce.",
    stats: { likes: "20K", comments: "1.2K", shares: "8K", saves: "15K" },
    logo: "/logos/get-baked.png",
    iconBg: "#FFA8C7",
    cta: "START NOW",
    ctaHref: "#contact",
  },
  {
    id: 2,
    brand: "Crossfader",
    label: "CROSSFADER | CASE STUDY",
    title: "GROWING A GLOBAL\nMUSIC COMMUNITY",
    description:
      "Spearheaded international educational outlier in the music, DJ and event industry. Managed planning, creating, strategy and scheduling of all content across YouTube, TikTok, Instagram, Discord and Threads.",
    stats: { likes: "253K", comments: "350K", shares: "656K", saves: "40K" },
    logo: "/logos/crossfader.png",
    iconBg: "#D3DCE5",
    cta: "BOOK A CALL",
    ctaHref: "#contact",
  },
];

const CaseIcon = ({ id, bg }: { id: number; bg: string }) => (
  <div
    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
    style={{ backgroundColor: bg }}
  >
    {id === 1 ? (
      <Cake className="w-9 h-9 text-black" strokeWidth={1.5} />
    ) : (
      <Headphones className="w-9 h-9 text-black" strokeWidth={1.5} />
    )}
  </div>
);

function MiniPreview({ study }: { study: (typeof caseStudies)[number] }) {
  return (
    <div className="rounded-xl border border-gray-200 p-3 bg-white mt-4 text-left shadow-sm">
      <div className="flex gap-3 items-start">
        {/* Thumbnail placeholder */}
        <div className="w-20 h-14 rounded bg-black shrink-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-[7px] border-l-white ml-0.5" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-body text-[8px] tracking-widest uppercase text-gray-400 mb-0.5">
            {study.label}
          </p>
          <p className="font-display text-[11px] uppercase leading-tight text-black mb-1">
            {study.title.replace("\n", " ")}
          </p>
          <p className="font-body text-[8px] text-gray-500 leading-snug line-clamp-3">
            {study.description}
          </p>
        </div>
      </div>
      {/* Stats row */}
      <div className="flex gap-3 mt-2 text-[8px] font-body text-gray-500">
        <span className="flex items-center gap-0.5">
          <Heart className="w-2.5 h-2.5" />
          {study.stats.likes}
        </span>
        <span className="flex items-center gap-0.5">
          <MessageCircle className="w-2.5 h-2.5" />
          {study.stats.comments}
        </span>
        <span className="flex items-center gap-0.5">
          <Share2 className="w-2.5 h-2.5" />
          {study.stats.shares}
        </span>
        <span className="flex items-center gap-0.5">
          <Bookmark className="w-2.5 h-2.5" />
          {study.stats.saves}
        </span>
      </div>
      <a
        href={study.ctaHref}
        className="mt-2 inline-block font-body text-[8px] uppercase tracking-widest font-bold border border-black rounded-full px-3 py-1 text-black hover:bg-black hover:text-white transition-colors"
      >
        {study.cta}
      </a>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative py-20 px-6 md:px-14 lg:px-20 bg-[#D3E65E]"
    >
      {/* Title */}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase text-black text-center mb-12 leading-none">
        My Latest Work
      </h2>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="bg-white rounded-4xl border-[2.5px] border-black p-8 flex flex-col"
          >
            <CaseIcon id={study.id} bg={study.iconBg} />
            <h3 className="font-display text-2xl md:text-3xl uppercase text-black text-center leading-tight whitespace-pre-line">
              {study.title}
            </h3>
            <MiniPreview study={study} />
          </div>
        ))}
      </div>

      {/* CTA button */}
      <div className="flex justify-center mb-10">
        <a
          href="#contact"
          className="px-12 py-4 rounded-full bg-[#FFA8C7] border-[2.5px] border-black text-black font-display text-xl md:text-2xl uppercase tracking-wide hover:opacity-90 transition-opacity"
        >
          View More Projects
        </a>
      </div>
    </section>
  );
}
