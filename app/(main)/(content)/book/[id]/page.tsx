import BookImage from "../../../../components/UI/BookImage";
import { getBook } from "../../../../lib/api";
import { AiOutlineStar, AiOutlineAudio, AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";
import BookDetail from "../../../../components/book/BookDetail";
import BookActions from "../../../../components/book/BookActions";
import ShowIfNotSubscribed from "../../../../components/UI/ShowIfNotSubscribed";
import AudioDuration from "../../../../components/UI/AudioDuration";
import LibraryButton from "../../../../components/library/LibraryButton";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = await getBook(id);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-4">
      <div className="w-full ">
        <h1 className="text-navy mb-4 font-semibold text-2xl md:text-[32px]">
          {book.title}
          {book.subscriptionRequired && <ShowIfNotSubscribed> (Premium)</ShowIfNotSubscribed>}
        </h1>
        <p className="text-navy text-sm font-semibold mb-4">{book.author}</p>
        <p className="text-navy mb-4 font-light text-[18px] md:text-xl">{book.subTitle}</p>

        <div className=" border-y border-y-line  py-4  mb-6">
          <div className="flex flex-wrap max-w-100 gap-y-3">
            <BookDetail icon={<AiOutlineStar />}>
              <span>
                {book.averageRating} ({book.totalRating} ratings)
              </span>
            </BookDetail>
            <BookDetail icon={<AiOutlineClockCircle />}>
              <AudioDuration audioLink={book.audioLink} />
            </BookDetail>
            <BookDetail icon={<AiOutlineAudio />}>{book.type}</BookDetail>

            <BookDetail icon={<HiOutlineLightBulb />}>{book.keyIdeas} Key ideas</BookDetail>
          </div>
        </div>
        <BookActions
          id={book.id}
          subscriptionRequired={book.subscriptionRequired}
        />
        <LibraryButton book={book} />
        <h2 className="text-lg text-navy mb-4 font-semibold">What&apos;s it about?</h2>
        <ul className="flex flex-wrap gap-4 mb-4">
          {book.tags.map((tag) => (
            <li
              className="bg-mist px-4 h-12 flex items-center cursor-not-allowed text-navy text-sm md:text-base font-medium rounded-sm"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="text-navy mb-4 leading-normal text-sm md:text-base">{book.bookDescription}</p>
        <h2 className="text-lg text-navy mb-4 font-semibold">About the author</h2>
        <p className="text-navy mb-4 leading-normal text-sm md:text-base">
          {book.authorDescription}
        </p>
      </div>
      <div className="flex justify-center">
        <BookImage
          src={book.imageLink}
          alt={book.title}
          size={300}
        />
      </div>
    </div>
  );
}
