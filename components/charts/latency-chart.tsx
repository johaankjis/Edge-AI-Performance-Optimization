"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { stage: "Baseline", cpu: 145, npu: 132 },
  { stage: "Quantized", cpu: 98, npu: 87 },
  { stage: "Pruned", cpu: 112, npu: 95 },
  { stage: "Optimized", cpu: 104, npu: 85 },
]

const chartConfig = {
  cpu: {
    label: "CPU",
    color: "hsl(var(--chart-1))",
  },
  npu: {
    label: "NPU",
    color: "hsl(var(--chart-2))",
  },
}

export function LatencyChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="stage" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            label={{ value: "Latency (ms)", angle: -90, position: "insideLeft" }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="cpu" fill="var(--color-cpu)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="npu" fill="var(--color-npu)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
