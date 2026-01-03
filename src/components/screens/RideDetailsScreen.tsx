import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import GlobalHeader from "@/components/GlobalHeader";
import FadeIn from "@/components/ui/FadeIn";
import { useSimulatedLoading } from "@/hooks/useLoading";
import RideDetailsSkeleton from "./RideDetailsSkeleton";
import { MapPin, Clock, Users, Shield, Coffee, Fuel, ArrowLeft, Phone, CheckCircle, AlertCircle, Star, MessageCircle, Camera, UserPlus, Cloud, Thermometer, Navigation, Route, TrendingUp, Eye, Calendar, DollarSign, Award, FileText, AlertTriangle, Zap } from "lucide-react";

const RideDetailsScreen = () => {
  const { isLoading } = useSimulatedLoading(1200); // 1.2 second loading
  const [isJoined, setIsJoined] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [pillionRequested, setPillionRequested] = useState(false);
  const [showAllPreviousTrips, setShowAllPreviousTrips] = useState(false);
  
  const ride = {
    title: "Nandi Sunrise Sprint",
    date: "Sunday, January 7th",
    time: "6:00 AM - 6:00 PM",
    startTime: "6:00 AM",
    endTime: "6:00 PM",
    distance: "80 km round trip",
    organizer: "Rajesh Kumar",
    organizerRating: 4.8,
    organizerRides: 45,
    organizerPhone: "+91 98765 43210",
    startLocation: "Cubbon Park, Bangalore",
    destination: "Nandi Hills",
    type: "Breakfast",
    difficulty: "Moderate",
    joinedCount: 12,
    maxRiders: 15,
    pillionAvailable: true,
    pillionCount: 3,
    maxPillion: 5,
    
    // Enhanced Cost Breakdown
    costs: {
      fuel: "₹200-300",
      breakfast: 250,
      tollCharges: 50,
      parking: 30,
      total: "₹530-630"
    },
    
    // Route Information
    route: {
      highlights: ["Bangalore City", "Electronic City", "Hoskote", "Chikkaballapur", "Nandi Hills"],
      roadConditions: "Good tarmac roads, some winding sections near hills",
      fuelStops: ["HP Petrol Pump, Electronic City", "Indian Oil, Hoskote"],
      restrooms: ["Available at fuel stops and Nandi Hills base"],
      emergencyContact: "+91 98765 43210"
    },
    
    // Bike Requirements
    bikeRequirements: {
      minimumCC: "100cc and above",
      recommended: ["Royal Enfield", "Bajaj Pulsar", "Honda CB", "Any Sports Bike"],
      documents: ["Valid Driving License", "RC Book", "Insurance Papers", "PUC Certificate"],
      modifications: "Stock bikes preferred, loud exhausts discouraged"
    },
    
    // What's Included/Excluded
    includes: [
      "Experienced ride leader",
      "Group riding coordination", 
      "Basic first aid support",
      "Photo/video coverage",
      "Digital ride certificate"
    ],
    excludes: [
      "Fuel costs",
      "Meal costs", 
      "Accommodation",
      "Personal insurance",
      "Bike breakdown support"
    ],
    
    // Safety & Requirements
    safetyGear: {
      mandatory: ["DOT/ISI Helmet", "Riding Gloves", "Proper Footwear"],
      recommended: ["Riding Jacket", "Knee Pads", "Reflective Vest"],
      prohibited: ["Flip-flops", "Shorts", "Tank tops"]
    },
    
    weather: {
      condition: "Partly Cloudy",
      temperature: "18°C - 28°C",
      humidity: "65%",
      windSpeed: "15 km/h",
      rainChance: "10%"
    },
    
    // Previous Trips History
    previousTrips: {
      totalCompletedTrips: 24,
      lastTripDate: "Dec 31, 2024",
      averageRating: 4.7,
      totalRiders: 312,
      totalPhotos: 1247,
      trips: [
        {
          id: 1,
          date: "Dec 31, 2024",
          participants: 14,
          rating: 4.8,
          weather: "Perfect",
          photos: 89,
          highlights: ["Amazing sunrise", "Perfect weather", "Great group"],
          expenses: {
            actualFuel: "₹280",
            breakfast: "₹230",
            tolls: "₹50",
            total: "₹560"
          },
          testimonial: "One of the best rides ever! The sunrise view was absolutely breathtaking and the group was fantastic.",
          reviewer: "Priya M.",
          reviewerRating: 5,
          featuredPhoto: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
        },
        {
          id: 2,
          date: "Dec 17, 2024",
          participants: 12,
          rating: 4.6,
          weather: "Cloudy",
          photos: 67,
          highlights: ["Good roads", "Nice group dynamics", "Safe ride"],
          expenses: {
            actualFuel: "₹290",
            breakfast: "₹250",
            tolls: "₹50",
            total: "₹590"
          },
          testimonial: "Well organized ride with experienced riders. Safety was prioritized throughout.",
          reviewer: "Amit K.",
          reviewerRating: 5,
          featuredPhoto: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop"
        },
        {
          id: 3,
          date: "Dec 3, 2024",
          participants: 15,
          rating: 4.9,
          weather: "Clear",
          photos: 112,
          highlights: ["Perfect weather", "Stunning views", "Great breakfast"],
          expenses: {
            actualFuel: "₹275",
            breakfast: "₹240",
            tolls: "₹50",
            total: "₹565"
          },
          testimonial: "Amazing experience! The views were spectacular and everyone was so friendly.",
          reviewer: "Sneha R.",
          reviewerRating: 5,
          featuredPhoto: "https://images.unsplash.com/photo-1544277149-6e4bf999d75f?w=400&h=300&fit=crop"
        },
        {
          id: 4,
          date: "Nov 19, 2024",
          participants: 13,
          rating: 4.5,
          weather: "Misty",
          photos: 78,
          highlights: ["Mystic fog", "Adventure feel", "Good coordination"],
          expenses: {
            actualFuel: "₹285",
            breakfast: "₹260",
            tolls: "₹50",
            total: "₹595"
          },
          testimonial: "The misty weather added a magical touch to the ride. Well managed by the organizer.",
          reviewer: "Karthik P.",
          reviewerRating: 4,
          featuredPhoto: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
        },
        {
          id: 5,
          date: "Nov 5, 2024",
          participants: 11,
          rating: 4.7,
          weather: "Sunny",
          photos: 94,
          highlights: ["Perfect temperature", "Great company", "Smooth ride"],
          expenses: {
            actualFuel: "₹270",
            breakfast: "₹245",
            tolls: "₹50",
            total: "₹565"
          },
          testimonial: "Perfect ride for beginners and experienced riders alike. Highly recommended!",
          reviewer: "Divya S.",
          reviewerRating: 5,
          featuredPhoto: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
        }
      ]
    },
    
    // Schedule Details
    schedule: [
      { time: "6:00 AM", activity: "Assembly & Brief", location: "Cubbon Park" },
      { time: "6:30 AM", activity: "Ride Start", location: "Cubbon Park" },
      { time: "8:30 AM", activity: "Fuel & Refresh", location: "Hoskote" },
      { time: "10:00 AM", activity: "Reach Nandi Hills", location: "Nandi Hills" },
      { time: "10:30 AM", activity: "Breakfast & Explore", location: "Hill Station" },
      { time: "12:00 PM", activity: "Return Journey", location: "Nandi Hills" },
      { time: "2:00 PM", activity: "Lunch Break", location: "Chikkaballapur" },
      { time: "6:00 PM", activity: "Reach Bangalore", location: "Cubbon Park" }
    ],
    
    // Cancellation Policy
    cancellation: {
      policy: "Free cancellation up to 24 hours before ride",
      refund: "Full refund for cancellations 24+ hours prior",
      weather: "Ride cancelled if heavy rain/dangerous conditions",
      minimum: "Ride cancelled if less than 8 participants"
    },
    
    rules: [
      "🏍️ Valid driving license and documents mandatory",
      "⛑️ ISI/DOT approved helmet compulsory - no exceptions",
      "👥 Stay with group leader at all times - no solo riding",
      "⛽ Fuel tank must be full before ride start", 
      "📱 Keep phone charged for emergency communication",
      "🚫 No stunts, wheelies, or reckless overtaking",
      "🍺 Zero tolerance for alcohol or substance abuse",
      "👕 Proper riding gear required - no shorts/sandals",
      "⏰ Punctuality mandatory - ride starts sharp on time",
      "🚫 No pillion riders without prior organizer approval",
      "📋 Follow traffic rules and speed limits strictly",
      "🛑 Mandatory safety briefing attendance before start"
    ],
    
    reviews: [
      { user: "Amit P", rating: 5, comment: "Amazing ride! Well organized and great views." },
      { user: "Priya S", rating: 4, comment: "Good experience, loved the sunrise at Nandi Hills." }
    ]
  };

  const averageRating = ride.reviews.reduce((sum, review) => sum + review.rating, 0) / ride.reviews.length;

  const handleJoinRide = () => {
    setIsJoined(true);
  };

  const handleContactOrganizer = () => {
    window.open(`tel:${ride.organizerPhone}`);
  };

  const handlePillionRequest = () => {
    setPillionRequested(true);
  };

  if (isLoading) {
    return <RideDetailsSkeleton />;
  }

  return (
    <FadeIn>
      <div className="min-h-screen bg-gray-50">
        <GlobalHeader 
          title="Ride Details"
          showBack={true}
          showNotifications={true}
          notificationCount={3}
        />

        <div className="p-3 space-y-3 pb-20">
          {/* Main Ride Info */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-xl">{ride.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {ride.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {ride.startTime} - {ride.endTime}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {ride.distance}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {ride.difficulty}
                    </div>
                  </div>
                  
                  <div className="mt-3 p-3 bg-orange-50 rounded-lg">
                    <div className="text-sm font-medium text-orange-800 mb-1">Route</div>
                    <div className="text-xs text-orange-700">
                      {ride.startLocation} → {ride.destination}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{ride.route.roadConditions}</div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 ml-4">
                  <Badge variant="outline" className="text-center">{ride.type}</Badge>
                  <Badge variant="secondary" className="text-center">{ride.difficulty}</Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{averageRating.toFixed(1)} ({ride.reviews.length})</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Organizer Info */}
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-orange-600">
                      {ride.organizer.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      {ride.organizer}
                      <Shield className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{ride.organizerRating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Route className="w-3 h-3" />
                        <span>{ride.organizerRides} rides led</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={handleContactOrganizer}>
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>

              {/* Cost Breakdown */}
              <div className="p-3 border border-orange-200 rounded-lg bg-orange-50">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-5 h-5 text-orange-600" />
                  <span className="font-medium text-orange-800">Cost Breakdown</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span>Fuel (est):</span>
                    <span className="font-medium">{ride.costs.fuel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Breakfast:</span>
                    <span className="font-medium">₹{ride.costs.breakfast}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tolls & Parking:</span>
                    <span className="font-medium">₹{ride.costs.tollCharges + ride.costs.parking}</span>
                  </div>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-semibold text-orange-800">
                  <span>Total Cost:</span>
                  <span>{ride.costs.total}</span>
                </div>
              </div>

              {/* Participation Status */}
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-blue-800">
                      {ride.joinedCount}/{ride.maxRiders} Riders Joined
                    </div>
                    <div className="text-sm text-blue-600">
                      {ride.maxRiders - ride.joinedCount} spots remaining
                    </div>
                  </div>
                </div>
                <div className="w-16 h-2 bg-blue-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${(ride.joinedCount / ride.maxRiders) * 100}%` }}
                  />
                </div>
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
                <div className="text-gray-600">Rain Chance: {ride.weather.rainChance}</div>
              </div>
            </CardContent>
          </Card>

          {/* Safety Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Safety Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="font-medium text-sm mb-2 text-red-600">Mandatory Gear</div>
                <div className="space-y-1">
                  {ride.safetyGear.mandatory.map((gear, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span>{gear}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="font-medium text-sm mb-2 text-green-600">Recommended Gear</div>
                <div className="space-y-1">
                  {ride.safetyGear.recommended.map((gear, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{gear}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Detailed Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {ride.schedule.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-b-0">
                    <div className="text-sm font-medium text-orange-600 w-16 flex-shrink-0">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{item.activity}</div>
                      <div className="text-xs text-gray-500">{item.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rules */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Ride Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {ride.rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-600">{index + 1}</span>
                    </div>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Previous Trips Section */}
        <div className="p-4">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">Ride History & Reviews</span>
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  {ride.previousTrips.totalCompletedTrips} completed
                </Badge>
              </CardTitle>
              <div className="flex items-center gap-4 text-sm text-green-700">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-500" />
                  <span className="font-medium">{ride.previousTrips.averageRating}</span>
                  <span className="text-green-600">({ride.previousTrips.totalRiders} riders)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Camera className="w-4 h-4" />
                  <span>{ride.previousTrips.totalPhotos} photos shared</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Last: {ride.previousTrips.lastTripDate}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Recent Trip Highlights */}
              <div className="grid gap-3">
                {ride.previousTrips.trips.slice(0, showAllPreviousTrips ? 5 : 2).map((trip, index) => (
                  <div key={trip.id} className="bg-white rounded-lg p-4 border border-green-100 shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                            {trip.date}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{trip.rating}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Users className="w-3 h-3" />
                            <span>{trip.participants} riders</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <span className="flex items-center gap-1">
                            <Cloud className="w-3 h-3" />
                            {trip.weather}
                          </span>
                          <span className="flex items-center gap-1">
                            <Camera className="w-3 h-3" />
                            {trip.photos} photos
                          </span>
                        </div>
                      </div>
                      <div className="w-16 h-12 rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src={trip.featuredPhoto} 
                          alt="Trip highlight"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Trip Review */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <p className="text-sm text-gray-700 italic mb-2">"{trip.testimonial}"</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">- {trip.reviewer}</span>
                        <div className="flex">
                          {[...Array(trip.reviewerRating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actual Expenses */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-50 rounded-lg p-2">
                        <div className="text-xs text-blue-600 font-medium mb-1">Actual Expenses</div>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span>Fuel:</span>
                            <span className="font-medium">{trip.expenses.actualFuel}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Food:</span>
                            <span className="font-medium">{trip.expenses.breakfast}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tolls:</span>
                            <span className="font-medium">{trip.expenses.tolls}</span>
                          </div>
                          <div className="flex justify-between border-t pt-1 font-semibold text-blue-700">
                            <span>Total:</span>
                            <span>{trip.expenses.total}</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-2">
                        <div className="text-xs text-amber-600 font-medium mb-1">Trip Highlights</div>
                        <div className="space-y-1">
                          {trip.highlights.slice(0, 3).map((highlight, i) => (
                            <div key={i} className="text-xs text-amber-700 flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View More Button */}
              {ride.previousTrips.trips.length > 2 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAllPreviousTrips(!showAllPreviousTrips)}
                  className="w-full border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300"
                >
                  {showAllPreviousTrips ? "Show Less" : `View All ${ride.previousTrips.totalCompletedTrips} Previous Trips`}
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Button>
              )}

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-3 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Why Join This Ride?</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1 text-green-700">
                    <CheckCircle className="w-3 h-3" />
                    <span>Proven track record</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-700">
                    <CheckCircle className="w-3 h-3" />
                    <span>Consistent experience</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-700">
                    <CheckCircle className="w-3 h-3" />
                    <span>Transparent costs</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-700">
                    <CheckCircle className="w-3 h-3" />
                    <span>Great community</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Action */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
          <div className="max-w-md mx-auto">
            {!isJoined ? (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Estimated Total Cost:</span>
                  <span>{ride.costs.total}</span>
                </div>
                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600" 
                  size="lg"
                  onClick={handleJoinRide}
                  disabled={ride.joinedCount >= ride.maxRiders}
                >
                  {ride.joinedCount >= ride.maxRiders ? "Ride Full" : "Join Ride (Free)"}
                </Button>
                <div className="text-xs text-center text-gray-500">
                  {ride.maxRiders - ride.joinedCount} spots left • Free cancellation 24h before
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">You're Registered!</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" onClick={handleContactOrganizer}>
                    <Phone className="w-4 h-4 mr-1" />
                    Contact Organizer
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Group Chat
                  </Button>
                </div>
                <div className="text-xs text-center text-gray-500 mt-2">
                  Assembly point: {ride.startLocation} at {ride.startTime}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default RideDetailsScreen;
