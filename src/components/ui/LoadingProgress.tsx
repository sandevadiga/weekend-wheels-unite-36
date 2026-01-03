import { useEffect, useState } from 'react';

interface LoadingProgressProps {
  isLoading: boolean;
  duration?: number;
}

const LoadingProgress = ({ isLoading, duration = 2000 }: LoadingProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + (100 / (duration / 50)); // Update every 50ms
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isLoading, duration]);

  if (!isLoading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div 
        className="h-1 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
      {progress < 100 && (
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-600 shadow-sm">
            Loading... {Math.round(progress)}%
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingProgress;
