import { getSelectedBook } from "../../lib/api";
import Link from "next/link";
import BookImage from "../UI/BookImage";
import { BsPlayFill } from "react-icons/bs";
import AudioDuration from "../UI/AudioDuration";

export default async function SelectedBook() {
  const book = await getSelectedBook();

  return (
    <Link
      className="flex justify-between w-full md:w-2/3 bg-[#fbefd6] rounded-sm p-6 mb-6 gap-6"
      href={`/book/${book.id}`}
    >
      <p className="text-navy w-2/5">{book.subTitle}</p>
      <div className="w-px bg-line-dark" />
      <div className="flex gap-4 w-3/5">
        <BookImage
          src={book.imageLink}
          size={140}
          alt={book.title}
        />
        <div className="w-full">
          <h3 className="font-semibold text-navy mb-2">{book.title}</h3>
          <p className="text-sm text-ink mb-4">{book.author}</p>
          <div className="flex items-center gap-2">
            <BsPlayFill className="size-10 bg-black text-white rounded-full py-1 pr-1 pl-1.5" />
            <span className="text-sm font-medium text-navy">
              <AudioDuration
                audioLink={book.audioLink}
                format="words"
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
