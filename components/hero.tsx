"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { assetPath } from "@/lib/utils";
import heroData from "@/data/hero.json";
import { SkillsCard } from "@/components/skills-card";

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
      <section className="bg-[#FDFAF3] px-6 md:px-14 lg:px-20 py-14 md:py-20 overflow-x-hidden">
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-8 items-stretch">
          {/* Left: content */}
          <div className="flex flex-col gap-6 flex-1 min-w-[140px] justify-center">
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

          {/* Centre: hero doodle */}
          <div className="flex items-center justify-center shrink min-w-0">
            <Image
              src={assetPath(hero.heroDoodle.src)}
              alt={hero.heroDoodle.alt}
              width={360}
              height={560}
              className="object-contain w-full max-w-[360px] h-auto"
              priority
            />
          </div>

          {/* Right: Skills card */}
          <SkillsCard />
        </div>
      </section>
    </>
  );
}
