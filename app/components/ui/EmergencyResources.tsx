'use client';

import { useState } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { 
  Phone, 
  MessageCircle, 
  AlertTriangle, 
  Heart, 
  Shield, 
  Clock, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  MapPin,
  Users
} from 'lucide-react';

interface EmergencyResourcesProps {
  variant?: 'banner' | 'card' | 'modal' | 'inline';
  showHeader?: boolean;
  className?: string;
}

interface EmergencyResource {
  name: string;
  description: string;
  phone?: string;
  text?: string;
  website?: string;
  availability: string;
  category: 'immediate' | 'crisis' | 'support' | 'specialty';
  icon: React.ReactNode;
}

export default function EmergencyResources({ 
  variant = 'card', 
  showHeader = true,
  className = ''
}: EmergencyResourcesProps) {
  const { theme } = useTheme();
  const [expandedCategory, setExpandedCategory] = useState<string | null>('immediate');
  
  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          bg: 'bg-mystical-neutral-50',
          text: 'text-mystical-neutral-900',
          heading: 'text-mystical-primary-900',
          accent: 'text-mystical-secondary-600',
          card: 'bg-mystical-neutral-100',
          border: 'border-mystical-neutral-200',
          button: 'bg-mystical-primary-600 hover:bg-mystical-primary-700 text-white',
          emergency: 'bg-red-50 border-red-200 text-red-800',
          crisis: 'bg-orange-50 border-orange-200 text-orange-800',
          support: 'bg-blue-50 border-blue-200 text-blue-800',
          specialty: 'bg-green-50 border-green-200 text-green-800'
        };
      case 'calming':
        return {
          bg: 'bg-calming-neutral-50',
          text: 'text-calming-neutral-900',
          heading: 'text-calming-primary-900',
          accent: 'text-calming-secondary-600',
          card: 'bg-calming-neutral-100',
          border: 'border-calming-neutral-200',
          button: 'bg-calming-primary-600 hover:bg-calming-primary-700 text-white',
          emergency: 'bg-red-50 border-red-200 text-red-800',
          crisis: 'bg-orange-50 border-orange-200 text-orange-800',
          support: 'bg-blue-50 border-blue-200 text-blue-800',
          specialty: 'bg-green-50 border-green-200 text-green-800'
        };
      case 'earthy':
        return {
          bg: 'bg-earthy-neutral-50',
          text: 'text-earthy-neutral-900',
          heading: 'text-earthy-primary-900',
          accent: 'text-earthy-secondary-600',
          card: 'bg-earthy-neutral-100',
          border: 'border-earthy-neutral-200',
          button: 'bg-earthy-primary-600 hover:bg-earthy-primary-700 text-white',
          emergency: 'bg-red-50 border-red-200 text-red-800',
          crisis: 'bg-orange-50 border-orange-200 text-orange-800',
          support: 'bg-blue-50 border-blue-200 text-blue-800',
          specialty: 'bg-green-50 border-green-200 text-green-800'
        };
      default:
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-900',
          heading: 'text-gray-900',
          accent: 'text-blue-600',
          card: 'bg-white',
          border: 'border-gray-200',
          button: 'bg-blue-600 hover:bg-blue-700 text-white',
          emergency: 'bg-red-50 border-red-200 text-red-800',
          crisis: 'bg-orange-50 border-orange-200 text-orange-800',
          support: 'bg-blue-50 border-blue-200 text-blue-800',
          specialty: 'bg-green-50 border-green-200 text-green-800'
        };
    }
  };

  const styles = getThemeClasses();

  const emergencyResources: EmergencyResource[] = [
    // Immediate Emergency
    {
      name: '911 Emergency Services',
      description: 'For immediate life-threatening emergencies, severe injury, or imminent danger',
      phone: '911',
      availability: '24/7',
      category: 'immediate',
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      name: 'Emergency Room',
      description: 'Go to nearest hospital emergency room for immediate medical or psychiatric crisis',
      availability: '24/7',
      category: 'immediate',
      icon: <Heart className="w-6 h-6" />
    },
    
    // Crisis Support
    {
      name: '988 Suicide & Crisis Lifeline',
      description: 'Free, confidential support for people in emotional distress or suicidal crisis',
      phone: '988',
      text: 'Text 988',
      website: 'https://988lifeline.org',
      availability: '24/7',
      category: 'crisis',
      icon: <Phone className="w-6 h-6" />
    },
    {
      name: 'Crisis Text Line',
      description: 'Free, 24/7 crisis support via text message with trained crisis counselors',
      text: 'Text HOME to 741741',
      website: 'https://crisistextline.org',
      availability: '24/7',
      category: 'crisis',
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      name: 'California Mental Health Crisis Line',
      description: 'California-specific crisis support and resource referrals',
      phone: '1-800-854-7771',
      availability: '24/7',
      category: 'crisis',
      icon: <MapPin className="w-6 h-6" />
    },
    
    // General Support
    {
      name: 'NAMI California Helpline',
      description: 'National Alliance on Mental Illness support, information, and resources',
      phone: '1-800-950-6264',
      website: 'https://namica.org',
      availability: 'Mon-Fri 10am-10pm ET',
      category: 'support',
      icon: <Users className="w-6 h-6" />
    },
    {
      name: 'SAMHSA National Helpline',
      description: 'Treatment referral and information service for mental health and substance abuse',
      phone: '1-800-662-4357',
      website: 'https://samhsa.gov',
      availability: '24/7',
      category: 'support',
      icon: <Shield className="w-6 h-6" />
    },
    
    // Specialty Resources
    {
      name: 'National Domestic Violence Hotline',
      description: 'Support for domestic violence survivors and safety planning',
      phone: '1-800-799-7233',
      text: 'Text START to 88788',
      website: 'https://thehotline.org',
      availability: '24/7',
      category: 'specialty',
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: 'Trans Lifeline',
      description: 'Peer support for transgender people in crisis, run by transgender people',
      phone: '877-565-8860',
      website: 'https://translifeline.org',
      availability: '24/7',
      category: 'specialty',
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: 'National Sexual Assault Hotline',
      description: 'Confidential support for survivors of sexual violence',
      phone: '1-800-656-4673',
      website: 'https://rainn.org',
      availability: '24/7',
      category: 'specialty',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const categories = [
    {
      key: 'immediate',
      title: '🚨 Immediate Emergency',
      description: 'Life-threatening situations requiring immediate response',
      bgClass: styles.emergency
    },
    {
      key: 'crisis',
      title: '📞 Crisis Support',
      description: 'Mental health crisis intervention and suicide prevention',
      bgClass: styles.crisis
    },
    {
      key: 'support',
      title: '💙 General Support',
      description: 'Mental health information, resources, and non-crisis support',
      bgClass: styles.support
    },
    {
      key: 'specialty',
      title: '🏳️‍⚧️ Specialty Resources',
      description: 'Specialized support for specific populations and situations',
      bgClass: styles.specialty
    }
  ];

  const getContainerClasses = () => {
    const baseClasses = `${className}`;
    
    switch(variant) {
      case 'banner':
        return `${baseClasses} w-full ${styles.bg} border-2 ${styles.border} rounded-lg p-6`;
      case 'modal':
        return `${baseClasses} max-w-4xl mx-auto ${styles.bg} rounded-xl shadow-2xl p-6`;
      case 'inline':
        return `${baseClasses} w-full`;
      case 'card':
      default:
        return `${baseClasses} ${styles.card} border ${styles.border} rounded-lg p-6`;
    }
  };

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategory(expandedCategory === categoryKey ? null : categoryKey);
  };

  const renderResource = (resource: EmergencyResource) => {
    return (
      <div key={resource.name} className="p-4 border border-gray-200 rounded-lg bg-white">
        <div className="flex items-start">
          <div className={`${resource.category === 'immediate' ? 'text-red-600' : 
                          resource.category === 'crisis' ? 'text-orange-600' :
                          resource.category === 'support' ? 'text-blue-600' : 'text-green-600'} 
                          mr-3 flex-shrink-0 mt-1`}>
            {resource.icon}
          </div>
          
          <div className="flex-grow">
            <h4 className={`font-semibold ${styles.heading} mb-2`}>{resource.name}</h4>
            <p className={`text-sm ${styles.text} mb-3`}>{resource.description}</p>
            
            <div className="space-y-2">
              {resource.phone && (
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-green-600" />
                  <a 
                    href={`tel:${resource.phone}`}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    {resource.phone}
                  </a>
                </div>
              )}
              
              {resource.text && (
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-blue-600 font-medium">{resource.text}</span>
                </div>
              )}
              
              {resource.website && (
                <div className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2 text-gray-600" />
                  <a 
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.accent} hover:underline text-sm`}
                  >
                    Visit Website
                  </a>
                </div>
              )}
              
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-600">{resource.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={getContainerClasses()}>
      {showHeader && (
        <div className="mb-6">
          <h2 className={`text-2xl font-serif ${styles.heading} mb-3`}>
            Emergency Resources & Crisis Support
          </h2>
          <p className={`${styles.text} mb-4`}>
            If you're experiencing a mental health crisis or emergency, help is available 24/7. 
            You are not alone, and there are people who want to help.
          </p>
          
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-red-800 mb-2">Immediate Danger</h3>
                <p className="text-red-700 text-sm mb-3">
                  If you are in immediate danger or having thoughts of harming yourself or others, 
                  call 911 or go to your nearest emergency room immediately.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="tel:911"
                    className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call 911
                  </a>
                  <a 
                    href="tel:988"
                    className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call 988
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {categories.map((category) => {
          const categoryResources = emergencyResources.filter(r => r.category === category.key);
          const isExpanded = expandedCategory === category.key;
          
          return (
            <div key={category.key} className={`border-2 rounded-lg ${category.bgClass}`}>
              <button
                onClick={() => toggleCategory(category.key)}
                className="w-full p-4 text-left flex items-center justify-between hover:opacity-80 transition-opacity"
              >
                <div>
                  <h3 className="font-semibold text-lg mb-1">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-3">
                    {categoryResources.length} resources
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              {isExpanded && (
                <div className="px-4 pb-4">
                  <div className="grid gap-3">
                    {categoryResources.map(renderResource)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Professional Disclaimer */}
      <div className={`mt-6 p-4 ${styles.card} border ${styles.border} rounded-lg`}>
        <h4 className={`font-medium ${styles.heading} mb-2 text-sm`}>
          Professional Disclaimer
        </h4>
        <p className={`text-xs ${styles.text} opacity-80`}>
          These resources are provided for informational purposes. Dr. Gretchen Kubacky is not available 
          for 24/7 emergency services. In crisis situations, please use the resources above or contact 
          emergency services directly. This list does not replace professional medical or mental health care.
        </p>
      </div>

      {/* Quick Access Banner for Mobile */}
      {variant === 'banner' && (
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          <a 
            href="tel:988"
            className={`inline-flex items-center px-4 py-3 ${styles.button} text-sm font-medium rounded-lg transition-colors shadow-lg`}
          >
            <Phone className="w-4 h-4 mr-2" />
            988 Crisis Line
          </a>
          <button 
            onClick={() => {
              navigator.clipboard.writeText('Text HOME to 741741');
              alert('Crisis text instructions copied to clipboard');
            }}
            className="inline-flex items-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Crisis Text
          </button>
        </div>
      )}
    </div>
  );
}

// Compact emergency banner for headers/footers
export function EmergencyBanner({ className = '' }: { className?: string }) {
  const { theme } = useTheme();
  
  return (
    <div className={`bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg text-center ${className}`}>
      <p className="text-sm font-medium mb-2">
        🚨 Crisis Support Available 24/7
      </p>
      <div className="flex justify-center gap-4">
        <a 
          href="tel:988"
          className="inline-flex items-center text-red-700 hover:text-red-800 font-semibold"
        >
          <Phone className="w-4 h-4 mr-1" />
          988
        </a>
        <span className="text-red-600">•</span>
        <span className="text-sm">Text HOME to 741741</span>
      </div>
    </div>
  );
}