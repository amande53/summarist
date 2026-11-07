interface SkeletonProps {
  className?: string;
}
export default function Skeleton({ className = "" }: SkeletonProps) {
  return <div className={`bg-skeleton animate-pulse ${className}`}></div>;
}
