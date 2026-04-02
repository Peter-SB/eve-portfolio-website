"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-primary/15 rounded-full blur-xl" />
      
      {/* Top navigation */}
      <div className="absolute top-6 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20 flex justify-between items-center">
        <span className="text-sm font-medium tracking-wide text-muted-foreground">Eve Dod</span>
        <div className="flex items-center gap-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:hello@evedod.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl">
        <div className="relative mb-6">
          <span className="font-serif italic text-primary text-xl md:text-2xl">Social Media &amp; Brand Manager</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 text-balance">
          EVE DOD
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed">
          A competent all-round marketer who excels in branding, marketing and socials — expertly understanding and executing a client&apos;s specific needs across all marketing platforms.
        </p>

        {/* Stats */}
        <div className="flex gap-8 md:gap-12 mb-12">
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-bold text-foreground">5+</span>
            <span className="text-sm text-muted-foreground">Years Experience</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-bold text-foreground">10+</span>
            <span className="text-sm text-muted-foreground">Brands Managed</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-bold text-foreground">1.2M+</span>
            <span className="text-sm text-muted-foreground">Followers Managed</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Button 
            size="lg" 
            className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8 border-foreground/20 hover:bg-foreground/5"
            asChild
          >
            <a href="/eve-dod-cv.pdf" target="_blank" rel="noopener noreferrer">
              View my CV
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            className="rounded-full px-8 hover:bg-foreground/5"
            onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Case Studies
            <ArrowDown className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Decorative accent shape */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full -mr-32 md:-mr-48" />
    </section>
  )
}
