import { Card } from "@/components/ui/card"
import { TrendingDown, Zap, Cpu, Activity } from "lucide-react"

const metrics = [
  {
    icon: TrendingDown,
    label: "Inference Latency",
    value: "28%",
    description: "Reduction vs baseline",
    trend: "down",
  },
  {
    icon: Zap,
    label: "Power Efficiency",
    value: "18%",
    description: "Energy per inference",
    trend: "up",
  },
  {
    icon: Cpu,
    label: "Model Size",
    value: "42%",
    description: "Compression achieved",
    trend: "down",
  },
  {
    icon: Activity,
    label: "Accuracy",
    value: "99.2%",
    description: "Maintained accuracy",
    trend: "stable",
  },
]

export function MetricsOverview() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Key Performance Metrics</h2>
          <p className="text-muted-foreground">Measurable improvements across critical performance indicators</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <Card key={metric.label} className="border-border bg-card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <Icon className="h-8 w-8 text-primary" />
                  <span
                    className={`text-xs font-medium ${
                      metric.trend === "down"
                        ? "text-accent"
                        : metric.trend === "up"
                          ? "text-accent"
                          : "text-muted-foreground"
                    }`}
                  >
                    {metric.trend === "down" ? "↓" : metric.trend === "up" ? "↑" : "→"}
                  </span>
                </div>
                <div className="mb-2 font-mono text-4xl font-bold text-foreground">{metric.value}</div>
                <div className="mb-1 text-sm font-medium text-foreground">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.description}</div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
