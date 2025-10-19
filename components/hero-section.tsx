import { Cpu, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Cpu className="h-4 w-4" />
            <span>Edge AI Optimization</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Performance Optimization for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Embedded SoC</span>
          </h1>

          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            Optimizing inference latency and power efficiency of AI models on embedded System-on-Chip platforms,
            enabling low-power AI acceleration for next-generation edge devices.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              <span className="font-mono">28% Latency Reduction</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              <span className="font-mono">18% Power Efficiency</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </section>
  )
}
