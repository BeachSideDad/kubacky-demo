'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to your error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Call the optional onError prop
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI or default error UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <div className="mb-6">
              <svg
                className="mx-auto h-12 w-12 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 19c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Something went wrong
            </h2>
            
            <p className="text-gray-600 mb-6">
              We&apos;re sorry, but something unexpected happened. The page has encountered an error and can&apos;t be displayed properly.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left mb-6 bg-gray-50 rounded p-4">
                <summary className="cursor-pointer font-medium text-gray-700 mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-sm text-red-600 overflow-auto">
                  {this.state.error.message}
                  {'\n'}
                  {this.state.error.stack}
                </pre>
              </details>
            )}

            <div className="space-y-3">
              <button
                onClick={this.handleReset}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
              
              <Link
                href="/"
                className="block w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook version for use with functional components
export function useErrorBoundary() {
  const [error, setError] = React.useState<Error | null>(null);

  const resetError = React.useCallback(() => {
    setError(null);
  }, []);

  const captureError = React.useCallback((error: Error) => {
    setError(error);
  }, []);

  React.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return { captureError, resetError };
}

// Themed Error Boundary wrapper
export function ThemedErrorBoundary({ 
  children, 
  theme 
}: { 
  children: ReactNode; 
  theme?: 'mystical' | 'calming' | 'earthy' | 'default';
}) {
  const getThemeStyles = () => {
    switch(theme) {
      case 'mystical':
        return {
          bg: 'bg-mystical-neutral-50',
          container: 'bg-white border-mystical-primary-200',
          heading: 'text-mystical-neutral-900',
          text: 'text-mystical-neutral-600',
          button: 'bg-mystical-primary-600 hover:bg-mystical-primary-700',
          secondaryButton: 'bg-mystical-primary-50 text-mystical-primary-700 hover:bg-mystical-primary-100'
        };
      case 'calming':
        return {
          bg: 'bg-calming-neutral-50',
          container: 'bg-white border-calming-primary-200',
          heading: 'text-calming-neutral-900',
          text: 'text-calming-neutral-600',
          button: 'bg-calming-primary-600 hover:bg-calming-primary-700',
          secondaryButton: 'bg-calming-primary-50 text-calming-primary-700 hover:bg-calming-primary-100'
        };
      case 'earthy':
        return {
          bg: 'bg-earthy-neutral-50',
          container: 'bg-white border-earthy-primary-200',
          heading: 'text-earthy-neutral-900',
          text: 'text-earthy-neutral-600',
          button: 'bg-earthy-primary-600 hover:bg-earthy-primary-700',
          secondaryButton: 'bg-earthy-primary-50 text-earthy-primary-700 hover:bg-earthy-primary-100'
        };
      default:
        return {
          bg: 'bg-gray-50',
          container: 'bg-white border-gray-200',
          heading: 'text-gray-900',
          text: 'text-gray-600',
          button: 'bg-blue-600 hover:bg-blue-700',
          secondaryButton: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        };
    }
  };

  const styles = getThemeStyles();

  const customFallback = (
    <div className={`min-h-screen ${styles.bg} flex items-center justify-center p-4`}>
      <div className={`max-w-md w-full ${styles.container} rounded-lg shadow-sm border p-8 text-center`}>
        <div className="mb-6">
          <svg
            className="mx-auto h-12 w-12 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 19c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        
        <h2 className={`text-xl font-semibold ${styles.heading} mb-2`}>
          Something went wrong
        </h2>
        
        <p className={`${styles.text} mb-6`}>
          We&apos;re sorry, but something unexpected happened. Please try refreshing the page or contact us if the problem persists.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => window.location.reload()}
            className={`w-full ${styles.button} text-white px-4 py-2 rounded-md font-medium transition-colors`}
          >
            Refresh Page
          </button>
          
          <Link
            href="/"
            className={`block w-full ${styles.secondaryButton} px-4 py-2 rounded-md font-medium transition-colors`}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <ErrorBoundary fallback={customFallback}>
      {children}
    </ErrorBoundary>
  );
}