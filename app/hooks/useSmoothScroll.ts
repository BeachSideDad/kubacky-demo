import { useCallback } from 'react';

export interface SmoothScrollOptions {
  offset?: number;
  duration?: number;
  behavior?: ScrollBehavior;
}

export function useSmoothScroll() {
  const scrollToElement = useCallback((
    elementId: string,
    options: SmoothScrollOptions = {}
  ) => {
    const {
      offset = 80, // Default offset for sticky header
      behavior = 'smooth'
    } = options;

    const element = document.getElementById(elementId.replace('#', ''));
    
    if (!element) {
      console.warn(`Element with ID "${elementId}" not found`);
      return;
    }

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior
    });
  }, []);

  const scrollToTop = useCallback((behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({
      top: 0,
      behavior
    });
  }, []);

  const scrollToBottom = useCallback((behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior
    });
  }, []);

  return {
    scrollToElement,
    scrollToTop,
    scrollToBottom
  };
}

// Utility function for handling anchor link clicks
export function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  scrollToElement: (elementId: string, options?: SmoothScrollOptions) => void,
  options?: SmoothScrollOptions
) {
  const href = e.currentTarget.getAttribute('href');
  
  if (href && href.startsWith('#')) {
    e.preventDefault();
    scrollToElement(href, options);
  }
}