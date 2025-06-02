
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, MapPin, Award, Calendar, Edit3, Fire, Trophy, Target, Star, Zap } from "lucide-react";
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
    noShows: 1,
    currentStreak: 7,
    longestStreak: 15,
    totalPoints: 1250,
    organizerRank: "Road Captain"
  };

  const streaks = [
    { name: "Daily Organizer", current: 7, target: 10, reward: "200 pts", type: "organizing" },
    { name: "Weekend Warrior", current: 3, target: 5, reward: "100 pts", type: "weekend" },
    { name: "Distance Rider", current: 8, target: 10, reward: "300 pts", type: "distance" }
  ];

  const achievements = [
    { name: "First Ride", description: "Completed your first group ride", earned: true, points: 50, rarity: "common" },
    { name: "Organizer", description: "Organized your first ride", earned: true, points: 100, rarity: "common" },
    { name: "Explorer", description: "Completed 10 rides", earned: true, points: 150, rarity: "common" },
    { name: "Road Captain", description: "Organized 5 rides", earned: true, points: 200, rarity: "rare" },
    { name: "Distance Master", description: "Covered 1000+ km", earned: true, points: 250, rarity: "rare" },
    { name: "Streak Legend", description: "10-day organizing streak", earned: false, points: 400, rarity: "epic" },
    { name: "Community Leader", description: "Organize 25 rides", earned: false, points: 500, rarity: "legendary" },
    { name: "Route Master", description: "Complete all popular routes", earned: false, points: 300, rarity: "epic" }
  ];

  const recentRides = [
    { name: "Mysore Palace Run", date: "Dec 24, 2023", distance: "150 km", points: 25, role: "Organizer" },
    { name: "Morning Beach Drive", date: "Dec 17, 2023", distance: "60 km", points: 15, role: "Participant" },
    { name: "Hill Station Express", date: "Dec 10, 2023", distance: "120 km", points: 30, role: "Organizer" }
  ];

  const challenges = [
    { name: "New Year Resolution", description: "Organize 5 rides in January", progress: 3, target: 5, reward: "500 pts", expires: "Jan 31" },
    { name: "Community Builder", description: "Get 50 riders to join your rides", progress: 32, target: 50, reward: "300 pts", expires: "Feb 28" }
  ];

  const handleSave = () => {
    setIsEditing(false);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "bg-gray-100 text-gray-800";
      case "rare": return "bg-blue-100 text-blue-800";
      case "epic": return "bg-purple-100 text-purple-800";
      case "legendary": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
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
        {/* Profile Info with Rank */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-600">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <Badge className="absolute -bottom-2 -right-2 bg-yellow-500 text-white text-xs">
                  {rideStats.organizerRank}
                </Badge>
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

        {/* Enhanced Statistics with Streaks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Stats & Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-2xl font-bold text-orange-600">{rideStats.totalPoints}</div>
                <div className="text-sm text-gray-600">Total Points</div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center justify-center gap-1">
                  <Fire className="w-5 h-5 text-red-500" />
                  <span className="text-2xl font-bold text-red-600">{rideStats.currentStreak}</span>
                </div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">{rideStats.ridesOrganized}</div>
                <div className="text-sm text-gray-600">Organized</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-600">{rideStats.totalDistance}</div>
                <div className="text-sm text-gray-600">Distance</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Streaks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Fire className="w-5 h-5" />
              Active Streaks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {streaks.map((streak, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-sm">{streak.name}</h3>
                    <Badge variant="outline">{streak.reward}</Badge>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-600">{streak.current}/{streak.target}</span>
                    <span className="text-xs text-gray-500">{streak.target - streak.current} more to go</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-500 h-2 rounded-full transition-all"
                      style={{ width: `${(streak.current / streak.target) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Challenges */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-5 h-5" />
              Active Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-sm">{challenge.name}</h3>
                      <p className="text-xs text-gray-600">{challenge.description}</p>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">{challenge.reward}</Badge>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-600">{challenge.progress}/{challenge.target}</span>
                    <span className="text-xs text-red-500">Expires {challenge.expires}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all"
                      style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Achievements */}
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
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{achievement.name}</span>
                      <Badge className={getRarityColor(achievement.rarity)}>
                        {achievement.rarity}
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-600">{achievement.description}</div>
                    <div className="text-xs text-orange-600 font-medium">+{achievement.points} points</div>
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

        {/* Recent Rides with Points */}
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
                      <div className="text-xs text-gray-500">{ride.date} • {ride.role}</div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{ride.distance}</Badge>
                      <div className="text-xs text-orange-600 font-medium">+{ride.points} pts</div>
                    </div>
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
