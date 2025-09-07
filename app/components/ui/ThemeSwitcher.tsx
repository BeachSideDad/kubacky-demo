'use client';

import { useTheme } from '@/app/contexts/ThemeContext';
import { useState } from 'react';

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          button: 'bg-mystical-primary-600 hover:bg-mystical-primary-700',
          dropdown: 'bg-white border-mystical-primary-200',
          selected: 'bg-mystical-primary-50 text-mystical-primary-700',
          hover: 'hover:bg-mystical-primary-50',
        };
      case 'calming':
        return {
          button: 'bg-calming-primary-600 hover:bg-calming-primary-700',
          dropdown: 'bg-white border-calming-primary-200',
          selected: 'bg-calming-primary-50 text-calming-primary-700',
          hover: 'hover:bg-calming-primary-50',
        };
      case 'earthy':
        return {
          button: 'bg-earthy-primary-600 hover:bg-earthy-primary-700',
          dropdown: 'bg-white border-earthy-primary-200',
          selected: 'bg-earthy-primary-50 text-earthy-primary-700',
          hover: 'hover:bg-earthy-primary-50',
        };
      default:
        return {
          button: 'bg-blue-600 hover:bg-blue-700',
          dropdown: 'bg-white border-gray-200',
          selected: 'bg-blue-50 text-blue-700',
          hover: 'hover:bg-gray-50',
        };
    }
  };

  const styles = getThemeClasses();

  const getThemePreview = (themeName: string) => {
    switch(themeName) {
      case 'mystical':
        return ['bg-purple-500', 'bg-amber-500', 'bg-pink-400'];
      case 'calming':
        return ['bg-teal-500', 'bg-rose-400', 'bg-cyan-400'];
      case 'earthy':
        return ['bg-green-500', 'bg-red-400', 'bg-orange-400'];
      default:
        return ['bg-gray-400', 'bg-gray-500', 'bg-gray-600'];
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${styles.button} text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110`}
          aria-label="Switch theme"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" 
            />
          </svg>
        </button>

        {isOpen && (
          <div className={`absolute bottom-16 right-0 ${styles.dropdown} rounded-lg shadow-xl border p-2 min-w-[200px]`}>
            <div className="p-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Choose Theme
              </h3>
              {themes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setTheme(t.name);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-3 rounded-md transition-colors ${
                    theme === t.name ? styles.selected : styles.hover
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{t.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{t.description}</div>
                    </div>
                    <div className="flex space-x-1 ml-3">
                      {getThemePreview(t.name).map((color, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${color}`}></div>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}