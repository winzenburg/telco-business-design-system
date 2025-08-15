"use client"

import * as React from "react"
import { RadialBar, RadialBarChart as RechartsRadialBarChart, PolarAngleAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "./chart"

export interface RadialChartProps {
  data: any[]
  config: Record<string, any>
  className?: string
  showTooltip?: boolean
  showLegend?: boolean
  dataKey?: string
  startAngle?: number
  endAngle?: number
  innerRadius?: number
  outerRadius?: number
  cornerRadius?: number
}

const RadialChart = React.forwardRef<HTMLDivElement, RadialChartProps>(
  ({
    data,
    config,
    className,
    showTooltip = true,
    showLegend = false,
    dataKey = "value",
    startAngle = 90,
    endAngle = 450,
    innerRadius = 30,
    outerRadius = 80,
    cornerRadius = 10,
    ...props
  }, ref) => {

    return (
      <ChartContainer
        ref={ref}
        config={config}
        className={className}
        {...props}
      >
        <RechartsRadialBarChart
          cx="50%"
          cy="50%"
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          data={data}
        >
          <PolarAngleAxis 
            type="number" 
            domain={[0, 100]} 
            angleAxisId={0} 
            tick={false}
          />
          <RadialBar
            dataKey={dataKey}
            cornerRadius={cornerRadius}
            fill="var(--color-primary)"
            className="fill-primary"
          />
          {showTooltip && (
            <ChartTooltip
              content={<ChartTooltipContent />}
            />
          )}
          {showLegend && (
            <ChartLegend content={<ChartLegendContent />} />
          )}
        </RechartsRadialBarChart>
      </ChartContainer>
    )
  }
)

RadialChart.displayName = "RadialChart"

export { RadialChart }