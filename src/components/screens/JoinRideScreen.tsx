
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { QrCode, Hash, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const JoinRideScreen = () => {
  const [tripCode, setTripCode] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleJoinRide = () => {
    if (tripCode.trim()) {
      toast({
        title: "Searching for ride...",
        description: `Looking for ride with code: ${tripCode}`
      });
      
      // Simulate finding a ride
      setTimeout(() => {
        toast({
          title: "Ride Found!",
          description: "Redirecting to ride details..."
        });
        navigate(`/ride/1`); // Navigate to ride details
      }, 1500);
    }
  };

  const suggestedCodes = ["NH001", "CT002", "CH003", "WM004", "MC005"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="flex items-center gap-3 p-4">
          <SidebarTrigger />
          <ArrowLeft className="w-5 h-5 cursor-pointer" onClick={() => navigate('/')} />
          <div>
            <h1 className="text-xl font-bold">Join Ride</h1>
            <p className="text-sm text-gray-600">Enter trip code to join a ride</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-8 h-8 text-orange-500" />
            </div>
            <CardTitle>Join a Ride</CardTitle>
            <p className="text-sm text-gray-600">
              Get the trip code from your ride organizer and enter it below
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Enter trip code (e.g. NH001)"
                value={tripCode}
                onChange={(e) => setTripCode(e.target.value.toUpperCase())}
                className="pl-10 text-center text-lg font-mono tracking-wider"
                maxLength={6}
              />
            </div>
            
            {/* Suggested Codes */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500 text-center">Quick access codes:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {suggestedCodes.map((code) => (
                  <Button
                    key={code}
                    variant="outline"
                    size="sm"
                    className="font-mono text-xs h-8"
                    onClick={() => setTripCode(code)}
                  >
                    #{code}
                  </Button>
                ))}
              </div>
            </div>
            
            <Button 
              onClick={handleJoinRide} 
              className="w-full bg-orange-500 hover:bg-orange-600"
              disabled={!tripCode.trim()}
            >
              Join Ride
            </Button>
            <div className="text-center">
              <p className="text-xs text-gray-500">
                Don't have a trip code? Browse available rides or ask your organizer
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JoinRideScreen;
