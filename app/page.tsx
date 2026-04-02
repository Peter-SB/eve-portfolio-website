import { Hero } from "@/components/hero"
import { BrandLogos } from "@/components/brand-logos"
import { About } from "@/components/about"
import { CaseStudies } from "@/components/case-studies"
import { Highlights } from "@/components/highlights"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BrandLogos />
      <About />
      <CaseStudies />
      <Highlights />
      <Contact />
      <Footer />
    </main>
  )
}
