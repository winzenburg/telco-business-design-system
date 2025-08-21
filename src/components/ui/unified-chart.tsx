"use client"

import * as React from "react"
import { 
  Bar, BarChart as RechartsBarChart,
  Line, LineChart as RechartsLineChart,
  Area, AreaChart as RechartsAreaChart,
  Pie, PieChart as RechartsPieChart,
  RadarChart as RechartsRadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  RadialBarChart as RechartsRadialBarChart, RadialBar,
  CartesianGrid, XAxis, YAxis, Cell
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "./chart"
import { ChartConfig, LineType, BarChartLayout } from "./chart-types"

// Unified chart type
export type ChartType = "bar" | "line" | "area" | "pie" | "radar" | "radialBar"

// Comprehensive chart props interface
export interface UnifiedChartProps {
  type: ChartType
  data: any[]
  config: ChartConfig
  className?: string
  
  // Common display options
  showGrid?: boolean
  showTooltip?: boolean
  showLegend?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  
  // Bar chart specific
  layout?: BarChartLayout
  stacked?: boolean
  
  // Line/Area chart specific
  showDots?: boolean
  lineType?: LineType
  strokeWidth?: number
  
  // Pie chart specific
  dataKey?: string
  nameKey?: string
  innerRadius?: number
  outerRadius?: number
  paddingAngle?: number
  startAngle?: number
  endAngle?: number
  
  // Radar chart specific
  polarGrid?: boolean
  polarAngleAxis?: boolean
  polarRadiusAxis?: boolean
  
  // Radial bar chart specific
  cx?: string | number
  cy?: string | number
  
  // Recharts props passthrough
  margin?: { top?: number; right?: number; bottom?: number; left?: number }
}

const UnifiedChart = React.forwardRef<HTMLDivElement, UnifiedChartProps>(
  ({
    type,
    data,
    config,
    className,
    
    // Common defaults
    showGrid = true,
    showTooltip = true,
    showLegend = false,
    showXAxis = true,
    showYAxis = true,
    
    // Bar chart defaults
    layout = "vertical",
    stacked = false,
    
    // Line/Area chart defaults
    showDots = true,
    lineType = "monotone",
    strokeWidth = 2,
    
    // Pie chart defaults
    dataKey = "value",
    nameKey = "name",
    innerRadius = 0,
    outerRadius = 80,
    paddingAngle = 0,
    startAngle = 90,
    endAngle = 450,
    
    // Radar chart defaults
    polarGrid = true,
    polarAngleAxis = true,
    polarRadiusAxis = false,
    
    // Radial bar defaults
    cx = "50%",
    cy = "50%",
    
    // Margin defaults
    margin = { top: 20, right: 30, left: 20, bottom: 5 },
    
    ...props
  }, ref) => {
    const configKeys = Object.keys(config).filter(key => config[key].color)
    
    const renderChart = () => {
      switch (type) {
        case "bar":
          return (
            <RechartsBarChart data={data} layout={layout} margin={margin}>
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
          )
          
        case "line":
          return (
            <RechartsLineChart data={data} margin={margin}>
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
                  type={lineType}
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
          )
          
        case "area":
          return (
            <RechartsAreaChart data={data} margin={margin}>
              {showGrid && (
                <CartesianGrid strokeDasharray="3 3" />
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
              {configKeys.map((key, index) => (
                <Area
                  key={key}
                  type={lineType}
                  dataKey={key}
                  stroke={config[key].color}
                  fill={config[key].color}
                  fillOpacity={0.6}
                  strokeWidth={strokeWidth}
                  stackId={stacked ? "a" : index}
                />
              ))}
              {showLegend && (
                <ChartLegend content={<ChartLegendContent />} />
              )}
            </RechartsAreaChart>
          )
          
        case "pie":
          return (
            <RechartsPieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              {showTooltip && (
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              )}
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                paddingAngle={paddingAngle}
                startAngle={startAngle}
                endAngle={endAngle}
                dataKey={dataKey}
                nameKey={nameKey}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={configKeys[index % configKeys.length] ? 
                      config[configKeys[index % configKeys.length]]?.color || "#8884d8" : 
                      "#8884d8"
                    }
                  />
                ))}
              </Pie>
              {showLegend && (
                <ChartLegend content={<ChartLegendContent />} />
              )}
            </RechartsPieChart>
          )
          
        case "radar":
          return (
            <RechartsRadarChart data={data} margin={{ top: 20, right: 80, bottom: 20, left: 80 }}>
              {polarGrid && <PolarGrid />}
              {polarAngleAxis && <PolarAngleAxis dataKey="subject" />}
              {polarRadiusAxis && <PolarRadiusAxis />}
              {showTooltip && (
                <ChartTooltip content={<ChartTooltipContent />} />
              )}
              {configKeys.map((key) => (
                <Radar
                  key={key}
                  name={config[key].label || key}
                  dataKey={key}
                  stroke={config[key].color}
                  fill={config[key].color}
                  fillOpacity={0.6}
                />
              ))}
              {showLegend && (
                <ChartLegend content={<ChartLegendContent />} />
              )}
            </RechartsRadarChart>
          )
          
        case "radialBar":
          return (
            <RechartsRadialBarChart
              data={data}
              cx={cx}
              cy={cy}
              innerRadius="10%"
              outerRadius="80%"
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              {showTooltip && (
                <ChartTooltip content={<ChartTooltipContent />} />
              )}
              {configKeys.map((key) => (
                <RadialBar
                  key={key}
                  dataKey={key}
                  cornerRadius={4}
                  fill={config[key].color}
                />
              ))}
              {showLegend && (
                <ChartLegend content={<ChartLegendContent />} />
              )}
            </RechartsRadialBarChart>
          )
          
        default:
          return <div>Unsupported chart type: {type}</div>
      }
    }

    return (
      <ChartContainer
        ref={ref}
        config={config}
        className={className}
        {...props}
      >
        {renderChart()}
      </ChartContainer>
    )
  }
)

UnifiedChart.displayName = "UnifiedChart"

// Export legacy component interfaces for backward compatibility
export interface BarChartProps extends Omit<UnifiedChartProps, 'type'> {
  layout?: BarChartLayout
  stacked?: boolean
}

export interface LineChartProps extends Omit<UnifiedChartProps, 'type'> {
  showDots?: boolean
  type?: LineType
  strokeWidth?: number
}

export interface AreaChartProps extends Omit<UnifiedChartProps, 'type'> {
  stacked?: boolean
  type?: LineType
}

export interface PieChartProps extends Omit<UnifiedChartProps, 'type'> {
  dataKey?: string
  nameKey?: string
  innerRadius?: number
  outerRadius?: number
  paddingAngle?: number
  startAngle?: number
  endAngle?: number
}

export interface RadarChartProps extends Omit<UnifiedChartProps, 'type'> {
  polarGrid?: boolean
  polarAngleAxis?: boolean
  polarRadiusAxis?: boolean
}

export interface RadialChartProps extends Omit<UnifiedChartProps, 'type'> {
  cx?: string | number
  cy?: string | number
}

// Backward compatible exports that use the unified component
export const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>((props, ref) => (
  <UnifiedChart {...props} type="bar" ref={ref} />
))
BarChart.displayName = "BarChart"

export const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(({ type, ...props }, ref) => (
  <UnifiedChart {...props} type="line" lineType={type} ref={ref} />
))
LineChart.displayName = "LineChart"

export const AreaChart = React.forwardRef<HTMLDivElement, AreaChartProps>(({ type, ...props }, ref) => (
  <UnifiedChart {...props} type="area" lineType={type} ref={ref} />
))
AreaChart.displayName = "AreaChart"

export const PieChart = React.forwardRef<HTMLDivElement, PieChartProps>((props, ref) => (
  <UnifiedChart {...props} type="pie" ref={ref} />
))
PieChart.displayName = "PieChart"

export const RadarChart = React.forwardRef<HTMLDivElement, RadarChartProps>((props, ref) => (
  <UnifiedChart {...props} type="radar" ref={ref} />
))
RadarChart.displayName = "RadarChart"

export const RadialChart = React.forwardRef<HTMLDivElement, RadialChartProps>((props, ref) => (
  <UnifiedChart {...props} type="radialBar" ref={ref} />
))
RadialChart.displayName = "RadialChart"

export { UnifiedChart }