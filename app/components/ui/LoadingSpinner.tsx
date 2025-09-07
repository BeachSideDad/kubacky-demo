'use client';

import React from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  className = '', 
  text 
}: LoadingSpinnerProps) {
  const { theme } = useTheme();

  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          spinner: 'text-mystical-primary-600',
          text: 'text-mystical-neutral-600'
        };
      case 'calming':
        return {
          spinner: 'text-calming-primary-600',
          text: 'text-calming-neutral-600'
        };
      case 'earthy':
        return {
          spinner: 'text-earthy-primary-600',
          text: 'text-earthy-neutral-600'
        };
      default:
        return {
          spinner: 'text-blue-600',
          text: 'text-gray-600'
        };
    }
  };

  const styles = getThemeClasses();

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <svg
        className={`animate-spin ${sizeClasses[size]} ${styles.spinner}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        role="status"
        aria-label="Loading"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {text && (
        <span className={`${textSizeClasses[size]} ${styles.text}`}>
          {text}
        </span>
      )}
    </div>
  );
}