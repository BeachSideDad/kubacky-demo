'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { useSmoothScroll, handleAnchorClick } from '@/app/hooks/useSmoothScroll';
import { useSkipLinks, useFocusTrap } from '@/app/hooks/useKeyboardNavigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const { scrollToElement } = useSmoothScroll();
  
  // Add skip links for accessibility
  useSkipLinks();

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#clinical', label: 'Clinical Services' },
    { href: '#wellness', label: 'Transpersonal Wellness' },
    { href: '#salon', label: 'Healing Salon' },
    { href: '#content', label: 'Content Hub' },
    { href: '#contact', label: 'Contact' },
  ];

  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          bg: 'bg-mystical-primary-50',
          text: 'text-mystical-primary-900',
          hover: 'hover:text-mystical-secondary-600',
          button: 'bg-mystical-primary-600 hover:bg-mystical-primary-700'
        };
      case 'calming':
        return {
          bg: 'bg-calming-primary-50',
          text: 'text-calming-primary-900',
          hover: 'hover:text-calming-secondary-600',
          button: 'bg-calming-primary-600 hover:bg-calming-primary-700'
        };
      case 'earthy':
        return {
          bg: 'bg-earthy-primary-50',
          text: 'text-earthy-primary-900',
          hover: 'hover:text-earthy-secondary-600',
          button: 'bg-earthy-primary-600 hover:bg-earthy-primary-700'
        };
      default:
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-900',
          hover: 'hover:text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
    }
  };

  const styles = getThemeClasses();

  return (
    <header className={`${styles.bg} shadow-sm sticky top-0 z-50`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className={`font-serif text-xl ${styles.text}`}>
              Dr. Gretchen Kubacky
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, scrollToElement, { offset: 80 })}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${styles.text} ${styles.hover} transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-current`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button className={`${styles.button} text-white px-4 py-2 rounded-md text-sm font-medium transition-colors`}>
              Book Discovery Call
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${styles.text} ${styles.hover} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-current`}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${styles.text} ${styles.hover} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-current`}
                  role="menuitem"
                  onClick={(e) => {
                    handleAnchorClick(e, scrollToElement, { offset: 80 });
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <button className={`w-full ${styles.button} text-white px-4 py-2 rounded-md text-sm font-medium mt-4`}>
                Book Discovery Call
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}