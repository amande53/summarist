"use client";

import { useEffect, useRef, useState } from "react";
import { formatTime, formatTimeWords } from "../../lib/formatTime";
import type { Book } from "../../types/Book";

type AudioDurationProps = Pick<Book, "audioLink"> & { format?: "clock" | "words" };
export default function AudioDuration({ audioLink, format = "clock" }: AudioDurationProps) {
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.readyState >= 1) {
      setDuration(audio.duration);
    }
  }, []);
  return (
    <>
      <audio
        src={audioLink}
        ref={audioRef}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />
      {format === "words" ? formatTimeWords(duration) : formatTime(duration)}
    </>
  );
}
