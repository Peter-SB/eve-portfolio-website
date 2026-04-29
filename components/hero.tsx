"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import { assetPath } from "@/lib/utils";

export function Hero() {
  return (
    <>
      {/* Pink Navbar */}
      <header className="w-full bg-[#FFA8C7] px-6 md:px-14 lg:px-20 py-3 flex items-center justify-between">
        <div className="border-[2.5px] border-black px-3 py-1">
          <span className="font-display text-lg font-bold tracking-wide leading-none">
            EVE DODD
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-10 font-body text-base">
          <a
            href="#case-studies"
            className="text-black hover:opacity-60 transition-opacity"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-black hover:opacity-60 transition-opacity"
          >
            Contact
          </a>
          <a
            href={assetPath("/eve-dodd-cv.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-60 transition-opacity"
          >
            Resume
          </a>
        </nav>

        <a
          href="https://www.linkedin.com/in/evedodd"
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
              EVE DODD
            </h1>

            <p className="font-body font-bold text-lg md:text-xl text-black tracking-wide uppercase">
              Branding &amp; Social Media Expert
            </p>

            <p className="font-body text-base text-black/70 max-w-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="flex flex-wrap gap-3 mt-1">
              <a
                href="#case-studies"
                className="px-8 py-3 rounded-full bg-[#D3E65E] text-black font-body font-bold text-sm uppercase tracking-widest border-2 border-black hover:opacity-90 transition-opacity"
              >
                Projects
              </a>
              <a
                href="#reels"
                className="px-8 py-3 rounded-full bg-[#FFA8C7] text-black font-body font-bold text-sm uppercase tracking-widest border-2 border-black hover:opacity-90 transition-opacity"
              >
                Creative Work
              </a>
              <a
                href={assetPath("/eve-dodd-cv.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-[#D3DCE5] text-black font-body font-bold text-sm uppercase tracking-widest border-2 border-black hover:opacity-90 transition-opacity"
              >
                CV
              </a>
            </div>
          </div>

          {/* Right: hero doodle */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-end md:mr-20 lg:mr-70">
            <Image
              src={assetPath("/hero-doodle.png")}
              alt="Eve Dodd photo strip"
              width={360}
              height={560}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
