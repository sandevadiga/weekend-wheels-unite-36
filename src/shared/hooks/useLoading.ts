import { useState, useEffect } from 'react';

export const useLoading = (initialLoading = false) => {
  const [isLoading, setIsLoading] = useState(initialLoading);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return { isLoading, startLoading, stopLoading, setIsLoading };
};

export const useSimulatedLoading = (duration = 2000, initialLoading = true) => {
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    if (initialLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, initialLoading]);

  return { isLoading, setIsLoading };
};

// Hook for page transitions with loading states
export const usePageLoading = () => {
  const [isPageLoading, setIsPageLoading] = useState(false);

  const startPageLoading = () => {
    setIsPageLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setIsPageLoading(false);
    }, 800);
  };

  return { isPageLoading, startPageLoading, setIsPageLoading };
};
