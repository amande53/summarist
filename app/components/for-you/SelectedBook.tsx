import { getSelectedBook } from "../../lib/api";
import Link from "next/link";
import Image from "next/image";

export default async function SelectedBook() {
  const book = await getSelectedBook();

  return (
    <Link
      className="flex justify-between w-2/3 bg-[#fbefd6] rounded-sm p-6 mb-6 gap-6"
      href={`/book/${book.id}`}
    >
      <div className="text-[#032b41] w-2/5">{book.subTitle}</div>
      <div className="w-px bg-[#bac8ce]" />
      <div className="flex gap-4 w-3/5">
        <Image
          height={140}
          width={140}
          src={book.imageLink}
          alt={book.title}
          className="min-w-35"
        />
        <div className="w-full">
          <div className="font-semibold text-[#032b41] mb-2">{book.title}</div>
          <div className="text-sm text-[#394547] mb-4">{book.author}</div>
        </div>
      </div>
    </Link>
  );
}
