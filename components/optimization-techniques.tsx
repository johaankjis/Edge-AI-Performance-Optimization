import { Card } from "@/components/ui/card"
import { Binary, Scissors, Gauge, Layers } from "lucide-react"

const techniques = [
  {
    icon: Binary,
    title: "INT8 Quantization",
    description:
      "Applied int8 quantization to compress model weights and activations, reducing memory footprint while preserving accuracy targets.",
    impact: "42% model size reduction",
  },
  {
    icon: Gauge,
    title: "ARM NEON SIMD",
    description:
      "Leveraged ARM NEON SIMD optimizations for compute efficiency, enabling parallel processing of vector operations.",
    impact: "28% latency improvement",
  },
  {
    icon: Scissors,
    title: "Model Pruning",
    description:
      "Implemented structured pruning to remove redundant parameters and connections, streamlining the inference pipeline.",
    impact: "35% parameter reduction",
  },
  {
    icon: Layers,
    title: "Pipeline Optimization",
    description:
      "Restructured inference pipeline to reduce compute bottlenecks and optimize memory access patterns for SoC architecture.",
    impact: "18% power efficiency",
  },
]

export function OptimizationTechniques() {
  return (
    <section className="border-b border-border bg-muted/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Optimization Techniques</h2>
          <p className="text-muted-foreground">Advanced methods applied to achieve performance targets</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {techniques.map((technique) => {
            const Icon = technique.icon
            return (
              <Card key={technique.title} className="border-border bg-card p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{technique.title}</h3>
                    <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{technique.description}</p>
                    <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      <span>Impact:</span>
                      <span className="font-mono">{technique.impact}</span>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
