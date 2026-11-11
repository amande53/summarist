"use client";

import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import type { Book } from "../../types/Book";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { listenToIsSaved, removeBook, saveBook } from "../../lib/library";
import { openModal } from "../../Redux/slices/modalSlice";

export default function LibraryButton({ book }: { book: Book }) {
  const [saved, setSaved] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.userSlice.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!user) return;

    return listenToIsSaved(user.id, book.id, setSaved);
  }, [user, book.id]);

  const handleClick = () => {
    if (!user) {
      dispatch(openModal());
      return;
    }

    if (saved) {
      removeBook(user.id, book.id);
    } else {
      saveBook(user.id, book);
    }
  };

  return (
    <button
      type="button"
      className="flex items-center gap-2 text-[#0365f2] font-medium cursor-pointer mb-10 text-lg hover:text-[#044298] transition-colors duration-200"
      onClick={handleClick}
    >
      {saved ? (
        <>
          <BsBookmarkFill /> Saved in My Library
        </>
      ) : (
        <>
          <BsBookmark />
          Add title to My Library
        </>
      )}
    </button>
  );
}
