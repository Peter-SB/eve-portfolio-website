"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import { assetPath } from "@/lib/utils";
import reelsData from "@/data/reels.json";

const reels = reelsData.reels.map((r) => ({
  ...r,
  src: assetPath(r.src),
}));

function isImage(src: string) {
  return /\.(jpg|jpeg|png|webp|gif)$/i.test(src);
}

export function ReelsGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = reels.length;
  const [reelsPerPage, setReelsPerPage] = useState(total);

  // Calculate how many reels fit on screen
  useEffect(() => {
    const calculateReelsPerPage = () => {
      if (!trackRef.current) return;

      const containerWidth =
        trackRef.current.clientWidth ||
        trackRef.current.getBoundingClientRect().width;
      // Reel width: 180px mobile, 240px desktop + gap (16px mobile, 24px desktop)
      const isMobile = window.innerWidth < 768;
      const reelWidth = isMobile ? 180 : 240;
      const gap = isMobile ? 16 : 24;

      const itemsPerPage = Math.floor(
        (containerWidth + gap) / (reelWidth + gap),
      );
      // If calculation results in 0 or a number >= total, treat as single page
      if (itemsPerPage <= 0 || itemsPerPage >= total) {
        setReelsPerPage(total);
      } else {
        setReelsPerPage(itemsPerPage);
      }
    };

    calculateReelsPerPage();
    window.addEventListener("resize", calculateReelsPerPage);
    return () => window.removeEventListener("resize", calculateReelsPerPage);
  }, [total]);

  const totalPages = Math.ceil(total / reelsPerPage);
  const currentPage = Math.floor(current / reelsPerPage);

  const scrollTo = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(index, total - 1));
      setCurrent(next);
      const track = trackRef.current;
      if (!track) return;
      const card = track.children[next] as HTMLElement;
      card?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    },
    [total],
  );

  const scrollToPage = useCallback(
    (pageIndex: number) => {
      const reelIndex = pageIndex * reelsPerPage;
      scrollTo(reelIndex);
    },
    [reelsPerPage, scrollTo],
  );

  return (
    <section className="relative py-12 md:py-24 bg-[#FAFAF5] overflow-hidden">
      {/* Dotted top border */}
      <div
        className="absolute top-0 left-0 right-0 h-0"
        style={{
          borderTop: "4px dashed #1a1a1a",
          opacity: 1,
        }}
      />

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 pl-6 md:pl-12 lg:pl-20">
        {/* Left: title + controls — fixed width, doesn't scroll */}
        <div className="shrink-0 w-full md:w-72 md:mr-8 flex flex-col gap-0 md:justify-between self-stretch py-2">
          <div className="pb-5">
            <span className="font-body font-medium tracking-[0.2em] uppercase text-foreground/60 text-xs">
              {reelsData.sectionLabel}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-foreground mt-3 leading-[0.95]">
              {reelsData.sectionTitle}
            </h2>
          </div>

          {/* Prev / Next arrows + counter */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToPage(currentPage - 1)}
                disabled={currentPage === 0}
                aria-label="Previous"
                className="w-9 h-9 rounded-full border border-foreground flex items-center justify-center font-body text-sm text-foreground disabled:opacity-30 hover:bg-foreground hover:text-background transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => scrollToPage(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                aria-label="Next"
                className="w-9 h-9 rounded-full border border-foreground flex items-center justify-center font-body text-sm text-foreground disabled:opacity-30 hover:bg-foreground hover:text-background transition-colors"
              >
                →
              </button>
            </div>
            <span className="font-body text-xs text-muted-foreground tracking-widest">
              {String(currentPage + 1).padStart(2, "0")} /{" "}
              {String(totalPages).padStart(2, "0")}
            </span>

            {/* Dot indicators */}
            <div className="flex gap-1.5 mt-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentPage
                      ? "w-5 bg-foreground"
                      : "w-1 bg-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: carousel track bleeds to right edge */}
        <div
          ref={trackRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth pr-6 pb-2 snap-x snap-mandatory flex-1 max-w-full"
          style={{ scrollbarWidth: "none" }}
        >
          {reels.map((reel, index) => (
            <div
              key={index}
              onClick={() => scrollTo(index)}
              className="group relative shrink-0 w-[180px] md:w-[240px] rounded-xl border border-foreground/10 overflow-hidden snap-start bg-white cursor-pointer"
            >
              <div className="aspect-[9/16] relative">
                {isImage(reel.src) ? (
                  <Image
                    src={reel.src}
                    alt={reel.label}
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                ) : (
                  <video
                    src={reel.src}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-4">
                <span className="font-body font-medium text-sm text-white tracking-wide">
                  {reel.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dotted bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0"
        style={{
          borderBottom: "4px dashed #1a1a1a",
          opacity: 1,
        }}
      />
    </section>
  );
}
