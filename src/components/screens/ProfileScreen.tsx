
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, MapPin, Award, Calendar, Edit3 } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Kumar",
    phone: "+91 98765 43210",
    email: "alex.kumar@email.com",
    bike: "Royal Enfield Classic 350",
    ridingLevel: "Intermediate",
    location: "Bangalore, Karnataka"
  });

  const rideStats = {
    totalRides: 24,
    ridesOrganized: 6,
    totalDistance: "1,840 km",
    noShows: 1
  };

  const achievements = [
    { name: "First Ride", description: "Completed your first group ride", earned: true },
    { name: "Organizer", description: "Organized your first ride", earned: true },
    { name: "Explorer", description: "Completed 10 rides", earned: true },
    { name: "Road Captain", description: "Organized 5 rides", earned: true },
    { name: "Distance Rider", description: "Covered 1000+ km", earned: true },
    { name: "Weekend Warrior", description: "Complete 25 rides", earned: false }
  ];

  const recentRides = [
    { name: "Mysore Palace Run", date: "Dec 24, 2023", distance: "150 km" },
    { name: "Morning Beach Drive", date: "Dec 17, 2023", distance: "60 km" },
    { name: "Hill Station Express", date: "Dec 10, 2023", distance: "120 km" }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save profile logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <SidebarTrigger />
            <div>
              <h1 className="text-xl font-bold">Profile</h1>
              <p className="text-sm text-gray-600">Manage your rider profile</p>
            </div>
          </div>
          <Button
            variant={isEditing ? "default" : "outline"}
            size="sm"
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
          >
            {isEditing ? "Save" : <Edit3 className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  disabled={!isEditing}
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  disabled={!isEditing}
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  disabled={!isEditing}
                />
              </div>

              <div>
                <Label htmlFor="bike">Bike Model</Label>
                <Input
                  id="bike"
                  value={profile.bike}
                  onChange={(e) => setProfile({...profile, bike: e.target.value})}
                  disabled={!isEditing}
                />
              </div>

              <div>
                <Label htmlFor="level">Riding Level</Label>
                {isEditing ? (
                  <Select value={profile.ridingLevel} onValueChange={(value) => setProfile({...profile, ridingLevel: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <Input value={profile.ridingLevel} disabled />
                )}
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={profile.location}
                  onChange={(e) => setProfile({...profile, location: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ride Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Ride Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{rideStats.totalRides}</div>
                <div className="text-sm text-gray-600">Total Rides</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{rideStats.ridesOrganized}</div>
                <div className="text-sm text-gray-600">Organized</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{rideStats.totalDistance}</div>
                <div className="text-sm text-gray-600">Distance</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-400">{rideStats.noShows}</div>
                <div className="text-sm text-gray-600">No-shows</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="w-5 h-5" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    achievement.earned ? 'bg-orange-50 border border-orange-200' : 'bg-gray-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    achievement.earned ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-500'
                  }`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{achievement.name}</div>
                    <div className="text-xs text-gray-600">{achievement.description}</div>
                  </div>
                  {achievement.earned && (
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      Earned
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Rides */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Rides</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentRides.map((ride, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm">{ride.name}</div>
                      <div className="text-xs text-gray-500">{ride.date}</div>
                    </div>
                    <Badge variant="outline">{ride.distance}</Badge>
                  </div>
                  {index < recentRides.length - 1 && <Separator className="mt-3" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileScreen;
