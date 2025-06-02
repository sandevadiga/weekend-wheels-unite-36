import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import HomeHeader from "@/components/home/HomeHeader";
import RideFilters from "@/components/home/RideFilters";
import TrendingSection from "@/components/home/TrendingSection";
import RideCard from "@/components/home/RideCard";

const HomeScreen = () => {
  const isMobile = useIsMobile();
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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

      {/* Enhanced Rides List - Single Column for Mobile */}
      <div className={`px-4 space-y-4 ${isMobile ? 'pb-20' : 'pb-8'}`}>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Available Rides</h3>
          <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm text-gray-600 font-medium">{filteredRides.length} rides</span>
          </div>
        </div>
        
        <div className={`${isMobile ? 'space-y-4' : 'grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'}`}>
          {filteredRides.map((ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>
        
        {filteredRides.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <p className="text-gray-600 text-lg">No rides found matching your criteria</p>
            <p className="text-gray-500 text-sm mt-1">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
