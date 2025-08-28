import { colors } from '../tokens/design-system-colors';

// Data Visualization Colors - Using the proper design system colors
const chartColors = {
  dataVisualization: {
    // Categorical colors - for distinct categories/groups in charts
    categorical: {
      cat1: '#0D62FF',    // Category 1 - Primary blue
      cat2: '#3BB112',    // Category 2 - Green
      cat3: '#5235A8',    // Category 3 - Purple
      cat4: '#E7343C',    // Category 4 - Red
      cat5: '#03496B',    // Category 5 - Dark blue
      cat6: '#DB9200',    // Category 6 - Orange/yellow
    },
    
    // Sequential colors - for ordered data/gradients (7-step scale)
    sequential: {
      seq1: '#013841',    // Sequential 1 - Darkest
      seq2: '#055446',    // Sequential 2
      seq3: '#0A704B',    // Sequential 3
      seq4: '#0F864F',    // Sequential 4 - Mid-range
      seq5: '#139C53',    // Sequential 5
      seq6: '#26A54D',    // Sequential 6
      seq7: '#499F3C',    // Sequential 7 - Lightest
    },
    
    // Signal colors - for status/alerts in data
    signal: {
      positive: '#4EA725',    // Positive outcomes
      low: '#CA8700',         // Low priority/risk
      medium: '#E86711',      // Medium priority/risk
      high: '#AD1217',        // High priority/risk
      critical: '#771117',    // Critical priority/risk
      neutral: '#949495',     // Neutral/no data
    },
  }
};

// Sample data generators for chart examples
export const generateMonthlyData = () => [
  { name: 'January', bandwidth: 420, users: 240, revenue: 2400 },
  { name: 'February', bandwidth: 680, users: 139, revenue: 1398 },
  { name: 'March', bandwidth: 890, users: 980, revenue: 9800 },
  { name: 'April', bandwidth: 590, users: 390, revenue: 3908 },
  { name: 'May', bandwidth: 420, users: 480, revenue: 4800 },
  { name: 'June', bandwidth: 680, users: 380, revenue: 3800 },
];

export const generateUsageData = () => [
  { name: 'Low Usage', usage: 15 },
  { name: 'Light Usage', usage: 28 },
  { name: 'Moderate', usage: 45 },
  { name: 'Regular', usage: 67 },
  { name: 'High Usage', usage: 82 },
  { name: 'Peak Usage', usage: 94 },
  { name: 'Maximum', usage: 100 },
];

export const generateServiceData = () => [
  { name: 'Internet Pro', value: 400, fill: chartColors.dataVisualization.categorical.cat1 },
  { name: 'Voice Services', value: 300, fill: chartColors.dataVisualization.categorical.cat2 },
  { name: 'Security Suite', value: 300, fill: chartColors.dataVisualization.categorical.cat3 },
  { name: 'WiFi Pro', value: 200, fill: chartColors.dataVisualization.categorical.cat4 },
  { name: 'Cloud Backup', value: 150, fill: chartColors.dataVisualization.categorical.cat5 },
  { name: 'Mobile Solutions', value: 120, fill: chartColors.dataVisualization.categorical.cat6 },
];

export const generateSequentialData = () => [
  { name: 'Week 1', usage: 15, fill: chartColors.dataVisualization.sequential.seq1 },
  { name: 'Week 2', usage: 28, fill: chartColors.dataVisualization.sequential.seq2 },
  { name: 'Week 3', usage: 42, fill: chartColors.dataVisualization.sequential.seq3 },
  { name: 'Week 4', usage: 58, fill: chartColors.dataVisualization.sequential.seq4 },
  { name: 'Week 5', usage: 73, fill: chartColors.dataVisualization.sequential.seq5 },
  { name: 'Week 6', usage: 86, fill: chartColors.dataVisualization.sequential.seq6 },
  { name: 'Week 7', usage: 94, fill: chartColors.dataVisualization.sequential.seq7 },
];

export const generatePerformanceData = () => [
  { subject: 'Speed', A: 120, B: 110, fullMark: 150 },
  { subject: 'Reliability', A: 98, B: 130, fullMark: 150 },
  { subject: 'Security', A: 86, B: 130, fullMark: 150 },
  { subject: 'Support', A: 99, B: 100, fullMark: 150 },
  { subject: 'Cost', A: 85, B: 90, fullMark: 150 },
  { subject: 'Features', A: 65, B: 85, fullMark: 150 },
];

export const generateSignalData = () => [
  { name: 'Critical Issues', value: 12, priority: 'critical', fill: chartColors.dataVisualization.signal.critical },
  { name: 'High Priority', value: 28, priority: 'high', fill: chartColors.dataVisualization.signal.high },
  { name: 'Medium Priority', value: 45, priority: 'medium', fill: chartColors.dataVisualization.signal.medium },
  { name: 'Low Priority', value: 67, priority: 'low', fill: chartColors.dataVisualization.signal.low },
  { name: 'Resolved', value: 89, priority: 'positive', fill: chartColors.dataVisualization.signal.positive },
];

export const generateSignalBarData = () => [
  { name: 'Q1', critical: 12, high: 28, medium: 45, low: 67, positive: 89 },
  { name: 'Q2', critical: 8, high: 35, medium: 52, low: 73, positive: 92 },
  { name: 'Q3', critical: 15, high: 22, medium: 48, low: 65, positive: 85 },
  { name: 'Q4', critical: 5, high: 18, medium: 38, low: 78, positive: 95 },
];

// Chart configuration presets
export const getCategoricalConfig = () => ({
  bandwidth: {
    label: 'Bandwidth Usage',
    color: chartColors.dataVisualization.categorical.cat1,
  },
  users: {
    label: 'Active Users',
    color: chartColors.dataVisualization.categorical.cat2,
  },
  revenue: {
    label: 'Revenue ($)',
    color: chartColors.dataVisualization.categorical.cat3,
  },
});

export const getSignalConfig = () => ({
  critical: {
    label: 'Critical',
    color: chartColors.dataVisualization.signal.critical,
  },
  high: {
    label: 'High Priority',
    color: chartColors.dataVisualization.signal.high,
  },
  medium: {
    label: 'Medium Priority',
    color: chartColors.dataVisualization.signal.medium,
  },
  low: {
    label: 'Low Priority',
    color: chartColors.dataVisualization.signal.low,
  },
  positive: {
    label: 'Positive',
    color: chartColors.dataVisualization.signal.positive,
  },
});

export const getRadarConfig = () => ({
  A: {
    label: 'Current Plan',
    color: chartColors.dataVisualization.categorical.cat1,
  },
  B: {
    label: 'Competitor',
    color: chartColors.dataVisualization.categorical.cat2,
  },
});