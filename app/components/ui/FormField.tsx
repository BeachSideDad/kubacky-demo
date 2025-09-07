'use client';

import React from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';

export interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur?: () => void;
  error?: string | null;
  required?: boolean;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  rows?: number;
  disabled?: boolean;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
}

export default function FormField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  required = false,
  placeholder,
  options = [],
  rows = 4,
  disabled = false,
  ...ariaProps
}: FormFieldProps) {
  const { theme } = useTheme();

  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          label: 'text-mystical-neutral-900',
          input: 'border-mystical-primary-200 focus:border-mystical-primary-500 focus:ring-mystical-primary-500 disabled:bg-mystical-neutral-100',
          error: 'text-mystical-red-600',
        };
      case 'calming':
        return {
          label: 'text-calming-neutral-900',
          input: 'border-calming-primary-200 focus:border-calming-primary-500 focus:ring-calming-primary-500 disabled:bg-calming-neutral-100',
          error: 'text-calming-red-600',
        };
      case 'earthy':
        return {
          label: 'text-earthy-neutral-900',
          input: 'border-earthy-primary-200 focus:border-earthy-primary-500 focus:ring-earthy-primary-500 disabled:bg-earthy-neutral-100',
          error: 'text-earthy-red-600',
        };
      default:
        return {
          label: 'text-gray-900',
          input: 'border-blue-200 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-100',
          error: 'text-red-600',
        };
    }
  };

  const styles = getThemeClasses();

  const baseInputClasses = `
    w-full px-3 py-2 border rounded-md 
    focus:outline-none focus:ring-2 
    transition-colors duration-200
    disabled:cursor-not-allowed disabled:opacity-50
    ${styles.input}
    ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
  `.trim();

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            rows={rows}
            disabled={disabled}
            className={baseInputClasses}
            {...ariaProps}
          />
        );
      
      case 'select':
        return (
          <select
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            className={baseInputClasses}
            {...ariaProps}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      default:
        return (
          <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={baseInputClasses}
            {...ariaProps}
          />
        );
    }
  };

  return (
    <div>
      <label htmlFor={id} className={`block text-sm font-medium mb-2 ${styles.label}`}>
        {label}
        {required && <span className={`ml-1 ${styles.error}`} aria-label="required">*</span>}
      </label>
      
      {renderInput()}
      
      {error && (
        <p
          id={`${id}-error`}
          className={`mt-1 text-sm ${styles.error}`}
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
}