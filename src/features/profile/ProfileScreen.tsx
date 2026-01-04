import { useState } from "react";
import GlobalHeader from "@/shared/components/layout/GlobalHeader";
import ProfileInfoCard from "./components/ProfileInfoCard";
import EmergencyContactCard from "./components/EmergencyContactCard";
import StatsCard from "./components/StatsCard";
import StreaksCard from "./components/StreaksCard";
import ChallengesCard from "./components/ChallengesCard";
import AchievementsCard from "./components/AchievementsCard";
import RecentRidesCard from "./components/RecentRidesCard";

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Kumar",
    phone: "+91 98765 43210",
    email: "alex.kumar@email.com",
    bike: "Royal Enfield Classic 350",
    ridingLevel: "Intermediate",
    location: "Bangalore, Karnataka",
    emergencyContact: {
      name: "Priya Kumar",
      phone: "+91 98765 43211",
      relation: "Spouse"
    }
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Header */}
      <GlobalHeader
        title="Profile"
        subtitle="Manage your rider profile"
        showBack={true}
        showNotifications={true}
        notificationCount={3}
      />

      <div className="p-3 space-y-4">
        <ProfileInfoCard
          profile={profile}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setProfile={setProfile}
          handleSave={handleSave}
        />

        <EmergencyContactCard
          emergencyContact={profile.emergencyContact}
          isEditing={isEditing}
          setProfile={setProfile}
        />

        <StatsCard rideStats={rideStats} />

        <StreaksCard streaks={streaks} />

        <ChallengesCard challenges={challenges} />

        <AchievementsCard achievements={achievements} />

        <RecentRidesCard recentRides={recentRides} />
      </div>
    </div>
  );
};

export default ProfileScreen;
