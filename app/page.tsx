"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GradientButton from "@/components/GradientButton";
import TypewriterEffect from "@/components/TypewriterEffect";
import "./globals.css";

const Home = () => {
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
    { text: "Web", className: "text-blue-500" },
    { text: "&", className: "text-blue-500" },
    { text: "Mobile", className: "text-blue-500" },
    { text: "Developer", className: "text-blue-500" },
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
};

export default Home;
