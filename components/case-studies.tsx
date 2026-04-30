import Image from "next/image";
import {
  Cake,
  Headphones,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
} from "lucide-react";
import { assetPath } from "@/lib/utils";
import caseStudiesData from "@/data/case-studies.json";

const caseStudies = caseStudiesData.studies.map((s) => ({
  ...s,
  logo: assetPath(s.logo),
}));

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
  const { sectionTitle, cta } = caseStudiesData;

  return (
    <section
      id="case-studies"
      className="relative py-20 px-6 md:px-14 lg:px-20 bg-[#D3E65E]"
    >
      {/* Title */}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase text-black text-center mb-12 leading-none">
        {sectionTitle}
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
          href={cta.href}
          className="px-12 py-4 rounded-full bg-[#FFA8C7] border-[2.5px] border-black text-black font-display text-xl md:text-2xl uppercase tracking-wide hover:opacity-90 transition-opacity"
        >
          {cta.label}
        </a>
      </div>
    </section>
  );
}
