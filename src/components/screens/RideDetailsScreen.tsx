
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, Users, Shield, Coffee, Fuel, ArrowLeft, Phone, CheckCircle, AlertCircle, Star, MessageCircle, Camera, UserPlus, Cloud, Thermometer } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";
import RideChat from "@/components/RideChat";

const RideDetailsScreen = () => {
  const { toast } = useToast();
  const [isJoined, setIsJoined] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [pillionRequested, setPillionRequested] = useState(false);
  
  const ride = {
    title: "Nandi Sunrise Sprint",
    date: "Sunday, January 7th",
    time: "6:00 AM",
    distance: "80 km round trip",
    organizer: "Rajesh Kumar",
    startLocation: "Cubbon Park, Bangalore",
    destination: "Nandi Hills",
    type: "Breakfast",
    joinedCount: 12,
    maxRiders: 15,
    pillionAvailable: true,
    pillionCount: 3,
    maxPillion: 5,
    estimatedCost: "₹500-800",
    weather: {
      condition: "Partly Cloudy",
      temperature: "18°C",
      humidity: "65%",
      windSpeed: "15 km/h"
    },
    rules: [
      "Helmet mandatory",
      "No stunts or reckless riding",
      "Stay with the group",
      "Fuel up before start"
    ],
    pitStops: [
      { name: "Sunrise Point", type: "scenic", time: "7:30 AM" },
      { name: "Hills Cafe", type: "breakfast", time: "8:00 AM" },
      { name: "Fuel Station", type: "fuel", time: "9:30 AM" }
    ],
    riders: [
      "Rajesh Kumar", "Priya Singh", "Amit Patel", "Sneha Reddy", 
      "Vikram Raj", "Anita Sharma", "Rohit Kumar", "Kavya M",
      "Suresh B", "Divya K", "Manoj R", "Pooja S"
    ],
    reviews: [
      {
        id: 1,
        rider: "Amit Patel",
        rating: 5,
        date: "2 days ago",
        comment: "Amazing sunrise view! Rajesh is an excellent organizer. Highly recommend this route.",
        photos: 3
      },
      {
        id: 2,
        rider: "Sneha Reddy", 
        rating: 4,
        date: "1 week ago",
        comment: "Great ride but the weather was a bit challenging. Overall fun experience!",
        photos: 0
      },
      {
        id: 3,
        rider: "Vikram Raj",
        rating: 5,
        date: "2 weeks ago",
        comment: "Perfect route for beginners. Good pit stops and beautiful scenery.",
        photos: 5
      }
    ],
    photos: [
      "photo-1470071459604-3b5ec3a7fe05",
      "photo-1482938289607-e9573fc25ebb", 
      "photo-1433086966358-54859d0ed716"
    ]
  };

  const getPitStopIcon = (type: string) => {
    switch (type) {
      case 'breakfast': return Coffee;
      case 'fuel': return Fuel;
      default: return MapPin;
    }
  };

  const handleJoinRide = () => {
    setIsJoined(true);
    toast({
      title: "Ride joined successfully!",
      description: "You're now part of this ride. Don't forget to check-in before the ride starts."
    });
  };

  const handlePillionRequest = () => {
    setPillionRequested(true);
    toast({
      title: "Pillion ride requested!",
      description: "Organizer will review your request and get back to you."
    });
  };

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    toast({
      title: "Checked in successfully!",
      description: "Organizer has been notified. Have a safe ride!"
    });
  };

  const handleContactOrganizer = () => {
    toast({
      title: "Contact Organizer",
      description: "Opening WhatsApp to message Rajesh Kumar..."
    });
  };

  const averageRating = ride.reviews.reduce((sum, review) => sum + review.rating, 0) / ride.reviews.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="flex items-center gap-3 p-4">
          <SidebarTrigger />
          <ArrowLeft className="w-5 h-5 cursor-pointer" />
          <div>
            <h1 className="text-xl font-bold">Ride Details</h1>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 pb-20">
        {/* Main Ride Info */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{ride.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {ride.date}, {ride.time}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                  <MapPin className="w-4 h-4" />
                  {ride.distance}
                </div>
                <div className="text-sm font-medium text-green-600 mt-1">{ride.estimatedCost}</div>
              </div>
              <div className="flex flex-col gap-2">
                <Badge variant="outline">{ride.type}</Badge>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{averageRating.toFixed(1)} ({ride.reviews.length})</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-orange-600">
                    {ride.organizer.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium">{ride.organizer}</div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Shield className="w-3 h-3" />
                    Verified Organizer
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleContactOrganizer}>
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Weather Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Cloud className="w-5 h-5" />
              Weather Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-gray-500" />
                <span>{ride.weather.condition}</span>
              </div>
              <div className="flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-gray-500" />
                <span>{ride.weather.temperature}</span>
              </div>
              <div className="text-gray-600">Humidity: {ride.weather.humidity}</div>
              <div className="text-gray-600">Wind: {ride.weather.windSpeed}</div>
            </div>
          </CardContent>
        </Card>

        {/* Pillion Option */}
        {ride.pillionAvailable && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <UserPlus className="w-5 h-5" />
                Pillion Rides Available
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-3">
                <div>
                  <div className="text-sm font-medium">Available Spots: {ride.maxPillion - ride.pillionCount}</div>
                  <div className="text-xs text-gray-500">Perfect for riders without bikes</div>
                </div>
                <Badge variant="secondary">{ride.pillionCount}/{ride.maxPillion} taken</Badge>
              </div>
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full"
                onClick={handlePillionRequest}
                disabled={pillionRequested}
              >
                {pillionRequested ? "Request Sent" : "Request Pillion Ride"}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Check-in Status */}
        {isJoined && (
          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isCheckedIn ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium text-green-700">Checked In</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 text-orange-500" />
                      <span className="text-sm font-medium text-orange-700">Check-in Required</span>
                    </>
                  )}
                </div>
                {!isCheckedIn && (
                  <Button size="sm" onClick={handleCheckIn}>
                    Check In
                  </Button>
                )}
              </div>
              {!isCheckedIn && (
                <p className="text-xs text-gray-500 mt-1">
                  Please check-in 30 minutes before the ride starts
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Tabs for detailed info */}
        <Tabs defaultValue="route" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="route">Route</TabsTrigger>
            <TabsTrigger value="riders">Riders</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
          </TabsList>

          <TabsContent value="route" className="space-y-4">
            {/* Route Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Route Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-gray-700">Start Point</div>
                  <div className="text-sm text-gray-600">{ride.startLocation}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700">Destination</div>
                  <div className="text-sm text-gray-600">{ride.destination}</div>
                </div>
                <Button variant="outline" className="w-full">
                  View on Google Maps
                </Button>
              </CardContent>
            </Card>

            {/* Pit Stops */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pit Stops</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ride.pitStops.map((stop, index) => {
                    const Icon = getPitStopIcon(stop.type);
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <Icon className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{stop.name}</div>
                          <div className="text-xs text-gray-500">{stop.time}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Ride Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ride Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {ride.rules.map((rule, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">{rule}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="riders">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Confirmed Riders ({ride.joinedCount}/{ride.maxRiders})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {ride.riders.map((rider, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-orange-600">
                          {rider.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm">{rider}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            {ride.reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-orange-600">
                          {review.rider.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">{review.rider}</div>
                        <div className="text-xs text-gray-500">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{review.comment}</p>
                  {review.photos > 0 && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Camera className="w-3 h-3" />
                      <span>{review.photos} photos</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="photos">
            <div className="grid grid-cols-3 gap-2">
              {ride.photos.map((photo, index) => (
                <div key={index} className="aspect-square bg-gradient-to-br from-orange-200 to-orange-400 rounded-lg"></div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Ride Chat */}
        {isJoined && (
          <RideChat 
            rideId={ride.title}
            isOrganizer={false}
            currentUser="Alex Kumar"
          />
        )}
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <Button 
          className="w-full bg-orange-500 hover:bg-orange-600" 
          size="lg"
          onClick={handleJoinRide}
          disabled={isJoined}
        >
          {isJoined ? "Joined ✓" : "Join This Ride"}
        </Button>
      </div>
    </div>
  );
};

export default RideDetailsScreen;
