
import { MapPin, Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface HomeHeaderProps {
  searchLocation: string;
  searchQuery: string;
  onLocationChange: (location: string) => void;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  filterBy: string;
  onFilterChange: (filter: string) => void;
}

const HomeHeader = ({ 
  searchLocation, 
  searchQuery, 
  onLocationChange, 
  onSearchChange,
  sortBy,
  onSortChange,
  filterBy,
  onFilterChange
}: HomeHeaderProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10 shadow-sm">
      {/* App Branding Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="text-white hover:bg-white/20" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Weekend Rider</h1>
                <div className="flex items-center gap-1 text-xs text-orange-100">
                  <MapPin className="w-3 h-3" />
                  <span>{searchLocation}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sort and Filter Controls */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 h-8">
                  <ArrowUpDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem onClick={() => onSortChange('distance')}>
                  Sort by Distance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onSortChange('people')}>
                  Sort by People Count
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onSortChange('date')}>
                  Sort by Date
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 h-8">
                  <SlidersHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem onClick={() => onFilterChange('all')}>
                  All Rides
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onFilterChange('today')}>
                  Today
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onFilterChange('tomorrow')}>
                  Tomorrow
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onFilterChange('weekend')}>
                  This Weekend
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onFilterChange('nearby')}>
                  Nearby (< 5km)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onFilterChange('available')}>
                  Available Spots
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search rides, locations, or organizers..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 border-gray-200 focus:border-orange-300 transition-colors bg-white/80 backdrop-blur-sm shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
