
import { ScrollArea } from "@/components/ui/scroll-area";

interface RideFiltersProps {
  rideTypes: string[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const RideFilters = ({ rideTypes, selectedFilter, onFilterChange }: RideFiltersProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-[180px] z-10 py-3">
      <div className="px-4">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Ride Categories</h3>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {rideTypes.map((type) => (
            <button
              key={type}
              onClick={() => onFilterChange(type)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedFilter === type
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RideFilters;
