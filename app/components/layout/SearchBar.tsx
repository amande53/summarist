"use client";

import { AiOutlineSearch } from "react-icons/ai";
import MenuButton from "./MenuButton";
import { useState, useEffect } from "react";
import { searchBooks } from "../../lib/api";
import { Book } from "../../types/Book";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const [results, setResults] = useState<Book[]>([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }
    const getResults = async () => {
      setResults(await searchBooks(debouncedQuery));
    };

    getResults();
  }, [debouncedQuery]);
  return (
    <div className="bg-white border-b border-[#e1e7ea] h-20">
      <div className="flex items-center justify-between max-w-267.5 h-full mx-auto px-8">
        <div className="flex items-center gap-6 ml-auto w-full max-w-85">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for books"
              className="w-full h-10 pl-4 pr-10 bg-[#f1f6f4] text-[#042330] border-2 border-[#e1e7ea] rounded-lg outline-hidden"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center pl-2 border-l-2 border-[#e1e7ea] text-[#03314b] text-xl h-6">
              <AiOutlineSearch />
            </div>
          </div>
          <MenuButton />
        </div>
      </div>
    </div>
  );
}
