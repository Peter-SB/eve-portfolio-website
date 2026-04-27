import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left large typographic block */}
          <div>
            <span className="font-body text-sm tracking-widest text-muted-foreground">
              ABOUT
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground mt-4 mb-6">
              About
              <br />
              Me
            </h2>

            <p className="font-body text-base text-muted-foreground max-w-xl leading-relaxed">
              Hi, I&apos;m Eve — a social media manager who crafts engaging
              content and builds brand communities. I focus on strategy-first
              campaigns that increase visibility and convert followers into
              customers.
            </p>
          </div>

          {/* Right: photo + callout */}
          <div className="flex flex-col items-start md:items-end gap-6">
            {/* <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-foreground/10">
              <div className="relative aspect-[4/5] bg-muted">
                <Image
                  src="/eve-headshot.png"
                  alt="Eve Dodd"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div> */}

            <div className="w-full max-w-sm bg-[#FBF9F1] border border-foreground/10 rounded-xl p-6">
              <h3 className="font-display text-xl text-foreground mb-2">
                Services
              </h3>
              <ul className="mt-2 space-y-3 font-body text-sm text-muted-foreground">
                <li>Brand Strategy & Positioning</li>
                <li>Content Creation (video + stills)</li>
                <li>Campaign Management & Reporting</li>
              </ul>
              <a
                href="#contact"
                className="inline-block mt-6 font-body text-sm border border-foreground rounded-full px-6 py-2"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
