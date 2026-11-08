import { Suspense } from "react";
import BookRow from "./BookRow";
import SelectedBook from "./SelectedBook";
import Skeleton from "../UI/Skeleton";
import BookCardSkeleton from "../UI/BookCardSkeleton";

interface BookSectionProps {
  title: string;
  subTitle?: string;
  status: "selected" | "recommended" | "suggested";
}

export default function BookSection({ title, subTitle, status }: BookSectionProps) {
  const fallback =
    status === "selected" ? (
      <Skeleton className="w-full md:w-2/3 h-47 mb-6" />
    ) : (
      <section className="flex gap-4 mb-8 overflow-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <BookCardSkeleton key={index} />
        ))}
      </section>
    );

  return (
    <section>
      <h2 className="text-2xl font-bold text-navy mb-4">{title}</h2>
      {subTitle && <p className="font-light mb-4 text-ink">{subTitle}</p>}
      <Suspense fallback={fallback}>
        {status === "selected" ? <SelectedBook /> : <BookRow status={status} />}
      </Suspense>
    </section>
  );
}
