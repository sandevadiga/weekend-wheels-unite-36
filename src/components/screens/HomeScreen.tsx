
import { useState } from "react";
import HomeHeader from "@/components/home/HomeHeader";
import RideFilters from "@/components/home/RideFilters";
import TrendingSection from "@/components/home/TrendingSection";
import RideCard from "@/components/home/RideCard";
import FloatingActionButton from "@/components/home/FloatingActionButton";

const HomeScreen = () => {
  const [searchLocation, setSearchLocation] = useState("Bangalore");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const rideTypes = ["All", "Breakfast", "Adventure", "Scenic", "Long Distance", "Night Ride"];
  
  const rides = [
    {
      id: 1,
      title: "Nandi Sunrise Sprint",
      date: "Today, 6:00 AM",
      distance: "80 km round trip",
      organizer: "Rajesh Kumar",
      location: "Cubbon Park → Nandi Hills",
      type: "Breakfast",
      joinedCount: 12,
      maxRiders: 15,
      isOrganizer: false,
      distanceFromUser: "2.5 km",
      pillionAvailable: true,
      pillionSlots: 3,
      tripCode: "NH001",
      brand: "Royal Enfield"
    },
    {
      id: 2,
      title: "Coorg Coffee Trail",
      date: "Tomorrow, 5:30 AM",
      distance: "280 km",
      organizer: "Priya Singh",
      location: "Brigade Road → Coorg",
      type: "Adventure",
      joinedCount: 8,
      maxRiders: 12,
      isOrganizer: true,
      distanceFromUser: "1.2 km",
      pillionAvailable: true,
      pillionSlots: 2,
      tripCode: "CT002",
      brand: "Kawasaki"
    },
    {
      id: 3,
      title: "Chikmagalur Hills Explorer",
      date: "Jan 8, 7:00 AM",
      distance: "240 km",
      organizer: "Amit Patel",
      location: "MG Road → Chikmagalur",
      type: "Scenic",
      joinedCount: 15,
      maxRiders: 15,
      isOrganizer: false,
      distanceFromUser: "3.1 km",
      pillionAvailable: false,
      tripCode: "CH003",
      brand: "Honda"
    },
    {
      id: 4,
      title: "Wayanad Monsoon Magic",
      date: "Jan 10, 6:30 AM", 
      distance: "320 km",
      organizer: "Sneha Reddy",
      location: "Electronic City → Wayanad",
      type: "Long Distance",
      joinedCount: 6,
      maxRiders: 10,
      isOrganizer: false,
      distanceFromUser: "5.8 km",
      pillionAvailable: true,
      pillionSlots: 4,
      tripCode: "WM004",
      brand: "Bajaj"
    },
    {
      id: 5,
      title: "Midnight City Cruise",
      date: "Jan 12, 11:00 PM",
      distance: "45 km",
      organizer: "Vikram Raj",
      location: "Koramangala → Outer Ring Road",
      type: "Night Ride",
      joinedCount: 18,
      maxRiders: 20,
      isOrganizer: false,
      distanceFromUser: "0.8 km",
      pillionAvailable: true,
      pillionSlots: 6,
      tripCode: "MC005",
      brand: "Yamaha"
    }
  ];

  const filteredRides = rides.filter(ride => {
    const matchesFilter = selectedFilter === "All" || ride.type === selectedFilter;
    const matchesSearch = searchQuery === "" || 
      ride.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.tripCode?.toLowerCase().includes(searchQuery.toLowerCase());
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
      
      <TrendingSection />
      
      <RideFilters 
        rideTypes={rideTypes}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      {/* Rides List */}
      <div className="px-4 space-y-4 pb-20">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Available Rides</h3>
          <span className="text-sm text-gray-500">{filteredRides.length} rides found</span>
        </div>
        
        {filteredRides.map((ride) => (
          <RideCard key={ride.id} ride={ride} />
        ))}
        
        {filteredRides.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No rides found matching your criteria</p>
          </div>
        )}
      </div>

      <FloatingActionButton />
    </div>
  );
};

export default HomeScreen;
