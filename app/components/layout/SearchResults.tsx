import Link from "next/link";
import Image from "next/image";
import type { Book } from "../../types/Book";
import Skeleton from "../UI/Skeleton";
import { BiTime } from "react-icons/bi";
import AudioDuration from "../UI/AudioDuration";

interface SearchResultsProps {
  results: Book[];
  isLoading: boolean;
}

export default function SearchResults({ results, isLoading }: SearchResultsProps) {
  return (
    <ul className="flex flex-col max-w-110 w-full max-h-160 ml-auto overflow-y-auto absolute top-26 right-6 bg-white shadow-[rgba(0,0,0,0.14)_0px_0px_6px_0px] p-4 border border-solid border-line">
      {isLoading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <li
            key={index}
            className="mb-4 last:mb-0"
          >
            <Skeleton className="w-full h-30" />
          </li>
        ))
      ) : results.length > 0 ? (
        results.map((book) => (
          <li
            key={book.id}
            className="border-b border-line last:border-b-0"
          >
            <Link
              href={`/book/${book.id}`}
              className="flex items-center h-30 p-4 gap-6"
            >
              <Image
                className="min-w-20 w-20 h-20"
                src={book.imageLink}
                alt={book.title}
                width={80}
                height={80}
                loading="lazy"
              />
              <div>
                <h3 className="text-base text-navy font-medium mb-2">{book.title}</h3>
                <p className="text-sm font-light text-muted mb-2">{book.author}</p>
                <div className="flex items-center gap-1 text-sm text-muted font-light">
                  <BiTime className="size-4" />
                  <AudioDuration audioLink={book.audioLink} />
                </div>
              </div>
            </Link>
          </li>
        ))
      ) : (
        <li>
          <p>No books found</p>
        </li>
      )}
    </ul>
  );
}
