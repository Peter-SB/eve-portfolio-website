"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const brands = [
  { name: "Get Baked", logo: "/logos/get-baked.png" },
  { name: "YouTube", logo: "/logos/youtube.png" },
  { name: "Crossfader", logo: "/logos/crossfader.png" },
  { name: "Last Sun Dance", logo: "/logos/last-sun-dance.png" },
  { name: "DAZN", logo: "/logos/dazn.png" },
  { name: "George", logo: "/logos/george.png" },
  { name: "Laundry Club", logo: "/logos/laundry-club.png" },
  { name: "1021 Creative", logo: "/logos/1021-creative.png" },
  { name: "Honda", logo: "/logos/honda.png" },
];

export function BrandLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 0.5;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-14 px-6 md:px-0 lg:px-0 border-y bg-[#CBD5E1] border border-black">
      <p className="text-center text-sm text-muted-foreground mb-10 tracking-wide uppercase">
        Brands I&apos;ve Worked With
      </p>
      <div
        ref={scrollRef}
        className="flex overflow-hidden gap-12 md:gap-16 items-center"
        style={{ scrollBehavior: "auto" }}
      >
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center min-w-[120px] md:min-w-[150px] h-16"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={150}
              height={60}
              className="paper-texture object-contain max-h-14 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
