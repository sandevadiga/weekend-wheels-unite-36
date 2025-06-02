
import { Flame, Trophy } from "lucide-react";

interface UserStatsProps {
  userStats: {
    currentStreak: number;
    longestStreak: number;
    ridesOrganized: number;
    totalPoints: number;
  };
}

const UserStats = ({ userStats }: UserStatsProps) => {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="flex items-center gap-1 text-orange-600">
        <Flame className="w-4 h-4" />
        <span className="font-bold">{userStats.currentStreak}</span>
        <span>day streak</span>
      </div>
      <div className="flex items-center gap-1 text-blue-600">
        <Trophy className="w-4 h-4" />
        <span className="font-bold">{userStats.totalPoints}</span>
        <span>pts</span>
      </div>
    </div>
  );
};

export default UserStats;
