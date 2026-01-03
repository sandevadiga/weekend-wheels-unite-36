import { useState } from "react";
import { 
  TrendingUp, 
  Trophy, 
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import modular components
import ExploreSearchBar from "@/components/explore/ExploreSearchBar";
import StoriesCarousel from "@/components/explore/StoriesCarousel";
import TrendingRideCard from "@/components/explore/TrendingRideCard";
import RiderSpotlightCard from "@/components/explore/RiderSpotlightCard";
import CommunityPostCard from "@/components/explore/CommunityPostCard";

// Mock data
const stories = [
  {
    id: 1,
    user: { name: "Alex", avatar: "/api/placeholder/40/40", isViewed: false },
    preview: "/api/placeholder/80/80"
  },
  {
    id: 2,
    user: { name: "Maya", avatar: "/api/placeholder/40/40", isViewed: true },
    preview: "/api/placeholder/80/80"
  },
  {
    id: 3,
    user: { name: "Jake", avatar: "/api/placeholder/40/40", isViewed: false },
    preview: "/api/placeholder/80/80"
  },
  {
    id: 4,
    user: { name: "Sam", avatar: "/api/placeholder/40/40", isViewed: true },
    preview: "/api/placeholder/80/80"
  }
];

const trendingRides = [
  {
    id: 1,
    title: "Sunset Hills Adventure",
    location: "Malibu, CA",
    participants: 24,
    image: "/api/placeholder/300/200",
    difficulty: "Medium",
    distance: "45 km",
    rating: 4.8
  },
  {
    id: 2,
    title: "Coastal Highway Cruise",
    location: "Big Sur, CA",
    participants: 18,
    image: "/api/placeholder/300/200",
    difficulty: "Easy",
    distance: "68 km",
    rating: 4.9
  },
  {
    id: 3,
    title: "Mountain Pass Challenge",
    location: "Lake Tahoe, CA",
    participants: 15,
    image: "/api/placeholder/300/200",
    difficulty: "Hard",
    distance: "82 km",
    rating: 4.7
  }
];

const riderSpotlights = [
  {
    id: 1,
    name: "Elena Rodriguez",
    avatar: "/api/placeholder/60/60",
    badge: "Route Master",
    contributions: 127,
    followers: 1200,
    bio: "Adventure seeker exploring hidden gems across California"
  },
  {
    id: 2,
    name: "Marcus Chen",
    avatar: "/api/placeholder/60/60",
    badge: "Safety Champion",
    contributions: 89,
    followers: 850,
    bio: "Motorcycle safety instructor and weekend explorer"
  }
];

const communityPosts = [
  {
    id: 1,
    user: { name: "Sarah Johnson", avatar: "/api/placeholder/40/40" },
    content: "Just completed the Pacific Coast Highway! The views were absolutely incredible 🏍️✨",
    image: "/api/placeholder/400/300",
    likes: 42,
    comments: 8,
    timeAgo: "2h",
    location: "Big Sur, CA"
  },
  {
    id: 2,
    user: { name: "Mike Torres", avatar: "/api/placeholder/40/40" },
    content: "Found this amazing coffee spot during my morning ride. Perfect pitstop! ☕",
    image: "/api/placeholder/400/300",
    likes: 28,
    comments: 5,
    timeAgo: "4h",
    location: "Santa Monica, CA"
  },
  {
    id: 3,
    user: { name: "Lisa Chen", avatar: "/api/placeholder/40/40" },
    content: "Early morning ride through the redwoods. Nature therapy at its finest! 🌲",
    image: "/api/placeholder/400/300",
    likes: 65,
    comments: 12,
    timeAgo: "6h",
    location: "Muir Woods, CA"
  }
];

const ExploreScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedTab, setSelectedTab] = useState("discover");

  // Event handlers
  const handleStoryClick = (storyId: number) => {
    console.log("Opening story:", storyId);
    // TODO: Implement story viewer modal
  };

  const handleAddStory = () => {
    console.log("Adding new story");
    // TODO: Implement story creation flow
  };

  const handleJoinRide = (rideId: number) => {
    console.log("Joining ride:", rideId);
    // TODO: Implement join ride functionality
  };

  const handleFollowRider = (riderId: number) => {
    console.log("Following rider:", riderId);
    // TODO: Implement follow functionality
  };

  const handleLikePost = (postId: number) => {
    console.log("Liking post:", postId);
    // TODO: Implement like functionality
  };

  const handleCommentPost = (postId: number) => {
    console.log("Commenting on post:", postId);
    // TODO: Implement comment functionality
  };

  const handleSharePost = (postId: number) => {
    console.log("Sharing post:", postId);
    // TODO: Implement share functionality
  };

  const handleFilterClick = () => {
    console.log("Opening filters");
    // TODO: Implement filter modal
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <ExploreSearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onFilterClick={handleFilterClick}
      />

      {/* Stories Section */}
      <StoriesCarousel
        stories={stories}
        onStoryClick={handleStoryClick}
        onAddStory={handleAddStory}
      />

      {/* Main Content Tabs */}
      <div className="flex-1">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mx-4 mt-4">
            <TabsTrigger value="discover">Discover</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="px-4 space-y-6 mt-6">
            {/* Trending Rides Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  Trending Rides
                </h2>
                <Button variant="ghost" size="sm" className="text-orange-500">
                  See All
                </Button>
              </div>
              
              <div className="space-y-4">
                {trendingRides.slice(0, 2).map((ride) => (
                  <TrendingRideCard
                    key={ride.id}
                    ride={ride}
                    onJoinRide={handleJoinRide}
                    variant="full"
                  />
                ))}
              </div>
            </div>

            {/* Rider Spotlights */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Rider Spotlights
                </h2>
                <Button variant="ghost" size="sm" className="text-orange-500">
                  See All
                </Button>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {riderSpotlights.map((rider) => (
                  <RiderSpotlightCard
                    key={rider.id}
                    rider={rider}
                    onFollow={handleFollowRider}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trending" className="px-4 space-y-4 mt-6">
            <div className="grid grid-cols-1 gap-4">
              {trendingRides.map((ride) => (
                <TrendingRideCard
                  key={ride.id}
                  ride={ride}
                  onJoinRide={handleJoinRide}
                  variant="compact"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="community" className="px-4 space-y-4 mt-6">
            {communityPosts.map((post) => (
              <CommunityPostCard
                key={post.id}
                post={post}
                onLike={handleLikePost}
                onComment={handleCommentPost}
                onShare={handleSharePost}
              />
            ))}
          </TabsContent>

          <TabsContent value="events" className="px-4 space-y-4 mt-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Calendar className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Events Yet</h3>
              <p className="text-gray-600 text-sm mb-4">
                Be the first to organize a community event in your area!
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600">
                Create Event
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ExploreScreen;