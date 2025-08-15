"use client"

import * as React from "react"
import { Pie, PieChart as RechartsPieChart, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "./chart"
import { ChartConfig } from "./chart-types"

export interface PieChartProps {
  data: any[]
  config: ChartConfig
  className?: string
  showTooltip?: boolean
  showLegend?: boolean
  dataKey?: string
  nameKey?: string
  innerRadius?: number
  outerRadius?: number
  paddingAngle?: number
  startAngle?: number
  endAngle?: number
}

const PieChart = React.forwardRef<HTMLDivElement, PieChartProps>(
  ({
    data,
    config,
    className,
    showTooltip = true,
    showLegend = true,
    dataKey = "value",
    nameKey = "name",
    innerRadius = 0,
    outerRadius = 80,
    paddingAngle = 0,
    startAngle = 90,
    endAngle = 450,
    ...props
  }, ref) => {

    return (
      <ChartContainer
        ref={ref}
        config={config}
        className={className}
        {...props}
      >
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={paddingAngle}
            dataKey={dataKey}
            nameKey={nameKey}
            startAngle={startAngle}
            endAngle={endAngle}
          >
            {data.map((entry, index) => {
              const configKey = entry[nameKey] || `item${index}`
              const configItem = config[configKey]
              const color = configItem?.color || entry.fill || `var(--color-${configKey})`
              
              return (
                <Cell 
                  key={`cell-${index}`} 
                  fill={color}
                />
              )
            })}
          </Pie>
          {showTooltip && (
            <ChartTooltip
              content={<ChartTooltipContent nameKey={nameKey} />}
            />
          )}
          {showLegend && (
            <ChartLegend 
              content={<ChartLegendContent nameKey={nameKey} />}
              verticalAlign="bottom"
            />
          )}
        </RechartsPieChart>
      </ChartContainer>
    )
  }
)

PieChart.displayName = "PieChart"

export { PieChart }