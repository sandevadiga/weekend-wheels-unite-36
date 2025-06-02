
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Clock, Users, Coffee, Fuel, Shield } from "lucide-react";
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
    description: ""
  });

  const [pitStops, setPitStops] = useState<string[]>([]);
  const [rules, setRules] = useState<string[]>([]);

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
    "Follow traffic rules strictly"
  ];

  const pitStopOptions = [
    { id: "breakfast", label: "Breakfast Stop", icon: Coffee },
    { id: "fuel", label: "Fuel Station", icon: Fuel },
    { id: "scenic", label: "Scenic Point", icon: MapPin }
  ];

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
            Publish Ride
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlanRideScreen;
