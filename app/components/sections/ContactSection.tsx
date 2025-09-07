'use client';

import { useState } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { useFormValidation, validationRules } from '@/app/hooks/useFormValidation';
import { useLoadingState } from '@/app/hooks/useLoadingState';
import FormField from '@/app/components/ui/FormField';
import LoadingSpinner from '@/app/components/ui/LoadingSpinner';

type ContactType = 'clinical' | 'wellness';

export default function ContactSection() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<ContactType>('clinical');
  const [interests, setInterests] = useState<string[]>([]);
  const { state: submissionState, setSuccess, setError, withLoading } = useLoadingState();
  
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    urgency: 'routine',
    insurance: '',
    referralSource: '',
    previousTherapy: '',
  };

  const validationRulesConfig = {
    name: [validationRules.required('Please enter your full name')],
    email: [
      validationRules.required('Please enter your email address'),
      validationRules.email()
    ],
    phone: [validationRules.phone()],
    message: [
      validationRules.required('Please enter a message'),
      validationRules.minLength(10, 'Please provide more details (at least 10 characters)')
    ],
    urgency: [],
    insurance: [],
    referralSource: [],
    previousTherapy: []
  };

  const {
    getFieldProps,
    getFieldError,
    handleSubmit,
    reset,
    isSubmitting,
    hasErrors
  } = useFormValidation(initialFormData, validationRulesConfig);

  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          bg: 'bg-mystical-neutral-50',
          card: 'bg-white border-mystical-primary-200/30',
          heading: 'text-mystical-neutral-900',
          text: 'text-mystical-neutral-600',
          accent: 'text-mystical-primary-600',
          input: 'border-mystical-primary-200 focus:border-mystical-primary-500 focus:ring-mystical-primary-500',
          button: 'bg-mystical-primary-600 hover:bg-mystical-primary-700',
          tabActive: 'bg-mystical-primary-600 text-white',
          tabInactive: 'bg-mystical-primary-50 text-mystical-primary-700 hover:bg-mystical-primary-100',
          badge: 'bg-mystical-secondary-100 text-mystical-secondary-800',
        };
      case 'calming':
        return {
          bg: 'bg-calming-neutral-50',
          card: 'bg-white border-calming-primary-200/30',
          heading: 'text-calming-neutral-900',
          text: 'text-calming-neutral-600',
          accent: 'text-calming-primary-600',
          input: 'border-calming-primary-200 focus:border-calming-primary-500 focus:ring-calming-primary-500',
          button: 'bg-calming-primary-600 hover:bg-calming-primary-700',
          tabActive: 'bg-calming-primary-600 text-white',
          tabInactive: 'bg-calming-primary-50 text-calming-primary-700 hover:bg-calming-primary-100',
          badge: 'bg-calming-secondary-100 text-calming-secondary-800',
        };
      case 'earthy':
        return {
          bg: 'bg-earthy-neutral-50',
          card: 'bg-white border-earthy-primary-200/30',
          heading: 'text-earthy-neutral-900',
          text: 'text-earthy-neutral-600',
          accent: 'text-earthy-primary-600',
          input: 'border-earthy-primary-200 focus:border-earthy-primary-500 focus:ring-earthy-primary-500',
          button: 'bg-earthy-primary-600 hover:bg-earthy-primary-700',
          tabActive: 'bg-earthy-primary-600 text-white',
          tabInactive: 'bg-earthy-primary-50 text-earthy-primary-700 hover:bg-earthy-primary-100',
          badge: 'bg-earthy-accent/20 text-earthy-secondary-800',
        };
      default:
        return {
          bg: 'bg-gray-50',
          card: 'bg-white border-blue-200/30',
          heading: 'text-gray-900',
          text: 'text-gray-600',
          accent: 'text-blue-600',
          input: 'border-blue-200 focus:border-blue-500 focus:ring-blue-500',
          button: 'bg-blue-600 hover:bg-blue-700',
          tabActive: 'bg-blue-600 text-white',
          tabInactive: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
          badge: 'bg-blue-100 text-blue-800',
        };
    }
  };

  const styles = getThemeClasses();

  const clinicalInterests = [
    'Individual Therapy', 'PCOS Mental Health', 'Anxiety & Depression', 
    'Trauma & PTSD', 'Life Transitions', 'Professional Supervision'
  ];

  const wellnessInterests = [
    'Energy Healing', 'Reiki Sessions', 'Psychic Consultation',
    'Community Healing Salon', 'Spiritual Guidance', 'Chakra Balancing'
  ];

  const handleInterestChange = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const onFormSubmit = async (formData: { [key: string]: string }) => {
    try {
      // Simulate API call
      await withLoading(new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          // Simulate occasional errors for demo
          if (Math.random() < 0.1) {
            reject(new Error('Network error. Please try again.'));
          } else {
            console.log('Contact form submission:', { 
              ...formData, 
              interests, 
              type: activeTab 
            });
            resolve();
          }
        }, 2000);
      }));

      setSuccess('Message sent successfully!');
      setInterests([]);
      
      // Reset form and success state after delay
      setTimeout(() => {
        reset();
        setSuccess();
      }, 3000);
      
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  if (submissionState === 'success') {
    return (
      <section className={`py-16 ${styles.bg}`} id="contact">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className={`${styles.card} border p-8 rounded-lg shadow-lg text-center`}>
              <div className="text-4xl mb-4">{activeTab === 'clinical' ? '🏥' : '✨'}</div>
              <h3 className={`${styles.heading} text-xl font-semibold mb-2`}>
                Message Received
              </h3>
              <p className={`${styles.text}`}>
                {activeTab === 'clinical' 
                  ? "I'll review your inquiry within 24-48 hours. For urgent matters, please contact your emergency resources."
                  : "Thank you for reaching out. I'll get back to you soon with guidance for your spiritual journey."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 ${styles.bg}`} id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-serif ${styles.heading} mb-4`}>
            Get in Touch
          </h2>
          <p className={`${styles.text} text-lg max-w-2xl mx-auto`}>
            Choose the approach that feels right for your needs: evidence-based clinical services 
            or spiritually-integrated wellness practices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex rounded-lg overflow-hidden border border-gray-200">
              <button
                onClick={() => setActiveTab('clinical')}
                className={`px-6 py-3 font-medium transition-all ${
                  activeTab === 'clinical' ? styles.tabActive : styles.tabInactive
                }`}
              >
                Clinical Psychology
              </button>
              <button
                onClick={() => setActiveTab('wellness')}
                className={`px-6 py-3 font-medium transition-all ${
                  activeTab === 'wellness' ? styles.tabActive : styles.tabInactive
                }`}
              >
                Transpersonal Wellness
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Form */}
            <div className={`md:col-span-2 ${styles.card} border p-8 rounded-lg shadow-sm`}>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(onFormSubmit);
              }} className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    id="name"
                    label="Full Name"
                    required
                    {...getFieldProps('name')}
                    error={getFieldError('name')}
                  />
                  <FormField
                    id="email"
                    label="Email Address"
                    type="email"
                    required
                    {...getFieldProps('email')}
                    error={getFieldError('email')}
                  />
                </div>

                <FormField
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  {...getFieldProps('phone')}
                  error={getFieldError('phone')}
                />

                {/* Clinical-specific fields */}
                {activeTab === 'clinical' && (
                  <>
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        id="insurance"
                        label="Insurance Provider"
                        placeholder="e.g., Blue Cross, Aetna, Self-pay"
                        {...getFieldProps('insurance')}
                        error={getFieldError('insurance')}
                      />
                      <FormField
                        id="urgency"
                        label="Urgency Level"
                        type="select"
                        options={[
                          { value: 'routine', label: 'Routine (1-2 weeks)' },
                          { value: 'moderate', label: 'Moderate (within 1 week)' },
                          { value: 'high', label: 'High (within 2-3 days)' }
                        ]}
                        {...getFieldProps('urgency')}
                        error={getFieldError('urgency')}
                      />
                    </div>

                    <FormField
                      id="previousTherapy"
                      label="Previous Therapy Experience"
                      placeholder="Brief description of past therapy, current medications, etc."
                      {...getFieldProps('previousTherapy')}
                      error={getFieldError('previousTherapy')}
                    />
                  </>
                )}

                {/* Wellness-specific fields */}
                {activeTab === 'wellness' && (
                  <FormField
                    id="referralSource"
                    label="How did you find me?"
                    placeholder="e.g., Instagram, friend referral, healing salon, etc."
                    {...getFieldProps('referralSource')}
                    error={getFieldError('referralSource')}
                  />
                )}

                {/* Interests */}
                <div>
                  <fieldset>
                    <legend className={`text-sm font-medium ${styles.text} mb-3`}>
                      Areas of Interest (select all that apply)
                    </legend>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {(activeTab === 'clinical' ? clinicalInterests : wellnessInterests).map((interest) => (
                        <label key={interest} className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                            className={`rounded border-gray-300 ${styles.accent} focus:ring-2`}
                            aria-describedby={`${interest.replace(/\s+/g, '-').toLowerCase()}-description`}
                          />
                          <span className={`ml-2 text-sm ${styles.text}`} id={`${interest.replace(/\s+/g, '-').toLowerCase()}-description`}>
                            {interest}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                {/* Message */}
                <FormField
                  id="message"
                  label="Message"
                  type="textarea"
                  required
                  rows={4}
                  placeholder={activeTab === 'clinical' 
                    ? "Please describe what you're hoping to address in therapy..."
                    : "Share what's calling you toward this healing work..."
                  }
                  {...getFieldProps('message')}
                  error={getFieldError('message')}
                />

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
                          There was a problem sending your message
                        </h3>
                        <div className="mt-2 text-sm text-red-700">
                          <p>Please try again or contact us directly if the problem persists.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || submissionState === 'loading'}
                  className={`w-full ${styles.button} text-white py-3 px-6 rounded-md font-medium transition-all duration-200 
                    ${isSubmitting || submissionState === 'loading' 
                      ? 'opacity-50 cursor-not-allowed transform-none' 
                      : 'hover:transform hover:scale-105'
                    }`}
                >
                  {isSubmitting || submissionState === 'loading' ? (
                    <div className="flex items-center justify-center">
                      <LoadingSpinner size="sm" />
                      <span className="ml-2">Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              <div className={`${styles.card} border p-6 rounded-lg shadow-sm`}>
                <h3 className={`${styles.heading} font-semibold mb-4`}>
                  {activeTab === 'clinical' ? 'Clinical Information' : 'Wellness Information'}
                </h3>
                {activeTab === 'clinical' ? (
                  <div className="space-y-4">
                    <div>
                      <span className={`${styles.badge} px-2 py-1 rounded text-xs font-medium`}>
                        Licensed Services
                      </span>
                      <p className={`${styles.text} text-sm mt-2`}>
                        All clinical services are provided under California Psychology License #12345.
                      </p>
                    </div>
                    <div>
                      <h4 className={`${styles.heading} font-medium mb-2`}>Response Time:</h4>
                      <p className={`${styles.text} text-sm`}>
                        I typically respond to new client inquiries within 24-48 hours.
                      </p>
                    </div>
                    <div>
                      <h4 className={`${styles.heading} font-medium mb-2`}>Insurance:</h4>
                      <p className={`${styles.text} text-sm`}>
                        I can provide superbills for out-of-network reimbursement. Please verify your mental health benefits.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <span className={`${styles.badge} px-2 py-1 rounded text-xs font-medium`}>
                        Holistic Offerings
                      </span>
                      <p className={`${styles.text} text-sm mt-2`}>
                        Wellness services are complementary practices, not medical or psychological treatment.
                      </p>
                    </div>
                    <div>
                      <h4 className={`${styles.heading} font-medium mb-2`}>Sliding Scale:</h4>
                      <p className={`${styles.text} text-sm`}>
                        Many wellness services offer sliding scale pricing to increase accessibility.
                      </p>
                    </div>
                    <div>
                      <h4 className={`${styles.heading} font-medium mb-2`}>Community Events:</h4>
                      <p className={`${styles.text} text-sm`}>
                        Join our monthly healing salon for group energy work and community connection.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className={`${styles.card} border p-6 rounded-lg shadow-sm`}>
                <h3 className={`${styles.heading} font-semibold mb-4`}>Emergency Resources</h3>
                <div className={`${styles.text} text-sm space-y-2`}>
                  <p><strong>Crisis:</strong> 988 (Suicide & Crisis Lifeline)</p>
                  <p><strong>Emergency:</strong> 911</p>
                  <p><strong>Text Crisis:</strong> Text HOME to 741741</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}