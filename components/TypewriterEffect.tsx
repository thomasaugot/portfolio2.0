"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = (wordList: typeof wordsArray) => (
    <motion.div ref={scope} className="inline">
      {wordList.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              initial={{}}
              key={`char-${index}`}
              className={cn(
                `dark:text-white text-white opacity-0 hidden`,
                word.className
              )}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </motion.div>
  );

  // Find the index of the word "Thomas,"
  const lineBreakIndex = wordsArray.findIndex(
    (word) => word.text.join("") === "Thomas,"
  );

  return (
    <div
      className={cn(
        "p-2 text-5xl md:text-3xl lg:text-7xl font-bold text-center",
        className
      )}
    >
      {/* Render the words before the line break */}
      {renderWords(wordsArray.slice(0, lineBreakIndex + 1))}
      {/* Line break */}
      <div className="block h-1"></div>
      {/* Render the words after the line break */}
      {renderWords(wordsArray.slice(lineBreakIndex + 1))}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export default function Home() {
  const words = [
    { text: "Hi" },
    { text: "there!" },
    { text: "I" },
    { text: "am" },
    { text: "Thomas," },
    { text: "Web", className: "text-blue-500 dark:text-blue-500" },
    { text: "&", className: "text-blue-500 dark:text-blue-500" },
    { text: "Mobile", className: "text-blue-500 dark:text-blue-500" },
    { text: "Developer", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center leading-12">
      <TypewriterEffect words={words} />
    </main>
  );
}
