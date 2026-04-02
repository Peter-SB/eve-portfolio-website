import { Button } from "@/components/ui/button"
import { ArrowUpRight, Linkedin, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="font-serif italic text-primary text-lg mb-4 block">Let&apos;s Connect</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-background/70 leading-relaxed mb-8 max-w-md">
              I&apos;m always excited to work with brands who are ready to take their social media presence to the next level. Let&apos;s chat about how I can help.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="mailto:hello@evedod.com">
                  Get in Touch
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 border-background/20 text-background hover:bg-background/10"
                asChild
              >
                <a href="/eve-dod-cv.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <a 
                href="mailto:hello@evedod.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm text-background/60">Email</span>
                  <span className="text-lg font-medium group-hover:text-primary transition-colors">hello@evedod.com</span>
                </div>
              </a>

              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm text-background/60">LinkedIn</span>
                  <span className="text-lg font-medium group-hover:text-primary transition-colors">linkedin.com/in/evedod</span>
                </div>
              </a>
            </div>

            {/* Decorative dots */}
            <div className="flex gap-2 mt-12">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div className="w-3 h-3 rounded-full bg-background/30" />
              <div className="w-3 h-3 rounded-full bg-background/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
