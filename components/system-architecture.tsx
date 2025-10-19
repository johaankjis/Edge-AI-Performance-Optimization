import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const architectureFlow = [
  { stage: "Input Layer", description: "Raw sensor data" },
  { stage: "Quantization", description: "INT8 conversion" },
  { stage: "Inference Engine", description: "ARM NEON optimized" },
  { stage: "Post-processing", description: "Result aggregation" },
  { stage: "Output", description: "Edge decision" },
]

export function SystemArchitecture() {
  return (
    <section className="border-b border-border bg-muted/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">System Architecture</h2>
          <p className="text-muted-foreground">Optimized inference pipeline for embedded SoC platforms</p>
        </div>

        <Card className="border-border bg-card p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {architectureFlow.map((item, index) => (
              <div key={item.stage} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
                    <div className="mb-2 font-mono text-sm font-semibold text-primary">{item.stage}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                </div>
                {index < architectureFlow.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 text-muted-foreground md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-4">
              <div className="mb-2 text-sm font-semibold text-foreground">Framework</div>
              <div className="font-mono text-xs text-muted-foreground">TensorFlow Lite, ONNX Runtime</div>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <div className="mb-2 text-sm font-semibold text-foreground">Hardware</div>
              <div className="font-mono text-xs text-muted-foreground">ARM SoC (CPU + NPU variants)</div>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <div className="mb-2 text-sm font-semibold text-foreground">Optimization</div>
              <div className="font-mono text-xs text-muted-foreground">INT8, Pruning, NEON SIMD</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
