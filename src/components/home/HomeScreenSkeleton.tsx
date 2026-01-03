import RideCardSkeleton from "./RideCardSkeleton";

const HomeScreenSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Header Skeleton */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg sticky top-0 z-50">
        {/* Main Header Row */}
        <div className="flex items-center justify-between p-3">
          {/* Left Section */}
          <div className="flex items-center gap-3 flex-1">
            <div className="w-8 h-8 bg-white/20 border border-white/20 rounded-lg animate-pulse"></div>
            <div className="flex-1">
              <div className="h-5 bg-white/30 rounded w-28 animate-pulse mb-1"></div>
              <div className="h-3 bg-white/20 rounded w-20 animate-pulse"></div>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-white/20 rounded animate-pulse"></div>
              <div className="w-16 h-6 bg-white/20 rounded animate-pulse"></div>
            </div>
            <div className="w-8 h-8 bg-white/20 border border-white/20 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Search and Filter Row */}
        <div className="px-3 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-9 bg-white/90 rounded-xl animate-pulse"></div>
            <div className="w-9 h-9 bg-white/90 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="p-3 space-y-4">
        {/* Trending Section Skeleton */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="h-6 bg-gray-300 rounded w-32 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-16 animate-pulse"></div>
          </div>
          <div className="h-32 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>

        {/* Filter Tabs Skeleton */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-8 bg-gray-200 rounded-full w-20 animate-pulse flex-shrink-0"></div>
          ))}
        </div>

        {/* Ride Cards Skeleton */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="h-6 bg-gray-300 rounded w-32 animate-pulse"></div>
            <div className="h-6 bg-orange-100 rounded-full w-16 animate-pulse"></div>
          </div>
          {[...Array(4)].map((_, i) => (
            <RideCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreenSkeleton;
