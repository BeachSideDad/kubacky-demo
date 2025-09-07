'use client';

import { useEffect } from 'react';
import { Metric } from 'web-vitals';

// Web Vitals monitoring component for performance tracking
export default function WebVitals() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        const sendToAnalytics = (metric: Metric) => {
          // Send to analytics service (Google Analytics, PostHog, etc.)
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', metric.name, {
              custom_parameter_1: metric.id,
              custom_parameter_2: metric.name,
              custom_parameter_3: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            });
          }
          
          // Log to console in development
          console.log('Web Vital:', metric.name, Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value));
        };

        // Register all vital metrics
        onCLS(sendToAnalytics);
        onINP(sendToAnalytics);
        onFCP(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
      });
    }
  }, []);

  return null; // This component doesn't render anything
}

// Performance monitoring utilities
export const reportWebVitals = (metric: Metric) => {
  const { name, value, id, rating } = metric;
  
  // Log performance metrics
  console.group(`Web Vital: ${name}`);
  console.log(`Value: ${Math.round(name === 'CLS' ? value * 1000 : value)}`);
  console.log(`Rating: ${rating}`);
  console.log(`ID: ${id}`);
  console.groupEnd();
  
  // Send to external analytics if configured
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: id,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        non_interaction: true,
      });
    }
  }
};

// Performance thresholds (Google's recommended values)
export const PERFORMANCE_THRESHOLDS = {
  CLS: { good: 0.1, needsImprovement: 0.25 }, // Cumulative Layout Shift
  INP: { good: 200, needsImprovement: 500 }, // Interaction to Next Paint (ms)
  FCP: { good: 1800, needsImprovement: 3000 }, // First Contentful Paint (ms)
  LCP: { good: 2500, needsImprovement: 4000 }, // Largest Contentful Paint (ms)
  TTFB: { good: 800, needsImprovement: 1800 }, // Time to First Byte (ms)
};

// Utility to check if a metric is within good thresholds
export const isGoodPerformance = (metricName: keyof typeof PERFORMANCE_THRESHOLDS, value: number): boolean => {
  const threshold = PERFORMANCE_THRESHOLDS[metricName];
  return value <= threshold.good;
};