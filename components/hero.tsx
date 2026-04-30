"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import { assetPath } from "@/lib/utils";
import heroData from "@/data/hero.json";

export function Hero() {
  const { navbar, hero } = heroData;

  return (
    <>
      {/* Pink Navbar */}
      <header className="w-full bg-[#FFA8C7] px-6 md:px-14 lg:px-20 py-3 flex items-center justify-between">
        <div className="border-[2.5px] border-black px-3 py-1">
          <span className="font-display text-lg font-bold tracking-wide leading-none">
            {navbar.name}
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-10 font-body text-base">
          {navbar.links.map((link) => (
            <a
              key={link.label}
              href={link.external ? assetPath(link.href) : link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-black hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={navbar.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white w-9 h-9 flex items-center justify-center rounded-sm"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} strokeWidth={2.5} />
        </a>
      </header>

      {/* Hero Section */}
      <section className="bg-[#FDFAF3] px-6 md:px-14 lg:px-20 py-14 md:py-20">
        <div className="mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
          {/* Left: content */}
          <div className="flex flex-col gap-6 flex-1 md:ml-0 lg:ml-20">
            <h1
              className="font-display text-[90px] md:text-[130px] lg:text-[160px] leading-[0.85] text-black"
              style={{ fontFamily: "PaperCraft, Impact, sans-serif" }}
            >
              {hero.name}
            </h1>

            <p className="font-body font-bold text-lg md:text-xl text-black tracking-wide uppercase">
              {hero.subtitle}
            </p>

            <p className="font-body text-base text-black/70 max-w-lg leading-relaxed">
              {hero.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-1">
              {hero.ctaButtons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.external ? assetPath(btn.href) : btn.href}
                  target={btn.external ? "_blank" : undefined}
                  rel={btn.external ? "noopener noreferrer" : undefined}
                  className="px-8 py-3 rounded-full text-black font-body font-bold text-sm uppercase tracking-widest border-2 border-black hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: btn.color }}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: hero doodle */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-end md:mr-20 lg:mr-70">
            <Image
              src={assetPath(hero.heroDoodle.src)}
              alt={hero.heroDoodle.alt}
              width={360}
              height={560}
              className="object-contain"
              priority
            />
          </div>

          {/* Skills Box */}
          <div
            key={1}
            className="relative rounded-[2.5rem] p-5"
            style={{ backgroundColor: "#BFDB38" }}
          >
            {/* Decorative icons */}
            {/* {highlight.decorative === "cursor" && <CursorSparkle />} */}

            {/* Inner white card */}
            <div className="bg-[#FAFAF5] rounded-2xl overflow-hidden">
              {/* Logo area */}
              <div className="relative mx-4 mt-4">
                <div className="bg-muted rounded-lg aspect-4/3 flex items-center justify-center overflow-hidden">
                  {/* <Image
                    src={highlight.logo}
                    alt={highlight.brand}
                    width={120}
                    height={120}
                    className="object-contain"
                  /> */}
                </div>
                {/* Numbered badge */}
                <div className="absolute -bottom-5 left-6 w-10 h-10 rounded-full bg-[#D1D5DB] border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-body font-medium text-foreground">
                    {1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col px-6 pt-8 pb-6 h-max">
                <h3 className="font-display text-xl md:text-2xl uppercase leading-tight text-foreground mb-3">
                  {"Skills"}
                </h3>
                <p className="font-body font-light text-sm text-muted-foreground leading-relaxed mb-4">
                  {"stuff"}
                </p>
                <span className="font-display text-lg text-primary">
                  {"metric"}
                </span>
              </div>
            </div>

            {/* Decorative icons */}
            {/* {highlight.decorative === "lightning" && <LightningBolt />} */}
          </div>
        </div>
      </section>
    </>
  );
}
