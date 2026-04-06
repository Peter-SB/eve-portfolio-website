"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="paper-texture relative min-h-[80vh] flex items-center px-6 md:px-12 lg:px-20 bg-[#FBF9F1] overflow-hidden">
      {/* Top thin nav line */}
      <div className="absolute left-0 right-0 top-6 px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          <div className="font-display text-2xl">SOCIAL &amp; CO</div>
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest">
            <a href="#about" className="text-foreground/80">
              About
            </a>
            <a href="#case-studies" className="text-foreground/80">
              Work
            </a>
            <a href="#contact" className="text-foreground/80">
              Contact
            </a>
            <a
              href="/cv.pdf"
              className="px-3 py-1 bg-foreground text-background rounded-full text-xs"
            >
              Resume
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center py-12">
        {/* Left: headline */}
        <div className="pt-12 md:pt-6">
          <span className="block font-body text-sm tracking-widest text-muted-foreground mb-4">
            SOCIAL MEDIA AGENCY
          </span>

          <h1 className="font-display text-6xl md:text-8xl lg:text-[120px] leading-[0.86] text-foreground mb-8">
            EVE DODD
          </h1>

          <p className="font-body text-base md:text-lg text-muted-foreground max-w-lg mb-8">
            Creating a comprehensive and effective social media strategy that
            aligns with your business goals and target audience.
          </p>

          <div className="flex gap-4">
            <a
              href="/cv.pdf"
              className="inline-flex items-center rounded-full border border-black text-black bg-transparent px-6 py-3 text-sm font-body"
              target="_blank"
              rel="noopener noreferrer"
            >
              See CV
            </a>
            <a
              href="https://www.linkedin.com"
              className="inline-flex items-center rounded-full bg-[#0077B5] text-white px-6 py-3 text-sm font-body"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center text-sm font-body text-black bg-transparent"
            >
              Jump in \/
            </a>
          </div>
        </div>

        {/* Right: image with decorative scallop shapes */}
        <div className="relative w-full flex justify-center items-center">
          {/* <div className="hidden md:block absolute -right-12 top-16 w-44 h-44 bg-[#E9EDF0] rounded-full" />
          <div className="hidden md:block absolute -right-12 top-36 w-44 h-44 bg-[#E9EDF0] rounded-full" />
          <div className="hidden md:block absolute -right-12 top-56 w-44 h-44 bg-[#E9EDF0] rounded-full" /> */}

          <div className="relative w-[420px] h-[560px] md:w-[520px] md:h-[680px] rounded-2xl overflow-hidden border border-foreground/10 bg-white">
            <Image
              src="/eve-headshot.png"
              alt="Eve"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
