
import { Badge } from "@/components/ui/badge";

const TrendingSection = () => {
  return (
    <div className="p-4 pb-2">
      <h2 className="text-lg font-semibold mb-3">🔥 Trending This Weekend</h2>
      <div className="flex gap-2 overflow-x-auto">
        <Badge variant="outline" className="whitespace-nowrap">Nandi Hills</Badge>
        <Badge variant="outline" className="whitespace-nowrap">Coorg</Badge>
        <Badge variant="outline" className="whitespace-nowrap">Chikmagalur</Badge>
        <Badge variant="outline" className="whitespace-nowrap">Wayanad</Badge>
      </div>
    </div>
  );
};

export default TrendingSection;
