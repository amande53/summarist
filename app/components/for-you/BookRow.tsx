import { getBooks } from "../../lib/api";
import BookCard from "./BookCard";

interface BookRowProps {
  status: "recommended" | "suggested";
}

export default async function BookRow({ status }: BookRowProps) {
  const books = await getBooks(status);

  return (
    <div className="flex overflow-x-auto gap-4 snap-x mb-8">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
        />
      ))}
    </div>
  );
}
