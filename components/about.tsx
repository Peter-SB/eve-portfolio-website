import Image from "next/image"
import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual side */}
          <div className="relative">
            <div className="relative aspect-[4/5] bg-muted rounded-2xl overflow-hidden">
              <Image
                src="/eve-headshot.png"
                alt="Eve Dod"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full -z-10" />
          </div>

          {/* Content side */}
          <div>
            <span className="font-serif italic text-primary text-lg mb-4 block">About Me</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Branding, Marketing &amp; Socials
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m Eve, a competent all-round marketer who succeeds in all aspects of branding, marketing and socials. I am most capable in branding and tone of voice work, expertly understanding and executing a client&apos;s specific needs from their marketing platforms.
              </p>
              <p>
                From Get Baked to YouTube, Crossfader to DAZN &mdash; I&apos;ve helped scale brands through content-first strategies, community management, and cross-platform campaigns that drive real results.
              </p>
            </div>

            {/* Skills/Services cards */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <Card className="p-4 bg-card border-border/50 hover:border-primary/30 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Brand Strategy</h3>
                <p className="text-sm text-muted-foreground">Tone of voice, positioning &amp; brand identity</p>
              </Card>
              <Card className="p-4 bg-card border-border/50 hover:border-primary/30 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Content Creation</h3>
                <p className="text-sm text-muted-foreground">Video, copy, socials &amp; email campaigns</p>
              </Card>
              <Card className="p-4 bg-card border-border/50 hover:border-primary/30 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Community Growth</h3>
                <p className="text-sm text-muted-foreground">Organic audience building &amp; engagement</p>
              </Card>
              <Card className="p-4 bg-card border-border/50 hover:border-primary/30 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Data &amp; Analytics</h3>
                <p className="text-sm text-muted-foreground">PowerBI, Google Analytics &amp; platform insights</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
