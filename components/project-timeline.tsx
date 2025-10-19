import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const milestones = [
  {
    week: "Week 1-2",
    title: "Quantization & Pruning",
    description: "Applied int8 quantization and model pruning; validated accuracy targets",
    status: "completed",
  },
  {
    week: "Week 3-4",
    title: "Benchmarking",
    description: "Conducted CPU vs NPU performance tests with profiling tools",
    status: "completed",
  },
  {
    week: "Week 5-6",
    title: "Gap Analysis",
    description: "Generated comprehensive report; refined pipeline for power efficiency",
    status: "completed",
  },
  {
    week: "Week 7-8",
    title: "Stakeholder Presentation",
    description: "Created decks and presented results; achieved go-decision for AI acceleration",
    status: "completed",
  },
]

export function ProjectTimeline() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Project Timeline</h2>
          <p className="text-muted-foreground">8-week development and optimization cycle</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <Card key={milestone.week} className="border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-3">
                      <span className="font-mono text-sm font-medium text-primary">{milestone.week}</span>
                      <span className="text-lg font-semibold text-foreground">{milestone.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
