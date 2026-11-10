"use client";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import type { Book } from "../../types/Book";
import LoginPrompt from "../auth/LoginPrompt";
import Spinner from "../UI/Spinner";

type SummaryProps = Pick<Book, "summary">;

export default function Summary({ summary }: SummaryProps) {
  const fontSize = useSelector((state: RootState) => state.fontSizeSlice.fontSize);
  const user = useSelector((state: RootState) => state.userSlice.user);
  const isLoading = useSelector((state: RootState) => state.userSlice.isLoading);
  if (isLoading) return <Spinner />;

  if (!user) return <LoginPrompt />;

  return (
    <p
      className="whitespace-pre-line leading-[1.4] text-navy"
      style={{ fontSize: fontSize }}
    >
      {summary}
    </p>
  );
}
