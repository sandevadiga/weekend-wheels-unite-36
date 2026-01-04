import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Flame, Trophy } from "lucide-react";

interface StatsCardProps {
    rideStats: {
        totalPoints: number;
        currentStreak: number;
        ridesOrganized: number;
        totalDistance: string;
    };
}

const StatsCard = ({ rideStats }: StatsCardProps) => {
    return (
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
                            <Flame className="w-5 h-5 text-red-500" />
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
    );
};

export default StatsCard;
