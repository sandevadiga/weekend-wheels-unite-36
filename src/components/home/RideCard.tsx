
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
        title: "Joining Waitlist",
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
        title: "Link Copied!",
        description: "Ride link has been copied to clipboard."
      });
    }
  };

  const handlePillionRequest = () => {
    toast({
      title: "Pillion Request Sent!",
      description: "Organizer will review your pillion ride request."
    });
  };

  return (
    <Card className="w-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <CardTitle className="text-lg">{ride.title}</CardTitle>
              {ride.tripCode && (
                <Badge variant="outline" className="bg-orange-50 border-orange-200 text-orange-700 font-mono text-xs">
                  #{ride.tripCode}
                </Badge>
              )}
            </div>
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
            {ride.brand && (
              <div className="text-xs text-gray-500 mt-1">
                Preferred: {ride.brand}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <Badge variant="outline">{ride.type}</Badge>
            {ride.joinedCount === ride.maxRiders && (
              <Badge variant="secondary" className="text-xs">Full</Badge>
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
        <div className="flex justify-between items-center mb-3">
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
                {ride.pillionAvailable && (
                  <span className="ml-2 text-green-600">
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
          >
            <Share2 className="w-3 h-3" />
          </Button>
        </div>
        
        <div className="flex gap-2">
          <Button 
            size="sm" 
            className="bg-orange-500 hover:bg-orange-600 flex-1"
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
              className="border-green-200 text-green-700 hover:bg-green-50"
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
