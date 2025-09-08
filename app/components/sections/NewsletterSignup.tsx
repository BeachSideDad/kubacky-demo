'use client';

import { useState } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { useFormValidation, validationRules } from '@/app/hooks/useFormValidation';
import { useLoadingState } from '@/app/hooks/useLoadingState';
import FormField from '@/app/components/ui/FormField';
import LoadingSpinner from '@/app/components/ui/LoadingSpinner';

export default function NewsletterSignup() {
  const { theme } = useTheme();
  const [interests, setInterests] = useState<string[]>([]);
  const { state: submissionState, setSuccess, setError, withLoading } = useLoadingState();

  const initialFormData = {
    email: ''
  };

  const validationRulesConfig = {
    email: [
      validationRules.required('Please enter your email address'),
      validationRules.email()
    ]
  };

  const {
    getFieldProps,
    getFieldError,
    handleSubmit,
    reset,
    isSubmitting
  } = useFormValidation(initialFormData, validationRulesConfig);

  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          bg: 'bg-gradient-to-br from-mystical-primary-600 to-mystical-secondary-600',
          card: 'bg-mystical-neutral-50/95 backdrop-blur-sm',
          heading: 'text-mystical-neutral-900',
          text: 'text-mystical-neutral-700',
          input: 'border-mystical-primary-200 focus:border-mystical-primary-500 focus:ring-mystical-primary-500',
          button: 'bg-mystical-primary-600 hover:bg-mystical-primary-700 text-white',
          checkbox: 'text-mystical-primary-600 focus:ring-mystical-primary-500',
          accent: 'text-mystical-primary-600',
        };
      case 'calming':
        return {
          bg: 'bg-gradient-to-br from-calming-primary-600 to-calming-secondary-600',
          card: 'bg-calming-neutral-50/95 backdrop-blur-sm',
          heading: 'text-calming-neutral-900',
          text: 'text-calming-neutral-700',
          input: 'border-calming-primary-200 focus:border-calming-primary-500 focus:ring-calming-primary-500',
          button: 'bg-calming-primary-600 hover:bg-calming-primary-700 text-white',
          checkbox: 'text-calming-primary-600 focus:ring-calming-primary-500',
          accent: 'text-calming-primary-600',
        };
      case 'earthy':
        return {
          bg: 'bg-gradient-to-br from-earthy-primary-600 to-earthy-secondary-600',
          card: 'bg-earthy-neutral-50/95 backdrop-blur-sm',
          heading: 'text-earthy-neutral-900',
          text: 'text-earthy-neutral-700',
          input: 'border-earthy-primary-200 focus:border-earthy-primary-500 focus:ring-earthy-primary-500',
          button: 'bg-earthy-primary-600 hover:bg-earthy-primary-700 text-white',
          checkbox: 'text-earthy-primary-600 focus:ring-earthy-primary-500',
          accent: 'text-earthy-primary-600',
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-blue-600 to-purple-600',
          card: 'bg-gray-50/95 backdrop-blur-sm',
          heading: 'text-gray-900',
          text: 'text-gray-700',
          input: 'border-blue-200 focus:border-blue-500 focus:ring-blue-500',
          button: 'bg-blue-600 hover:bg-blue-700 text-white',
          checkbox: 'text-blue-600 focus:ring-blue-500',
          accent: 'text-blue-600',
        };
    }
  };

  const styles = getThemeClasses();

  const interestOptions = [
    { id: 'clinical', label: 'Clinical Psychology & Research' },
    { id: 'pcos', label: 'PCOS & Mental Health' },
    { id: 'energy', label: 'Energy Healing & Reiki' },
    { id: 'transpersonal', label: 'Transpersonal Psychology' },
    { id: 'community', label: 'Community Healing Events' },
    { id: 'professional', label: 'Professional Development' },
  ];

  const handleInterestChange = (interestId: string) => {
    setInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const onFormSubmit = async (formData: { [key: string]: string }) => {
    try {
      // Simulate API call
      await withLoading(new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          // Simulate occasional errors for demo
          if (Math.random() < 0.05) {
            reject(new Error('Failed to subscribe. Please try again.'));
          } else {
            console.log('Newsletter signup:', { 
              email: formData.email, 
              interests 
            });
            resolve();
          }
        }, 1500);
      }));

      setSuccess('Successfully subscribed!');
      setInterests([]);
      
      // Reset form and success state after delay
      setTimeout(() => {
        reset();
        setSuccess();
      }, 3000);
      
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to subscribe');
    }
  };

  if (submissionState === 'success') {
    return (
      <section className={`py-16 ${styles.bg}`} id="newsletter">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className={`${styles.card} p-8 rounded-lg shadow-lg text-center`}>
              <div className="text-4xl mb-4">✨</div>
              <h3 className={`${styles.heading} text-xl font-semibold mb-2`}>
                Welcome to the Journey!
              </h3>
              <p className={`${styles.text}`}>
                Check your inbox for a welcome message. The real conversations start now.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 ${styles.bg}`} id="newsletter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className={`${styles.card} p-8 rounded-lg shadow-lg`}>
            <div className="text-center mb-8">
              <h2 className={`text-2xl sm:text-3xl font-serif ${styles.heading} mb-4`}>
                The Irreverent Newsletter
              </h2>
              <p className={`${styles.text} text-lg`}>
                Where psychology meets mysticism, and we don&apos;t pretend they&apos;re the same thing.
              </p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onFormSubmit);
            }} className="space-y-6">
              {/* Email Input */}
              <FormField
                id="email"
                label="Email Address"
                type="email"
                required
                placeholder="your.email@example.com"
                {...getFieldProps('email')}
                error={getFieldError('email')}
              />

              {/* Interest Selection */}
              <div>
                <fieldset>
                  <legend className={`text-sm font-medium ${styles.text} mb-3`}>
                    What interests you most? (Select all that apply)
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {interestOptions.map((option) => (
                      <label key={option.id} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={interests.includes(option.id)}
                          onChange={() => handleInterestChange(option.id)}
                          className={`rounded border-gray-300 ${styles.checkbox} focus:ring-2`}
                        />
                        <span className={`ml-2 text-sm ${styles.text}`}>
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* What to Expect */}
              <div className={`bg-gray-50 rounded-lg p-4 border-l-4 border-current ${styles.accent}`}>
                <h4 className={`font-semibold ${styles.heading} mb-2 text-sm`}>
                  What to expect:
                </h4>
                <ul className={`${styles.text} text-sm space-y-1`}>
                  <li>• Weekly insights on psychology & spirituality</li>
                  <li>• Behind-the-scenes research and case studies</li>
                  <li>• Honest takes on the wellness industry</li>
                  <li>• Early access to community healing events</li>
                  <li>• No spiritual bypassing, no clinical jargon</li>
                </ul>
              </div>

              {/* Error Display */}
              {submissionState === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4" role="alert">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        Subscription failed
                      </h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>Please check your email and try again.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submissionState === 'loading'}
                className={`w-full ${styles.button} py-3 px-6 rounded-md font-medium transition-all duration-200 
                  ${isSubmitting || submissionState === 'loading' 
                    ? 'opacity-50 cursor-not-allowed transform-none' 
                    : 'transform hover:scale-105'
                  }`}
              >
                {isSubmitting || submissionState === 'loading' ? (
                  <div className="flex items-center justify-center">
                    <LoadingSpinner size="sm" />
                    <span className="ml-2">Subscribing...</span>
                  </div>
                ) : (
                  'Join the Conversation'
                )}
              </button>

              {/* Privacy Note */}
              <p className={`text-xs ${styles.text} text-center`}>
                Your email is safe with me. No spam, no selling your data. 
                Unsubscribe anytime with one click.
              </p>
            </form>
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-center">
            <p className="text-white/80 text-sm">
              Join 2,400+ readers exploring the intersection of mind, spirit, and healing
            </p>
            <div className="flex justify-center items-center mt-2 space-x-4 text-white/60 text-xs">
              <span>✓ Therapists</span>
              <span>✓ Researchers</span>
              <span>✓ Energy Workers</span>
              <span>✓ Curious Humans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}