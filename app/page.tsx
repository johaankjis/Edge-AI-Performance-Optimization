import { HeroSection } from "@/components/hero-section"
import { MetricsOverview } from "@/components/metrics-overview"
import { OptimizationTechniques } from "@/components/optimization-techniques"
import { BenchmarkingResults } from "@/components/benchmarking-results"
import { SystemArchitecture } from "@/components/system-architecture"
import { ProjectTimeline } from "@/components/project-timeline"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MetricsOverview />
      <OptimizationTechniques />
      <BenchmarkingResults />
      <SystemArchitecture />
      <ProjectTimeline />
      <Footer />
    </main>
  )
}
