
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Clock, MapPin, Users, AlertCircle } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const NotificationsScreen = () => {
  const notifications = [
    {
      id: 1,
      type: "reminder",
      title: "Ride starts in 12 hours",
      message: "Nandi Sunrise Sprint starts tomorrow at 6:00 AM",
      time: "2 hours ago",
      isRead: false,
      action: "View Ride"
    },
    {
      id: 2,
      type: "update",
      title: "Location changed",
      message: "Organizer changed start point to Cubbon Park Metro Station",
      time: "4 hours ago", 
      isRead: false,
      action: "View Details"
    },
    {
      id: 3,
      type: "delay",
      title: "Ride delayed",
      message: "Coorg Coffee Trail delayed by 15 minutes due to weather",
      time: "1 day ago",
      isRead: true,
      action: "Acknowledged"
    },
    {
      id: 4,
      type: "new_ride",
      title: "New ride near you",
      message: "Beginner's Delight - Perfect for weekend riders",
      time: "2 days ago",
      isRead: true,
      action: "Join Now"
    },
    {
      id: 5,
      type: "rider_joined",
      title: "New rider joined",
      message: "3 more riders joined your Mysore Palace Run",
      time: "3 days ago",
      isRead: true,
      action: "View Riders"
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'reminder': return Clock;
      case 'update': return MapPin;
      case 'delay': return AlertCircle;
      case 'new_ride': return Bell;
      case 'rider_joined': return Users;
      default: return Bell;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'reminder': return 'text-blue-600 bg-blue-100';
      case 'update': return 'text-orange-600 bg-orange-100';
      case 'delay': return 'text-red-600 bg-red-100';
      case 'new_ride': return 'text-green-600 bg-green-100';
      case 'rider_joined': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
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
              <h1 className="text-xl font-bold">Notifications</h1>
              <p className="text-sm text-gray-600">Stay updated on your rides</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            Mark all read
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {notifications.length > 0 ? (
          notifications.map((notification) => {
            const Icon = getNotificationIcon(notification.type);
            const colorClass = getNotificationColor(notification.type);
            
            return (
              <Card 
                key={notification.id} 
                className={`${!notification.isRead ? 'border-orange-200 bg-orange-50/30' : ''}`}
              >
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">{notification.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs text-gray-500">{notification.time}</span>
                            {!notification.isRead && (
                              <Badge variant="secondary" className="text-xs">New</Badge>
                            )}
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant={notification.action === "Acknowledged" ? "secondary" : "default"}
                          className={notification.action !== "Acknowledged" ? "bg-orange-500 hover:bg-orange-600" : ""}
                          disabled={notification.action === "Acknowledged"}
                        >
                          {notification.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Card className="p-8 text-center">
            <Bell className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
            <p className="text-gray-600">You're all caught up! Check back later for updates.</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default NotificationsScreen;
