"use client";

import { useEffect, useState } from "react";

interface Statistics {
  stats: string[];
  className?: string;
}

export default function Statistics({ stats, className }: Statistics) {
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition((current) => (current + 1) % stats.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`statistics__content--header ${className ?? ""}`}>
      {stats.map((stat, index) =>
        position === index ? (
          <div
            key={stat}
            className="statistics__heading statistics__heading--active"
          >
            {stat}
          </div>
        ) : (
          <div
            key={stat}
            className="statistics__heading"
          >
            {stat}
          </div>
        )
      )}
    </div>
  );
}
