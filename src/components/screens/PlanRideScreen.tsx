import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MapPin, Clock, Users, Coffee, Fuel, Shield, Utensils, Mountain, Route, Zap, Star } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

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
    role: "planner" // New field for organizer/planner selection
  });

  const [pitStops, setPitStops] = useState<string[]>([]);
  const [rules, setRules] = useState<string[]>([]);

  const presetRides = [
    {
      id: "breakfast",
      title: "Breakfast Ride",
      icon: Utensils,
      color: "bg-orange-100 text-orange-600",
      preset: {
        title: "Weekend Breakfast Ride",
        type: "breakfast",
        time: "06:00",
        maxRiders: "12",
        description: "Join us for a scenic morning ride followed by delicious breakfast at a cozy cafe.",
        pitStops: ["breakfast", "fuel"],
        rules: ["Helmet mandatory for all riders", "No stunts or reckless riding", "Stay with the group at all times"]
      }
    },
    {
      id: "offroad",
      title: "Off-road Adventure",
      icon: Mountain,
      color: "bg-green-100 text-green-600",
      preset: {
        title: "Trail Adventure",
        type: "offroad",
        time: "07:00",
        maxRiders: "8",
        description: "Explore dirt trails and scenic off-road paths. Intermediate riding skills recommended.",
        pitStops: ["fuel", "scenic"],
        rules: ["Helmet mandatory for all riders", "Off-road capable bike required", "Follow trail etiquette", "Stay with the group at all times"]
      }
    },
    {
      id: "long",
      title: "Long Distance",
      icon: Route,
      color: "bg-blue-100 text-blue-600",
      preset: {
        title: "Highway Cruise",
        type: "long",
        time: "05:30",
        maxRiders: "15",
        description: "Long distance highway ride for experienced riders. Multiple pit stops planned.",
        pitStops: ["fuel", "breakfast", "scenic"],
        rules: ["Helmet mandatory for all riders", "Fuel up before the ride starts", "Highway riding experience required", "Stay with the group at all times"]
      }
    },
    {
      id: "beginner",
      title: "Beginner Friendly",
      icon: Zap,
      color: "bg-purple-100 text-purple-600",
      preset: {
        title: "New Rider Welcome",
        type: "beginner",
        time: "08:00",
        maxRiders: "6",
        description: "Perfect for new riders! Short, easy route with experienced guides to help you learn.",
        pitStops: ["breakfast"],
        rules: ["Helmet mandatory for all riders", "No stunts or reckless riding", "Guides will assist new riders", "Stay with the group at all times"]
      }
    }
  ];

  const rideTypes = [
    { value: "breakfast", label: "Breakfast Ride" },
    { value: "offroad", label: "Off-road Adventure" },
    { value: "long", label: "Long Distance" },
    { value: "beginner", label: "Beginner Friendly" }
  ];

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

  const pitStopOptions = [
    { id: "breakfast", label: "Breakfast Stop", icon: Coffee },
    { id: "fuel", label: "Fuel Station", icon: Fuel },
    { id: "scenic", label: "Scenic Point", icon: MapPin }
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

  const handlePublish = () => {
    // Handle ride publication logic
    console.log("Publishing ride:", { formData, pitStops, rules });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="flex items-center gap-3 p-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-xl font-bold">Plan a Ride</h1>
            <p className="text-sm text-gray-600">Create an amazing weekend experience</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-20">
        {/* Role Selection */}
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
              value={formData.role} 
              onValueChange={(value) => setFormData({...formData, role: value})}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="planner" id="planner" />
                <Label htmlFor="planner" className="flex items-center gap-2">
                  <div className="text-sm">
                    <div className="font-medium">Planner</div>
                    <div className="text-gray-500 text-xs">Plan and coordinate the ride</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="organizer" id="organizer" />
                <Label htmlFor="organizer" className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-orange-500" />
                  <div className="text-sm">
                    <div className="font-medium">Organizer</div>
                    <div className="text-gray-500 text-xs">Lead and take full responsibility</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Quick Preset Options */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Start Options</CardTitle>
            <p className="text-sm text-gray-600">Choose a preset to auto-fill your ride details</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {presetRides.map((preset) => {
                const Icon = preset.icon;
                return (
                  <button
                    key={preset.id}
                    onClick={() => handlePresetSelect(preset.preset)}
                    className={`p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-orange-300 transition-colors ${preset.color}`}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-medium text-center">{preset.title}</div>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Ride Title</Label>
              <Input
                id="title"
                placeholder="e.g., Nandi Sunrise Sprint"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>
            
            <div>
              <Label htmlFor="type">Ride Type</Label>
              <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select ride type" />
                </SelectTrigger>
                <SelectContent>
                  {rideTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="time">Start Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Route Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Route Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="startPoint">Start Point</Label>
              <Input
                id="startPoint"
                placeholder="e.g., Cubbon Park, Bangalore"
                value={formData.startPoint}
                onChange={(e) => setFormData({...formData, startPoint: e.target.value})}
              />
            </div>
            
            <div>
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                placeholder="e.g., Nandi Hills"
                value={formData.destination}
                onChange={(e) => setFormData({...formData, destination: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="maxRiders">Maximum Riders</Label>
              <Input
                id="maxRiders"
                type="number"
                placeholder="e.g., 15"
                value={formData.maxRiders}
                onChange={(e) => setFormData({...formData, maxRiders: e.target.value})}
              />
            </div>
          </CardContent>
        </Card>

        {/* Pit Stops */}
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
                      onCheckedChange={() => handlePitStopToggle(option.id)}
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

        {/* Ride Rules */}
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
                    onCheckedChange={() => handleRuleToggle(rule)}
                  />
                  <Label htmlFor={`rule-${index}`} className="flex-1 text-sm">
                    {rule}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Description */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Additional Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="Tell riders what to expect, what to bring, or any special instructions..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={4}
            />
          </CardContent>
        </Card>
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
