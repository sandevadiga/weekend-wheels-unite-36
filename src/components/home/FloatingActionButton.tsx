
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FloatingActionButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/plan-ride');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <Button 
        size="lg" 
        className="rounded-full h-12 w-12 sm:h-14 sm:w-14 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
        onClick={handleClick}
      >
        <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>
    </div>
  );
};

export default FloatingActionButton;
