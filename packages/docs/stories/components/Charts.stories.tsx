import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  UnifiedChart, 
  BarChart, 
  LineChart, 
  AreaChart, 
  PieChart, 
  RadarChart, 
  RadialChart 
} from '../../../components/ui/unified-chart';
import { ChartConfig } from '../../../components/ui/chart-types';
import { 
  generateMonthlyData,
  generateServiceData,
  generateSequentialData, 
  generateSignalData,
  generateSignalBarData,
  generatePerformanceData,
  getCategoricalConfig,
  getSignalConfig,
  getRadarConfig
} from '../../../components/utils/chart-data';

const meta: Meta<typeof UnifiedChart> = {
  title: 'Components/Charts',
  component: UnifiedChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Data visualization components built on Recharts for displaying business analytics, usage metrics, and performance data.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['bar', 'line', 'area', 'pie', 'radar', 'radialBar'],
    },
    showGrid: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showXAxis: { control: 'boolean' },
    showYAxis: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Using proper Data Visualization colors from design system
const bandwidthUsageData = [
  { name: "Jan", usage: 850, limit: 1000 },
  { name: "Feb", usage: 920, limit: 1000 },
  { name: "Mar", usage: 780, limit: 1000 },
  { name: "Apr", usage: 1050, limit: 1000 },
  { name: "May", usage: 960, limit: 1000 },
  { name: "Jun", usage: 1120, limit: 1000 },
];

// Chart configurations using Data Visualization colors from design system
const bandwidthConfig: ChartConfig = {
  usage: {
    label: "Usage (GB)",
    color: "#0D62FF", // Categorical cat1
  },
  limit: {
    label: "Limit (GB)", 
    color: "#B4B5BB", // Neutral
  },
};

const performanceConfig = getCategoricalConfig();

const signalConfig = getSignalConfig();

const networkConfig = getRadarConfig();

export const BarCharts: Story = {
  render: () => (
    <div className="space-y-12 w-full max-w-6xl">
      <div>
        <h2 className="text-2xl font-bold text-[#15172B] font-primary mb-6">Bar Charts</h2>
        <p className="text-[#70717D] mb-8">Bar charts shown with all three Data Visualization color themes</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Categorical Bar Chart */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Categorical Colors</h3>
              <p className="text-sm text-[#70717D]">For distinct categories and groups</p>
            </div>
            <div className="w-full h-[300px] p-4 bg-white border border-gray-200 rounded-lg">
              <BarChart
                data={generateMonthlyData()}
                config={getCategoricalConfig()}
                layout="horizontal"
                showGrid={true}
                showTooltip={true}
                showLegend={true}
              />
            </div>
          </div>
          
          {/* Signal Bar Chart */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Signal Colors</h3>
              <p className="text-sm text-[#70717D]">For status and priority levels</p>
            </div>
            <div className="w-full h-[300px] p-4 bg-white border border-gray-200 rounded-lg">
              <BarChart
                data={generateSignalBarData()}
                config={getSignalConfig()}
                layout="horizontal"
                stacked={true}
                showGrid={true}
                showTooltip={true}
                showLegend={true}
              />
            </div>
          </div>
          
          {/* Sequential Bar Chart */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Sequential Colors</h3>
              <p className="text-sm text-[#70717D]">For ordered data progression</p>
            </div>
            <div className="w-full h-[300px] p-4 bg-white border border-gray-200 rounded-lg">
              <BarChart
                data={[
                  { name: "Level 1", value: 15 },
                  { name: "Level 2", value: 28 },
                  { name: "Level 3", value: 42 },
                  { name: "Level 4", value: 58 },
                  { name: "Level 5", value: 73 },
                ]}
                config={{
                  value: { label: "Usage Level", color: "#0F864F" }
                }}
                layout="horizontal"
                showGrid={true}
                showTooltip={true}
                showLegend={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const LineCharts: Story = {
  render: () => (
    <div className="space-y-12 w-full max-w-6xl">
      <div>
        <h2 className="text-2xl font-bold text-[#15172B] font-primary mb-6">Line Charts</h2>
        <p className="text-[#70717D] mb-8">Line charts demonstrating trends with different color themes</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Categorical Line Chart */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Multi-Series Trends</h3>
              <p className="text-sm text-[#70717D]">Categorical colors for distinct data series</p>
            </div>
            <div className="w-full h-[300px] p-4 bg-white border border-gray-200 rounded-lg">
              <LineChart
                data={generateMonthlyData()}
                config={getCategoricalConfig()}
                showGrid={true}
                showTooltip={true}
                showLegend={true}
                showDots={true}
                strokeWidth={2}
              />
            </div>
          </div>
          
          {/* Sequential Line Chart */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Progressive Data</h3>
              <p className="text-sm text-[#70717D]">Sequential progression over time</p>
            </div>
            <div className="w-full h-[300px] p-4 bg-white border border-gray-200 rounded-lg">
              <LineChart
                data={generateSequentialData()}
                config={{
                  usage: { label: "Usage Level", color: "#0F864F" }
                }}
                showGrid={true}
                showTooltip={true}
                showLegend={false}
                showDots={true}
                strokeWidth={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AreaCharts: Story = {
  render: () => (
    <div className="space-y-12 w-full max-w-6xl">
      <div>
        <h2 className="text-2xl font-bold text-[#15172B] font-primary mb-6">Area Charts</h2>
        <p className="text-[#70717D] mb-8">Area charts showing cumulative data and trends</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stacked Area Chart with Categorical Colors */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Stacked Categories</h3>
              <p className="text-sm text-[#70717D]">Multiple data series with categorical colors</p>
            </div>
            <div className="w-full h-[300px] p-4 bg-white border border-gray-200 rounded-lg">
              <AreaChart
                data={generateMonthlyData()}
                config={getCategoricalConfig()}
                stacked={true}
                showGrid={true}
                showTooltip={true}
                showLegend={true}
              />
            </div>
          </div>
          
          {/* Sequential Area Chart */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Progressive Growth</h3>
              <p className="text-sm text-[#70717D]">Sequential data showing cumulative growth</p>
            </div>
            <div className="w-full h-[300px] p-4 bg-white border border-gray-200 rounded-lg">
              <AreaChart
                data={generateSequentialData()}
                config={{
                  usage: { label: "Cumulative Usage", color: "#139C53" }
                }}
                stacked={false}
                showGrid={true}
                showTooltip={true}
                showLegend={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const PieCharts: Story = {
  render: () => (
    <div className="space-y-12 w-full max-w-6xl">
      <div>
        <h2 className="text-2xl font-bold text-[#15172B] font-primary mb-6">Pie Charts</h2>
        <p className="text-[#70717D] mb-8">Pie charts showing data distribution with different color themes</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Categorical Pie Chart */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Service Distribution</h3>
              <p className="text-sm text-[#70717D]">Categorical colors for distinct services</p>
            </div>
            <div className="w-full h-[350px] p-4 bg-white border border-gray-200 rounded-lg">
              <PieChart
                data={generateServiceData().slice(0, 4)}
                config={{
                  "Internet Pro": { label: "Internet Pro", color: "#0D62FF" },
                  "Voice Services": { label: "Voice Services", color: "#3BB112" },
                  "Security Suite": { label: "Security Suite", color: "#5235A8" },
                  "WiFi Pro": { label: "WiFi Pro", color: "#E7343C" }
                }}
                showTooltip={true}
                showLegend={true}
                dataKey="value"
                nameKey="name"
                innerRadius={40}
                outerRadius={100}
                paddingAngle={2}
              />
            </div>
          </div>
          
          {/* Sequential Pie Chart */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Usage Levels</h3>
              <p className="text-sm text-[#70717D]">Sequential colors for ordered data</p>
            </div>
            <div className="w-full h-[350px] p-4 bg-white border border-gray-200 rounded-lg">
              <PieChart
                data={generateSequentialData().slice(0, 5)}
                config={{
                  "Week 1": { label: "Week 1", color: "#013841" },
                  "Week 2": { label: "Week 2", color: "#055446" },
                  "Week 3": { label: "Week 3", color: "#0A704B" },
                  "Week 4": { label: "Week 4", color: "#0F864F" },
                  "Week 5": { label: "Week 5", color: "#139C53" }
                }}
                showTooltip={true}
                showLegend={true}
                dataKey="usage"
                nameKey="name"
                innerRadius={40}
                outerRadius={100}
              />
            </div>
          </div>
          
          {/* Signal Pie Chart */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Issue Status</h3>
              <p className="text-sm text-[#70717D]">Signal colors for priority levels</p>
            </div>
            <div className="w-full h-[350px] p-4 bg-white border border-gray-200 rounded-lg">
              <PieChart
                data={generateSignalData()}
                config={{
                  "Critical Issues": { label: "Critical Issues", color: "#771117" },
                  "High Priority": { label: "High Priority", color: "#AD1217" },
                  "Medium Priority": { label: "Medium Priority", color: "#E86711" },
                  "Low Priority": { label: "Low Priority", color: "#CA8700" },
                  "Resolved": { label: "Resolved", color: "#4EA725" }
                }}
                showTooltip={true}
                showLegend={true}
                dataKey="value"
                nameKey="name"
                innerRadius={40}
                outerRadius={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const RadarCharts: Story = {
  render: () => (
    <div className="space-y-12 w-full max-w-6xl">
      <div>
        <h2 className="text-2xl font-bold text-[#15172B] font-primary mb-6">Radar Charts</h2>
        <p className="text-[#70717D] mb-8">Multi-dimensional data visualization with categorical colors</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Comparison */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Performance Comparison</h3>
              <p className="text-sm text-[#70717D]">Categorical colors for comparing multiple dimensions</p>
            </div>
            <div className="w-full h-[400px] p-4 bg-white border border-gray-200 rounded-lg">
              <RadarChart
                data={generatePerformanceData()}
                config={getRadarConfig()}
                showTooltip={true}
                showLegend={true}
                polarGrid={true}
                polarAngleAxis={true}
                polarRadiusAxis={false}
              />
            </div>
          </div>
          
          {/* Single Series Radar */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Service Assessment</h3>
              <p className="text-sm text-[#70717D]">Single series assessment using primary categorical color</p>
            </div>
            <div className="w-full h-[400px] p-4 bg-white border border-gray-200 rounded-lg">
              <RadarChart
                data={[
                  { subject: 'Performance', score: 120, fullMark: 150 },
                  { subject: 'Reliability', score: 98, fullMark: 150 },
                  { subject: 'Security', score: 86, fullMark: 150 },
                  { subject: 'Support', score: 99, fullMark: 150 },
                  { subject: 'Value', score: 85, fullMark: 150 },
                  { subject: 'Coverage', score: 65, fullMark: 150 },
                ]}
                config={{
                  score: { label: 'Current Score', color: '#0D62FF' }
                }}
                showTooltip={true}
                showLegend={false}
                polarGrid={true}
                polarAngleAxis={true}
                polarRadiusAxis={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const RadialCharts: Story = {
  render: () => (
    <div className="space-y-12 w-full max-w-6xl">
      <div>
        <h2 className="text-2xl font-bold text-[#15172B] font-primary mb-6">Radial Charts</h2>
        <p className="text-[#70717D] mb-8">Circular progress and comparison charts</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress Chart with Categorical */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Project Progress</h3>
              <p className="text-sm text-[#70717D]">Multiple progress indicators with categorical colors</p>
            </div>
            <div className="w-full h-[400px] p-4 bg-white border border-gray-200 rounded-lg">
              <RadialChart
                data={[
                  { name: "Implementation", value: 85 },
                  { name: "Testing", value: 60 },
                  { name: "Deployment", value: 30 },
                ]}
                config={{
                  value: { label: "Progress %", color: "#0D62FF" }
                }}
                showTooltip={true}
                showLegend={true}
              />
            </div>
          </div>
          
          {/* Signal Status Chart */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">System Health</h3>
              <p className="text-sm text-[#70717D]">Health indicators using signal colors</p>
            </div>
            <div className="w-full h-[400px] p-4 bg-white border border-gray-200 rounded-lg">
              <RadialChart
                data={[
                  { name: "Critical", value: 12 },
                  { name: "Warning", value: 28 },
                  { name: "Healthy", value: 85 },
                ]}
                config={{
                  value: { label: "Status %", color: "#4EA725" }
                }}
                showTooltip={true}
                showLegend={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ColorSystemOverview: Story = {
  render: () => (
    <div className="space-y-12 w-full max-w-7xl">
      <div>
        <h2 className="text-2xl font-bold text-[#15172B] font-primary mb-4">Data Visualization Color System</h2>
        <p className="text-[#70717D] mb-8">
          Our three categories of Data Visualization colors and when to use them.
        </p>
        
        {/* Color Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-[#15172B] font-primary mb-3">Categorical Colors</h3>
            <div className="flex gap-2 mb-4">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#0D62FF' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#3BB112' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#5235A8' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#E7343C' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#03496B' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#DB9200' }}></div>
            </div>
            <p className="text-sm text-[#70717D]">
              For distinct categories, groups, or series in charts. Use when data represents different types or categories.
            </p>
          </div>
          
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-[#15172B] font-primary mb-3">Sequential Colors</h3>
            <div className="flex gap-1 mb-4">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#013841' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#055446' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#0A704B' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#0F864F' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#139C53' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#26A54D' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#499F3C' }}></div>
            </div>
            <p className="text-sm text-[#70717D]">
              For ordered data, gradients, and progressive values. Use when data has a natural ordering or progression.
            </p>
          </div>
          
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-[#15172B] font-primary mb-3">Signal Colors</h3>
            <div className="flex gap-2 mb-4">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#4EA725' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#CA8700' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#E86711' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#AD1217' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#771117' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#949495' }}></div>
            </div>
            <p className="text-sm text-[#70717D]">
              For status, alerts, priority levels, and outcomes. Use when data represents health, risk, or performance states.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BusinessDashboard: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-7xl">
      <div>
        <h2 className="text-2xl font-bold text-[#15172B] font-primary mb-6">Business Analytics Dashboard</h2>
        <p className="text-[#70717D] mb-8">Comprehensive dashboard showing various chart types with appropriate color themes</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Performance Trends */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Monthly Performance Trends</h3>
              <p className="text-sm text-[#70717D]">Multi-series line chart with categorical colors</p>
            </div>
            <div className="w-full h-[300px] p-4 bg-white border border-gray-200 rounded-lg">
              <LineChart
                data={generateMonthlyData()}
                config={getCategoricalConfig()}
                showGrid={true}
                showTooltip={true}
                showLegend={true}
                showDots={true}
                strokeWidth={2}
              />
            </div>
          </div>
          
          {/* Service Distribution */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Service Distribution</h3>
              <p className="text-sm text-[#70717D]">Pie chart showing categorical service breakdown</p>
            </div>
            <div className="w-full h-[300px] p-4 bg-white border border-gray-200 rounded-lg">
              <PieChart
                data={generateServiceData().slice(0, 4)}
                config={{
                  "Internet Pro": { label: "Internet Pro", color: "#0D62FF" },
                  "Voice Services": { label: "Voice Services", color: "#3BB112" },
                  "Security Suite": { label: "Security Suite", color: "#5235A8" },
                  "WiFi Pro": { label: "WiFi Pro", color: "#E7343C" }
                }}
                showTooltip={true}
                showLegend={true}
                dataKey="value"
                nameKey="name"
                innerRadius={40}
                outerRadius={100}
              />
            </div>
          </div>
          
          {/* System Health Status */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">System Health Status</h3>
              <p className="text-sm text-[#70717D]">Stacked bar chart with signal colors for status tracking</p>
            </div>
            <div className="w-full h-[300px] p-4 bg-white border border-gray-200 rounded-lg">
              <BarChart
                data={generateSignalBarData()}
                config={getSignalConfig()}
                layout="horizontal"
                stacked={true}
                showGrid={true}
                showTooltip={true}
                showLegend={true}
              />
            </div>
          </div>
          
          {/* Performance Comparison */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#15172B] font-primary">Performance Comparison</h3>
              <p className="text-sm text-[#70717D]">Radar chart comparing multiple dimensions</p>
            </div>
            <div className="w-full h-[300px] p-4 bg-white border border-gray-200 rounded-lg">
              <RadarChart
                data={generatePerformanceData()}
                config={getRadarConfig()}
                showTooltip={true}
                showLegend={true}
                polarGrid={true}
                polarAngleAxis={true}
                polarRadiusAxis={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};