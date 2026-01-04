import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Shield } from "lucide-react";

interface EmergencyContactCardProps {
    emergencyContact: {
        name: string;
        phone: string;
        relation: string;
    };
    isEditing: boolean;
    setProfile: (profile: any) => void;
}

const EmergencyContactCard = ({ emergencyContact, isEditing, setProfile }: EmergencyContactCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Emergency Contact
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <Label htmlFor="emergencyName">Contact Name</Label>
                        <Input
                            id="emergencyName"
                            value={emergencyContact.name}
                            onChange={(e) => setProfile((prev: any) => ({
                                ...prev,
                                emergencyContact: { ...prev.emergencyContact, name: e.target.value }
                            }))}
                            disabled={!isEditing}
                        />
                    </div>

                    <div>
                        <Label htmlFor="emergencyPhone">Contact Phone</Label>
                        <Input
                            id="emergencyPhone"
                            value={emergencyContact.phone}
                            onChange={(e) => setProfile((prev: any) => ({
                                ...prev,
                                emergencyContact: { ...prev.emergencyContact, phone: e.target.value }
                            }))}
                            disabled={!isEditing}
                        />
                    </div>

                    <div>
                        <Label htmlFor="emergencyRelation">Relationship</Label>
                        {isEditing ? (
                            <Select
                                value={emergencyContact.relation}
                                onValueChange={(value) => setProfile((prev: any) => ({
                                    ...prev,
                                    emergencyContact: { ...prev.emergencyContact, relation: value }
                                }))}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Spouse">Spouse</SelectItem>
                                    <SelectItem value="Parent">Parent</SelectItem>
                                    <SelectItem value="Sibling">Sibling</SelectItem>
                                    <SelectItem value="Friend">Friend</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        ) : (
                            <Input value={emergencyContact.relation} disabled />
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default EmergencyContactCard;
