
import { MapPin, Calendar, Plus, Bell, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BottomTabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      id: "home",
      label: "Discover",
      icon: MapPin,
      path: "/",
    },
    {
      id: "rides",
      label: "My Rides",
      icon: Calendar,
      path: "/my-rides",
    },
    {
      id: "plan",
      label: "Plan",
      icon: Plus,
      path: "/plan-ride",
      isSpecial: true,
    },
    {
      id: "notifications",
      label: "Alerts",
      icon: Bell,
      path: "/notifications",
    },
    {
      id: "profile",
      label: "Profile",
      icon: User,
      path: "/profile",
    },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-1 z-50 safe-area-pb">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = isActive(tab.path);
          
          if (tab.isSpecial) {
            return (
              <Button
                key={tab.id}
                onClick={() => navigate(tab.path)}
                className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg transform hover:scale-105 transition-all duration-200 active:scale-95"
                size="icon"
              >
                <Icon className="w-5 h-5 text-white" />
              </Button>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center justify-center py-2 px-3 min-w-0 transition-all duration-200 ${
                active
                  ? "text-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${active ? "text-orange-500" : ""}`} />
              <span className={`text-xs font-medium truncate ${active ? "text-orange-500" : ""}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomTabBar;
