// Shared chart configuration types for consistency across all chart components

export interface ChartConfigItem {
  label?: string
  color?: string
  theme?: {
    light?: string
    dark?: string
  }
  icon?: React.ComponentType
}

export type ChartConfig = Record<string, ChartConfigItem>

// Base props shared across all chart components
export interface BaseChartProps {
  data: any[]
  config: ChartConfig
  className?: string
  showGrid?: boolean
  showTooltip?: boolean
  showLegend?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
}

// Line and area specific types
export type LineType = 'linear' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter'

// Layout types for bar charts
export type BarChartLayout = 'horizontal' | 'vertical'
