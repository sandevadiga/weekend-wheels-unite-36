
import { Coffee, Fuel, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface PitStopsProps {
  pitStops: string[];
  onPitStopToggle: (stop: string) => void;
}

const PitStops = ({ pitStops, onPitStopToggle }: PitStopsProps) => {
  const pitStopOptions = [
    { id: "breakfast", label: "Breakfast Stop", icon: Coffee },
    { id: "fuel", label: "Fuel Station", icon: Fuel },
    { id: "scenic", label: "Scenic Point", icon: MapPin }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Pit Stops (Optional)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {pitStopOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div key={option.id} className="flex items-center space-x-3">
                <Checkbox
                  id={option.id}
                  checked={pitStops.includes(option.id)}
                  onCheckedChange={() => onPitStopToggle(option.id)}
                />
                <Icon className="w-4 h-4 text-gray-600" />
                <Label htmlFor={option.id} className="flex-1">
                  {option.label}
                </Label>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default PitStops;
