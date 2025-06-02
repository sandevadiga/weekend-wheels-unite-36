
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import HomeHeader from "@/components/home/HomeHeader";
import RideFilters from "@/components/home/RideFilters";
import TrendingSection from "@/components/home/TrendingSection";
import RideCard from "@/components/home/RideCard";
import FloatingActionButton from "@/components/home/FloatingActionButton";

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
      <HomeHeader
        searchLocation={searchLocation}
        searchQuery={searchQuery}
        onLocationChange={setSearchLocation}
        onSearchChange={setSearchQuery}
      />

      <RideFilters
        rideTypes={rideTypes}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      {searchQuery === "" && <TrendingSection />}

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
            <RideCard key={ride.id} ride={ride} />
          ))
        )}
      </div>

      <FloatingActionButton />
    </div>
  );
};

export default HomeScreen;
