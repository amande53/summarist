import { getSelectedBook } from "../../lib/api";
import Link from "next/link";
import BookImage from "../UI/BookImage";

export default async function SelectedBook() {
  const book = await getSelectedBook();

  return (
    <Link
      className="flex justify-between w-full md:w-2/3 bg-[#fbefd6] rounded-sm p-6 mb-6 gap-6"
      href={`/book/${book.id}`}
    >
      <div className="text-[#032b41] w-2/5">{book.subTitle}</div>
      <div className="w-px bg-[#bac8ce]" />
      <div className="flex gap-4 w-3/5">
        <BookImage
          src={book.imageLink}
          size={140}
          alt={book.title}
        />
        <div className="w-full">
          <div className="font-semibold text-[#032b41] mb-2">{book.title}</div>
          <div className="text-sm text-[#394547] mb-4">{book.author}</div>
        </div>
      </div>
    </Link>
  );
}
