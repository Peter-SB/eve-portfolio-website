import Image from "next/image";
import { assetPath } from "@/lib/utils";
import highlightsData from "@/data/highlights.json";

const highlights = highlightsData.items.map((item) => ({
  ...item,
  logo: assetPath(item.logo),
  decorative: item.decorative as "cursor" | "lightning" | null,
}));

function CursorSparkle() {
  return (
    <div className="absolute -top-7 -left-5 flex flex-col items-start gap-0.5 pointer-events-none select-none">
      {/* 4-pointed sparkle star */}
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M13 0 L15 11 L26 13 L15 15 L13 26 L11 15 L0 13 L11 11 Z"
          fill="#F472B6"
        />
      </svg>
      {/* Mouse cursor arrow */}
      <svg
        width="30"
        height="32"
        viewBox="0 0 30 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 2 L4 25 L10 19 L16 28 L19 26 L13 17 L22 17 Z"
          fill="#F472B6"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function LightningBolt() {
  return (
    <div className="absolute -bottom-7 -right-4 pointer-events-none select-none">
      <svg
        width="38"
        height="50"
        viewBox="0 0 38 50"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M24 1 L9 24 H20 L14 49 L38 21 H25 L32 1 Z"
          fill="#E8F542"
          stroke="#34361B"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Highlights() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FBFCEE]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-display font-bold tracking-wide uppercase text-foreground text-3xl md:text-4xl mb-16">
          {highlightsData.sectionTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {highlights.map((highlight) => (
            <div
              key={highlight.number}
              className="relative rounded-[2.5rem] p-5"
              style={{ backgroundColor: highlight.bgColor }}
            >
              {/* Decorative icons */}
              {highlight.decorative === "cursor" && <CursorSparkle />}

              {/* Inner white card */}
              <div className="bg-[#FAFAF5] rounded-2xl overflow-hidden">
                {/* Logo area */}
                <div className="relative mx-4 mt-4">
                  <div className="bg-muted rounded-lg aspect-4/3 flex items-center justify-center overflow-hidden">
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

              {/* Decorative icons */}
              {highlight.decorative === "lightning" && <LightningBolt />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
