import { Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-20 bg-[#1C1C1A] text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top label + heading */}
        <div className="mb-16">
          <span className="font-body font-medium tracking-[0.2em] uppercase text-white/40 text-sm">
            Let&apos;s Work Together
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase text-white mt-4 leading-[0.95]">
            Ready to Grow
            <br />
            Your Brand?
          </h2>
        </div>

        <hr className="border-white/10 mb-16" />

        {/* Two-column body */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: description + CTA */}
          <div className="flex flex-col justify-between gap-10">
            <p className="font-body font-light text-white/60 leading-relaxed max-w-md text-lg">
              I&apos;m always excited to work with brands who are ready to take
              their social media presence to the next level. Let&apos;s chat
              about how I can help.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@evedodd.com"
                className="inline-block font-body font-medium text-sm tracking-widest uppercase border border-white rounded-full px-8 py-3 text-white hover:bg-white hover:text-[#1C1C1A] transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/eve-dodd-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body font-medium text-sm tracking-widest uppercase border border-white/20 rounded-full px-8 py-3 text-white/60 hover:border-white hover:text-white transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right: contact links */}
          <div className="flex flex-col justify-center gap-8">
            <a
              href="mailto:hello@evedodd.com"
              className="group flex items-center justify-between border-b border-white/10 pb-6"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-white/40" />
                <div>
                  <span className="block font-body text-xs tracking-widest text-white/40 uppercase mb-1">
                    Email
                  </span>
                  <span className="font-body text-lg text-white group-hover:text-primary transition-colors">
                    hello@evedodd.com
                  </span>
                </div>
              </div>
              <span className="text-white/30 group-hover:text-white transition-colors text-lg">
                ↗
              </span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-white/10 pb-6"
            >
              <div className="flex items-center gap-4">
                <Linkedin className="w-5 h-5 text-white/40" />
                <div>
                  <span className="block font-body text-xs tracking-widest text-white/40 uppercase mb-1">
                    LinkedIn
                  </span>
                  <span className="font-body text-lg text-white group-hover:text-primary transition-colors">
                    linkedin.com/in/evedodd
                  </span>
                </div>
              </div>
              <span className="text-white/30 group-hover:text-white transition-colors text-lg">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
