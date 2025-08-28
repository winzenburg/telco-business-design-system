import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  ChartTooltip,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../src/components';

// Import Recharts components with different naming to avoid conflicts
import {
  LineChart as RechartsLineChart,
  Line,
  AreaChart as RechartsAreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const meta: Meta = {
  title: 'Components/Chart',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Chart components for data visualization following Comcast Business Design System. Built on Recharts with consistent styling and accessibility.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Generic sample data for demonstrating chart patterns
const lineChartData = [
  { name: 'Jan', series1: 400, series2: 240 },
  { name: 'Feb', series1: 300, series2: 139 },
  { name: 'Mar', series1: 200, series2: 980 },
  { name: 'Apr', series1: 278, series2: 390 },
  { name: 'May', series1: 189, series2: 480 },
  { name: 'Jun', series1: 239, series2: 380 },
];

const areaChartData = [
  { name: 'A', value: 4000 },
  { name: 'B', value: 3000 },
  { name: 'C', value: 2000 },
  { name: 'D', value: 2780 },
  { name: 'E', value: 1890 },
  { name: 'F', value: 2390 },
];

const barChartData = [
  { name: 'Category A', value1: 4000, value2: 2400, value3: 2400 },
  { name: 'Category B', value1: 3000, value2: 1398, value3: 2210 },
  { name: 'Category C', value1: 2000, value2: 9800, value3: 2290 },
  { name: 'Category D', value1: 2780, value2: 3908, value3: 2000 },
];

const pieChartData = [
  { name: 'Group A', value: 400, fill: '#0D62FF' },
  { name: 'Group B', value: 300, fill: '#4A89FF' },
  { name: 'Group C', value: 300, fill: '#86B0FF' },
  { name: 'Group D', value: 200, fill: '#C2D8FF' },
];

export const LineChart: Story = {
  render: () => {
    return (
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Line Chart</CardTitle>
          <CardDescription>Shows trends and changes over time with multiple data series</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <RechartsLineChart width={600} height={300} data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F2F6" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12, fill: '#70717D' }}
                axisLine={{ stroke: '#F1F2F6' }}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#70717D' }}
                axisLine={{ stroke: '#F1F2F6' }}
              />
              <ChartTooltip />
              <Line 
                type="monotone" 
                dataKey="series1" 
                stroke="#0D62FF"
                strokeWidth={3}
                dot={{ fill: "#0D62FF", r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="series2" 
                stroke="#4A89FF"
                strokeWidth={3}
                dot={{ fill: "#4A89FF", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </RechartsLineChart>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const AreaChart: Story = {
  render: () => {
    return (
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Area Chart</CardTitle>
          <CardDescription>Displays quantitative data over time with filled areas under the line</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <RechartsAreaChart width={600} height={300} data={areaChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F2F6" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12, fill: '#70717D' }}
                axisLine={{ stroke: '#F1F2F6' }}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#70717D' }}
                axisLine={{ stroke: '#F1F2F6' }}
              />
              <ChartTooltip />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#0D62FF"
                strokeWidth={2}
                fill="#0D62FF20"
                fillOpacity={0.6}
              />
            </RechartsAreaChart>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const BarChart: Story = {
  render: () => {
    return (
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Bar Chart</CardTitle>
          <CardDescription>Compares categorical data with rectangular bars representing values</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px] w-full">
            <RechartsBarChart width={600} height={350} data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F2F6" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12, fill: '#70717D' }}
                axisLine={{ stroke: '#F1F2F6' }}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#70717D' }}
                axisLine={{ stroke: '#F1F2F6' }}
              />
              <ChartTooltip />
              <Bar dataKey="value1" fill="#0D62FF" />
              <Bar dataKey="value2" fill="#4A89FF" />
              <Bar dataKey="value3" fill="#86B0FF" />
            </RechartsBarChart>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const PieChart: Story = {
  render: () => {
    return (
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Pie Chart</CardTitle>
          <CardDescription>Shows parts of a whole as proportional slices of a circle</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full flex justify-center">
            <RechartsPieChart width={600} height={400}>
              <ChartTooltip />
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                outerRadius={120}
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </RechartsPieChart>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const SmallCharts: Story = {
  render: () => {
    const compactAreaData = areaChartData.slice(0, 4);
    const compactPieData = pieChartData.slice(0, 3);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Small Area Chart</CardTitle>
            <CardDescription>Compact version for dashboards and widgets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              <RechartsAreaChart width={300} height={200} data={compactAreaData}>
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0D62FF"
                  strokeWidth={2}
                  fill="#0D62FF30"
                  fillOpacity={0.8}
                />
                <ChartTooltip />
              </RechartsAreaChart>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Small Pie Chart</CardTitle>
            <CardDescription>Compact version for dashboards and widgets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full flex justify-center">
              <RechartsPieChart width={300} height={200}>
                <Pie
                  data={compactPieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  dataKey="value"
                >
                  {compactPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip />
              </RechartsPieChart>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

// Data Visualization Color Themes from design system tokens
const categoricalColors = {
  cat1: '#0D62FF',    // Primary blue
  cat2: '#3BB112',    // Green
  cat3: '#5235A8',    // Purple
  cat4: '#E7343C',    // Red
  cat5: '#03496B',    // Dark blue
  cat6: '#DB9200',    // Orange/yellow
};

const sequentialColors = {
  seq1: '#013841',    // Darkest
  seq2: '#055446',
  seq3: '#0A704B',
  seq4: '#0F864F',    // Mid-range
  seq5: '#139C53',
  seq6: '#26A54D',
  seq7: '#499F3C',    // Lightest
};

const signalColors = {
  positive: '#4EA725',    // Positive outcomes
  low: '#CA8700',         // Low priority/risk
  medium: '#E86711',      // Medium priority/risk
  high: '#AD1217',        // High priority/risk
  critical: '#771117',    // Critical priority/risk
  neutral: '#949495',     // Neutral/no data
};

export const CategoricalColorTheme: Story = {
  render: () => {
    const categoricalData = [
      { name: 'Internet Pro', value: 400, fill: categoricalColors.cat1 },
      { name: 'Voice Services', value: 300, fill: categoricalColors.cat2 },
      { name: 'Security Suite', value: 250, fill: categoricalColors.cat3 },
      { name: 'WiFi Pro', value: 200, fill: categoricalColors.cat4 },
      { name: 'Cloud Backup', value: 150, fill: categoricalColors.cat5 },
      { name: 'Analytics', value: 100, fill: categoricalColors.cat6 },
    ];

    const categoricalBarData = [
      { name: 'Q1', service1: 400, service2: 240, service3: 200, service4: 150 },
      { name: 'Q2', service1: 300, service2: 220, service3: 180, service4: 130 },
      { name: 'Q3', service1: 350, service2: 260, service3: 190, service4: 140 },
      { name: 'Q4', service1: 420, service2: 280, service3: 220, service4: 160 },
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Categorical Color Theme</h3>
          <p className="text-sm text-muted-foreground mb-6">Distinct colors for different categories or groups in data visualization</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Categorical Pie Chart</CardTitle>
              <CardDescription>Each category gets a distinct, visually separable color</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex justify-center">
                <RechartsPieChart width={400} height={300}>
                  <Pie
                    data={categoricalData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                  >
                    {categoricalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartTooltip />
                </RechartsPieChart>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Categorical Bar Chart</CardTitle>
              <CardDescription>Multiple series with distinct categorical colors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <RechartsBarChart width={400} height={300} data={categoricalBarData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F2F6" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#70717D' }} />
                  <YAxis tick={{ fontSize: 12, fill: '#70717D' }} />
                  <ChartTooltip />
                  <Bar dataKey="service1" fill={categoricalColors.cat1} />
                  <Bar dataKey="service2" fill={categoricalColors.cat2} />
                  <Bar dataKey="service3" fill={categoricalColors.cat3} />
                  <Bar dataKey="service4" fill={categoricalColors.cat4} />
                </RechartsBarChart>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  },
};

export const SequentialColorTheme: Story = {
  render: () => {
    const sequentialData = [
      { name: 'Level 1', value: 20, fill: sequentialColors.seq1 },
      { name: 'Level 2', value: 35, fill: sequentialColors.seq2 },
      { name: 'Level 3', value: 50, fill: sequentialColors.seq3 },
      { name: 'Level 4', value: 65, fill: sequentialColors.seq4 },
      { name: 'Level 5', value: 80, fill: sequentialColors.seq5 },
      { name: 'Level 6', value: 90, fill: sequentialColors.seq6 },
      { name: 'Level 7', value: 100, fill: sequentialColors.seq7 },
    ];

    const heatmapData = [
      { name: 'Jan', low: 20, medium: 65, high: 90 },
      { name: 'Feb', low: 25, medium: 70, high: 95 },
      { name: 'Mar', low: 30, medium: 75, high: 85 },
      { name: 'Apr', low: 35, medium: 80, high: 88 },
      { name: 'May', low: 40, medium: 85, high: 92 },
      { name: 'Jun', low: 45, medium: 88, high: 96 },
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Sequential Color Theme</h3>
          <p className="text-sm text-muted-foreground mb-6">Ordered color progression from light to dark for quantitative data</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sequential Bar Chart</CardTitle>
              <CardDescription>Values ordered from lowest to highest intensity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <RechartsBarChart width={400} height={300} data={sequentialData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F2F6" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#70717D' }} />
                  <YAxis tick={{ fontSize: 12, fill: '#70717D' }} />
                  <ChartTooltip />
                  <Bar dataKey="value">
                    {sequentialData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </RechartsBarChart>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sequential Area Chart</CardTitle>
              <CardDescription>Multiple sequential levels showing data intensity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <RechartsAreaChart width={400} height={300} data={heatmapData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F2F6" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#70717D' }} />
                  <YAxis tick={{ fontSize: 12, fill: '#70717D' }} />
                  <ChartTooltip />
                  <Area type="monotone" dataKey="low" stackId="1" stroke={sequentialColors.seq2} fill={sequentialColors.seq2} fillOpacity={0.8} />
                  <Area type="monotone" dataKey="medium" stackId="1" stroke={sequentialColors.seq4} fill={sequentialColors.seq4} fillOpacity={0.8} />
                  <Area type="monotone" dataKey="high" stackId="1" stroke={sequentialColors.seq6} fill={sequentialColors.seq6} fillOpacity={0.8} />
                </RechartsAreaChart>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  },
};

export const SignalColorTheme: Story = {
  render: () => {
    const signalData = [
      { name: 'Critical Issues', value: 12, fill: signalColors.critical },
      { name: 'High Priority', value: 28, fill: signalColors.high },
      { name: 'Medium Priority', value: 45, fill: signalColors.medium },
      { name: 'Low Priority', value: 67, fill: signalColors.low },
      { name: 'Resolved', value: 89, fill: signalColors.positive },
    ];

    const statusTrendData = [
      { name: 'Week 1', critical: 15, high: 32, medium: 48, low: 65, positive: 85 },
      { name: 'Week 2', critical: 12, high: 28, medium: 45, low: 67, positive: 89 },
      { name: 'Week 3', critical: 8, high: 24, medium: 42, low: 70, positive: 92 },
      { name: 'Week 4', critical: 5, high: 20, medium: 38, low: 75, positive: 95 },
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Signal Color Theme</h3>
          <p className="text-sm text-muted-foreground mb-6">Status and alert colors for indicating priority levels and outcomes</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Signal Status Chart</CardTitle>
              <CardDescription>Priority levels with appropriate signal colors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex justify-center">
                <RechartsPieChart width={400} height={300}>
                  <Pie
                    data={signalData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                  >
                    {signalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartTooltip />
                </RechartsPieChart>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Signal Trend Chart</CardTitle>
              <CardDescription>Status progression over time with signal colors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <RechartsLineChart width={400} height={300} data={statusTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F2F6" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#70717D' }} />
                  <YAxis tick={{ fontSize: 12, fill: '#70717D' }} />
                  <ChartTooltip />
                  <Line type="monotone" dataKey="critical" stroke={signalColors.critical} strokeWidth={2} />
                  <Line type="monotone" dataKey="high" stroke={signalColors.high} strokeWidth={2} />
                  <Line type="monotone" dataKey="medium" stroke={signalColors.medium} strokeWidth={2} />
                  <Line type="monotone" dataKey="low" stroke={signalColors.low} strokeWidth={2} />
                  <Line type="monotone" dataKey="positive" stroke={signalColors.positive} strokeWidth={2} />
                </RechartsLineChart>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  },
};

export const AllColorThemes: Story = {
  render: () => {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Data Visualization Color Themes</h3>
          <p className="text-sm text-muted-foreground mb-6">Complete overview of the three color themes available in the Comcast Business Design System</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Categorical</CardTitle>
              <CardDescription>For distinct categories or groups</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-xs font-medium text-muted-foreground mb-2">6 distinct colors:</div>
              {Object.entries(categoricalColors).map(([key, color]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border" style={{ backgroundColor: color }} />
                  <code className="text-xs">{color}</code>
                </div>
              ))}
              <div className="text-xs text-muted-foreground mt-3">
                <strong>Use for:</strong> Service types, product categories, user segments, different data series
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Sequential</CardTitle>
              <CardDescription>For ordered quantitative data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-xs font-medium text-muted-foreground mb-2">7-step progression:</div>
              {Object.entries(sequentialColors).map(([key, color]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border" style={{ backgroundColor: color }} />
                  <code className="text-xs">{color}</code>
                </div>
              ))}
              <div className="text-xs text-muted-foreground mt-3">
                <strong>Use for:</strong> Heat maps, intensity levels, performance scales, gradients
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Signal</CardTitle>
              <CardDescription>For status and priority levels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-xs font-medium text-muted-foreground mb-2">6 signal states:</div>
              {Object.entries(signalColors).map(([key, color]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border" style={{ backgroundColor: color }} />
                  <code className="text-xs">{color}</code>
                  <span className="text-xs text-muted-foreground capitalize">{key}</span>
                </div>
              ))}
              <div className="text-xs text-muted-foreground mt-3">
                <strong>Use for:</strong> Alerts, priority levels, status indicators, risk assessments
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  },
};

