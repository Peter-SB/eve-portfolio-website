import Image from "next/image";
import aboutData from "@/data/about.json";

export function About() {
  const { sectionLabel, heading, description, services } = aboutData;

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left large typographic block */}
          <div>
            <span className="font-body text-sm tracking-widest text-muted-foreground">
              {sectionLabel}
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground mt-4 mb-6">
              {heading.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h2>

            <p className="font-body text-base text-muted-foreground max-w-xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right: photo + callout */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="w-full max-w-sm bg-[#FBF9F1] border border-foreground/10 rounded-xl p-6">
              <h3 className="font-display text-xl text-foreground mb-2">
                {services.title}
              </h3>
              <ul className="mt-2 space-y-3 font-body text-sm text-muted-foreground">
                {services.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href={services.ctaHref}
                className="inline-block mt-6 font-body text-sm border border-foreground rounded-full px-6 py-2"
              >
                {services.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
