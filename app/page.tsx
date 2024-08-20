"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GradientButton from "@/components/GradientButton";
import TypewriterEffect from "@/components/TypewriterEffect";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <div className="mt-[10vh] max-w-[90vw] ">
        <TypewriterEffect
          lines={["Hi there! I am Thomas,", "Web & Mobile Developer"]}
        />
        <div className="min-h-[100px] flex items-center justify-center mt-4">
          {showButton && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <GradientButton href="/about">Explore</GradientButton>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
