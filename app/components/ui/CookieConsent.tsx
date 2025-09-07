'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { Cookie, Settings, X, Check, ExternalLink, Shield } from 'lucide-react';

interface CookieConsentProps {
  onAcceptAll?: () => void;
  onRejectAll?: () => void;
  onSavePreferences?: (preferences: CookiePreferences) => void;
}

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
  marketing: boolean;
}

export default function CookieConsent({ 
  onAcceptAll, 
  onRejectAll, 
  onSavePreferences 
}: CookieConsentProps) {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    preferences: false,
    marketing: false
  });

  // Check if consent has been given
  useEffect(() => {
    const consentStatus = localStorage.getItem('cookie_consent_status');
    const consentTimestamp = localStorage.getItem('cookie_consent_timestamp');
    
    // Show banner if no consent or consent is older than 365 days
    if (!consentStatus || !consentTimestamp) {
      setIsVisible(true);
    } else {
      const consentDate = new Date(consentTimestamp);
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      
      if (consentDate < oneYearAgo) {
        setIsVisible(true);
      }
    }

    // Load existing preferences
    const savedPreferences = localStorage.getItem('cookie_preferences');
    if (savedPreferences) {
      try {
        setPreferences(JSON.parse(savedPreferences));
      } catch (error) {
        console.error('Error parsing saved cookie preferences:', error);
      }
    }
  }, []);

  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          bg: 'bg-mystical-neutral-900',
          text: 'text-mystical-neutral-100',
          accent: 'text-mystical-secondary-400',
          border: 'border-mystical-neutral-700',
          button: {
            primary: 'bg-mystical-primary-600 hover:bg-mystical-primary-700 text-white',
            secondary: 'bg-mystical-neutral-700 hover:bg-mystical-neutral-600 text-mystical-neutral-100 border border-mystical-neutral-600',
            outline: 'border border-mystical-primary-500 text-mystical-primary-400 hover:bg-mystical-primary-500 hover:text-white'
          },
          card: 'bg-mystical-neutral-800 border-mystical-neutral-700'
        };
      case 'calming':
        return {
          bg: 'bg-calming-neutral-900',
          text: 'text-calming-neutral-100',
          accent: 'text-calming-secondary-400',
          border: 'border-calming-neutral-700',
          button: {
            primary: 'bg-calming-primary-600 hover:bg-calming-primary-700 text-white',
            secondary: 'bg-calming-neutral-700 hover:bg-calming-neutral-600 text-calming-neutral-100 border border-calming-neutral-600',
            outline: 'border border-calming-primary-500 text-calming-primary-400 hover:bg-calming-primary-500 hover:text-white'
          },
          card: 'bg-calming-neutral-800 border-calming-neutral-700'
        };
      case 'earthy':
        return {
          bg: 'bg-earthy-neutral-900',
          text: 'text-earthy-neutral-100',
          accent: 'text-earthy-secondary-400',
          border: 'border-earthy-neutral-700',
          button: {
            primary: 'bg-earthy-primary-600 hover:bg-earthy-primary-700 text-white',
            secondary: 'bg-earthy-neutral-700 hover:bg-earthy-neutral-600 text-earthy-neutral-100 border border-earthy-neutral-600',
            outline: 'border border-earthy-primary-500 text-earthy-primary-400 hover:bg-earthy-primary-500 hover:text-white'
          },
          card: 'bg-earthy-neutral-800 border-earthy-neutral-700'
        };
      default:
        return {
          bg: 'bg-gray-900',
          text: 'text-gray-100',
          accent: 'text-blue-400',
          border: 'border-gray-700',
          button: {
            primary: 'bg-blue-600 hover:bg-blue-700 text-white',
            secondary: 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600',
            outline: 'border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
          },
          card: 'bg-gray-800 border-gray-700'
        };
    }
  };

  const styles = getThemeClasses();

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      preferences: true,
      marketing: true
    };
    
    saveConsent('accepted', allAccepted);
    onAcceptAll?.();
  };

  const handleRejectAll = () => {
    const minimal = {
      necessary: true,
      analytics: false,
      preferences: false,
      marketing: false
    };
    
    saveConsent('rejected', minimal);
    onRejectAll?.();
  };

  const handleSavePreferences = () => {
    saveConsent('custom', preferences);
    onSavePreferences?.(preferences);
  };

  const saveConsent = (status: string, prefs: CookiePreferences) => {
    localStorage.setItem('cookie_consent_status', status);
    localStorage.setItem('cookie_consent_timestamp', new Date().toISOString());
    localStorage.setItem('cookie_preferences', JSON.stringify(prefs));
    setIsVisible(false);
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl">
      <div className={`${styles.bg} ${styles.text} border-t-2 ${styles.border}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
          {!showDetails ? (
            // Simple banner view
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-start">
                <Cookie className={`w-6 h-6 ${styles.accent} mr-3 flex-shrink-0 mt-1`} />
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg mb-2">We Use Cookies</h3>
                  <p className="text-sm mb-3">
                    This website uses cookies to enhance your experience, provide analytics, and support our services. 
                    Clinical services maintain separate HIPAA-compliant privacy protections.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <a href="/privacy" className={`${styles.accent} hover:underline flex items-center`}>
                      Privacy Policy <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                    <a href="/terms" className={`${styles.accent} hover:underline flex items-center`}>
                      Terms of Service <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowDetails(true)}
                  className={`px-4 py-2 text-sm ${styles.button.outline} rounded-lg transition-colors flex items-center`}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Customize
                </button>
                <button
                  onClick={handleRejectAll}
                  className={`px-4 py-2 text-sm ${styles.button.secondary} rounded-lg transition-colors`}
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className={`px-6 py-2 text-sm ${styles.button.primary} rounded-lg transition-colors font-medium`}
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Detailed preferences view
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Cookie className={`w-6 h-6 ${styles.accent} mr-3`} />
                  <h3 className="font-semibold text-lg">Cookie Preferences</h3>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className={`p-2 ${styles.button.secondary} rounded-full transition-colors`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid gap-4">
                {/* Necessary Cookies */}
                <div className={`${styles.card} border rounded-lg p-4`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Shield className={`w-5 h-5 ${styles.accent} mr-2`} />
                      <h4 className="font-medium">Necessary Cookies</h4>
                      <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Required</span>
                    </div>
                    <div className="w-10 h-6 bg-green-500 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                  <p className="text-sm opacity-90">
                    Essential for website functionality, security, and basic services. These cannot be disabled.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className={`${styles.card} border rounded-lg p-4`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className={`w-5 h-5 ${styles.accent} mr-2`}>📊</div>
                      <h4 className="font-medium">Analytics Cookies</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => updatePreference('analytics', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-10 h-6 rounded-full transition-colors ${preferences.analytics ? 'bg-green-500' : 'bg-gray-400'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${preferences.analytics ? 'translate-x-4' : 'translate-x-1'}`}></div>
                      </div>
                    </label>
                  </div>
                  <p className="text-sm opacity-90">
                    Help us understand website usage through Google Analytics (anonymized data). Used to improve user experience.
                  </p>
                </div>

                {/* Preference Cookies */}
                <div className={`${styles.card} border rounded-lg p-4`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className={`w-5 h-5 ${styles.accent} mr-2`}>⚙️</div>
                      <h4 className="font-medium">Preference Cookies</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.preferences}
                        onChange={(e) => updatePreference('preferences', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-10 h-6 rounded-full transition-colors ${preferences.preferences ? 'bg-green-500' : 'bg-gray-400'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${preferences.preferences ? 'translate-x-4' : 'translate-x-1'}`}></div>
                      </div>
                    </label>
                  </div>
                  <p className="text-sm opacity-90">
                    Remember your preferences like theme selection and language settings for a better experience.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className={`${styles.card} border rounded-lg p-4`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className={`w-5 h-5 ${styles.accent} mr-2`}>📧</div>
                      <h4 className="font-medium">Marketing Cookies</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => updatePreference('marketing', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-10 h-6 rounded-full transition-colors ${preferences.marketing ? 'bg-green-500' : 'bg-gray-400'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${preferences.marketing ? 'translate-x-4' : 'translate-x-1'}`}></div>
                      </div>
                    </label>
                  </div>
                  <p className="text-sm opacity-90">
                    Track newsletter signup sources and measure effectiveness of educational content and wellness programs.
                  </p>
                </div>
              </div>

              {/* HIPAA Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div className="text-blue-800">
                    <p className="font-medium text-sm mb-1">HIPAA Protected Information</p>
                    <p className="text-xs">
                      Clinical psychology services maintain separate, HIPAA-compliant privacy protections. 
                      Cookie preferences do not affect the privacy of your clinical health information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-600">
                <button
                  onClick={handleSavePreferences}
                  className={`px-6 py-2 text-sm ${styles.button.primary} rounded-lg transition-colors font-medium flex items-center`}
                >
                  <Check className="w-4 h-4 mr-2" />
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className={`px-4 py-2 text-sm ${styles.button.outline} rounded-lg transition-colors`}
                >
                  Accept All
                </button>
                <button
                  onClick={handleRejectAll}
                  className={`px-4 py-2 text-sm ${styles.button.secondary} rounded-lg transition-colors`}
                >
                  Reject All
                </button>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap gap-4 text-xs pt-2 border-t border-gray-600">
                <a href="/privacy" className={`${styles.accent} hover:underline flex items-center`}>
                  Privacy Policy <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <a href="/terms" className={`${styles.accent} hover:underline flex items-center`}>
                  Terms of Service <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <a href="/disclaimer" className={`${styles.accent} hover:underline flex items-center`}>
                  Professional Disclaimer <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Hook for managing cookie consent
export function useCookieConsent() {
  const [consentStatus, setConsentStatus] = useState<string | null>(null);
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    const status = localStorage.getItem('cookie_consent_status');
    const prefs = localStorage.getItem('cookie_preferences');
    
    setConsentStatus(status);
    
    if (prefs) {
      try {
        setPreferences(JSON.parse(prefs));
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    }
  }, []);

  const resetConsent = () => {
    localStorage.removeItem('cookie_consent_status');
    localStorage.removeItem('cookie_consent_timestamp');
    localStorage.removeItem('cookie_preferences');
    setConsentStatus(null);
    setPreferences(null);
  };

  const hasConsented = (category: keyof CookiePreferences) => {
    return preferences?.[category] === true;
  };

  return {
    consentStatus,
    preferences,
    hasConsented,
    resetConsent
  };
}

// Utility component for cookie preference links
export function CookiePreferenceLink({ children, className = '' }: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  const showCookiePreferences = () => {
    // Trigger showing cookie preferences
    localStorage.removeItem('cookie_consent_status');
    window.location.reload();
  };

  return (
    <button
      onClick={showCookiePreferences}
      className={`text-sm underline hover:no-underline ${className}`}
    >
      {children}
    </button>
  );
}