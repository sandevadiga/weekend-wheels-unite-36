
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const FloatingActionButton = () => {
  return (
    <div className="fixed bottom-6 right-6">
      <Button 
        size="lg" 
        className="rounded-full h-14 w-14 bg-orange-500 hover:bg-orange-600 shadow-lg"
      >
        <Plus className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingActionButton;
