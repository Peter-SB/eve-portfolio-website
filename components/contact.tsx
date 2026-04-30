import { Linkedin, Mail } from "lucide-react";
import contactData from "@/data/contact.json";

const iconMap: Record<string, React.ReactNode> = {
  email: <Mail className="w-5 h-5 text-white/40" />,
  linkedin: <Linkedin className="w-5 h-5 text-white/40" />,
};

export function Contact() {
  const { sectionLabel, heading, description, ctaButtons, contactLinks } = contactData;

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-20 bg-[#1C1C1A] text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top label + heading */}
        <div className="mb-16">
          <span className="font-body font-medium tracking-[0.2em] uppercase text-white/40 text-sm">
            {sectionLabel}
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase text-white mt-4 leading-[0.95]">
            {heading.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </h2>
        </div>

        <hr className="border-white/10 mb-16" />

        {/* Two-column body */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: description + CTA */}
          <div className="flex flex-col justify-between gap-10">
            <p className="font-body font-light text-white/60 leading-relaxed max-w-md text-lg">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              {ctaButtons.map((btn, i) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target={btn.external ? "_blank" : undefined}
                  rel={btn.external ? "noopener noreferrer" : undefined}
                  className={
                    i === 0
                      ? "inline-block font-body font-medium text-sm tracking-widest uppercase border border-white rounded-full px-8 py-3 text-white hover:bg-white hover:text-[#1C1C1A] transition-colors"
                      : "inline-block font-body font-medium text-sm tracking-widest uppercase border border-white/20 rounded-full px-8 py-3 text-white/60 hover:border-white hover:text-white transition-colors"
                  }
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: contact links */}
          <div className="flex flex-col justify-center gap-8">
            {contactLinks.map((link) => (
              <a
                key={link.type}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between border-b border-white/10 pb-6"
              >
                <div className="flex items-center gap-4">
                  {iconMap[link.type]}
                  <div>
                    <span className="block font-body text-xs tracking-widest text-white/40 uppercase mb-1">
                      {link.label}
                    </span>
                    <span className="font-body text-lg text-white group-hover:text-primary transition-colors">
                      {link.display}
                    </span>
                  </div>
                </div>
                <span className="text-white/30 group-hover:text-white transition-colors text-lg">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
