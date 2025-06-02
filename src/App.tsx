
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import HomeScreen from "@/components/screens/HomeScreen";
import RideDetailsScreen from "@/components/screens/RideDetailsScreen";
import MyRidesScreen from "@/components/screens/MyRidesScreen";
import PlanRideScreen from "@/components/screens/PlanRideScreen";
import LocationPlannerScreen from "@/components/screens/LocationPlannerScreen";
import TravelDiaryScreen from "@/components/screens/TravelDiaryScreen";
import RouteDiscoveryScreen from "@/components/screens/RouteDiscoveryScreen";
import NotificationsScreen from "@/components/screens/NotificationsScreen";
import ProfileScreen from "@/components/screens/ProfileScreen";
import JoinRideScreen from "@/components/screens/JoinRideScreen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <SidebarProvider>
            <div className="min-h-screen flex w-full">
              <AppSidebar />
              <SidebarInset className="flex-1">
                <Routes>
                  <Route path="/" element={<HomeScreen />} />
                  <Route path="/join-ride" element={<JoinRideScreen />} />
                  <Route path="/ride/:id" element={<RideDetailsScreen />} />
                  <Route path="/my-rides" element={<MyRidesScreen />} />
                  <Route path="/plan-ride" element={<PlanRideScreen />} />
                  <Route path="/location-planner" element={<LocationPlannerScreen />} />
                  <Route path="/travel-diary" element={<TravelDiaryScreen />} />
                  <Route path="/route-discovery" element={<RouteDiscoveryScreen />} />
                  <Route path="/notifications" element={<NotificationsScreen />} />
                  <Route path="/profile" element={<ProfileScreen />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
