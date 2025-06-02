
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FloatingActionButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/plan-ride');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        size="lg" 
        className="rounded-full h-14 w-14 bg-orange-500 hover:bg-orange-600 shadow-lg"
        onClick={handleClick}
      >
        <Plus className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingActionButton;
