
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import HomeScreen from "@/components/screens/HomeScreen";
import RideDetailsScreen from "@/components/screens/RideDetailsScreen";
import MyRidesScreen from "@/components/screens/MyRidesScreen";
import PlanRideScreen from "@/components/screens/PlanRideScreen";
import NotificationsScreen from "@/components/screens/NotificationsScreen";
import ProfileScreen from "@/components/screens/ProfileScreen";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <SidebarInset className="flex-1">
            <Router>
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/ride/:id" element={<RideDetailsScreen />} />
                <Route path="/my-rides" element={<MyRidesScreen />} />
                <Route path="/plan-ride" element={<PlanRideScreen />} />
                <Route path="/notifications" element={<NotificationsScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
              </Routes>
            </Router>
          </SidebarInset>
        </div>
      </SidebarProvider>
      <Toaster />
    </div>
  );
};

export default Index;
