"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import GradientButton from "@/components/GradientButton";
import "./globals.css";

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

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              initial={{}}
              key={`char-${index}`}
              className={cn(
                `dark:text-white text-white opacity-0 hidden font-orbitron mb-4`,
                word.className
              )}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
    </motion.div>
  );

  return (
    <div
      className={cn(
        "p-2 text-5xl md:text-3xl lg:text-5xl font-bold text-center mt-[12vh]",
        className
      )}
    >
      {renderWords()}
    </div>
  );
};

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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
    <main className="flex min-h-screen flex-col items-center justify-center max-w-[100%] lg:max-w-[55vw] mx-auto">
      <TypewriterEffect words={words} />
      <div className="min-h-[100px] flex items-center justify-center">
        {showButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <GradientButton href="/about">Explore</GradientButton>
          </motion.div>
        )}
      </div>
    </main>
  );
}
