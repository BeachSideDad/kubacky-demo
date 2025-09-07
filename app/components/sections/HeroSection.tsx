'use client';

import { useTheme } from '@/app/contexts/ThemeContext';

export default function HeroSection() {
  const { theme } = useTheme();

  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          gradient: 'from-mystical-primary-600 to-mystical-secondary-600',
          text: 'text-white',
          subtitle: 'text-mystical-primary-100',
          button1: 'bg-white text-mystical-primary-700 hover:bg-mystical-primary-50',
          button2: 'border-white text-white hover:bg-white hover:text-mystical-primary-700',
        };
      case 'calming':
        return {
          gradient: 'from-calming-primary-600 to-calming-primary-800',
          text: 'text-white',
          subtitle: 'text-calming-primary-100',
          button1: 'bg-calming-secondary-500 text-white hover:bg-calming-secondary-600',
          button2: 'border-white text-white hover:bg-white hover:text-calming-primary-700',
        };
      case 'earthy':
        return {
          gradient: 'from-earthy-primary-700 to-earthy-primary-900',
          text: 'text-white',
          subtitle: 'text-earthy-primary-100',
          button1: 'bg-earthy-accent text-white hover:bg-earthy-secondary-600',
          button2: 'border-white text-white hover:bg-white hover:text-earthy-primary-700',
        };
      default:
        return {
          gradient: 'from-blue-600 to-purple-600',
          text: 'text-white',
          subtitle: 'text-blue-100',
          button1: 'bg-white text-blue-700 hover:bg-blue-50',
          button2: 'border-white text-white hover:bg-white hover:text-blue-700',
        };
    }
  };

  const styles = getThemeClasses();

  return (
    <section className={`relative min-h-[600px] flex items-center justify-center bg-gradient-to-br ${styles.gradient}`}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-serif ${styles.text} mb-4 animate-fade-in`}>
          The Irreverent<br />
          Transpersonal Psychologist
        </h1>
        
        <p className={`text-lg sm:text-xl ${styles.subtitle} mb-8 max-w-2xl mx-auto animate-slide-up`}>
          Where Clinical Psychology Meets Mystical Wisdom
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <button className={`${styles.button1} px-8 py-3 rounded-md font-medium transition-all transform hover:scale-105`}>
            Explore Clinical Services
          </button>
          <button className={`${styles.button2} border-2 px-8 py-3 rounded-md font-medium transition-all transform hover:scale-105`}>
            Discover Wellness Offerings
          </button>
        </div>

        <div className={`mt-12 text-sm ${styles.subtitle} animate-float`}>
          <p>Licensed California Psychologist | Energy Healer | Author | Speaker</p>
        </div>
      </div>
    </section>
  );
}