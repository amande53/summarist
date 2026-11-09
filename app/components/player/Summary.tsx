"use client";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import type { Book } from "../../types/Book";

type SummaryProps = Pick<Book, "summary">;

export default function Summary({ summary }: SummaryProps) {
  const fontSize = useSelector((state: RootState) => state.fontSizeSlice.fontSize);
  return (
    <p
      className="whitespace-pre-line leading-[1.4] text-navy"
      style={{ fontSize: fontSize }}
    >
      {summary}
    </p>
  );
}
