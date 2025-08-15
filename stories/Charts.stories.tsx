import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { semanticTokens } from '../src/tokens/colors-consolidated';
import { AreaChart } from '../src/components/ui/area-chart';
import { BarChart } from '../src/components/ui/bar-chart';
import { LineChart } from '../src/components/ui/line-chart';
import { PieChart } from '../src/components/ui/pie-chart';
import { RadarChart } from '../src/components/ui/radar-chart';
import { RadialChart } from '../src/components/ui/radial-chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../src/components/ui/card';
import { 
  generateMonthlyData, 
  generateUsageData, 
  generateServiceData, 
  generatePerformanceData, 
  generateSignalData, 
  generateSignalBarData,
  getCategoricalConfig,
  getSignalConfig,
  getRadarConfig
} from '../src/utils/chart-data';

const meta: Meta = {
  title: 'Design System/Charts',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Comprehensive chart library built with Recharts and shadcn/ui components. Features all chart types using our data visualization color system.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data and configurations using utility functions
const monthlyData = generateMonthlyData();
const simpleUsageData = generateUsageData();
const serviceData = generateServiceData();
const performanceData = generatePerformanceData();
const signalData = generateSignalData();
const signalBarData = generateSignalBarData();

const categoricalConfig = getCategoricalConfig();
const signalConfig = getSignalConfig();
const radarConfig = getRadarConfig();

export const ChartsShowcase: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Comcast Business Charts Library
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive chart components built with Recharts and shadcn/ui. 
              Featuring our data visualization color system for categorical, sequential, and signal data.
            </p>
          </div>

          <div className="space-y-16">
            {/* Categorical Colors Section */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Categorical Colors</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Use categorical colors for distinct categories, groups, or series that have no inherent order.
                  Perfect for comparing different entities like services, regions, or product lines.
                </p>
                <div className="flex justify-center gap-2 mt-6">
                  {Object.entries(semanticTokens.dataVisualization.categorical).map(([key, color]) => (
                    <div key={key} className="flex flex-col items-center">
                      <div 
                        className="w-8 h-8 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs text-gray-600 mt-1">{key.toUpperCase()}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Multi-Series Area Chart</CardTitle>
                    <CardDescription>
                      Stacked area chart showing different metrics over time using categorical colors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="w-full h-[300px]">
                      <AreaChart
                        data={monthlyData}
                        config={categoricalConfig}
                        className="w-full h-full"
                        stacked={true}
                        showLegend={true}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Multi-Series Bar Chart</CardTitle>
                    <CardDescription>
                      Horizontal bar chart showing different metrics using categorical colors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="w-full h-[300px]">
                      <BarChart
                        data={monthlyData}
                        config={categoricalConfig}
                        className="w-full h-full"
                        layout="vertical"
                        showLegend={true}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Multi-Series Line Chart</CardTitle>
                    <CardDescription>
                      Line chart with multiple data series using categorical colors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="w-full h-[300px]">
                      <LineChart
                        data={monthlyData}
                        config={categoricalConfig}
                        className="w-full h-full"
                        showLegend={true}
                        type="monotone"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Service Distribution Pie Chart</CardTitle>
                    <CardDescription>
                      Pie chart showing distribution of different services using categorical colors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="w-full h-[300px]">
                      <PieChart
                        data={serviceData}
                        config={{
                          'Internet Pro': { color: semanticTokens.dataVisualization.categorical.cat1 },
                          'Voice Services': { color: semanticTokens.dataVisualization.categorical.cat2 },
                          'Security Suite': { color: semanticTokens.dataVisualization.categorical.cat3 },
                          'WiFi Pro': { color: semanticTokens.dataVisualization.categorical.cat4 },
                          'Cloud Backup': { color: semanticTokens.dataVisualization.categorical.cat5 },
                        }}
                        className="w-full h-full"
                        outerRadius={100}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance Comparison Radar</CardTitle>
                    <CardDescription>
                      Radar chart comparing different performance metrics using categorical colors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="w-full h-[300px]">
                      <RadarChart
                        data={performanceData}
                        config={radarConfig}
                        className="w-full h-full"
                        showLegend={true}
                        outerRadius={80}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Sequential Colors Section */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Sequential Colors</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Use sequential colors for ordered data that progresses from low to high values.
                  Perfect for heatmaps, intensity levels, performance scores, or any graduated data.
                </p>
                <div className="flex justify-center gap-1 mt-6">
                  {Object.entries(semanticTokens.dataVisualization.sequential).map(([key, color]) => (
                    <div key={key} className="flex flex-col items-center">
                      <div 
                        className="w-8 h-8 border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs text-gray-600 mt-1">{key.toUpperCase()}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Usage Intensity Area Chart</CardTitle>
                    <CardDescription>
                      Area chart showing usage intensity progression using sequential colors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="w-full h-[300px]">
                      <AreaChart
                        data={simpleUsageData}
                        config={{
                          usage: {
                            label: 'Usage Intensity',
                            color: semanticTokens.dataVisualization.sequential.seq4,
                          }
                        }}
                        className="w-full h-full"
                        type="monotone"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Usage Level Bar Chart</CardTitle>
                    <CardDescription>
                      Bar chart showing usage levels using mid-range sequential color
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="w-full h-[300px]">
                      <BarChart
                        data={simpleUsageData}
                        config={{
                          usage: {
                            label: 'Usage Level',
                            color: semanticTokens.dataVisualization.sequential.seq4,
                          }
                        }}
                        className="w-full h-full"
                        layout="vertical"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Intensity Line Chart</CardTitle>
                    <CardDescription>
                      Line chart showing intensity progression using sequential colors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="w-full h-[300px]">
                      <LineChart
                        data={simpleUsageData}
                        config={{
                          usage: {
                            label: 'Intensity Level',
                            color: semanticTokens.dataVisualization.sequential.seq5,
                          }
                        }}
                        className="w-full h-full"
                        type="monotone"
                        strokeWidth={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Single Performance Radar</CardTitle>
                    <CardDescription>
                      Radar chart showing performance profile using sequential colors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="w-full h-[300px]">
                      <RadarChart
                        data={performanceData}
                        config={{
                          A: {
                            label: 'Performance Score',
                            color: semanticTokens.dataVisualization.sequential.seq5,
                          }
                        }}
                        className="w-full h-full"
                        fillOpacity={0.6}
                        outerRadius={80}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Signal Colors Section */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Signal Colors</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Use signal colors for status indicators, alerts, and priority levels.
                  Perfect for dashboards, monitoring systems, and any data that needs immediate visual hierarchy.
                </p>
                <div className="flex justify-center gap-2 mt-6">
                  {Object.entries(semanticTokens.dataVisualization.signal).map(([key, color]) => (
                    <div key={key} className="flex flex-col items-center">
                      <div 
                        className="w-8 h-8 rounded border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs text-gray-600 mt-1">{key.toUpperCase()}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Priority Distribution Pie Chart</CardTitle>
                    <CardDescription>
                      Pie chart showing issue priority distribution using signal colors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="w-full h-[300px]">
                      <PieChart
                        data={signalData}
                        config={signalConfig}
                        className="w-full h-full"
                        nameKey="priority"
                        innerRadius={40}
                        outerRadius={100}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Priority Levels Stacked Bar</CardTitle>
                    <CardDescription>
                      Stacked bar chart showing priority levels by quarter using signal colors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="w-full h-[300px]">
                      <BarChart
                        data={signalBarData}
                        config={signalConfig}
                        className="w-full h-full"
                        layout="vertical"
                        showLegend={true}
                        stacked={true}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Critical Issues Area Chart</CardTitle>
                    <CardDescription>
                      Area chart showing critical issue trends using signal colors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="w-full h-[300px]">
                      <AreaChart
                        data={signalBarData}
                        config={{
                          critical: signalConfig.critical,
                          high: signalConfig.high,
                          medium: signalConfig.medium,
                        }}
                        className="w-full h-full"
                        stacked={true}
                        showLegend={true}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Alert Status Line Chart</CardTitle>
                    <CardDescription>
                      Line chart showing alert trends using signal colors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="w-full h-[300px]">
                      <LineChart
                        data={signalBarData}
                        config={{
                          critical: signalConfig.critical,
                          high: signalConfig.high,
                          positive: signalConfig.positive,
                        }}
                        className="w-full h-full"
                        showLegend={true}
                        type="monotone"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AreaChartExamples: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Area Chart Examples</h1>
        <p className="text-gray-600 mb-8">Cumulative data visualization with area charts across different use cases.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Service Usage Over Time</CardTitle>
            <CardDescription>Multi-service usage trends using categorical colors</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <AreaChart
                data={monthlyData}
                config={categoricalConfig}
                className="w-full h-full"
                showLegend={true}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Stacked Resource Utilization</CardTitle>
            <CardDescription>Cumulative resource usage showing total allocation</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <AreaChart
                data={monthlyData}
                config={categoricalConfig}
                className="w-full h-full"
                stacked={true}
                showLegend={true}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Intensity Progression</CardTitle>
            <CardDescription>Sequential color showing performance intensity over time</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <AreaChart
                data={simpleUsageData}
                config={{
                  usage: {
                    label: 'Performance Intensity',
                    color: semanticTokens.dataVisualization.sequential.seq5,
                  }
                }}
                className="w-full h-full"
                type="monotone"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Health Metrics</CardTitle>
            <CardDescription>Critical system metrics using signal colors for immediate status recognition</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <AreaChart
                data={signalBarData}
                config={{
                  critical: signalConfig.critical,
                  high: signalConfig.high,
                  positive: signalConfig.positive,
                }}
                className="w-full h-full"
                stacked={true}
                showLegend={true}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Business Growth Trajectory</CardTitle>
            <CardDescription>Revenue and growth metrics with step progression</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <AreaChart
                data={[
                  { name: 'Q1', revenue: 125000, customers: 450, growth: 12 },
                  { name: 'Q2', revenue: 145000, customers: 520, growth: 16 },
                  { name: 'Q3', revenue: 162000, customers: 580, growth: 18 },
                  { name: 'Q4', revenue: 185000, customers: 650, growth: 22 },
                  { name: 'Q1+1', revenue: 210000, customers: 720, growth: 25 },
                  { name: 'Q2+1', revenue: 235000, customers: 800, growth: 28 },
                ]}
                config={{
                  revenue: {
                    label: 'Revenue ($)',
                    color: semanticTokens.dataVisualization.categorical.cat1,
                  },
                  customers: {
                    label: 'Customers',
                    color: semanticTokens.dataVisualization.categorical.cat2,
                  },
                  growth: {
                    label: 'Growth %',
                    color: semanticTokens.dataVisualization.categorical.cat3,
                  }
                }}
                className="w-full h-full"
                type="stepAfter"
                showLegend={true}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Network Traffic Analysis</CardTitle>
            <CardDescription>Single metric showing network load with smooth curve</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <AreaChart
                data={[
                  { name: '00:00', traffic: 25 },
                  { name: '04:00', traffic: 15 },
                  { name: '08:00', traffic: 85 },
                  { name: '12:00', traffic: 95 },
                  { name: '16:00', traffic: 78 },
                  { name: '20:00', traffic: 45 },
                  { name: '23:59', traffic: 30 },
                ]}
                config={{
                  traffic: {
                    label: 'Network Load %',
                    color: semanticTokens.dataVisualization.sequential.seq4,
                  }
                }}
                className="w-full h-full"
                type="monotone"
                showGrid={true}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

export const BarChartExamples: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Bar Chart Examples</h1>
        <p className="text-gray-600 mb-8">Comparative data visualization with bar charts across different business scenarios.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Service Performance Comparison</CardTitle>
            <CardDescription>Multi-metric performance analysis using categorical colors</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <BarChart
                data={monthlyData}
                config={categoricalConfig}
                className="w-full h-full"
                layout="vertical"
                showLegend={true}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Regional Sales Performance</CardTitle>
            <CardDescription>Horizontal comparison of sales across regions</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <BarChart
                data={[
                  { name: 'Northeast', sales: 850000, target: 900000, growth: 12 },
                  { name: 'Southeast', sales: 720000, target: 750000, growth: 8 },
                  { name: 'Midwest', sales: 650000, target: 700000, growth: 15 },
                  { name: 'Southwest', sales: 780000, target: 800000, growth: 10 },
                  { name: 'West', sales: 920000, target: 950000, growth: 18 },
                ]}
                config={{
                  sales: {
                    label: 'Actual Sales ($)',
                    color: semanticTokens.dataVisualization.categorical.cat1,
                  },
                  target: {
                    label: 'Sales Target ($)',
                    color: semanticTokens.dataVisualization.categorical.cat2,
                  },
                  growth: {
                    label: 'Growth %',
                    color: semanticTokens.dataVisualization.categorical.cat3,
                  }
                }}
                className="w-full h-full"
                layout="horizontal"
                showLegend={true}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Usage Levels</CardTitle>
            <CardDescription>Sequential progression showing usage intensity levels</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <BarChart
                data={simpleUsageData}
                config={{
                  usage: {
                    label: 'Usage Intensity %',
                    color: semanticTokens.dataVisualization.sequential.seq4,
                  }
                }}
                className="w-full h-full"
                layout="vertical"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Issue Priority Distribution</CardTitle>
            <CardDescription>Stacked bar chart showing issue priorities using signal colors</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <BarChart
                data={signalBarData}
                config={signalConfig}
                className="w-full h-full"
                layout="vertical"
                showLegend={true}
                stacked={true}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Performance Scorecard</CardTitle>
            <CardDescription>Individual team metrics with clear performance indicators</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <BarChart
                data={[
                  { name: 'Team Alpha', efficiency: 94, quality: 88, delivery: 92 },
                  { name: 'Team Beta', efficiency: 86, quality: 95, delivery: 84 },
                  { name: 'Team Gamma', efficiency: 91, quality: 87, delivery: 89 },
                  { name: 'Team Delta', efficiency: 78, quality: 82, delivery: 85 },
                  { name: 'Team Echo', efficiency: 95, quality: 91, delivery: 96 },
                ]}
                config={{
                  efficiency: {
                    label: 'Efficiency Score',
                    color: semanticTokens.dataVisualization.categorical.cat1,
                  },
                  quality: {
                    label: 'Quality Score',
                    color: semanticTokens.dataVisualization.categorical.cat2,
                  },
                  delivery: {
                    label: 'Delivery Score',
                    color: semanticTokens.dataVisualization.categorical.cat3,
                  }
                }}
                className="w-full h-full"
                layout="horizontal"
                showLegend={true}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Resource Allocation</CardTitle>
            <CardDescription>Single metric resource utilization across different systems</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <BarChart
                data={[
                  { name: 'Database', utilization: 78 },
                  { name: 'Web Server', utilization: 65 },
                  { name: 'API Gateway', utilization: 92 },
                  { name: 'Load Balancer', utilization: 54 },
                  { name: 'CDN', utilization: 38 },
                  { name: 'Cache', utilization: 85 },
                ]}
                config={{
                  utilization: {
                    label: 'Resource Usage %',
                    color: semanticTokens.dataVisualization.sequential.seq5,
                  }
                }}
                className="w-full h-full"
                layout="vertical"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

export const LineChartExamples: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Line Chart Examples</h1>
        <p className="text-gray-600 mb-8">Trend analysis and time-series data visualization with line charts.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Multi-Metric Performance Trends</CardTitle>
            <CardDescription>Smooth curves showing performance trends over time</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <LineChart
                data={monthlyData}
                config={categoricalConfig}
                className="w-full h-full"
                type="monotone"
                showLegend={true}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Level Agreements</CardTitle>
            <CardDescription>Step progression showing SLA compliance over quarters</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <LineChart
                data={[
                  { name: 'Q1', uptime: 99.2, response: 98.8, throughput: 95.5 },
                  { name: 'Q2', uptime: 99.5, response: 99.1, throughput: 96.8 },
                  { name: 'Q3', uptime: 99.7, response: 99.4, throughput: 97.2 },
                  { name: 'Q4', uptime: 99.8, response: 99.6, throughput: 98.1 },
                  { name: 'Q1+1', uptime: 99.9, response: 99.7, throughput: 98.5 },
                ]}
                config={{
                  uptime: {
                    label: 'Uptime %',
                    color: semanticTokens.dataVisualization.categorical.cat1,
                  },
                  response: {
                    label: 'Response Time SLA %',
                    color: semanticTokens.dataVisualization.categorical.cat2,
                  },
                  throughput: {
                    label: 'Throughput SLA %',
                    color: semanticTokens.dataVisualization.categorical.cat3,
                  }
                }}
                className="w-full h-full"
                type="step"
                showLegend={true}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Satisfaction Trajectory</CardTitle>
            <CardDescription>Single metric trend with data points highlighted</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <LineChart
                data={[
                  { name: 'Jan', satisfaction: 78 },
                  { name: 'Feb', satisfaction: 82 },
                  { name: 'Mar', satisfaction: 85 },
                  { name: 'Apr', satisfaction: 83 },
                  { name: 'May', satisfaction: 87 },
                  { name: 'Jun', satisfaction: 89 },
                  { name: 'Jul', satisfaction: 92 },
                ]}
                config={{
                  satisfaction: {
                    label: 'Customer Satisfaction %',
                    color: semanticTokens.dataVisualization.sequential.seq5,
                  }
                }}
                className="w-full h-full"
                type="monotone"
                showDots={true}
                strokeWidth={3}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Alert Trends</CardTitle>
            <CardDescription>Critical system metrics using signal colors for immediate recognition</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <LineChart
                data={signalBarData}
                config={{
                  critical: signalConfig.critical,
                  high: signalConfig.high,
                  positive: signalConfig.positive,
                }}
                className="w-full h-full"
                showLegend={true}
                type="monotone"
                strokeWidth={2}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Network Latency Analysis</CardTitle>
            <CardDescription>Real-time network performance with linear interpolation</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <LineChart
                data={[
                  { name: '00:00', latency: 45, jitter: 12, packetLoss: 0.1 },
                  { name: '04:00', latency: 38, jitter: 8, packetLoss: 0.05 },
                  { name: '08:00', latency: 72, jitter: 25, packetLoss: 0.3 },
                  { name: '12:00', latency: 85, jitter: 32, packetLoss: 0.4 },
                  { name: '16:00', latency: 68, jitter: 18, packetLoss: 0.2 },
                  { name: '20:00', latency: 52, jitter: 15, packetLoss: 0.1 },
                  { name: '23:59', latency: 41, jitter: 9, packetLoss: 0.05 },
                ]}
                config={{
                  latency: {
                    label: 'Latency (ms)',
                    color: semanticTokens.dataVisualization.categorical.cat1,
                  },
                  jitter: {
                    label: 'Jitter (ms)',
                    color: semanticTokens.dataVisualization.categorical.cat2,
                  },
                  packetLoss: {
                    label: 'Packet Loss %',
                    color: semanticTokens.dataVisualization.categorical.cat4,
                  }
                }}
                className="w-full h-full"
                type="linear"
                showLegend={true}
                strokeWidth={2}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Business Growth Metrics</CardTitle>
            <CardDescription>Step-before progression showing milestone achievements</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[300px]">
              <LineChart
                data={[
                  { name: 'Baseline', revenue: 100, customers: 100, market: 100 },
                  { name: 'Month 3', revenue: 115, customers: 108, market: 105 },
                  { name: 'Month 6', revenue: 132, customers: 125, market: 112 },
                  { name: 'Month 9', revenue: 148, customers: 142, market: 118 },
                  { name: 'Year 1', revenue: 175, customers: 165, market: 128 },
                  { name: 'Year 2', revenue: 220, customers: 195, market: 145 },
                ]}
                config={{
                  revenue: {
                    label: 'Revenue Growth %',
                    color: semanticTokens.dataVisualization.categorical.cat1,
                  },
                  customers: {
                    label: 'Customer Growth %',
                    color: semanticTokens.dataVisualization.categorical.cat2,
                  },
                  market: {
                    label: 'Market Share %',
                    color: semanticTokens.dataVisualization.categorical.cat3,
                  }
                }}
                className="w-full h-full"
                type="stepBefore"
                showLegend={true}
                showDots={true}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

export const PieChartExamples: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Pie Chart Examples</h1>
        <p className="text-gray-600 mb-8">Various pie chart configurations showing data distribution.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Service Distribution Pie</CardTitle>
            <CardDescription>Basic pie chart showing service distribution</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[400px]">
              <PieChart
                data={serviceData}
                config={{
                  'Internet Pro': { color: semanticTokens.dataVisualization.categorical.cat1 },
                  'Voice Services': { color: semanticTokens.dataVisualization.categorical.cat2 },
                  'Security Suite': { color: semanticTokens.dataVisualization.categorical.cat3 },
                  'WiFi Pro': { color: semanticTokens.dataVisualization.categorical.cat4 },
                  'Cloud Backup': { color: semanticTokens.dataVisualization.categorical.cat5 },
                }}
                className="w-full h-full"
                outerRadius={120}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Donut Chart with Inner Radius</CardTitle>
            <CardDescription>Pie chart with inner radius for a donut appearance</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[400px]">
              <PieChart
                data={serviceData}
                config={{
                  'Internet Pro': { color: semanticTokens.dataVisualization.categorical.cat1 },
                  'Voice Services': { color: semanticTokens.dataVisualization.categorical.cat2 },
                  'Security Suite': { color: semanticTokens.dataVisualization.categorical.cat3 },
                  'WiFi Pro': { color: semanticTokens.dataVisualization.categorical.cat4 },
                  'Cloud Backup': { color: semanticTokens.dataVisualization.categorical.cat5 },
                }}
                className="w-full h-full"
                innerRadius={60}
                outerRadius={120}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Signal Status Distribution</CardTitle>
            <CardDescription>Using signal colors to show status priorities</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[400px]">
              <PieChart
                data={signalData}
                config={signalConfig}
                className="w-full h-full"
                nameKey="priority"
                innerRadius={40}
                outerRadius={120}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sequential Data Pie</CardTitle>
            <CardDescription>Pie chart using sequential colors for ordered data</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[400px]">
              <PieChart
                data={[
                  { name: 'Level 1', value: 15, fill: semanticTokens.dataVisualization.sequential.seq1 },
                  { name: 'Level 2', value: 25, fill: semanticTokens.dataVisualization.sequential.seq2 },
                  { name: 'Level 3', value: 35, fill: semanticTokens.dataVisualization.sequential.seq3 },
                  { name: 'Level 4', value: 45, fill: semanticTokens.dataVisualization.sequential.seq4 },
                  { name: 'Level 5', value: 55, fill: semanticTokens.dataVisualization.sequential.seq5 },
                ]}
                config={{
                  'Level 1': { color: semanticTokens.dataVisualization.sequential.seq1 },
                  'Level 2': { color: semanticTokens.dataVisualization.sequential.seq2 },
                  'Level 3': { color: semanticTokens.dataVisualization.sequential.seq3 },
                  'Level 4': { color: semanticTokens.dataVisualization.sequential.seq4 },
                  'Level 5': { color: semanticTokens.dataVisualization.sequential.seq5 },
                }}
                className="w-full h-full"
                outerRadius={120}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

export const RadarChartExamples: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Radar Chart Examples</h1>
        <p className="text-gray-600 mb-8">Multi-dimensional data visualization with radar charts.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Performance Comparison</CardTitle>
            <CardDescription>Comparing two entities across multiple metrics</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[400px]">
              <RadarChart
                data={performanceData}
                config={radarConfig}
                className="w-full h-full"
                showLegend={true}
                outerRadius={120}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Single Entity Performance</CardTitle>
            <CardDescription>Performance profile of a single entity</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[400px]">
              <RadarChart
                data={performanceData}
                config={{
                  A: {
                    label: 'Performance Score',
                    color: semanticTokens.dataVisualization.categorical.cat1,
                  }
                }}
                className="w-full h-full"
                fillOpacity={0.6}
                outerRadius={120}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Quality Metrics</CardTitle>
            <CardDescription>Multi-dimensional service assessment using signal colors</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[400px]">
              <RadarChart
                data={[
                  { subject: 'Reliability', current: 95, target: 98, benchmark: 90, fullMark: 100 },
                  { subject: 'Speed', current: 88, target: 92, benchmark: 85, fullMark: 100 },
                  { subject: 'Security', current: 92, target: 95, benchmark: 88, fullMark: 100 },
                  { subject: 'Support', current: 85, target: 90, benchmark: 80, fullMark: 100 },
                  { subject: 'Value', current: 78, target: 85, benchmark: 75, fullMark: 100 },
                  { subject: 'Innovation', current: 82, target: 88, benchmark: 78, fullMark: 100 },
                ]}
                config={{
                  current: {
                    label: 'Current Performance',
                    color: semanticTokens.dataVisualization.signal.medium,
                  },
                  target: {
                    label: 'Target Goal',
                    color: semanticTokens.dataVisualization.signal.positive,
                  },
                  benchmark: {
                    label: 'Industry Benchmark',
                    color: semanticTokens.dataVisualization.categorical.cat3,
                  }
                }}
                className="w-full h-full"
                showLegend={true}
                outerRadius={100}
                fillOpacity={0.3}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills Assessment</CardTitle>
            <CardDescription>Sequential color progression showing skill levels</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[400px]">
              <RadarChart
                data={[
                  { subject: 'Technical', score: 85, fullMark: 100 },
                  { subject: 'Communication', score: 92, fullMark: 100 },
                  { subject: 'Leadership', score: 78, fullMark: 100 },
                  { subject: 'Problem Solving', score: 88, fullMark: 100 },
                  { subject: 'Creativity', score: 75, fullMark: 100 },
                  { subject: 'Teamwork', score: 95, fullMark: 100 },
                ]}
                config={{
                  score: {
                    label: 'Skill Level',
                    color: semanticTokens.dataVisualization.sequential.seq5,
                  }
                }}
                className="w-full h-full"
                outerRadius={120}
                fillOpacity={0.4}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

export const RadialChartExamples: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Radial Chart Examples</h1>
        <p className="text-gray-600 mb-8">Circular progress and data visualization with radial charts.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Service Usage Progress</CardTitle>
            <CardDescription>Single metric progress indicator using radial design</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[400px]">
              <RadialChart
                data={[{ name: 'usage', value: 75, fill: semanticTokens.dataVisualization.categorical.cat1 }]}
                config={{
                  usage: {
                    label: 'Usage',
                    color: semanticTokens.dataVisualization.categorical.cat1,
                  }
                }}
                className="w-full h-full"
                innerRadius={80}
                outerRadius={120}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Multi-Service Status</CardTitle>
            <CardDescription>Multiple service status indicators in concentric rings</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[400px]">
              <RadialChart
                data={[
                  { name: 'Internet', value: 92, fill: semanticTokens.dataVisualization.categorical.cat1 },
                  { name: 'Voice', value: 88, fill: semanticTokens.dataVisualization.categorical.cat2 },
                  { name: 'Security', value: 95, fill: semanticTokens.dataVisualization.categorical.cat3 },
                ]}
                config={{
                  Internet: { color: semanticTokens.dataVisualization.categorical.cat1 },
                  Voice: { color: semanticTokens.dataVisualization.categorical.cat2 },
                  Security: { color: semanticTokens.dataVisualization.categorical.cat3 },
                }}
                className="w-full h-full"
                innerRadius={60}
                outerRadius={140}
                showLegend={true}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Signal Status Indicators</CardTitle>
            <CardDescription>System health indicators using signal colors</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[400px]">
              <RadialChart
                data={[
                  { name: 'Critical Systems', value: 98, fill: semanticTokens.dataVisualization.signal.positive },
                  { name: 'Warning Systems', value: 85, fill: semanticTokens.dataVisualization.signal.medium },
                  { name: 'Maintenance', value: 72, fill: semanticTokens.dataVisualization.signal.low },
                ]}
                config={{
                  'Critical Systems': { color: semanticTokens.dataVisualization.signal.positive },
                  'Warning Systems': { color: semanticTokens.dataVisualization.signal.medium },
                  'Maintenance': { color: semanticTokens.dataVisualization.signal.low },
                }}
                className="w-full h-full"
                innerRadius={50}
                outerRadius={130}
                showLegend={true}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Progression</CardTitle>
            <CardDescription>Sequential color progression showing performance levels</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[400px]">
              <RadialChart
                data={[
                  { name: 'Basic', value: 45, fill: semanticTokens.dataVisualization.sequential.seq2 },
                  { name: 'Intermediate', value: 68, fill: semanticTokens.dataVisualization.sequential.seq4 },
                  { name: 'Advanced', value: 85, fill: semanticTokens.dataVisualization.sequential.seq6 },
                ]}
                config={{
                  Basic: { color: semanticTokens.dataVisualization.sequential.seq2 },
                  Intermediate: { color: semanticTokens.dataVisualization.sequential.seq4 },
                  Advanced: { color: semanticTokens.dataVisualization.sequential.seq6 },
                }}
                className="w-full h-full"
                innerRadius={40}
                outerRadius={120}
                showLegend={true}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};