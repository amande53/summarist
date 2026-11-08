import Skeleton from "../../../components/UI/Skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-4">
      <div className="w-full">
        <Skeleton className="w-7/10 h-8 mb-4" />
        <Skeleton className="w-2/5 h-8 mb-4" />
        <Skeleton className="w-full h-8 mb-4" />
        <Skeleton className="w-9/20 h-16 mb-4" />
        <Skeleton className="w-1/2 h-8 mb-4" />
        <Skeleton className="w-1/5 h-8 mb-4" />
        <Skeleton className="w-1/2 h-16 mb-4" />
        <Skeleton className="w-4/5 h-45 mb-4" />
        <Skeleton className="w-4/5 h-67" />
      </div>
      <div className="flex justify-center">
        <Skeleton className="w-75 h-75 mb-4" />
      </div>
    </div>
  );
}
