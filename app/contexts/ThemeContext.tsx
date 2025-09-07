'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeName = 'mystical' | 'calming' | 'earthy';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: {
    name: ThemeName;
    label: string;
    description: string;
  }[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes = [
  {
    name: 'mystical' as ThemeName,
    label: 'Mystical Purple',
    description: 'Spiritual & Transpersonal Energy'
  },
  {
    name: 'calming' as ThemeName,
    label: 'Calming Teal',
    description: 'Professional & Clinical Balance'
  },
  {
    name: 'earthy' as ThemeName,
    label: 'Earthy Sage',
    description: 'Holistic & Grounded Wellness'
  }
];

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>('mystical');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as ThemeName;
    if (saved && themes.some(t => t.name === saved)) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}