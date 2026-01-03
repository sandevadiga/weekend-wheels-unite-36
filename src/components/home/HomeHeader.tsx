
import { MapPin, Search, ChevronDown, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useState } from "react";

interface HomeHeaderProps {
  searchLocation: string;
  searchQuery: string;
  onLocationChange: (location: string) => void;
  onSearchChange: (query: string) => void;
  onFilterClick?: () => void;
  filterCount?: number;
}

const HomeHeader = ({ 
  searchLocation, 
  searchQuery, 
  onLocationChange, 
  onSearchChange,
  onFilterClick,
  filterCount = 0
}: HomeHeaderProps) => {
  const [isCustomLocation, setIsCustomLocation] = useState(false);
  const [customLocationInput, setCustomLocationInput] = useState("");

  const popularLocations = [
    "Bangalore",
    "Mumbai",
    "Delhi", 
    "Chennai",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "Goa",
    "Mysore",
    "Coorg"
  ];

  const handleLocationSelect = (value: string) => {
    if (value === "custom") {
      setIsCustomLocation(true);
      setCustomLocationInput("");
    } else {
      setIsCustomLocation(false);
      onLocationChange(value);
    }
  };

  const handleCustomLocationSubmit = () => {
    if (customLocationInput.trim()) {
      onLocationChange(customLocationInput.trim());
      setIsCustomLocation(false);
      setCustomLocationInput("");
    }
  };

  const handleCustomLocationKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCustomLocationSubmit();
    }
    if (e.key === 'Escape') {
      setIsCustomLocation(false);
      setCustomLocationInput("");
    }
  };

  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg">
      {/* Compact Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <SidebarTrigger className="text-white hover:bg-white/20 transition-colors p-1" />
          <div>
            <h1 className="text-lg font-bold text-white">RidersTurn</h1>
            <p className="text-xs text-orange-100">Your Ride Partner</p>
          </div>
        </div>
        
        {/* Location and Search in one line */}
        <div className="flex items-center gap-2 text-white">
          <MapPin className="w-4 h-4 text-orange-200" />
          {isCustomLocation ? (
            <Input
              value={customLocationInput}
              onChange={(e) => setCustomLocationInput(e.target.value)}
              onKeyDown={handleCustomLocationKeyPress}
              onBlur={handleCustomLocationSubmit}
              placeholder="Enter location..."
              className="h-7 text-xs px-2 w-24 border-orange-200 bg-white/90 text-gray-800"
              autoFocus
            />
          ) : (
            <Select value={searchLocation} onValueChange={handleLocationSelect}>
              <SelectTrigger className="h-7 text-xs px-2 border-none shadow-none bg-transparent hover:bg-white/20 transition-colors text-orange-100 hover:text-white w-20">
                <div className="flex items-center gap-1">
                  <SelectValue />
                  <ChevronDown className="w-3 h-3" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {popularLocations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
                <SelectItem value="custom">
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>Custom location...</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>
      </div>

      {/* Search Bar with Filter */}
      <div className="px-3 pb-3">
        <div className="flex items-center gap-2">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search rides, locations, or organizers..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 h-9 border-none bg-white/95 backdrop-blur-sm shadow-lg rounded-xl focus:ring-2 focus:ring-white/50 focus:bg-white transition-all text-sm pr-4"
            />
          </div>
          
          {/* Filter Button */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onFilterClick}
            className="relative bg-white/95 hover:bg-orange-50 border-orange-200 px-3 h-9 rounded-xl shadow-lg"
          >
            <Filter className="w-4 h-4 text-orange-600" />
            {filterCount > 0 && (
              <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 bg-orange-500 text-white text-xs flex items-center justify-center rounded-full">
                {filterCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
