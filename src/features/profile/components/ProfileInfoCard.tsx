import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Card, CardContent, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Separator } from "@/shared/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { User, MapPin, Star } from "lucide-react";

interface ProfileInfoCardProps {
    profile: {
        name: string;
        phone: string;
        email: string;
        bike: string;
        ridingLevel: string;
        location: string;
    };
    isEditing: boolean;
    setIsEditing: (value: boolean) => void;
    setProfile: (profile: any) => void;
    handleSave: () => void;
}

const ProfileInfoCard = ({ profile, isEditing, setIsEditing, setProfile, handleSave }: ProfileInfoCardProps) => {
    return (
        <Card className="overflow-hidden border-2 border-orange-100">
            {/* Gradient Header Background */}
            <div className="bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 p-6 pb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                        <User className="w-5 h-5" />
                        Personal Information
                    </CardTitle>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={isEditing ? handleSave : () => setIsEditing(true)}
                        className={isEditing ? "text-white hover:text-white hover:bg-white/20" : "text-white/90 hover:text-white hover:bg-white/20"}
                    >
                        {isEditing ? "Save" : "Edit"}
                    </Button>
                </div>
            </div>

            <CardContent className="space-y-6 -mt-12 relative">
                {/* Enhanced Avatar Section */}
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-xl ring-4 ring-white">
                            <span className="text-3xl font-bold text-white">
                                {profile.name.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>
                        <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs px-3 py-1 shadow-lg border-2 border-white">
                            <Star className="w-3 h-3 mr-1 inline" />
                            Road Captain
                        </Badge>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mt-4">{profile.name}</h2>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {profile.location}
                    </p>
                </div>

                <Separator />

                {/* Form Fields with Better Styling */}
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                        <Input
                            id="name"
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            disabled={!isEditing}
                            className={isEditing ? "border-orange-300 focus:border-orange-500" : "bg-gray-50"}
                        />
                    </div>

                    <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                        <Input
                            id="phone"
                            value={profile.phone}
                            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                            disabled={!isEditing}
                            className={isEditing ? "border-orange-300 focus:border-orange-500" : "bg-gray-50"}
                        />
                    </div>

                    <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            disabled={!isEditing}
                            className={isEditing ? "border-orange-300 focus:border-orange-500" : "bg-gray-50"}
                        />
                    </div>

                    <div>
                        <Label htmlFor="bike" className="text-gray-700 font-medium">Bike Model</Label>
                        <Input
                            id="bike"
                            value={profile.bike}
                            onChange={(e) => setProfile({ ...profile, bike: e.target.value })}
                            disabled={!isEditing}
                            className={isEditing ? "border-orange-300 focus:border-orange-500" : "bg-gray-50"}
                        />
                    </div>

                    <div>
                        <Label htmlFor="level" className="text-gray-700 font-medium">Riding Level</Label>
                        {isEditing ? (
                            <Select value={profile.ridingLevel} onValueChange={(value) => setProfile({ ...profile, ridingLevel: value })}>
                                <SelectTrigger className="border-orange-300 focus:border-orange-500">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Beginner">Beginner</SelectItem>
                                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                                    <SelectItem value="Advanced">Advanced</SelectItem>
                                </SelectContent>
                            </Select>
                        ) : (
                            <Input value={profile.ridingLevel} disabled className="bg-gray-50" />
                        )}
                    </div>

                    <div>
                        <Label htmlFor="location" className="text-gray-700 font-medium">Location</Label>
                        <Input
                            id="location"
                            value={profile.location}
                            onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                            disabled={!isEditing}
                            className={isEditing ? "border-orange-300 focus:border-orange-500" : "bg-gray-50"}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProfileInfoCard;
