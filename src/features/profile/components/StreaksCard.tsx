import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Flame } from "lucide-react";

interface Streak {
    name: string;
    current: number;
    target: number;
    reward: string;
    type: string;
}

interface StreaksCardProps {
    streaks: Streak[];
}

const StreaksCard = ({ streaks }: StreaksCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                    <Flame className="w-5 h-5" />
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
    );
};

export default StreaksCard;
