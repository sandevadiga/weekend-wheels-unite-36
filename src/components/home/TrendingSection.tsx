
import { Badge } from "@/components/ui/badge";

const TrendingSection = () => {
  return (
    <div className="p-4 pb-2">
      <h2 className="text-lg font-semibold mb-3">🔥 Trending This Weekend</h2>
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline">Nandi Hills</Badge>
        <Badge variant="outline">Coorg</Badge>
        <Badge variant="outline">Chikmagalur</Badge>
        <Badge variant="outline">Wayanad</Badge>
      </div>
    </div>
  );
};

export default TrendingSection;
