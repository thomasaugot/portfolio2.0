"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingImg = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { src: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getSpeed();
      setStart(true);
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      const durations = {
        fast: "20s",
        normal: "40s",
        slow: "80s",
      };
      containerRef.current.style.setProperty(
        "--animation-duration",
        durations[speed]
      );
    }
  };

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
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationDuration:
            containerRef.current?.style.getPropertyValue(
              "--animation-duration"
            ) || "40s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {items.map((item, idx) => (
          <li
            className="relative flex-shrink-0 w-[300px] h-[200px] overflow-hidden"
            key={idx}
            style={{
              animationDirection: idx % 2 === 0 ? "normal" : "reverse",
            }}
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
