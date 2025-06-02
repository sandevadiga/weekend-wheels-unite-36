
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import UserStats from "@/components/ride-planning/UserStats";
import PopularRoutes from "@/components/ride-planning/PopularRoutes";
import RoleSelection from "@/components/ride-planning/RoleSelection";
import QuickPresets from "@/components/ride-planning/QuickPresets";
import BasicInfo from "@/components/ride-planning/BasicInfo";
import RouteDetails from "@/components/ride-planning/RouteDetails";
import PitStops from "@/components/ride-planning/PitStops";
import RideRules from "@/components/ride-planning/RideRules";
import RideDescription from "@/components/ride-planning/RideDescription";

const PlanRideScreen = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    date: "",
    time: "",
    startPoint: "",
    destination: "",
    maxRiders: "",
    description: "",
    role: "planner",
    selectedRoute: ""
  });

  const [pitStops, setPitStops] = useState<string[]>([]);
  const [rules, setRules] = useState<string[]>([]);

  // Mock user streak data
  const userStats = {
    currentStreak: 7,
    longestStreak: 15,
    ridesOrganized: 23,
    totalPoints: 1250
  };

  // Pre-planned popular routes from "database"
  const popularRoutes = [
    {
      id: "nandi-sunrise",
      name: "Nandi Hills Sunrise",
      distance: "62 km",
      difficulty: "Easy",
      rating: 4.8,
      timesRidden: 156,
      route: {
        startPoint: "Cubbon Park, Bangalore",
        destination: "Nandi Hills",
        time: "05:00"
      },
      streak: { current: 3, target: 5, reward: "50 points" }
    },
    {
      id: "coorg-adventure",
      name: "Coorg Coffee Trail",
      distance: "180 km",
      difficulty: "Moderate",
      rating: 4.9,
      timesRidden: 89,
      route: {
        startPoint: "Electronic City, Bangalore",
        destination: "Coorg Coffee Plantations",
        time: "06:00"
      },
      streak: { current: 1, target: 3, reward: "100 points" }
    },
    {
      id: "coastal-highway",
      name: "Coastal Highway Cruise",
      distance: "220 km",
      difficulty: "Hard",
      rating: 4.7,
      timesRidden: 67,
      route: {
        startPoint: "Whitefield, Bangalore",
        destination: "Mangalore Beach",
        time: "05:30"
      },
      streak: { current: 0, target: 2, reward: "150 points" }
    },
    {
      id: "mysore-palace",
      name: "Mysore Palace Run",
      distance: "150 km",
      difficulty: "Easy",
      rating: 4.6,
      timesRidden: 234,
      route: {
        startPoint: "Banashankari, Bangalore",
        destination: "Mysore Palace",
        time: "07:00"
      },
      streak: { current: 5, target: 7, reward: "75 points" }
    }
  ];

  const handlePresetSelect = (preset: any) => {
    setFormData({
      ...formData,
      title: preset.title,
      type: preset.type,
      time: preset.time,
      maxRiders: preset.maxRiders,
      description: preset.description
    });
    setPitStops(preset.pitStops);
    setRules(preset.rules);
  };

  const handleRouteSelect = (route: any) => {
    setFormData({
      ...formData,
      selectedRoute: route.id,
      title: route.name,
      startPoint: route.route.startPoint,
      destination: route.route.destination,
      time: route.route.time,
      maxRiders: "15",
      description: `Popular ${route.name} route. Distance: ${route.distance}. Difficulty: ${route.difficulty}`
    });
  };

  const handleRuleToggle = (rule: string) => {
    setRules(prev => 
      prev.includes(rule) 
        ? prev.filter(r => r !== rule)
        : [...prev, rule]
    );
  };

  const handlePitStopToggle = (stop: string) => {
    setPitStops(prev =>
      prev.includes(stop)
        ? prev.filter(s => s !== stop) 
        : [...prev, stop]
    );
  };

  const handleFormDataChange = (updates: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handlePublish = () => {
    console.log("Publishing ride:", { formData, pitStops, rules });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Streak Info */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <SidebarTrigger />
            <div>
              <h1 className="text-xl font-bold">Plan a Ride</h1>
              <p className="text-sm text-gray-600">Create an amazing weekend experience</p>
            </div>
          </div>
          <UserStats userStats={userStats} />
        </div>
      </div>

      <div className="p-4 space-y-6 pb-20">
        <PopularRoutes 
          routes={popularRoutes}
          selectedRoute={formData.selectedRoute}
          onRouteSelect={handleRouteSelect}
        />

        <RoleSelection 
          role={formData.role}
          onRoleChange={(role) => handleFormDataChange({ role })}
        />

        <QuickPresets onPresetSelect={handlePresetSelect} />

        <BasicInfo 
          formData={formData}
          onFormDataChange={handleFormDataChange}
        />

        <RouteDetails 
          formData={formData}
          onFormDataChange={handleFormDataChange}
        />

        <PitStops 
          pitStops={pitStops}
          onPitStopToggle={handlePitStopToggle}
        />

        <RideRules 
          rules={rules}
          onRuleToggle={handleRuleToggle}
        />

        <RideDescription 
          description={formData.description}
          onDescriptionChange={(description) => handleFormDataChange({ description })}
        />
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1">
            Preview
          </Button>
          <Button 
            className="flex-1 bg-orange-500 hover:bg-orange-600" 
            onClick={handlePublish}
          >
            {formData.role === "organizer" ? "Publish as Organizer" : "Publish Ride"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlanRideScreen;
