import type { Book } from "../types/Book";

const BASE_URL = "https://us-central1-summaristt.cloudfunctions.net";

export async function searchBooks(query: string): Promise<Book[]> {
  const res = await fetch(
    `${BASE_URL}/getBooksByAuthorOrTitle?search=${encodeURIComponent(query)}`
  );
  const data = await res.json();
  return data;
}

export async function getBooks(status: "selected" | "recommended" | "suggested"): Promise<Book[]> {
  const res = await fetch(`${BASE_URL}/getBooks?status=${status}`);
  const data = await res.json();
  return data;
}
