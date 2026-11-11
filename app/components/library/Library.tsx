"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import LoginPrompt from "../auth/LoginPrompt";
import Spinner from "../UI/Spinner";
import LibraryItems from "./LibraryItems";

export default function Library() {
  const user = useSelector((state: RootState) => state.userSlice.user);
  const isLoading = useSelector((state: RootState) => state.userSlice.isLoading);

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-160px)]">
        <Spinner />
      </div>
    );
  }

  if (!user) return <LoginPrompt text="Log in to your account to see your library." />;

  // The key makes React start each shelf fresh if a different user logs in
  return (
    <>
      <LibraryItems
        key={`saved-${user.id}`}
        userId={user.id}
        shelf="savedBooks"
        title="Saved Books"
        emptyTitle="Save your favorite books!"
        emptyText="When you save a book, it will appear here."
      />
      <LibraryItems
        key={`finished-${user.id}`}
        userId={user.id}
        shelf="finishedBooks"
        title="Finished"
        emptyTitle="Done and dusted!"
        emptyText="When you finish a book, you can find it here later."
      />
    </>
  );
}
