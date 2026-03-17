import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { VideoSection } from "@/components/VideoSection"
import { Features } from "@/components/Features"
import { HowItWorks } from "@/components/HowItWorks"
import { UseCases } from "@/components/UseCases"
import { Footer } from "@/components/Footer"
import { StructuredData } from "@/components/StructuredData"

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-background text-foreground scroll-smooth">
        <Navbar />
        <Hero />
        <VideoSection />
        <Features />
        <HowItWorks />
        <UseCases />
        <Footer />
      </main>
    </>
  )
}
