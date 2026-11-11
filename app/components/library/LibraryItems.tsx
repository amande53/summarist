"use client";

import { useEffect, useState } from "react";
import type { Book } from "../../types/Book";
import { listenToShelf } from "../../lib/library";
import BookCard from "../for-you/BookCard";
import BookCardSkeleton from "../UI/BookCardSkeleton";
import Skeleton from "../UI/Skeleton";

interface LibraryItemsProps {
  userId: string;
  shelf: "savedBooks" | "finishedBooks";
  title: string;
  emptyTitle: string;
  emptyText: string;
}

export default function LibraryItems({
  userId,
  shelf,
  title,
  emptyTitle,
  emptyText,
}: LibraryItemsProps) {
  // null means "still loading"; an empty array means "loaded, but no books"
  const [books, setBooks] = useState<Book[] | null>(null);

  useEffect(() => {
    return listenToShelf(userId, shelf, setBooks);
  }, [userId, shelf]);

  return (
    <section>
      <h2 className="text-2xl font-bold text-navy mb-4">{title}</h2>
      {books === null ? (
        <>
          <Skeleton className="w-25 h-5 mb-6" />
          <div className="flex gap-4 mb-8 overflow-hidden">
            {Array.from({ length: 5 }).map((_, index) => (
              <BookCardSkeleton key={index} />
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="font-light mb-4 text-ink">
            {books.length} {books.length === 1 ? "item" : "items"}
          </p>
          {books.length > 0 ? (
            <div className="flex overflow-x-auto gap-4 snap-x mb-8">
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 max-w-fit mx-auto mb-14 p-8 bg-mist rounded-xl text-center">
              <h3 className="text-lg font-semibold text-[#042330]">{emptyTitle}</h3>
              <p className="text-ink">{emptyText}</p>
            </div>
          )}
        </>
      )}
    </section>
  );
}
