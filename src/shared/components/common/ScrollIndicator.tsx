import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator when user has scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRouteDiscovery = () => {
    const element = document.getElementById('route-discovery');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      // Fallback scroll
      window.scrollTo({
        top: window.innerHeight * 1.5,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-24 right-4 z-50 bg-orange-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-orange-600 transition-all duration-300 animate-bounce"
      onClick={scrollToRouteDiscovery}
    >
      <div className="flex flex-col items-center">
        <span className="text-xs font-medium mb-1">Routes</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
