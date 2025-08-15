"use client"

import * as React from "react"
import { Radar, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "./chart"

export interface RadarChartProps {
  data: any[]
  config: Record<string, any>
  className?: string
  showTooltip?: boolean
  showLegend?: boolean
  showGrid?: boolean
  showAngleAxis?: boolean
  showRadiusAxis?: boolean
  angleAxisDataKey?: string
  outerRadius?: number
  strokeWidth?: number
  fillOpacity?: number
}

const RadarChart = React.forwardRef<HTMLDivElement, RadarChartProps>(
  ({
    data,
    config,
    className,
    showTooltip = true,
    showLegend = false,
    showGrid = true,
    showAngleAxis = true,
    showRadiusAxis = false,
    angleAxisDataKey = "subject",
    outerRadius = 80,
    strokeWidth = 2,
    fillOpacity = 0.3,
    ...props
  }, ref) => {
    const configKeys = Object.keys(config).filter(key => config[key].color)

    return (
      <ChartContainer
        ref={ref}
        config={config}
        className={className}
        {...props}
      >
        <RechartsRadarChart
          cx="50%"
          cy="50%"
          outerRadius={outerRadius}
          data={data}
        >
          {showGrid && (
            <PolarGrid />
          )}
          {showAngleAxis && (
            <PolarAngleAxis 
              dataKey={angleAxisDataKey}
              tick={{ fontSize: 12 }}
            />
          )}
          {showRadiusAxis && (
            <PolarRadiusAxis 
              angle={0}
              domain={[0, 'dataMax']}
              tick={{ fontSize: 10 }}
            />
          )}
          {configKeys.map((key) => (
            <Radar
              key={key}
              name={config[key].label || key}
              dataKey={key}
              stroke={`var(--color-${key})`}
              fill={`var(--color-${key})`}
              fillOpacity={fillOpacity}
              strokeWidth={strokeWidth}
              dot={{ 
                r: 4, 
                fill: `var(--color-${key})`,
                strokeWidth: 2,
                stroke: `var(--color-${key})`
              }}
            />
          ))}
          {showTooltip && (
            <ChartTooltip
              content={<ChartTooltipContent />}
            />
          )}
          {showLegend && (
            <ChartLegend content={<ChartLegendContent />} />
          )}
        </RechartsRadarChart>
      </ChartContainer>
    )
  }
)

RadarChart.displayName = "RadarChart"

export { RadarChart }