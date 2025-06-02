
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Clock, Users, Shield, Coffee, Fuel, ArrowLeft } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const RideDetailsScreen = () => {
  const ride = {
    title: "Nandi Sunrise Sprint",
    date: "Sunday, January 7th",
    time: "6:00 AM",
    distance: "80 km round trip",
    organizer: "Rajesh Kumar",
    startLocation: "Cubbon Park, Bangalore",
    destination: "Nandi Hills",
    type: "Breakfast",
    joinedCount: 12,
    maxRiders: 15,
    rules: [
      "Helmet mandatory",
      "No stunts or reckless riding",
      "Stay with the group",
      "Fuel up before start"
    ],
    pitStops: [
      { name: "Sunrise Point", type: "scenic", time: "7:30 AM" },
      { name: "Hills Cafe", type: "breakfast", time: "8:00 AM" },
      { name: "Fuel Station", type: "fuel", time: "9:30 AM" }
    ],
    riders: [
      "Rajesh Kumar", "Priya Singh", "Amit Patel", "Sneha Reddy", 
      "Vikram Raj", "Anita Sharma", "Rohit Kumar", "Kavya M",
      "Suresh B", "Divya K", "Manoj R", "Pooja S"
    ]
  };

  const getPitStopIcon = (type: string) => {
    switch (type) {
      case 'breakfast': return Coffee;
      case 'fuel': return Fuel;
      default: return MapPin;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="flex items-center gap-3 p-4">
          <SidebarTrigger />
          <ArrowLeft className="w-5 h-5 cursor-pointer" />
          <div>
            <h1 className="text-xl font-bold">Ride Details</h1>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 pb-20">
        {/* Main Ride Info */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{ride.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {ride.date}, {ride.time}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                  <MapPin className="w-4 h-4" />
                  {ride.distance}
                </div>
              </div>
              <Badge variant="outline">{ride.type}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-orange-600">
                  {ride.organizer.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="font-medium">{ride.organizer}</div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Shield className="w-3 h-3" />
                  Verified Organizer
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Route Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Route</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="text-sm font-medium text-gray-700">Start Point</div>
              <div className="text-sm text-gray-600">{ride.startLocation}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700">Destination</div>
              <div className="text-sm text-gray-600">{ride.destination}</div>
            </div>
            <Button variant="outline" className="w-full">
              View on Google Maps
            </Button>
          </CardContent>
        </Card>

        {/* Pit Stops */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pit Stops</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {ride.pitStops.map((stop, index) => {
                const Icon = getPitStopIcon(stop.type);
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{stop.name}</div>
                      <div className="text-xs text-gray-500">{stop.time}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Ride Rules */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ride Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {ride.rules.map((rule, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">{rule}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Riders */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="w-5 h-5" />
              Confirmed Riders ({ride.joinedCount}/{ride.maxRiders})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {ride.riders.map((rider, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-orange-600">
                      {rider.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-sm">{rider}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <Button className="w-full bg-orange-500 hover:bg-orange-600" size="lg">
          Join This Ride
        </Button>
      </div>
    </div>
  );
};

export default RideDetailsScreen;
