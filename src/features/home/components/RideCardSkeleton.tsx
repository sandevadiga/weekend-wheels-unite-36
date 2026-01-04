import { Card, CardContent } from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";
import "@/shared/components/ui/skeleton.css";

const RideCardSkeleton = () => {
  return (
    <Card className="w-full max-w-full overflow-hidden border-0 shadow-lg bg-white backdrop-blur-sm skeleton-card">
      {/* Header Skeleton */}
      <div className="relative h-32 bg-gradient-to-r from-gray-300 to-gray-400">
        <div className="absolute inset-0 bg-black/10" />

        {/* Header Content Skeleton */}
        <div className="absolute bottom-3 left-4 space-y-2">
          <Skeleton className="h-5 bg-white/30 w-48" />
          <div className="flex gap-3">
            <Skeleton className="h-4 bg-white/30 w-16" />
            <Skeleton className="h-4 bg-white/30 w-20" />
          </div>
        </div>

        {/* Top Right Skeleton */}
        <div className="absolute top-3 right-3 space-y-2">
          <Skeleton className="h-6 bg-white/30 w-12" />
          <Skeleton className="h-5 bg-white/30 w-10" />
        </div>

        {/* Trip Code Skeleton */}
        <Skeleton className="absolute top-3 left-3 h-6 bg-white/30 w-16" />
      </div>

      <CardContent className="p-4 space-y-4">
        {/* Date and Location Skeleton */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Skeleton className="w-4 h-4" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-5 w-20" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="w-4 h-4" />
            <Skeleton className="h-4 w-40" />
          </div>
        </div>

        {/* Organizer Info Skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
          <Skeleton className="w-8 h-8" />
        </div>

        {/* Stats Section Skeleton */}
        <div className="grid grid-cols-3 gap-3 bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-1">
            <Skeleton className="w-3 h-3" />
            <Skeleton className="h-3 w-8" />
          </div>
          <div className="flex items-center gap-1">
            <Skeleton className="w-3 h-3" />
            <Skeleton className="h-3 w-12" />
          </div>
          <div className="flex items-center gap-1">
            <Skeleton className="w-3 h-3" />
            <Skeleton className="h-3 w-10" />
          </div>
        </div>

        {/* Info Pills Skeleton */}
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 rounded-full w-20" />
          <Skeleton className="h-6 rounded-full w-24" />
          <Skeleton className="h-6 rounded-full w-18" />
        </div>

        {/* Action Buttons Skeleton */}
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-8 flex-1" />
          <Skeleton className="h-8 w-20" />
        </div>
      </CardContent>
    </Card>
  );
};

export default RideCardSkeleton;
