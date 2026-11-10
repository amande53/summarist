import AudioPlayer from "../../../components/player/AudioPlayer";
import Summary from "../../../components/player/Summary";
import { getBook } from "../../../lib/api";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = await getBook(id);

  return (
    <main className="relative w-full overflow-y-auto h-[calc(100vh-260px)] md:h-[calc(100vh-160px)]">
      <div className="p-6 max-w-200  mx-auto">
        <h1 className="text-navy text-xl md:text-2xl border-b border-b-line mb-8 pb-4 leading-normal font-bold">
          {book.title}
        </h1>
        <Summary summary={book.summary} />
      </div>
      <AudioPlayer
        audioLink={book.audioLink}
        title={book.title}
        author={book.author}
        imageLink={book.imageLink}
      />
    </main>
  );
}
