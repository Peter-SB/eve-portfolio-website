import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    brand: "Get Baked",
    category: "Food & Beverage",
    handle: "@getbakeduk",
    description: "Led brand and marketing for a cult UK bakery, scaling a disruptive, content-first challenger brand. Controlled cross-business workflows, socials, content, emails, print, packaging and e-commerce.",
    stats: [
      { label: "Engagement Increase", value: "+20%" },
      { label: "Conversion Rate", value: "14%" },
      { label: "Role", value: "Brand & Marketing Manager" },
    ],
    logo: "/logos/get-baked.png",
    color: "bg-primary/20",
  },
  {
    id: 2,
    brand: "Crossfader",
    category: "Music & Education",
    handle: "@wearecrossfader",
    description: "Spearheaded international educational outlier in the music, DJ and event industry. Managed planning, creating, strategy and scheduling of all content across YouTube, TikTok, Instagram, Discord and Threads.",
    stats: [
      { label: "Instagram", value: "253K" },
      { label: "TikTok", value: "350.9K" },
      { label: "YouTube", value: "656K" },
    ],
    logo: "/logos/crossfader.png",
    color: "bg-foreground/10",
  },
  {
    id: 3,
    brand: "YouTube (1021 Creative)",
    category: "Tech & Culture",
    handle: "YouTube Culture & Trends Team",
    description: "Worked directly with YouTube's Culture and Trends Team to manage the UK's Trending Page and build the Shorts algorithm by identifying and tracking social media and cultural trends.",
    stats: [
      { label: "Duration", value: "2 Years" },
      { label: "Focus", value: "Trends" },
      { label: "Scope", value: "UK Market" },
    ],
    logo: "/logos/youtube.png",
    color: "bg-primary/15",
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 md:px-12 lg:px-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="font-serif italic text-primary text-lg mb-4 block">Featured Work</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Case Studies
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md mt-4 md:mt-0 leading-relaxed">
            A selection of projects that showcase my approach to social media management and the results achieved.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study) => (
            <Card 
              key={study.id}
              className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="grid md:grid-cols-[1fr,auto] gap-6 p-6 md:p-8">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={study.logo}
                        alt={study.brand}
                        width={32}
                        height={32}
                        className="object-contain rounded"
                      />
                      <span className="text-sm text-muted-foreground">{study.category}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                      {study.brand}
                    </h3>
                    <span className="text-sm text-primary mb-3 block">{study.handle}</span>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {study.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-6 mt-6">
                    {study.stats.map((stat, index) => (
                      <div key={index}>
                        <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                        <span className="block text-sm text-muted-foreground">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start md:items-center">
                  <div className={`w-16 h-16 rounded-full ${study.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <ArrowUpRight className="w-6 h-6 text-foreground" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
