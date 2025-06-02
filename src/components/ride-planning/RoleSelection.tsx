
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface RoleSelectionProps {
  role: string;
  onRoleChange: (role: string) => void;
}

const RoleSelection = ({ role, onRoleChange }: RoleSelectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Star className="w-5 h-5" />
          Your Role
        </CardTitle>
        <p className="text-sm text-gray-600">Choose your role for this ride</p>
      </CardHeader>
      <CardContent>
        <RadioGroup 
          value={role} 
          onValueChange={onRoleChange}
          className="flex gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="planner" id="planner" />
            <Label htmlFor="planner" className="flex items-center gap-2">
              <div className="text-sm">
                <div className="font-medium">Planner</div>
                <div className="text-gray-500 text-xs">Plan and coordinate the ride (+10 pts)</div>
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="organizer" id="organizer" />
            <Label htmlFor="organizer" className="flex items-center gap-2">
              <Star className="w-4 h-4 text-orange-500" />
              <div className="text-sm">
                <div className="font-medium">Organizer</div>
                <div className="text-gray-500 text-xs">Lead and take full responsibility (+25 pts)</div>
              </div>
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default RoleSelection;
