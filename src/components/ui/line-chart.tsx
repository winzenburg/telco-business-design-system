"use client"

import * as React from "react"
import { Line, LineChart as RechartsLineChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "./chart"
import { BaseChartProps, LineType } from "./chart-types"

export interface LineChartProps extends BaseChartProps {
  showDots?: boolean
  type?: LineType
  strokeWidth?: number
}

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  ({
    data,
    config,
    className,
    showGrid = true,
    showTooltip = true,
    showLegend = false,
    showXAxis = true,
    showYAxis = true,
    showDots = true,
    type = "monotone",
    strokeWidth = 2,
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
        <RechartsLineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {showGrid && (
            <CartesianGrid 
              strokeDasharray="3 3"
              vertical={false}
            />
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
            />
          )}
          {showTooltip && (
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
          )}
          {configKeys.map((key) => (
            <Line
              key={key}
              type={type}
              dataKey={key}
              stroke={config[key].color}
              strokeWidth={strokeWidth}
              dot={showDots ? { 
                fill: config[key].color, 
                strokeWidth: 2,
                r: 4 
              } : false}
              activeDot={{ 
                r: 6, 
                stroke: config[key].color,
                strokeWidth: 2,
                fill: config[key].color
              }}
            />
          ))}
          {showLegend && (
            <ChartLegend content={<ChartLegendContent />} />
          )}
        </RechartsLineChart>
      </ChartContainer>
    )
  }
)

LineChart.displayName = "LineChart"

export { LineChart }