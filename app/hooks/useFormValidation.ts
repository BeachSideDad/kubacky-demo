import { useState, useCallback } from 'react';

export interface ValidationRule {
  validate: (value: string) => boolean;
  message: string;
}

export interface FormField {
  value: string;
  error: string | null;
  touched: boolean;
}

export interface FormState {
  [key: string]: FormField;
}

export interface ValidationRules {
  [key: string]: ValidationRule[];
}

// Common validation rules
export const validationRules = {
  required: (message = 'This field is required'): ValidationRule => ({
    validate: (value: string) => value.trim().length > 0,
    message
  }),

  email: (message = 'Please enter a valid email address'): ValidationRule => ({
    validate: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
    message
  }),

  phone: (message = 'Please enter a valid phone number'): ValidationRule => ({
    validate: (value: string) => {
      if (!value.trim()) return true; // Phone is often optional
      const phoneRegex = /^[\+]?[\(\)\-\.\s\d]{10,}$/;
      return phoneRegex.test(value);
    },
    message
  }),

  minLength: (min: number, message?: string): ValidationRule => ({
    validate: (value: string) => value.length >= min,
    message: message || `Must be at least ${min} characters long`
  }),

  maxLength: (max: number, message?: string): ValidationRule => ({
    validate: (value: string) => value.length <= max,
    message: message || `Must be no more than ${max} characters long`
  })
};

export function useFormValidation(initialState: { [key: string]: string }, rules: ValidationRules) {
  const [formState, setFormState] = useState<FormState>(() => {
    const initial: FormState = {};
    Object.keys(initialState).forEach(key => {
      initial[key] = {
        value: initialState[key],
        error: null,
        touched: false
      };
    });
    return initial;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  const validateField = useCallback((fieldName: string, value: string): string | null => {
    const fieldRules = rules[fieldName] || [];
    
    for (const rule of fieldRules) {
      if (!rule.validate(value)) {
        return rule.message;
      }
    }
    
    return null;
  }, [rules]);

  const updateField = useCallback((fieldName: string, value: string) => {
    setFormState(prev => ({
      ...prev,
      [fieldName]: {
        value,
        error: prev[fieldName].touched ? validateField(fieldName, value) : null,
        touched: prev[fieldName].touched
      }
    }));
  }, [validateField]);

  const touchField = useCallback((fieldName: string) => {
    setFormState(prev => {
      const field = prev[fieldName];
      if (field && !field.touched) {
        return {
          ...prev,
          [fieldName]: {
            ...field,
            touched: true,
            error: validateField(fieldName, field.value)
          }
        };
      }
      return prev;
    });
  }, [validateField]);

  const validateAll = useCallback((): boolean => {
    let isValid = true;
    const newState: FormState = {};

    Object.keys(formState).forEach(fieldName => {
      const field = formState[fieldName];
      const error = validateField(fieldName, field.value);
      
      newState[fieldName] = {
        ...field,
        error,
        touched: true
      };

      if (error) {
        isValid = false;
      }
    });

    setFormState(newState);
    return isValid;
  }, [formState, validateField]);

  const handleSubmit = useCallback(async (
    onSubmit: (data: { [key: string]: string }) => Promise<void> | void,
    onError?: (error: Error) => void
  ) => {
    setSubmitCount(prev => prev + 1);
    
    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const data: { [key: string]: string } = {};
      Object.keys(formState).forEach(key => {
        data[key] = formState[key].value;
      });

      await onSubmit(data);
    } catch (error) {
      if (onError) {
        onError(error as Error);
      } else {
        console.error('Form submission error:', error);
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [formState, validateAll]);

  const reset = useCallback((newInitialState?: { [key: string]: string }) => {
    const resetState = newInitialState || initialState;
    const newState: FormState = {};
    
    Object.keys(resetState).forEach(key => {
      newState[key] = {
        value: resetState[key],
        error: null,
        touched: false
      };
    });

    setFormState(newState);
    setIsSubmitting(false);
    setSubmitCount(0);
  }, [initialState]);

  const getFieldProps = useCallback((fieldName: string) => ({
    value: formState[fieldName]?.value || '',
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      updateField(fieldName, e.target.value);
    },
    onBlur: () => touchField(fieldName),
    'aria-invalid': !!formState[fieldName]?.error,
    'aria-describedby': formState[fieldName]?.error ? `${fieldName}-error` : undefined
  }), [formState, updateField, touchField]);

  const getFieldError = useCallback((fieldName: string) => 
    formState[fieldName]?.error || null
  , [formState]);

  const hasErrors = Object.values(formState).some(field => field.error !== null);
  const allTouched = Object.values(formState).every(field => field.touched);

  return {
    formState,
    updateField,
    touchField,
    validateAll,
    handleSubmit,
    reset,
    getFieldProps,
    getFieldError,
    isSubmitting,
    submitCount,
    hasErrors,
    allTouched,
    isValid: !hasErrors && allTouched
  };
}