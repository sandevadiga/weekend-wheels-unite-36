import { useLocation } from "react-router-dom";

export interface HeaderConfig {
  title: string;
  subtitle?: string;
  showBack: boolean;
  showSearch: boolean;
  showLocation: boolean;
  showFilter: boolean;
  showNotifications: boolean;
  showMenu: boolean;
  notificationCount?: number;
}

export const useHeaderConfig = (): HeaderConfig => {
  const location = useLocation();
  const path = location.pathname;
  const notificationCount = 3;

  const defaultConfig: HeaderConfig = {
    title: "RidersTurn",
    subtitle: "Your Ride Partner",
    showBack: true,
    showSearch: false,
    showLocation: false,
    showFilter: false,
    showNotifications: true,
    showMenu: false,
    notificationCount
  };

  const routeConfigs: Record<string, Partial<HeaderConfig>> = {
    '/': {
      showBack: false,
      showSearch: true,
      showLocation: true,
      showFilter: true,
      showMenu: true
    },
    '/my-rides': {
      title: "My Rides",
      subtitle: "Track your riding adventures"
    },
    '/plan-ride': {
      title: "Plan a Ride",
      subtitle: "Create an amazing weekend experience"
    },
    '/notifications': {
      title: "Notifications",
      subtitle: "Stay updated on your rides"
    },
    '/profile': {
      title: "Profile",
      subtitle: "Manage your rider profile"
    },
    '/join-ride': {
      title: "Join Ride",
      subtitle: "Enter trip code to join"
    }
  };