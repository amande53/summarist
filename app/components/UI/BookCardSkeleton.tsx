import Skeleton from "./Skeleton";

export default function BookCardSkeleton() {
  return (
    <div className="w-50 shrink-0 pt-8 px-3">
      <Skeleton className="w-full h-60 mb-2" />
      <Skeleton className="w-full h-5 mb-2" />
      <Skeleton className="w-9/10 h-4 mb-2" />
      <Skeleton className="w-4/5 h-8 mb-2" />
      <Skeleton className="w-9/10 h-4" />
    </div>
  );
}
