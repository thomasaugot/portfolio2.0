"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingImg = ({
  items,
  pauseOnHover = true,
  className,
}: {
  items: { src: string }[];
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      const totalWidth = Array.from(scrollerRef.current.children).reduce(
        (sum, child) => sum + (child as HTMLElement).offsetWidth,
        0
      );

      const speed = 90; // in pixels per second
      const duration = totalWidth / speed;

      containerRef.current.style.setProperty(
        "--animation-duration",
        `${duration}s`
      );

      setStart(true);
    }
  }, []);

  const [start, setStart] = useState(false);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full gap-0 py-4 w-max flex-nowrap ${
          start ? "animate-scroll" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animationDirection: "normal",
          animationDuration: `var(--animation-duration)`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {items.map((item, idx) => (
          <li
            className="relative flex-shrink-0 w-[300px] h-[200px] overflow-hidden"
            key={idx}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.src}
                alt={`Project image ${idx + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-2xl"
                priority
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
