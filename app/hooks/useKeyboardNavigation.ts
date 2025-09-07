import { useEffect, useCallback } from 'react';

export interface KeyboardNavigationOptions {
  enableEscapeKey?: boolean;
  enableArrowKeys?: boolean;
  enableTabNavigation?: boolean;
  onEscape?: () => void;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  onEnter?: () => void;
  onSpace?: () => void;
}

export function useKeyboardNavigation({
  enableEscapeKey = true,
  enableArrowKeys = true,
  enableTabNavigation = true,
  onEscape,
  onArrowUp,
  onArrowDown,
  onArrowLeft,
  onArrowRight,
  onEnter,
  onSpace,
}: KeyboardNavigationOptions = {}) {
  
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Don't interfere with form inputs or contenteditable elements
    const target = event.target as HTMLElement;
    if (
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.tagName === 'SELECT' ||
      target.isContentEditable
    ) {
      return;
    }

    switch (event.key) {
      case 'Escape':
        if (enableEscapeKey && onEscape) {
          event.preventDefault();
          onEscape();
        }
        break;

      case 'ArrowUp':
        if (enableArrowKeys && onArrowUp) {
          event.preventDefault();
          onArrowUp();
        }
        break;

      case 'ArrowDown':
        if (enableArrowKeys && onArrowDown) {
          event.preventDefault();
          onArrowDown();
        }
        break;

      case 'ArrowLeft':
        if (enableArrowKeys && onArrowLeft) {
          event.preventDefault();
          onArrowLeft();
        }
        break;

      case 'ArrowRight':
        if (enableArrowKeys && onArrowRight) {
          event.preventDefault();
          onArrowRight();
        }
        break;

      case 'Enter':
        if (onEnter) {
          event.preventDefault();
          onEnter();
        }
        break;

      case ' ':
        if (onSpace) {
          event.preventDefault();
          onSpace();
        }
        break;

      default:
        break;
    }
  }, [
    enableEscapeKey,
    enableArrowKeys,
    onEscape,
    onArrowUp,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    onEnter,
    onSpace,
  ]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return {
    handleKeyDown
  };
}

// Skip links for keyboard accessibility
export function useSkipLinks() {
  useEffect(() => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg';
    skipLink.textContent = 'Skip to main content';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);
}

// Trap focus within a modal or dropdown
export function useFocusTrap(isActive: boolean, containerRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    };

    // Focus the first element when trap is activated
    if (firstElement) {
      firstElement.focus();
    }

    container.addEventListener('keydown', handleTabKey);

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }, [isActive, containerRef]);
}

// Manage focus restoration
export function useFocusManagement() {
  const restoreFocus = useCallback((previousElement?: HTMLElement | null) => {
    if (previousElement) {
      previousElement.focus();
    }
  }, []);

  const saveFocus = useCallback(() => {
    return document.activeElement as HTMLElement;
  }, []);

  return { restoreFocus, saveFocus };
}