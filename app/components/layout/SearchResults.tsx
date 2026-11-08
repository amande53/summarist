import Link from "next/link";
import type { Book } from "../../types/Book";
import Image from "next/image";
import Skeleton from "../UI/Skeleton";

interface SearchResultsProps {
  results: Book[];
  isLoading: boolean;
}

export default function SearchResults({ results, isLoading }: SearchResultsProps) {
  return (
    <div className="flex flex-col max-w-110 w-full max-h-160 ml-auto overflow-y-auto absolute top-26 right-6 bg-white shadow-[rgba(0,0,0,0.14)_0px_0px_6px_0px] p-4 border border-solid border-line ">
      {isLoading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            className="w-full h-30 mb-4 last:mb-0"
          />
        ))
      ) : results.length > 0 ? (
        results.map((book) => (
          <Link
            key={book.id}
            href={`/book/${book.id}`}
            className="flex items-center h-30 p-4 gap-6 border-b border-b-line last:border-b-0 "
          >
            <Image
              className=" min-w-20 w-20 h-20"
              src={book.imageLink}
              alt={book.title}
              width={80}
              height={80}
              loading="lazy"
            />
            <div>
              <div className="text-base text-navy font-medium mb-2">{book.title}</div>
              <div className="text-sm font-light text-muted mb-2 ">{book.author}</div>
            </div>
          </Link>
        ))
      ) : (
        <div>No books found</div>
      )}
    </div>
  );
}
