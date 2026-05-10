import Image from "next/image";
import { assetPath } from "@/lib/utils";
import caseStudiesData from "@/data/case-studies.json";

const caseStudies = caseStudiesData.studies.map((s) => ({
  ...s,
  logo: assetPath(s.logo),
}));

export function CaseStudies() {
  const { sectionTitle, cta } = caseStudiesData;

  return (
    <section
      id="case-studies"
      className="relative py-20 px-6 md:px-14 lg:px-20 bg-[#D3E65E]"
    >
      {/* Section title */}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase text-black text-center mb-6 md:mb-10 lg:mb-14 leading-none px-4">
        {sectionTitle}
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 mb-12">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="bg-white rounded-4xl border-[2.5px] border-black p-8 flex flex-col gap-5"
          >
            {/* Company | Case Study badge and logo */}
            <div className="flex items-center justify-between">
              <span className="font-body text-xs tracking-[0.2em] uppercase font-bold text-black border border-black rounded-full px-4 py-1.5 opacity-40">
                {study.label}
              </span>
              <Image
                src={study.logo}
                alt={study.brand}
                width={56}
                height={56}
                className="h-10 w-auto"
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-black/10" />

            {/* Study title */}
            <h3 className="font-display text-xl md:text-3xl uppercase text-black leading-tight whitespace-pre-line w-full">
              {study.title}
            </h3>

            {/* Description */}
            <p className="font-body text-xs md:text-sm text-gray-600 leading-relaxed flex-1 whitespace-pre-wrap">
              {study.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA button */}
      <div className="flex justify-center">
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
