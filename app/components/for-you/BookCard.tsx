import Link from "next/link";
import type { Book } from "../../types/Book";
import { AiOutlineStar } from "react-icons/ai";
import BookImage from "../UI/BookImage";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link
      href={`/book/${book.id}`}
      className="relative snap-start pt-8 pb-3 px-3 rounded-sm max-w-50 w-full no-underline hover:bg-mist"
    >
      {book.subscriptionRequired && (
        <span className="bg-navy w-fit h-4.5 px-2 absolute top-0 right-0 text-white text-[10px] flex items-center rounded-[20px]">
          Premium
        </span>
      )}
      <div className="mb-2">
        <BookImage
          size={172}
          src={book.imageLink}
          alt={book.title}
        />
      </div>
      <h3 className="text-base text-navy font-bold mb-2">{book.title}</h3>
      <p className="text-sm text-muted font-light mb-2">{book.author}</p>
      <p className="text-sm text-ink mb-2">{book.subTitle}</p>
      <div className="flex gap-2">
        <div className="flex items-center gap-1 text-sm text-muted font-light">
          <AiOutlineStar className="size-4" />
          <span>{book.averageRating}</span>
        </div>
      </div>
    </Link>
  );
}
