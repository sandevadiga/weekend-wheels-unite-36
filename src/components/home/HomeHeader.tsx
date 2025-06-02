
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface HomeHeaderProps {
  searchLocation: string;
  searchQuery: string;
  onLocationChange: (location: string) => void;
  onSearchChange: (query: string) => void;
}

const HomeHeader = ({ searchLocation, searchQuery, onLocationChange, onSearchChange }: HomeHeaderProps) => {
  return (
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
          onChange={(e) => onLocationChange(e.target.value)}
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
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
