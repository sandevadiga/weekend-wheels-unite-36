import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Target } from "lucide-react";

interface Challenge {
    name: string;
    description: string;
    progress: number;
    target: number;
    reward: string;
    expires: string;
}

interface ChallengesCardProps {
    challenges: Challenge[];
}

const ChallengesCard = ({ challenges }: ChallengesCardProps) => {
    return (
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
    );
};

export default ChallengesCard;
