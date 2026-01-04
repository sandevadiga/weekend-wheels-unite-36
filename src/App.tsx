
import { Toaster } from "@/shared/components/ui/toaster";
import { Toaster as Sonner } from "@/shared/components/ui/sonner";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SidebarProvider } from "@/shared/components/ui/sidebar";
import { AppSidebar } from "@/shared/components/layout/AppSidebar";
import { SidebarInset } from "@/shared/components/ui/sidebar";
import HomeScreen from "@/features/home/HomeScreen";
import RideDetailsScreen from "@/features/rides/RideDetailsScreen";
import MyRidesScreen from "@/features/rides/MyRidesScreen";
import JoinRideScreen from "@/features/rides/JoinRideScreen";
import PlanRideScreen from "@/features/planning/PlanRideScreen";
import LocationPlannerScreen from "@/features/planning/LocationPlannerScreen";
import TravelDiaryScreen from "@/features/diary/TravelDiaryScreen";
import RouteDiscoveryScreen from "@/features/discovery/RouteDiscoveryScreen";
import ExploreScreen from "@/features/explore/ExploreScreen";
import NotificationsScreen from "@/features/notifications/NotificationsScreen";
import ProfileScreen from "@/features/profile/ProfileScreen";
import MobileBottomNav from "@/shared/components/layout/MobileBottomNav";
import LoadingProgress from "@/shared/components/ui/LoadingProgress";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Mobile App Container */}
        <div className="min-h-screen bg-gray-50 mx-auto max-w-md relative overflow-hidden mobile-app-container">
          <SidebarProvider>
            <div className="min-h-screen flex w-full overflow-hidden">
              <AppSidebar />
              <SidebarInset className="flex-1 relative pb-20 overflow-hidden">
                <div className="w-full overflow-x-hidden">
                  <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/join-ride" element={<JoinRideScreen />} />
                    <Route path="/ride/:id" element={<RideDetailsScreen />} />
                    <Route path="/my-rides" element={<MyRidesScreen />} />
                    <Route path="/plan-ride" element={<PlanRideScreen />} />
                    <Route path="/location-planner" element={<LocationPlannerScreen />} />
                    <Route path="/travel-diary" element={<TravelDiaryScreen />} />
                    <Route path="/explore" element={<ExploreScreen />} />
                    <Route path="/route-discovery/:id" element={<RouteDiscoveryScreen />} />
                    <Route path="/route-discovery" element={<RouteDiscoveryScreen />} />
                    <Route path="/notifications" element={<NotificationsScreen />} />
                    <Route path="/profile" element={<ProfileScreen />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </SidebarInset>
            </div>
            {/* Mobile Bottom Navigation */}
            <MobileBottomNav />
          </SidebarProvider>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
