import { semanticTokens } from '../tokens/colors-consolidated';

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
  { name: 'Internet Pro', value: 400, fill: semanticTokens.dataVisualization.categorical.cat1 },
  { name: 'Voice Services', value: 300, fill: semanticTokens.dataVisualization.categorical.cat2 },
  { name: 'Security Suite', value: 300, fill: semanticTokens.dataVisualization.categorical.cat3 },
  { name: 'WiFi Pro', value: 200, fill: semanticTokens.dataVisualization.categorical.cat4 },
  { name: 'Cloud Backup', value: 150, fill: semanticTokens.dataVisualization.categorical.cat5 },
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
  { name: 'Critical Issues', value: 12, priority: 'critical' },
  { name: 'High Priority', value: 28, priority: 'high' },
  { name: 'Medium Priority', value: 45, priority: 'medium' },
  { name: 'Low Priority', value: 67, priority: 'low' },
  { name: 'Resolved', value: 89, priority: 'positive' },
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
    color: semanticTokens.dataVisualization.categorical.cat1,
  },
  users: {
    label: 'Active Users',
    color: semanticTokens.dataVisualization.categorical.cat2,
  },
  revenue: {
    label: 'Revenue ($)',
    color: semanticTokens.dataVisualization.categorical.cat3,
  },
});

export const getSignalConfig = () => ({
  critical: {
    label: 'Critical',
    color: semanticTokens.dataVisualization.signal.critical,
  },
  high: {
    label: 'High Priority',
    color: semanticTokens.dataVisualization.signal.high,
  },
  medium: {
    label: 'Medium Priority',
    color: semanticTokens.dataVisualization.signal.medium,
  },
  low: {
    label: 'Low Priority',
    color: semanticTokens.dataVisualization.signal.low,
  },
  positive: {
    label: 'Positive',
    color: semanticTokens.dataVisualization.signal.positive,
  },
});

export const getRadarConfig = () => ({
  A: {
    label: 'Current Plan',
    color: semanticTokens.dataVisualization.categorical.cat1,
  },
  B: {
    label: 'Competitor',
    color: semanticTokens.dataVisualization.categorical.cat2,
  },
});