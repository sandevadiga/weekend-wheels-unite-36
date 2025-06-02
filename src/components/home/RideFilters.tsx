
import { Badge } from "@/components/ui/badge";

interface RideFiltersProps {
  rideTypes: string[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const RideFilters = ({ rideTypes, selectedFilter, onFilterChange }: RideFiltersProps) => {
  return (
    <div className="px-4 pb-3">
      <div className="flex flex-wrap gap-2">
        {rideTypes.map((type) => (
          <Badge
            key={type}
            variant={selectedFilter === type ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => onFilterChange(type)}
          >
            {type}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default RideFilters;
