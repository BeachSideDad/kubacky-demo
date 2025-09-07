import { useState, useCallback } from 'react';

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface UseLoadingStateReturn {
  state: LoadingState;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string | null;
  setLoading: () => void;
  setSuccess: (message?: string) => void;
  setError: (error: string) => void;
  reset: () => void;
  withLoading: <T>(promise: Promise<T>) => Promise<T>;
}

export function useLoadingState(initialState: LoadingState = 'idle'): UseLoadingStateReturn {
  const [state, setState] = useState<LoadingState>(initialState);
  const [error, setErrorMessage] = useState<string | null>(null);

  const setLoading = useCallback(() => {
    setState('loading');
    setErrorMessage(null);
  }, []);

  const setSuccess = useCallback((message?: string) => {
    setState('success');
    setErrorMessage(null);
  }, []);

  const setError = useCallback((errorMsg: string) => {
    setState('error');
    setErrorMessage(errorMsg);
  }, []);

  const reset = useCallback(() => {
    setState('idle');
    setErrorMessage(null);
  }, []);

  const withLoading = useCallback(async <T>(promise: Promise<T>): Promise<T> => {
    try {
      setLoading();
      const result = await promise;
      setSuccess();
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      throw err;
    }
  }, [setLoading, setSuccess, setError]);

  return {
    state,
    isLoading: state === 'loading',
    isSuccess: state === 'success',
    isError: state === 'error',
    error,
    setLoading,
    setSuccess,
    setError,
    reset,
    withLoading
  };
}