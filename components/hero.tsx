"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
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
              className="font-body font-bold tracking-wide text-black hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={navbar.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white w-9 h-9 flex items-center justify-center rounded-sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} strokeWidth={2.5} />
          </a>

          <a
            href={`mailto:${navbar.contactEmail}`}
            className="bg-black text-white w-9 h-9 flex items-center justify-center rounded-sm"
            aria-label="Contact email"
          >
            <Mail size={18} strokeWidth={2.5} />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#FDFAF3] px-6 md:px-10 lg:px-16 pt-10 pb-0 md:pt-14 md:pb-0 overflow-x-hidden">
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-stretch">
          {/* Left: content */}
          <div className="flex flex-col gap-4 md:flex-1 justify-center md:pb-14 mt-5">
            <h1
              className="font-display text-[80px] md:text-[110px] lg:text-[140px] xl:text-[170px] 2xl:text-[200px] leading-[0.85] text-black"
              style={{ fontFamily: "PaperCraft, Impact, sans-serif" }}
            >
              {hero.name}
            </h1>

            <p className="font-body font-bold text-lg md:text-xl text-black tracking-wide uppercase">
              {hero.subtitle}
            </p>

            <div className="flex flex-col gap-3 max-w-2xl">
              {hero.description.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="font-body text-base text-black/70 leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
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

          {/* Right: Hero + Skills combined image */}
          <div className="flex items-end justify-center shrink-0 md:w-[45%] lg:w-[48%] xl:w-[50%]">
            <Image
              src={assetPath("/hero-skills.png")}
              alt="Eve Dodd with skills"
              width={620}
              height={520}
              className="object-contain object-bottom h-auto max-h-[70vh] md:max-h-none pb-14"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
