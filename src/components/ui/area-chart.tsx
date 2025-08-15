"use client"

import * as React from "react"
import { Area, AreaChart as RechartsAreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "./chart"
import { BaseChartProps, LineType } from "./chart-types"

export interface AreaChartProps extends BaseChartProps {
  stacked?: boolean
  type?: LineType
}

const AreaChart = React.forwardRef<HTMLDivElement, AreaChartProps>(
  ({
    data,
    config,
    className,
    showGrid = true,
    showTooltip = true,
    showLegend = false,
    showXAxis = true,
    showYAxis = true,
    stacked = false,
    type = "monotone",
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
        <RechartsAreaChart
          data={data}
          margin={{
            left: 12,
            right: 12,
            top: 12,
            bottom: 12,
          }}
          stackOffset={stacked ? "expand" : undefined}
        >
          {showGrid && (
            <CartesianGrid vertical={false} />
          )}
          {showXAxis && (
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
          )}
          {showYAxis && (
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}`}
            />
          )}
          {showTooltip && (
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
          )}
          {configKeys.map((key) => (
            <Area
              key={key}
              dataKey={key}
              type={type}
              fill={config[key].color}
              fillOpacity={0.4}
              stroke={config[key].color}
              strokeWidth={2}
              stackId={stacked ? "a" : undefined}
            />
          ))}
          {showLegend && (
            <ChartLegend content={<ChartLegendContent />} />
          )}
        </RechartsAreaChart>
      </ChartContainer>
    )
  }
)

AreaChart.displayName = "AreaChart"

export { AreaChart }