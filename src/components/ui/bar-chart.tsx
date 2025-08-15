"use client"

import * as React from "react"
import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "./chart"
import { BaseChartProps, BarChartLayout } from "./chart-types"

export interface BarChartProps extends BaseChartProps {
  layout?: BarChartLayout
  stacked?: boolean
}

const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  ({
    data,
    config,
    className,
    showGrid = true,
    showTooltip = true,
    showLegend = false,
    showXAxis = true,
    showYAxis = true,
    layout = "vertical",
    stacked = false,
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
        <RechartsBarChart
          data={data}
          layout={layout}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {showGrid && (
            <CartesianGrid 
              {...(layout === "horizontal" 
                ? { horizontal: false } 
                : { vertical: false }
              )}
            />
          )}
          {layout === "vertical" ? (
            <>
              {showXAxis && (
                <XAxis
                  type="number"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
              )}
              {showYAxis && (
                <YAxis
                  dataKey="name"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
              )}
            </>
          ) : (
            <>
              {showXAxis && (
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
              )}
              {showYAxis && (
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
              )}
            </>
          )}
          {showTooltip && (
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
          )}
          {configKeys.map((key) => (
            <Bar
              key={key}
              dataKey={key}
              fill={config[key].color}
              radius={4}
              stackId={stacked ? "a" : undefined}
            />
          ))}
          {showLegend && (
            <ChartLegend content={<ChartLegendContent />} />
          )}
        </RechartsBarChart>
      </ChartContainer>
    )
  }
)

BarChart.displayName = "BarChart"

export { BarChart }