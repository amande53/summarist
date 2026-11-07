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
      className="relative snap-start pt-8 pb-3 px-3 rounded-sm max-w-50 w-full no-underline hover:bg-[#f1f6f4]"
    >
      {book.subscriptionRequired && (
        <div className="bg-[#032b41] w-fit h-4.5 px-2 absolute top-0 right-0 text-white text-[10px] flex items-center rounded-[20px]">
          Premium
        </div>
      )}
      <div className="mb-2">
        <BookImage
          size={172}
          src={book.imageLink}
          alt={book.title}
        />
      </div>
      <div className="text-base text-[#032b41] font-bold mb-2">{book.title}</div>
      <div className="text-sm text-[#6b757b] font-light mb-2">{book.author}</div>
      <div className="text-sm text-[#394547] mb-2">{book.subTitle}</div>
      <div className="flex gap-2">
        <div className="flex items-center gap-1 text-sm text-[#6b757b] font-light">
          <AiOutlineStar className="size-4" />
          <div>{book.averageRating}</div>
        </div>
      </div>
    </Link>
  );
}
