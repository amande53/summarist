import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";
import type { Book } from "../types/Book";

export async function saveBook(userId: string, book: Book) {
  await setDoc(doc(db, "users", userId, "savedBooks", book.id), book);
}

export async function removeBook(userId: string, bookId: string) {
  await deleteDoc(doc(db, "users", userId, "savedBooks", bookId));
}

export async function markFinished(userId: string, book: Book) {
  await setDoc(doc(db, "users", userId, "finishedBooks", book.id), book);
}

// Watches ONE book and reports whether it's in the user's saved books.
// Returns a function that stops watching.
export function listenToIsSaved(
  userId: string,
  bookId: string,
  onChange: (isSaved: boolean) => void
) {
  return onSnapshot(
    doc(db, "users", userId, "savedBooks", bookId),
    (snapshot) => onChange(snapshot.exists()),
    (error) => {
      console.error(error);
      onChange(false);
    }
  );
}

// Watches a whole shelf ("savedBooks" or "finishedBooks") and reports its books.
// Returns a function that stops watching.
export function listenToShelf(
  userId: string,
  shelf: "savedBooks" | "finishedBooks",
  onChange: (books: Book[]) => void
) {
  return onSnapshot(
    collection(db, "users", userId, shelf),
    (snapshot) => onChange(snapshot.docs.map((bookDoc) => bookDoc.data() as Book)),
    (error) => {
      console.error(error);
      onChange([]);
    }
  );
}
