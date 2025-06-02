
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Star, Share2, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Ride {
  id: number;
  title: string;
  date: string;
  distance: string;
  organizer: string;
  location: string;
  type: string;
  joinedCount: number;
  maxRiders: number;
  isOrganizer: boolean;
  distanceFromUser: string;
  pillionAvailable?: boolean;
  pillionSlots?: number;
  tripCode?: string;
  brand?: string;
  bikesJoined?: { brand: string; count: number }[];
}

interface RideCardProps {
  ride: Ride;
}

const RideCard = ({ ride }: RideCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleJoinRide = () => {
    if (ride.joinedCount === ride.maxRiders) {
      toast({
        title: "🎯 Joining Waitlist",
        description: "You've been added to the waitlist for this ride."
      });
    } else {
      navigate(`/ride/${ride.id}`);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: ride.title,
        text: `Join me for ${ride.title} on ${ride.date}`,
        url: window.location.origin + `/ride/${ride.id}`
      });
    } else {
      navigator.clipboard.writeText(window.location.origin + `/ride/${ride.id}`);
      toast({
        title: "📋 Link Copied!",
        description: "Ride link has been copied to clipboard."
      });
    }
  };

  const handlePillionRequest = () => {
    toast({
      title: "🏍️ Pillion Request Sent!",
      description: "Organizer will review your pillion ride request."
    });
  };

  const getTypeColor = (type: string) => {
    const colors = {
      "Breakfast": "bg-orange-100 text-orange-700 border-orange-200",
      "Adventure": "bg-green-100 text-green-700 border-green-200",
      "Scenic": "bg-blue-100 text-blue-700 border-blue-200",
      "Long Distance": "bg-purple-100 text-purple-700 border-purple-200",
      "Night Ride": "bg-indigo-100 text-indigo-700 border-indigo-200"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getBikesJoinedText = () => {
    if (ride.bikesJoined && ride.bikesJoined.length > 0) {
      return ride.bikesJoined
        .map(bike => `${bike.count} ${bike.brand}`)
        .join(', ');
    }
    return ride.brand ? `1 ${ride.brand}` : "No bikes yet";
  };

  return (
    <Card className="w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-0 shadow-md bg-white/90 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-lg text-gray-900">{ride.title}</CardTitle>
              {ride.tripCode && (
                <Badge variant="outline" className="bg-orange-50 border-orange-200 text-orange-700 font-mono text-xs px-2 py-1">
                  #{ride.tripCode}
                </Badge>
              )}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-orange-500" />
                <span className="font-medium">{ride.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-500" />
                <span>{ride.distance}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="text-xs bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-2 py-1 rounded-full font-medium">
                📍 {ride.distanceFromUser} away
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <Badge variant="outline" className={getTypeColor(ride.type)}>
              {ride.type}
            </Badge>
            {ride.joinedCount === ride.maxRiders && (
              <Badge variant="secondary" className="text-xs bg-red-100 text-red-700 border-red-200">
                Full
              </Badge>
            )}
            {ride.pillionAvailable && (
              <Badge variant="outline" className="text-xs bg-green-50 border-green-200 text-green-700">
                <UserPlus className="w-3 h-3 mr-1" />
                Pillion
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-sm font-bold text-orange-700">
                  {ride.organizer.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              {ride.isOrganizer && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-yellow-800 fill-yellow-800" />
                </div>
              )}
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                {ride.organizer}
                {ride.isOrganizer && <span className="text-xs text-yellow-600 font-medium">(Host)</span>}
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Users className="w-3 h-3" />
                <span className="font-medium">{ride.joinedCount}/{ride.maxRiders}</span>
                {ride.pillionAvailable && (
                  <span className="ml-2 text-green-600 font-medium">
                    • {ride.pillionSlots || 2} pillion slots
                  </span>
                )}
              </div>
            </div>
          </div>
          <Button 
            size="sm" 
            variant="outline"
            onClick={handleShare}
            className="hover:bg-gray-50 hover:scale-105 transition-all duration-200"
          >
            <Share2 className="w-3 h-3" />
          </Button>
        </div>

        {/* Bikes Joined Section */}
        <div className="mb-3 p-2 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-600 mb-1">Bikes Joined:</div>
          <div className="text-sm font-medium text-gray-800">
            🏍️ {getBikesJoinedText()}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium flex-1 shadow-md hover:shadow-lg transition-all duration-200"
            onClick={handleJoinRide}
            disabled={ride.joinedCount === ride.maxRiders && !ride.pillionAvailable}
          >
            {ride.joinedCount === ride.maxRiders ? "Join Waitlist" : "Join Ride"}
          </Button>
          
          {ride.pillionAvailable && (
            <Button 
              size="sm" 
              variant="outline"
              onClick={handlePillionRequest}
              className="border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 transition-all duration-200 hover:scale-105"
            >
              <UserPlus className="w-3 h-3 mr-1" />
              Pillion
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RideCard;
