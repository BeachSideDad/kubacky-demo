'use client';

import { useState } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { X, Shield, FileText, Phone, AlertTriangle } from 'lucide-react';

interface HipaaNoticeProps {
  onClose?: () => void;
  variant?: 'banner' | 'modal' | 'inline';
  showCloseButton?: boolean;
}

export default function HipaaNotice({ 
  onClose, 
  variant = 'banner', 
  showCloseButton = true 
}: HipaaNoticeProps) {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          bg: 'bg-mystical-primary-50',
          text: 'text-mystical-primary-900',
          accent: 'text-mystical-secondary-600',
          border: 'border-mystical-primary-200',
          button: 'bg-mystical-primary-100 hover:bg-mystical-primary-200 text-mystical-primary-800',
          link: 'text-mystical-secondary-600 hover:text-mystical-secondary-500'
        };
      case 'calming':
        return {
          bg: 'bg-calming-primary-50',
          text: 'text-calming-primary-900',
          accent: 'text-calming-secondary-600',
          border: 'border-calming-primary-200',
          button: 'bg-calming-primary-100 hover:bg-calming-primary-200 text-calming-primary-800',
          link: 'text-calming-secondary-600 hover:text-calming-secondary-500'
        };
      case 'earthy':
        return {
          bg: 'bg-earthy-primary-50',
          text: 'text-earthy-primary-900',
          accent: 'text-earthy-secondary-600',
          border: 'border-earthy-primary-200',
          button: 'bg-earthy-primary-100 hover:bg-earthy-primary-200 text-earthy-primary-800',
          link: 'text-earthy-secondary-600 hover:text-earthy-secondary-500'
        };
      default:
        return {
          bg: 'bg-blue-50',
          text: 'text-blue-900',
          accent: 'text-blue-600',
          border: 'border-blue-200',
          button: 'bg-blue-100 hover:bg-blue-200 text-blue-800',
          link: 'text-blue-600 hover:text-blue-500'
        };
    }
  };

  const styles = getThemeClasses();

  const getContainerClasses = () => {
    const baseClasses = `${styles.bg} ${styles.text} border-2 ${styles.border} rounded-lg`;
    
    switch(variant) {
      case 'modal':
        return `${baseClasses} max-w-2xl mx-auto shadow-xl`;
      case 'inline':
        return `${baseClasses} w-full`;
      case 'banner':
      default:
        return `${baseClasses} w-full shadow-lg`;
    }
  };

  return (
    <div className={getContainerClasses()}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <Shield className={`w-6 h-6 ${styles.accent} mr-3 flex-shrink-0`} />
            <div>
              <h3 className="text-lg font-semibold">HIPAA Protected Health Information Notice</h3>
              <p className={`text-sm ${styles.accent} mt-1`}>
                Clinical Psychology Services Only
              </p>
            </div>
          </div>
          
          {showCloseButton && onClose && (
            <button
              onClick={onClose}
              className={`p-2 ${styles.button} rounded-full transition-colors flex-shrink-0`}
              aria-label="Close HIPAA notice"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className={`text-sm ${styles.text}`}>
            <strong>For Clinical Psychology Services:</strong> Your health information is protected under the 
            Health Insurance Portability and Accountability Act (HIPAA). Dr. Gretchen Kubacky is a HIPAA-covered entity.
          </p>

          {/* Key Points */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start">
                <FileText className={`w-4 h-4 ${styles.accent} mr-2 flex-shrink-0 mt-0.5`} />
                <div className="text-sm">
                  <strong>Your Rights:</strong> Access, amend, restrict, and request confidential communications
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className={`w-4 h-4 ${styles.accent} mr-2 flex-shrink-0 mt-0.5`} />
                <div className="text-sm">
                  <strong>Information Security:</strong> Encrypted storage, secure transmission, access controls
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <AlertTriangle className={`w-4 h-4 ${styles.accent} mr-2 flex-shrink-0 mt-0.5`} />
                <div className="text-sm">
                  <strong>Limited Disclosures:</strong> Only with authorization or as required by law
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className={`w-4 h-4 ${styles.accent} mr-2 flex-shrink-0 mt-0.5`} />
                <div className="text-sm">
                  <strong>Complaints:</strong> HHS Office for Civil Rights or California Board of Psychology
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Section */}
          <div className="border-t border-gray-200 pt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`text-sm ${styles.link} hover:underline flex items-center`}
            >
              {isExpanded ? 'Hide' : 'View'} Complete HIPAA Information
              <span className="ml-1">{isExpanded ? '−' : '+'}</span>
            </button>

            {isExpanded && (
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Uses and Disclosures of Your Health Information</h4>
                  <ul className="space-y-1 ml-4 list-disc">
                    <li><strong>Treatment:</strong> Providing, coordinating, or managing your care</li>
                    <li><strong>Payment:</strong> Insurance billing and payment processing</li>
                    <li><strong>Operations:</strong> Quality assurance, training, and administrative activities</li>
                    <li><strong>Required by Law:</strong> Mandated reporting, court orders, public health</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Your Individual Rights Under HIPAA</h4>
                  <ul className="space-y-1 ml-4 list-disc">
                    <li><strong>Right of Access:</strong> Inspect and obtain copies of your health records</li>
                    <li><strong>Right to Amend:</strong> Request corrections to your health information</li>
                    <li><strong>Right to Restrict:</strong> Request limitations on use or disclosure</li>
                    <li><strong>Right to Alternative Communications:</strong> Request confidential communications</li>
                    <li><strong>Right to an Accounting:</strong> List of disclosures made</li>
                    <li><strong>Right to File a Complaint:</strong> With HHS OCR or licensing board</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <div className="space-y-2">
                    <p>
                      <strong>Privacy Officer:</strong> Dr. Gretchen Kubacky<br />
                      Email: privacy@gretchenkubacky.com<br />
                      Phone: (555) 123-4567
                    </p>
                    <p>
                      <strong>HHS Office for Civil Rights:</strong><br />
                      Website: www.hhs.gov/hipaa/filing-a-complaint/<br />
                      Phone: 1-800-368-1019
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> This notice applies only to clinical psychology services. 
                    Transpersonal wellness services operate under separate privacy practices and are 
                    not subject to HIPAA regulations.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
            <a 
              href="/privacy" 
              className={`text-sm ${styles.link} hover:underline`}
            >
              Complete Privacy Policy
            </a>
            <a 
              href="/disclaimer" 
              className={`text-sm ${styles.link} hover:underline`}
            >
              Professional Disclaimer
            </a>
            <button 
              onClick={() => setIsExpanded(true)}
              className={`text-sm ${styles.button} px-3 py-1 rounded transition-colors`}
            >
              Request HIPAA Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Utility component for quick HIPAA badge/indicator
export function HipaaBadge({ className = '' }: { className?: string }) {
  const { theme } = useTheme();
  
  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return 'bg-mystical-primary-100 text-mystical-primary-800 border-mystical-primary-200';
      case 'calming':
        return 'bg-calming-primary-100 text-calming-primary-800 border-calming-primary-200';
      case 'earthy':
        return 'bg-earthy-primary-100 text-earthy-primary-800 border-earthy-primary-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const styles = getThemeClasses();

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${styles} ${className}`}>
      <Shield className="w-3 h-3 mr-1" />
      HIPAA Protected
    </span>
  );
}

// Hook for managing HIPAA notice state
export function useHipaaNotice() {
  const [showNotice, setShowNotice] = useState(false);
  const [hasAcknowledged, setHasAcknowledged] = useState(false);

  const showHipaaNotice = () => setShowNotice(true);
  const hideHipaaNotice = () => setShowNotice(false);
  const acknowledgeHipaa = () => {
    setHasAcknowledged(true);
    setShowNotice(false);
    // Could store in localStorage for persistence
    localStorage.setItem('hipaa_acknowledged', 'true');
  };

  // Check if user has previously acknowledged
  const checkAcknowledgment = () => {
    const acknowledged = localStorage.getItem('hipaa_acknowledged');
    setHasAcknowledged(acknowledged === 'true');
  };

  return {
    showNotice,
    hasAcknowledged,
    showHipaaNotice,
    hideHipaaNotice,
    acknowledgeHipaa,
    checkAcknowledgment
  };
}