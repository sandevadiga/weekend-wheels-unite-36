import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const RideDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Header Skeleton */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg sticky top-0 z-50">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-8 h-8 bg-white/20 border border-white/20 rounded-lg animate-pulse"></div>
            <div className="flex-1">
              <div className="h-5 bg-white/30 rounded w-28 animate-pulse mb-1"></div>
            </div>
          </div>
          <div className="w-8 h-8 bg-white/20 border border-white/20 rounded-lg animate-pulse"></div>
        </div>
      </div>

      <div className="p-3 space-y-3 pb-20">
        {/* Main Ride Info Skeleton */}
        <Card>
          <CardHeader>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="space-y-2 flex-1">
                  <div className="h-6 bg-gray-300 rounded w-48 animate-pulse"></div>
                  <div className="h-4 bg-gray-300 rounded w-32 animate-pulse"></div>
                  <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-6 bg-gray-300 rounded w-16 animate-pulse"></div>
                  <div className="h-4 bg-gray-300 rounded w-12 animate-pulse"></div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="space-y-1">
                  <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                  <div className="h-3 bg-gray-300 rounded w-20 animate-pulse"></div>
                </div>
              </div>
              <div className="h-8 bg-gray-300 rounded w-20 animate-pulse"></div>
            </div>
          </CardContent>
        </Card>

        {/* Weather Info Skeleton */}
        <Card>
          <CardHeader>
            <div className="h-5 bg-gray-300 rounded w-32 animate-pulse"></div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs Skeleton */}
        <div className="w-full">
          <div className="flex border-b mb-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-300 rounded-t w-20 mr-2 animate-pulse"></div>
            ))}
          </div>
          
          {/* Tab Content Skeleton */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="h-5 bg-gray-300 rounded w-28 animate-pulse"></div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
                    <div className="h-3 bg-gray-300 rounded w-32 animate-pulse"></div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Route Discovery Skeleton */}
        <div className="space-y-4">
          <Separator className="my-6" />
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="h-6 bg-gray-300 rounded w-40 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-32 animate-pulse"></div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-16 animate-pulse"></div>
          </div>

          {/* Related Routes Skeleton */}
          {[...Array(2)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="h-20 bg-gray-300 animate-pulse"></div>
              <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="space-y-1">
                      <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                      <div className="h-3 bg-gray-300 rounded w-16 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-300 rounded w-12 animate-pulse"></div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
                <div className="flex gap-2">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="h-5 bg-gray-300 rounded w-16 animate-pulse"></div>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <div className="h-8 bg-gray-300 rounded flex-1 animate-pulse"></div>
                  <div className="h-8 bg-gray-300 rounded w-20 animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Action Skeleton */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default RideDetailsSkeleton;
