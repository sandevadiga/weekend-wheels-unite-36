
import { Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface RideRulesProps {
  rules: string[];
  onRuleToggle: (rule: string) => void;
}

const RideRules = ({ rules, onRuleToggle }: RideRulesProps) => {
  const defaultRules = [
    "Helmet mandatory for all riders",
    "No stunts or reckless riding", 
    "Stay with the group at all times",
    "Fuel up before the ride starts",
    "Follow traffic rules strictly",
    "Off-road capable bike required",
    "Highway riding experience required",
    "Guides will assist new riders",
    "Follow trail etiquette"
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Ride Rules
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {defaultRules.map((rule, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Checkbox
                id={`rule-${index}`}
                checked={rules.includes(rule)}
                onCheckedChange={() => onRuleToggle(rule)}
              />
              <Label htmlFor={`rule-${index}`} className="flex-1 text-sm">
                {rule}
              </Label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RideRules;
