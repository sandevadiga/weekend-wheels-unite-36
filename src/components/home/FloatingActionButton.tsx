
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FloatingActionButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/plan-ride');
  };

  return (
    <div className="fixed bottom-6 right-4 z-50">
      <Button 
        size="lg" 
        className="rounded-full h-14 w-14 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-110 transition-all duration-300 active:scale-95 border-2 border-white/20"
        onClick={handleClick}
      >
        <Plus className="w-6 h-6 text-white" />
      </Button>
      
      {/* Ripple effect background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-20 animate-pulse -z-10"></div>
    </div>
  );
};

export default FloatingActionButton;
