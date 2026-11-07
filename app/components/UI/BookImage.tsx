"use client";

import { useState } from "react";
import Image from "next/image";

interface BookImageProps {
  src: string;
  alt: string;
  size: number;
}

export default function BookImage({ src, alt, size }: BookImageProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div
      className={isLoaded ? "" : "bg-[#e4e4e4]"}
      style={{ width: size, height: size, minWidth: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
