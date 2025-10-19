"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LatencyChart } from "@/components/charts/latency-chart"
import { PowerEfficiencyChart } from "@/components/charts/power-efficiency-chart"
import { ThroughputChart } from "@/components/charts/throughput-chart"

export function BenchmarkingResults() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Benchmarking Results</h2>
          <p className="text-muted-foreground">Cross-architecture performance analysis: CPU vs NPU</p>
        </div>

        <Card className="border-border bg-card p-6">
          <Tabs defaultValue="latency" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="latency">Inference Latency</TabsTrigger>
              <TabsTrigger value="power">Power Efficiency</TabsTrigger>
              <TabsTrigger value="throughput">Throughput</TabsTrigger>
            </TabsList>

            <TabsContent value="latency" className="space-y-4">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">Latency Comparison</h3>
                <p className="text-sm text-muted-foreground">
                  Inference time across different optimization stages (lower is better)
                </p>
              </div>
              <LatencyChart />
            </TabsContent>

            <TabsContent value="power" className="space-y-4">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">Energy Efficiency</h3>
                <p className="text-sm text-muted-foreground">Energy consumption per inference (lower is better)</p>
              </div>
              <PowerEfficiencyChart />
            </TabsContent>

            <TabsContent value="throughput" className="space-y-4">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">Throughput Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Inferences per second across architectures (higher is better)
                </p>
              </div>
              <ThroughputChart />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  )
}
