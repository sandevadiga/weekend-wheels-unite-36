import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Award } from "lucide-react";

interface Achievement {
    name: string;
    description: string;
    earned: boolean;
    points: number;
    rarity: string;
}

interface AchievementsCardProps {
    achievements: Achievement[];
}

const AchievementsCard = ({ achievements }: AchievementsCardProps) => {
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
                            className={`flex items-center gap-3 p-3 rounded-lg ${achievement.earned ? 'bg-orange-50 border border-orange-200' : 'bg-gray-50'
                                }`}
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${achievement.earned ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-500'
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
    );
};

export default AchievementsCard;
