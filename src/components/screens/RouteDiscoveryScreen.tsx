
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation, MapPin, Star, Route, TrendingUp, Users, Clock, Fuel, Camera, Search, Filter } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const RouteDiscoveryScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("trending");

  const trendingRoutes = [
    {
      id: 1,
      name: "Nandi to Skandagiri Loop",
      distance: "95 km",
      difficulty: "Moderate",
      rating: 4.8,
      riders: 156,
      duration: "4-5 hours",
      highlights: ["Sunrise Point", "Ancient Fort", "Hill Climb"],
      creator: "Rajesh Kumar",
      isVerified: true,
      photos: 23,
      fuelStops: 2
    },
    {
      id: 2,
      name: "Coastal Paradise Route",
      distance: "180 km", 
      difficulty: "Easy",
      rating: 4.9,
      riders: 234,
      duration: "6-7 hours",
      highlights: ["Beach Views", "Lighthouse", "Seafood Stops"],
      creator: "Priya Singh",
      isVerified: true,
      photos: 45,
      fuelStops: 3
    },
    {
      id: 3,
      name: "Western Ghats Explorer",
      distance: "320 km",
      difficulty: "Hard",
      rating: 4.7,
      riders: 89,
      duration: "2 days",
      highlights: ["Mountain Passes", "Waterfalls", "Wildlife"],
      creator: "Mountain Rangers",
      isVerified: true,
      photos: 67,
      fuelStops: 5
    }
  ];

  const categories = [
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "new", label: "New Routes", icon: Route },
    { id: "popular", label: "Most Popular", icon: Star },
    { id: "nearby", label: "Nearby", icon: MapPin }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Moderate": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="flex items-center gap-3 p-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-xl font-bold">Route Discovery</h1>
            <p className="text-sm text-gray-600">Find amazing routes shared by riders</p>
          </div>
        </div>
        
        {/* Search */}
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search routes by name, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "secondary"}
                  className="cursor-pointer whitespace-nowrap flex items-center gap-1"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon className="w-3 h-3" />
                  {category.label}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-20">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-16 flex-col">
            <Route className="w-5 h-5 mb-1" />
            <span className="text-xs">Create Route</span>
          </Button>
          <Button variant="outline" className="h-16 flex-col">
            <Navigation className="w-5 h-5 mb-1" />
            <span className="text-xs">Track Ride</span>
          </Button>
        </div>

        {/* Featured Routes */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Featured Routes</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          
          {trendingRoutes.map((route) => (
            <Card key={route.id} className="overflow-hidden">
              <div className="relative h-24 bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-2 left-3 text-white">
                  <h3 className="font-bold">{route.name}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <Navigation className="w-3 h-3" />
                    <span>{route.distance}</span>
                    <Badge className={getDifficultyColor(route.difficulty)}>
                      {route.difficulty}
                    </Badge>
                  </div>
                </div>
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-xs">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{route.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-4 space-y-3">
                {/* Creator Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-orange-600">
                        {route.creator.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium flex items-center gap-1">
                        {route.creator}
                        {route.isVerified && <Badge variant="secondary" className="text-xs">Verified</Badge>}
                      </div>
                      <div className="text-xs text-gray-500">{route.riders} riders completed</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">{route.duration}</div>
                </div>

                {/* Highlights */}
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Highlights</div>
                  <div className="flex flex-wrap gap-1">
                    {route.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Route Stats */}
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users className="w-3 h-3" />
                    <span>{route.riders}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Camera className="w-3 h-3" />
                    <span>{route.photos}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Fuel className="w-3 h-3" />
                    <span>{route.fuelStops} stops</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1 bg-orange-500 hover:bg-orange-600">
                    Use Route
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Route Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Browse by Category</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            {[
              { name: "Scenic Routes", count: 45, icon: Camera },
              { name: "Adventure Trails", count: 32, icon: Navigation },
              { name: "Heritage Tours", count: 28, icon: Star },
              { name: "Coffee Trails", count: 15, icon: MapPin }
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <Button key={index} variant="outline" className="h-16 flex-col justify-center">
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">{category.name}</span>
                  <span className="text-xs text-gray-500">{category.count} routes</span>
                </Button>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RouteDiscoveryScreen;
