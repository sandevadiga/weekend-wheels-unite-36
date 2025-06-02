
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Plus } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const rideTypes = ["All", "Breakfast", "Off-road", "Long", "Beginner"];

const mockRides = [
  {
    id: 1,
    title: "Nandi Sunrise Sprint",
    date: "Sun, 6 AM",
    distance: "80 km round trip",
    organizer: "Rajesh Kumar",
    location: "Bangalore",
    type: "Breakfast",
    joinedCount: 12,
    maxRiders: 15,
  },
  {
    id: 2,
    title: "Coorg Coffee Trail",
    date: "Sat, 5:30 AM",
    distance: "120 km round trip", 
    organizer: "Priya Singh",
    location: "Bangalore",
    type: "Long",
    joinedCount: 8,
    maxRiders: 12,
  },
  {
    id: 3,
    title: "Beginner's Delight",
    date: "Sun, 7 AM",
    distance: "40 km round trip",
    organizer: "Amit Patel",
    location: "Bangalore", 
    type: "Beginner",
    joinedCount: 6,
    maxRiders: 10,
  },
];

const HomeScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchLocation, setSearchLocation] = useState("Bangalore");

  const filteredRides = mockRides.filter(ride => 
    selectedFilter === "All" || ride.type === selectedFilter
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <SidebarTrigger />
            <div>
              <h1 className="text-xl font-bold">Discover Rides</h1>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <MapPin className="w-3 h-3" />
                <span>{searchLocation}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Location Input */}
        <div className="px-4 pb-3">
          <Input
            placeholder="Change location..."
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Filter Pills */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto">
            {rideTypes.map((type) => (
              <Badge
                key={type}
                variant={selectedFilter === type ? "default" : "secondary"}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => setSelectedFilter(type)}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Ride Cards */}
      <div className="p-4 space-y-4 pb-20">
        {filteredRides.map((ride) => (
          <Card key={ride.id} className="w-full hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{ride.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {ride.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {ride.distance}
                    </div>
                  </div>
                </div>
                <Badge variant="outline">{ride.type}</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-orange-600">
                      {ride.organizer.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{ride.organizer}</div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Users className="w-3 h-3" />
                      {ride.joinedCount}/{ride.maxRiders} joined
                    </div>
                  </div>
                </div>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                  Join Ride
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <Button 
          size="lg" 
          className="rounded-full h-14 w-14 bg-orange-500 hover:bg-orange-600 shadow-lg"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default HomeScreen;
