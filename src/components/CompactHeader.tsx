import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CompactHeaderProps {
  showSearch?: boolean;
  showNotifications?: boolean;
  showProfile?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  notificationCount?: number;
}

const CompactHeader = ({ 
  showSearch = false, 
  showNotifications = false, 
  showProfile = false,
  searchValue = "",
  onSearchChange,
  notificationCount = 0
}: CompactHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg sticky top-0 z-10">
      {/* Main Header Row */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <SidebarTrigger className="text-white hover:bg-white/20 transition-colors p-1 rounded" />
          <div>
            <h1 className="text-lg font-bold text-white">RidersTurn</h1>
            <p className="text-xs text-orange-100">Your Ride Partner</p>
          </div>
        </div>        
        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {showNotifications && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative text-white hover:bg-white/20 p-2"
            >
              <Bell className="w-4 h-4" />
              {notificationCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-red-500 text-white text-xs flex items-center justify-center">
                  {notificationCount > 9 ? '9+' : notificationCount}
                </Badge>
              )}
            </Button>
          )}
          
          {showProfile && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/20 p-2"
            >
              <User className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Search Row */}
      {showSearch && (
        <div className="px-3 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="w-full pl-10 h-9 border-none bg-white/95 backdrop-blur-sm shadow-lg rounded-xl focus:ring-2 focus:ring-white/50 focus:bg-white transition-all text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CompactHeader;