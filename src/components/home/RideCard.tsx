
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Star } from "lucide-react";

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
}

interface RideCardProps {
  ride: Ride;
}

const RideCard = ({ ride }: RideCardProps) => {
  return (
    <Card className="w-full hover:shadow-md transition-shadow">
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
  );
};

export default RideCard;
