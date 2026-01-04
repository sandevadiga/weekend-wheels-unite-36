import RideCardSkeleton from "@/features/home/components/RideCardSkeleton";

interface SkeletonListProps {
  count?: number;
  className?: string;
}

const SkeletonList = ({ count = 3, className = "" }: SkeletonListProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {[...Array(count)].map((_, index) => (
        <RideCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default SkeletonList;
