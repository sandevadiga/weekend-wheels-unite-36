
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Plus, Star, Search } from "lucide-react";
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
    isOrganizer: true,
    distanceFromUser: "2.3 km"
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
    isOrganizer: false,
    distanceFromUser: "5.1 km"
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
    isOrganizer: false,
    distanceFromUser: "1.8 km"
  },
  {
    id: 4,
    title: "Mysore Palace Heritage Ride",
    date: "Sat, 6 AM",
    distance: "150 km round trip",
    organizer: "Kavya M",
    location: "Mysore",
    type: "Long",
    joinedCount: 15,
    maxRiders: 15,
    isOrganizer: false,
    distanceFromUser: "145 km"
  }
];

const HomeScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchLocation, setSearchLocation] = useState("Bangalore");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRides = mockRides.filter(ride => {
    const matchesFilter = selectedFilter === "All" || ride.type === selectedFilter;
    const matchesSearch = searchQuery === "" || 
      ride.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.organizer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

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

        {/* Search Bar */}
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search rides, locations, or organizers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10"
            />
          </div>
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

      {/* Trending Section */}
      {searchQuery === "" && (
        <div className="p-4 pb-2">
          <h2 className="text-lg font-semibold mb-3">🔥 Trending This Weekend</h2>
          <div className="flex gap-2 overflow-x-auto">
            <Badge variant="outline" className="whitespace-nowrap">Nandi Hills</Badge>
            <Badge variant="outline" className="whitespace-nowrap">Coorg</Badge>
            <Badge variant="outline" className="whitespace-nowrap">Chikmagalur</Badge>
            <Badge variant="outline" className="whitespace-nowrap">Wayanad</Badge>
          </div>
        </div>
      )}

      {/* Ride Cards */}
      <div className="p-4 space-y-4 pb-20">
        {filteredRides.length === 0 ? (
          <Card className="text-center py-8">
            <CardContent>
              <p className="text-gray-500">No rides found matching your criteria.</p>
              <p className="text-sm text-gray-400 mt-2">Try adjusting your search or filters.</p>
            </CardContent>
          </Card>
        ) : (
          filteredRides.map((ride) => (
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
                      <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {ride.distanceFromUser} away
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Badge variant="outline">{ride.type}</Badge>
                    {ride.joinedCount === ride.maxRiders && (
                      <Badge variant="secondary" className="text-xs">Full</Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-orange-600">
                          {ride.organizer.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      {ride.isOrganizer && (
                        <Star className="absolute -top-1 -right-1 w-4 h-4 text-yellow-500 fill-yellow-500" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium flex items-center gap-1">
                        {ride.organizer}
                        {ride.isOrganizer && <span className="text-xs text-yellow-600">(Organizer)</span>}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Users className="w-3 h-3" />
                        {ride.joinedCount}/{ride.maxRiders} joined
                      </div>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-orange-500 hover:bg-orange-600"
                    disabled={ride.joinedCount === ride.maxRiders}
                  >
                    {ride.joinedCount === ride.maxRiders ? "Join Waitlist" : "Join Ride"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
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
