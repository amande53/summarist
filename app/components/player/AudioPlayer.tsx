"use client";

import { GrBackTen, GrForwardTen } from "react-icons/gr";
import type { Book } from "../../types/Book";
import BookImage from "../UI/BookImage";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";
import { useRef, useState } from "react";
import { formatTime } from "../../lib/formatTime";

type AudioPlayerProps = Pick<Book, "audioLink" | "title" | "author" | "imageLink">;

export default function AudioPlayer({ audioLink, title, author, imageLink }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const progress = duration ? (currentTime / duration) * 100 : 0;

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const skip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = audio.currentTime + seconds;
  };
  return (
    <section className="w-full h-45  md:h-20 mt-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 md:py-0 md:px-10 fixed bottom-0 left-0 z-9998 bg-[#042330]">
      <audio
        ref={audioRef}
        src={audioLink}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onEnded={() => setIsPlaying(false)}
      ></audio>
      <div className="w-full flex justify-center md:justify-start md:w-1/3">
        <div className="flex items-center gap-3">
          <div className="max-w-20 md:max-w-12">
            <BookImage
              size={48}
              src={imageLink}
              alt={title}
            />
          </div>
          <div className="text-white text-sm flex flex-col gap-1">
            <p>{title}</p>
            <p>{author}</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <div className="flex items-center justify-center gap-6">
          <button
            aria-label="Back 10 seconds"
            className="flex items-center justify-center text-white text-[28px] cursor-pointer [&_path]:stroke-current"
            onClick={() => skip(-10)}
          >
            <GrBackTen />
          </button>
          <button
            aria-label={isPlaying ? "Pause" : "Play"}
            className="flex items-center justify-center size-10 rounded-full bg-white text-[#042330] text-2xl cursor-pointer"
            onClick={togglePlay}
          >
            {isPlaying ? <IoPauseSharp className="ml-0.5" /> : <IoPlaySharp className="ml-0.5" />}
          </button>
          <button
            aria-label="Forward 10 seconds"
            className="flex items-center justify-center text-white text-[28px] cursor-pointer [&_path]:stroke-current"
            onClick={() => skip(10)}
          >
            <GrForwardTen />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3 flex items-center gap-4">
        <span className="text-white text-sm">{formatTime(currentTime)}</span>
        <input
          type="range"
          aria-label="Seek"
          max={duration}
          value={currentTime}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green
            [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-green [&::-moz-range-thumb]:border-0"
          style={{
            background: `linear-gradient(to right, var(--color-green) ${progress}%, #efefef ${progress}%)`,
          }}
          onChange={(e) => {
            const audio = audioRef.current;
            if (!audio) return;

            audio.currentTime = Number(e.target.value);
          }}
        />
        <span className="text-white text-sm">{formatTime(duration)}</span>
      </div>
    </section>
  );
}
