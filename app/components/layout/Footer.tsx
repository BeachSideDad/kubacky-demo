'use client';

import Link from 'next/link';
import { useTheme } from '@/app/contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  
  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          bg: 'bg-mystical-neutral-900',
          text: 'text-mystical-neutral-300',
          heading: 'text-mystical-secondary-400',
          link: 'hover:text-mystical-secondary-300',
          border: 'border-mystical-neutral-800'
        };
      case 'calming':
        return {
          bg: 'bg-calming-neutral-900',
          text: 'text-calming-neutral-300',
          heading: 'text-calming-secondary-400',
          link: 'hover:text-calming-secondary-300',
          border: 'border-calming-neutral-800'
        };
      case 'earthy':
        return {
          bg: 'bg-earthy-neutral-900',
          text: 'text-earthy-neutral-300',
          heading: 'text-earthy-secondary-400',
          link: 'hover:text-earthy-secondary-300',
          border: 'border-earthy-neutral-800'
        };
      default:
        return {
          bg: 'bg-gray-900',
          text: 'text-gray-300',
          heading: 'text-white',
          link: 'hover:text-white',
          border: 'border-gray-800'
        };
    }
  };

  const styles = getThemeClasses();

  return (
    <footer className={`${styles.bg} ${styles.text}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className={`text-lg font-serif ${styles.heading} mb-4`}>
              Dr. Gretchen Kubacky, Psy.D.
            </h3>
            <p className="text-sm mb-4">
              The Irreverent Transpersonal Psychologist
            </p>
            <p className="text-sm">
              Integrating clinical psychology with transpersonal wisdom for holistic healing and transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-sm font-semibold ${styles.heading} uppercase tracking-wide mb-4`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className={`text-sm ${styles.link} transition-colors`}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#clinical" className={`text-sm ${styles.link} transition-colors`}>
                  Clinical Services
                </Link>
              </li>
              <li>
                <Link href="#wellness" className={`text-sm ${styles.link} transition-colors`}>
                  Transpersonal Wellness
                </Link>
              </li>
              <li>
                <Link href="#salon" className={`text-sm ${styles.link} transition-colors`}>
                  Healing Salon
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className={`text-sm font-semibold ${styles.heading} uppercase tracking-wide mb-4`}>
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className={`text-sm ${styles.link} transition-colors`}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={`text-sm ${styles.link} transition-colors`}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className={`text-sm ${styles.link} transition-colors`}>
                  Professional Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance Section */}
        <div className={`mt-8 pt-8 border-t ${styles.border}`}>
          <div className="text-xs space-y-2">
            <p>
              <strong>California Licensed Psychologist:</strong> PSY #PSY12345
            </p>
            <p>
              <strong>Professional Disclaimer:</strong> Clinical psychology services are provided under California state licensure. 
              Transpersonal wellness services are offered separately as complementary practices and are not medical or psychological treatment.
            </p>
            <p>
              <strong>HIPAA Notice:</strong> Clinical services maintain full HIPAA compliance. 
              Wellness services operate under separate privacy practices.
            </p>
          </div>

          <div className="mt-4 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Dr. Gretchen Kubacky. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}