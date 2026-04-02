import Image from "next/image"
import { Card } from "@/components/ui/card"

const highlights = [
  {
    logo: "/logos/last-sun-dance-alt.png",
    brand: "Last Sun Dance",
    title: "Membership Growth",
    description: "Stepped into the first marketing and branding strategist role. Managed activation across multiple strands including collaboration management with RAB and Tenzing.",
    metric: "+33% Memberships",
  },
  {
    logo: "/logos/george.png",
    brand: "ASDA George",
    title: "Omni-Channel Campaigns",
    description: "Strategized, planned and activated omni-channel campaigns across social media and email marketing (100k+ mailing list), managing in-house and external teams.",
    metric: "100K+ Email List",
  },
  {
    logo: "/logos/dazn.png",
    brand: "DAZN",
    title: "Sports Event Planning",
    description: "Project coordinated activity and critical paths across teams for digital event streams in international sports. Planned calendars across F1, Coppa Italia and Matchroom Boxing.",
    metric: "14 Month Plans",
  },
]

export function Highlights() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-serif italic text-primary text-lg mb-4 block">More Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Further Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className="group p-6 md:p-8 bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                  <Image
                    src={highlight.logo}
                    alt={highlight.brand}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-muted-foreground">{highlight.brand}</span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{highlight.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {highlight.description}
              </p>

              <div className="pt-4 border-t border-border">
                <span className="text-2xl font-bold text-primary">{highlight.metric}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
