export interface AIInsights {
  sentimentAnalysis: {
    currentScore: number;
    trend: 'improving' | 'declining' | 'stable';
    recommendations: string[];
    alertLevel: 'low' | 'medium' | 'high' | 'critical';
  };
  predictiveAnalytics: {
    callVolumeForcast: number[];
    peakHours: string[];
    staffingRecommendations: string[];
    costOptimizations: string[];
  };
  businessIntelligence: {
    customerSatisfactionTrend: number[];
    revenueImpact: number;
    operationalEfficiency: number;
    growthOpportunities: string[];
  };
  automationSuggestions: {
    callRouting: string[];
    workflowOptimizations: string[];
    integrationOpportunities: string[];
  };
}