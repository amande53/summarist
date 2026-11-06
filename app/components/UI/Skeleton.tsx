interface SkeletonProps {
  className?: string;
}
export default function Skeleton({ className = "" }: SkeletonProps) {
  return <div className={`bg-[#e4e4e4] animate-pulse ${className}`}></div>;
}
