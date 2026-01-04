import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Separator } from "@/shared/components/ui/separator";

interface RecentRide {
    name: string;
    date: string;
    distance: string;
    points: number;
    role: string;
}

interface RecentRidesCardProps {
    recentRides: RecentRide[];
}

const RecentRidesCard = ({ recentRides }: RecentRidesCardProps) => {
    return (
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
    );
};

export default RecentRidesCard;
